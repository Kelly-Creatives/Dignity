const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// CORS setup for Frontend and Admin Panel cross-origin requests
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors());
app.use(express.json());

// Request logger middleware for live terminal debugging
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
});

// MySQL Connection Configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: ''
};

let db = null;
let isConnected = false;

function initDatabase() {
    console.log('Connecting to MySQL Server on localhost:3306...');
    const initConn = mysql.createConnection(dbConfig);

    initConn.connect((err) => {
        if (err) {
            console.error('⚠️ MySQL Connection Error:', err.message);
            console.log('👉 Please ensure your MySQL server (XAMPP/WAMP/MySQL Service) is active on port 3306.');
            return;
        }

        console.log('✅ Connected to MySQL Server.');

        // Step 1: Ensure database "dignity_web" exists
        initConn.query('CREATE DATABASE IF NOT EXISTS `dignity_web`', (dbErr) => {
            if (dbErr) {
                console.error('❌ Error creating database "dignity_web":', dbErr.message);
                initConn.end();
                return;
            }

            console.log('✅ Database "dignity_web" verified/created.');
            initConn.end();

            // Step 2: Connect directly to "dignity_web" database
            db = mysql.createConnection({
                ...dbConfig,
                database: 'dignity_web'
            });

            db.connect((connErr) => {
                if (connErr) {
                    console.error('❌ Error selecting database "dignity_web":', connErr.message);
                    isConnected = false;
                    return;
                }

                isConnected = true;
                console.log('🚀 Successfully connected to database "dignity_web".');

                // Step 3: Ensure "people" table exists with auto-increment ID
                const createPeopleTable = `
                    CREATE TABLE IF NOT EXISTS people (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        Firstname VARCHAR(255) NOT NULL,
                        Lastname VARCHAR(255) NOT NULL,
                        Phone VARCHAR(255) DEFAULT '',
                        Email VARCHAR(255) DEFAULT '',
                        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                `;

                db.query(createPeopleTable, (tableErr) => {
                    if (tableErr) {
                        console.error('❌ Error creating "people" table:', tableErr.message);
                    } else {
                        console.log('✅ Table "people" verified and ready for live queries.');
                    }
                });
            });
        });
    });
}

// Initialize Database Setup
initDatabase();

// Health Check Endpoint
app.get("/health", (req, res) => {
    res.json({
        status: isConnected ? "ok" : "degraded",
        databaseConnected: isConnected,
        message: isConnected ? "Backend API & MySQL live connected" : "MySQL server not connected",
        timestamp: new Date()
    });
});

// Stats Summary Endpoint
app.get("/stats", (req, res) => {
    if (!isConnected || !db) {
        return res.status(503).json({ error: "Database not connected" });
    }

    const sql = 'SELECT COUNT(*) AS totalPeople FROM people';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({
                totalPeople: result[0]?.totalPeople || 0,
                serverTime: new Date()
            });
        }
    });
});

// GET - List all people/members (Ordered newest first)
app.get("/people", (req, res) => {
    if (!isConnected || !db) {
        return res.status(503).json({ error: "Database connection unavailable. Ensure MySQL is running." });
    }

    const sql = 'SELECT * FROM people ORDER BY id DESC';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching people:', err.message);
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// POST - Add a new person / Join Club / Contact Form
app.post("/people", (req, res) => {
    if (!isConnected || !db) {
        return res.status(503).json({ message: "Database connection unavailable. Ensure MySQL is running." });
    }

    // Support both PascalCase and camelCase / lowercase keys
    const Firstname = req.body.Firstname || req.body.firstname || req.body.fname || req.body.name || '';
    const Lastname = req.body.Lastname || req.body.lastname || req.body.lname || '';
    const Phone = req.body.Phone || req.body.phone || req.body.tel || '';
    const Email = req.body.Email || req.body.email || '';

    if (!Firstname || !Firstname.trim()) {
        return res.status(400).json({ message: 'First name is required.' });
    }

    const sql = 'INSERT INTO people (Firstname, Lastname, Phone, Email) VALUES (?, ?, ?, ?)';
    db.query(sql, [Firstname.trim(), Lastname.trim(), Phone.trim(), Email.trim()], (err, result) => {
        if (err) {
            console.error('Error inserting person:', err.message);
            res.status(500).json({ message: err.message });
        } else {
            console.log(`✨ Added member #${result.insertId}: ${Firstname} ${Lastname}`);
            res.status(201).json({
                message: 'Person added successfully',
                id: result.insertId,
                person: { id: result.insertId, Firstname, Lastname, Phone, Email }
            });
        }
    });
});

// PUT - Update a person by ID
app.put("/people/:id", (req, res) => {
    if (!isConnected || !db) {
        return res.status(503).json({ message: "Database connection unavailable." });
    }

    const Firstname = req.body.Firstname || req.body.firstname || '';
    const Lastname = req.body.Lastname || req.body.lastname || '';
    const Phone = req.body.Phone || req.body.phone || '';
    const Email = req.body.Email || req.body.email || '';

    const sql = 'UPDATE people SET Firstname=?, Lastname=?, Phone=?, Email=? WHERE id=?';
    db.query(sql, [Firstname.trim(), Lastname.trim(), Phone.trim(), Email.trim(), req.params.id], (err, result) => {
        if (err) {
            console.error('Error updating person:', err.message);
            res.status(500).json({ message: err.message });
        } else {
            console.log(`📝 Updated member #${req.params.id}`);
            res.json({ message: 'Person updated successfully', id: req.params.id });
        }
    });
});

// DELETE - Remove a person by ID
app.delete("/people/:id", (req, res) => {
    if (!isConnected || !db) {
        return res.status(503).json({ message: "Database connection unavailable." });
    }

    const sql = 'DELETE FROM people WHERE id=?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error('Error deleting person:', err.message);
            res.status(500).json({ message: err.message });
        } else {
            console.log(`🗑️ Deleted member #${req.params.id}`);
            res.json({ message: 'Person deleted successfully', id: req.params.id });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`-----------------------------------------------------`);
    console.log(`🚀 PLP-Dignity Backend Server listening on http://localhost:${PORT}`);
    console.log(`-----------------------------------------------------`);
});