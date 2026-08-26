import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import olga2 from './assets/olga2.jpeg'
import dac from './assets/dac.jpeg'
import djanat from './assets/djanat.jpeg'
import Contact from './components/Contact'
import Shop from './components/Shop'
import About from './components/About'
import plpLogo from './assets/plp_logo.png'
import plp from './assets/plp.png'
import JoinClub from './components/JoinClub'
import casper from './assets/caper.jpeg'
import olga from './assets/olga.jpeg'
import praise from './assets/praise.jpeg'
import Loic from './assets/Loic.jpeg'
import leah from './assets/Leah.jpeg'
import kenzo from './assets/kenzo.jpeg'
import karara from './assets/karara.jpeg'
import kelly from './assets/kelly.jpeg'


const founders = [
  {
    name: "Ishimwe Prince Parfait",
    role: "Co-Founder & Visionary",
    image: casper,
    quote: "Restoring dignity is a lifelong commitment to human flourishing. We aim to empower the next generation to lead with empathy."
  },
  {
    name: "Loic",
    role: "Co-Founder & Strategy",
    image: Loic,
    quote: "Empowering youth means securing a brighter, more unified tomorrow. Dignity starts when we raise others up."
  },
  {
    name: "Umuhire Leah",
    role: "Co-Founder & Operations",
    image: leah,
    quote: "Grassroots action is where real, lasting transformation begins. Our operational strength lies in our collective unity."
  },
  {
    name: "Gatako amelie Olga",
    role: "Co-Founder & Programs",
    image: olga,
    quote: "Remembrance and active service walk hand-in-hand. We build a legacy by dedicating our talents to others."
  },
  {
    name: "Nyirimpeta Patrick",
    role: "Co-Founder & Outreach",
    image: dac,
    quote: "No act of service is too small to make a meaningful impact. We are defined by the compassion we show."
  },
  {
    name: "Gahima Praise",
    role: "Co-Founder & Partnerships",
    image: praise,
    quote: "Synergy and solidarity are the engines of sustainable growth. Together with our partners, we make real change possible."
  },

];

const partners = [
  {
    name: "Peace and Love Proclaimers",
    logo: plpLogo,
    url: "https://peaceloveproclaimers.org/",
    image: plp
  }


];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  if (currentPage === 'shop') {
    return <Shop onBack={() => setCurrentPage('home')} onNavigate={(page) => setCurrentPage(page)} />;
  }

  if (currentPage === 'about') {
    return <About onBack={() => setCurrentPage('home')} onNavigate={(page) => setCurrentPage(page)} />;
  }

  if (currentPage === 'join') {
    return <JoinClub onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white-main text-black-main font-body">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-20 flex items-center z-[1000] bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-6 md:px-8 flex justify-between items-center w-full relative z-[1001]">
          <div className="text-base sm:text-lg md:text-2xl font-extrabold tracking-tighter text-black-main">
            PLP<span className="text-primary-blue">-Dignity</span>
          </div>
          <ul className="hidden md:flex gap-8 items-center">
            <li><a href="#home" className="font-semibold text-[0.95rem] text-black-main/70 hover:text-primary-blue hover:opacity-100 transition-all duration-300">Home</a></li>
            <li><button onClick={() => setCurrentPage('about')} className="font-semibold text-[0.95rem] text-black-main/70 hover:text-primary-blue hover:opacity-100 transition-all duration-300 cursor-pointer">About Us</button></li>
            <li><a href="#initiatives" className="font-semibold text-[0.95rem] text-black-main/70 hover:text-primary-blue hover:opacity-100 transition-all duration-300">Initiatives</a></li>
  
            <li><a href="#publication" className="font-semibold text-[0.95rem] text-black-main/70 hover:text-primary-blue hover:opacity-100 transition-all duration-300">Publications</a></li>
          
          </ul>
          <div className="flex items-center gap-1.5 sm:gap-4">
            <button onClick={() => setCurrentPage('join')} className="inline-block py-1.5 px-3 sm:py-2.5 sm:px-6 rounded-[50px] font-semibold cursor-pointer transition-all duration-300 bg-primary-blue text-white-main hover:bg-secondary-blue hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,102,255,0.2)] text-[10px] sm:text-sm">Join Club</button>
            <button onClick={() => setCurrentPage('shop')} className="inline-block py-1.5 px-3 sm:py-2.5 sm:px-6 rounded-[50px] font-semibold cursor-pointer transition-all duration-300 bg-primary-blue text-white-main hover:bg-secondary-blue hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,102,255,0.2)] text-[10px] sm:text-sm">Shop now!</button>
            <a href="http://localhost:5173" target="_blank" rel="noreferrer" className="hidden lg:inline-block py-1.5 px-3 sm:py-2.5 sm:px-5 rounded-[50px] font-semibold transition-all duration-300 border border-black/20 text-black-main hover:bg-black-main hover:text-white-main text-[10px] sm:text-xs">Admin Portal ↗</a>
            
            {/* Hamburger Burger Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-between w-6 h-[15px] cursor-pointer focus:outline-none ml-1 relative z-[1002]"
              aria-label="Toggle Menu"
            >
              <span className={`h-[2px] w-full bg-black-main rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`h-[2px] w-full bg-black-main rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-[2px] w-full bg-black-main rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      <div className={`fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <ul className="text-center space-y-6 font-heading">
          <li><a href="#home" onClick={() => setMenuOpen(false)} className="text-3xl font-extrabold hover:text-primary-blue transition-colors duration-300 block py-2">Home</a></li>
          <li><button onClick={() => { setCurrentPage('about'); setMenuOpen(false); }} className="text-3xl font-extrabold hover:text-primary-blue transition-colors duration-300 block py-2 mx-auto focus:outline-none">About Us</button></li>
          <li><a href="#mission" onClick={() => setMenuOpen(false)} className="text-3xl font-extrabold hover:text-primary-blue transition-colors duration-300 block py-2">Mission</a></li>
          <li><a href="#initiatives" onClick={() => setMenuOpen(false)} className="text-3xl font-extrabold hover:text-primary-blue transition-colors duration-300 block py-2">Initiatives</a></li>
          <li><a href="#leaders" onClick={() => setMenuOpen(false)} className="text-3xl font-extrabold hover:text-primary-blue transition-colors duration-300 block py-2">Leaders</a></li>
          <li><a href="#founders" onClick={() => setMenuOpen(false)} className="text-3xl font-extrabold hover:text-primary-blue transition-colors duration-300 block py-2">Founders</a></li>
          <li><a href="#partners" onClick={() => setMenuOpen(false)} className="text-3xl font-extrabold hover:text-primary-blue transition-colors duration-300 block py-2">Partners</a></li>
          <li><button onClick={() => { setCurrentPage('join'); setMenuOpen(false); }} className="text-3xl font-extrabold hover:text-primary-blue transition-colors duration-300 block py-2 mx-auto focus:outline-none">Join Club</button></li>
          <li><button onClick={() => { setCurrentPage('shop'); setMenuOpen(false); }} className="text-3xl font-extrabold hover:text-primary-blue transition-colors duration-300 block py-2 mx-auto focus:outline-none">Shop Store</button></li>
        </ul>
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-[140px] pb-[60px] md:pt-[180px] md:pb-[100px] text-center bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.05),transparent),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.02),transparent)] bg-dots">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <span className="inline-block py-1.5 px-4 bg-primary-blue/10 text-primary-blue rounded-[50px] text-[0.85rem] font-semibold mb-6 reveal">Empowering Change Since 2025</span>
          <h1 className="text-[2.25rem] md:text-[4.5rem] max-w-[900px] mx-auto mb-6 md:mb-8 tracking-[-1px] md:tracking-[-2px] leading-tight font-extrabold text-gradient reveal">
            Restoring <span className="text-primary-blue">Dignity</span>, Empowering Communities.
          </h1>
          <p className="text-[1rem] md:text-[1.25rem] text-gray-600 max-w-[600px] mx-auto mb-8 md:mb-12 reveal">
            PLP-Dignity is an affiliated club of Peace and Love Proclaimers (PLP), a non-profit organisation dedicated to peacebuilding and social development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-6 sm:px-0 reveal">
            <button className="inline-block py-3 px-8 rounded-[50px] font-semibold cursor-pointer transition-all duration-300 bg-primary-blue text-white-main hover:bg-secondary-blue hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,102,255,0.2)]">Our Programs</button>
            <button onClick={() => setCurrentPage('about')} className="inline-block py-3 px-8 rounded-[50px] font-semibold cursor-pointer transition-all duration-300 border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white-main">Learn More</button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-[60px] md:py-[100px] px-4 md:px-8">
        <div className="bg-black-main text-white-main rounded-[30px] md:rounded-[40px] mx-auto max-w-[1200px] reveal">
          <div className="py-[60px] px-6 md:py-[100px] md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center text-center md:text-left">
              <div className="mission-content">
                <span className="text-primary-blue uppercase tracking-[2px] text-[0.8rem] mb-4 block font-semibold">Our Purpose</span>
                <h2 className="text-[2.25rem] md:text-[3rem] mb-8 font-bold">PLP Dignity Core Values</h2>
                <p className="mb-6 opacity-80 leading-relaxed text-[1rem]">
                  We believe that dignity is not a privilege, but a fundamental right. Our club works at the grassroots level to identify barriers to human flourishing and provide the support systems needed to overcome them.
                </p>
                <ul className="mb-8 space-y-4">
                  <li className="flex gap-4 items-start justify-center md:justify-start text-left">
                    <div className="text-primary-blue font-bold">✓</div>
                    <span><strong>Love</strong> - Compassion and care for every member and community.</span>
                  </li>
                  <li className="flex gap-4 items-start justify-center md:justify-start text-left">
                    <div className="text-primary-blue font-bold">✓</div>
                    <span><strong>Integrity</strong> - Honesty, transparency, and ethical conduct in all actions.</span>
                  </li>
                  <li className="flex gap-4 items-start justify-center md:justify-start text-left">
                    <div className="text-primary-blue font-bold">✓</div>
                    <span><strong>Resilience</strong> - Strength to overcome challenges and persist in service.</span>
                  </li>
                  <li className="flex gap-4 items-start justify-center md:justify-start text-left">
                    <div className="text-primary-blue font-bold">✓</div>
                    <span><strong>Respect</strong> - Upholding the dignity of every individual and Rwandan traditions.</span>
                  </li>
                  <li className="flex gap-4 items-start justify-center md:justify-start text-left">
                    <div className="text-primary-blue font-bold">✓</div>
                    <span><strong>Unity</strong> - Building bonds that keep members together and foster collective growth.</span>
                  </li>
                  <li className="flex gap-4 items-start justify-center md:justify-start text-left">
                    <div className="text-primary-blue font-bold">✓</div>
                    <span><strong>Responsibility</strong> - Accountability to oneself, the family, and the wider community.</span>
                  </li>
                  <li className="flex gap-4 items-start justify-center md:justify-start text-left">
                    <div className="text-primary-blue font-bold">✓</div>
                    <span><strong>Leadership</strong> - Guiding and inspiring others through example and action.</span>
                  </li>
                  <li className="flex gap-4 items-start justify-center md:justify-start text-left">
                    <div className="text-primary-blue font-bold">✓</div>
                    <span><strong>Empowerment</strong> - Enabling youth to realize their potential and contribute meaningfully.</span>
                  </li>
                  <li className="flex gap-4 items-start justify-center md:justify-start text-left">
                    <div className="text-primary-blue font-bold">✓</div>
                    <span><strong>Solidarity</strong> - Standing together with those in need, promoting social cohesion.</span>
                  </li>
                  <li className="flex gap-4 items-start justify-center md:justify-start text-left">
                    <div className="text-primary-blue font-bold">✓</div>
                    <span><strong>Legacy</strong> - Preserving the history, values, and vision of PLP for future generations.</span>
                  </li>
                  <li className="flex gap-4 items-start justify-center md:justify-start text-left">
                    <div className="text-primary-blue font-bold">✓</div>
                    <span><strong>Service</strong> - Commitment to community development, mentorship, and positive change.</span>
                  </li>
                </ul>
              </div>
              <div className="h-[300px] md:h-[400px] bg-gradient-to-br from-primary-blue to-[#001133] rounded-[24px] flex items-center justify-center text-[1.5rem] md:text-[2rem] font-bold order-first md:order-none">
                <div>Youth for change</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-[60px] md:py-[100px] max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-4">Current Initiatives</h2>
          <p className="text-gray-600 max-w-[600px] mx-auto text-[1rem]">
            We take action where it matters most. Explore our core pillars of impact and see how we're making a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 md:p-12 bg-white-main border border-gray-medium rounded-[24px] transition-all duration-300 hover:border-primary-blue hover:bg-gray-light reveal group">
            <div className="w-[60px] h-[60px] bg-primary-blue/10 rounded-[16px] flex items-center justify-center mb-8 text-primary-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
            </div>
            <h3 className="text-[1.5rem] font-bold mb-4">Dignity commemoration event</h3>
            <p className="text-gray-600 text-[1rem]">Providing micro-grants and financial literacy workshops to help local entrepreneurs scale their dreams.</p>
          </div>

          <div className="p-8 md:p-12 bg-white-main border border-gray-medium rounded-[24px] transition-all duration-300 hover:border-primary-blue hover:bg-gray-light reveal group" style={{ transitionDelay: '0.1s' }}>
            <div className="w-[60px] h-[60px] bg-primary-blue/10 rounded-[16px] flex items-center justify-center mb-8 text-primary-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6M6 10a2 2 0 00-2-2v0a2 2 0 002-2M18 10a2 2 0 012-2v0a2 2 0 01-2-2M12 4a2 2 0 012 2v12a2 2 0 01-2 2M12 4a2 2 0 00-2 2v12a2 2 0 002 2"></path></svg>
            </div>
            <h3 className="text-[1.5rem] font-bold mb-4">Dignity Megacare</h3>
            <p className="text-gray-600 text-[1rem]">Mentorship programs connecting industry professionals with ambitious youth in underserved areas.</p>
          </div>

          <div className="p-8 md:p-12 bg-white-main border border-gray-medium rounded-[24px] transition-all duration-300 hover:border-primary-blue hover:bg-gray-light reveal group" style={{ transitionDelay: '0.2s' }}>
            <div className="w-[60px] h-[60px] bg-primary-blue/10 rounded-[16px] flex items-center justify-center mb-8 text-primary-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className="text-[1.5rem] font-bold mb-4">Dignity mentorship program</h3>
            <p className="text-gray-600 text-[1rem]">Offering pro-bono legal advice and awareness workshops on human rights and civic duties.</p>
          </div>

          <div className="p-8 md:p-12 bg-white-main border border-gray-medium rounded-[24px] transition-all duration-300 hover:border-primary-blue hover:bg-gray-light reveal group" style={{ transitionDelay: '0.2s' }}>
            <div className="w-[60px] h-[60px] bg-primary-blue/10 rounded-[16px] flex items-center justify-center mb-8 text-primary-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className="text-[1.5rem] font-bold mb-4">Dignity mentorship program</h3>
            <p className="text-gray-600 text-[1rem]">Offering pro-bono legal advice and awareness workshops on human rights and civic duties.</p>
          </div>

          <div className="p-8 md:p-12 bg-white-main border border-gray-medium rounded-[24px] transition-all duration-300 hover:border-primary-blue hover:bg-gray-light reveal group" style={{ transitionDelay: '0.2s' }}>
            <div className="w-[60px] h-[60px] bg-primary-blue/10 rounded-[16px] flex items-center justify-center mb-8 text-primary-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className="text-[1.5rem] font-bold mb-4">Dignity community service</h3>
            <p className="text-gray-600 text-[1rem]">We always take part in community service to help those in need.</p>
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section id="leaders" className="py-[60px] md:py-[100px] bg-white-main">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-blue uppercase tracking-[2px] text-[0.8rem] mb-4 block font-semibold reveal">Our Leadership</span>
            <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-4 reveal">Meet Our Visionaries</h2>
            <p className="text-gray-600 max-w-[600px] mx-auto text-[1rem] reveal">
              The passionate individuals driving our mission forward and ensuring dignity for all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            <div className="text-center transition-all duration-300 hover:-translate-y-1 group reveal">
              <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] mx-auto mb-6 rounded-[24px] overflow-hidden border-4 border-gray-light transition-all duration-300 group-hover:border-primary-blue group-hover:rounded-full">
                <img src={dac} alt="Jean Paul" className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0" />
              </div>
              <h3 className="text-[1.25rem] font-bold mb-2">Nyirimpeta Patrick</h3>
              <p className="text-primary-blue font-semibold text-[0.9rem] uppercase tracking-wider">Cordinator</p>
            </div>

            <div className="text-center transition-all duration-300 hover:-translate-y-1 group reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] mx-auto mb-6 rounded-[24px] overflow-hidden border-4 border-gray-light transition-all duration-300 group-hover:border-primary-blue group-hover:rounded-full">
                <img src={olga2} alt="Sarah Mukasa" className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0" />
              </div>
              <h3 className="text-[1.25rem] font-bold mb-2">Gatako Amelie Olga</h3>
              <p className="text-primary-blue font-semibold text-[0.9rem] uppercase tracking-wider">Vice cordinator</p>
            </div>

            <div className="text-center transition-all duration-300 hover:-translate-y-1 group reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] mx-auto mb-6 rounded-[24px] overflow-hidden border-4 border-gray-light transition-all duration-300 group-hover:border-primary-blue group-hover:rounded-full">
                <img src={kelly} alt="David Kagame" className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0" />
              </div>
              <h3 className="text-[1.25rem] font-bold mb-2">Igisubizo kelly</h3>
              <p className="text-primary-blue font-semibold text-[0.9rem] uppercase tracking-wider">Event and program manager</p>
            </div>

            <div className="text-center transition-all duration-300 hover:-translate-y-1 group reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] mx-auto mb-6 rounded-[24px] overflow-hidden border-4 border-gray-light transition-all duration-300 group-hover:border-primary-blue group-hover:rounded-full">
                <img src={djanat} alt="Aisha Uwase" className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0" />
              </div>
              <h3 className="text-[1.25rem] font-bold mb-2">Manzi Djanat</h3>
              <p className="text-primary-blue font-semibold text-[0.9rem] uppercase tracking-wider">communication lead</p>
            </div>

               <div className="text-center transition-all duration-300 hover:-translate-y-1 group reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] mx-auto mb-6 rounded-[24px] overflow-hidden border-4 border-gray-light transition-all duration-300 group-hover:border-primary-blue group-hover:rounded-full">
                <img src={kenzo} alt="Aisha Uwase" className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0" />
              </div>
              <h3 className="text-[1.25rem] font-bold mb-2">Manzi Mugisha Kenzo</h3>
              <p className="text-primary-blue font-semibold text-[0.9rem] uppercase tracking-wider">Social Media manager and content creator</p>
            </div>

                        <div className="text-center transition-all duration-300 hover:-translate-y-1 group reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] mx-auto mb-6 rounded-[24px] overflow-hidden border-4 border-gray-light transition-all duration-300 group-hover:border-primary-blue group-hover:rounded-full">
                <img src={karara} alt="Aisha Uwase" className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0" />
              </div>
              <h3 className="text-[1.25rem] font-bold mb-2">Karara Isaac Newton</h3>
              <p className="text-primary-blue font-semibold text-[0.9rem] uppercase tracking-wider">Disciplinary officer</p>
            </div>

            <div className="text-center transition-all duration-300 hover:-translate-y-1 group reveal" style={{ transitionDelay: '0.35s' }}>
              <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] mx-auto mb-6 rounded-[24px] overflow-hidden border-4 border-gray-light transition-all duration-300 group-hover:border-primary-blue group-hover:rounded-full">
                <img src={casper} alt="Casper" className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0" />
              </div>
              <h3 className="text-[1.25rem] font-bold mb-2">Ganza Douce Kelly</h3>
              <p className="text-primary-blue font-semibold text-[0.9rem] uppercase tracking-wider">Community ambassador</p>
            </div>
          </div>
        </div>
        
      
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-[80px] md:py-[120px] bg-gray-light/30 border-t border-b border-gray-medium/20 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary-blue uppercase tracking-[3px] text-[0.8rem] sm:text-[0.85rem] mb-4 block font-bold font-heading reveal">The Founding Pioneers</span>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-4 font-heading text-gradient reveal">Meet Our Founders</h2>
            <p className="text-gray-600 max-w-[700px] mx-auto text-[0.95rem] md:text-[1.05rem] leading-relaxed reveal">
              The seven visionary youth leaders who laid the foundation of PLP-Dignity in 2025, charting a new path for peace, solidarity, and community empowerment.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {founders.map((founder, idx) => (
              <div 
                key={founder.name} 
                className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(25%-30px)] max-w-[280px] text-center transition-all duration-500 hover:-translate-y-2 group reveal"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                {/* Avatar Container with Glow & Glassmorphism */}
                <div className="relative w-[180px] h-[180px] md:w-[200px] md:h-[200px] mx-auto mb-6 rounded-[32px] overflow-hidden border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-500 group-hover:border-primary-blue group-hover:rounded-full group-hover:shadow-[0_15px_35px_rgba(0,102,255,0.12)] flex items-center justify-center bg-gray-light">
                  {/* Real Image of Founder */}
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Glassmorphic interactive quote overlay on hover */}
                  <div className="absolute inset-0 bg-black-main/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6 text-white-main">
                    <span className="text-[1.5rem] text-primary-blue font-bold mb-2 font-heading">“</span>
                    <p className="text-[0.78rem] leading-relaxed italic font-medium font-body text-gray-200 line-clamp-4">
                      {founder.quote}
                    </p>
                    <span className="text-[1.5rem] text-primary-blue font-bold mt-1 font-heading">”</span>
                  </div>
                </div>

                {/* Name and Designation */}
                <h3 className="text-[1.25rem] font-bold mb-1.5 font-heading text-black-main transition-colors duration-300 group-hover:text-primary-blue">
                  {founder.name}
                </h3>
                <p className="text-primary-blue font-bold text-[0.8rem] uppercase tracking-widest font-heading mb-4">
                  {founder.role}
                </p>

                {/* Social icons indicator on hover */}
                <div className="flex justify-center gap-4 opacity-40 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                  <a href="#founders" className="text-gray-500 hover:text-primary-blue transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#founders" className="text-gray-500 hover:text-primary-blue transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section id="partners" className="py-[80px] md:py-[100px] bg-white-main border-b border-gray-medium/20 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute -bottom-10 left-1/4 w-[300px] h-[300px] bg-primary-blue/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-primary-blue uppercase tracking-[3px] text-[0.8rem] sm:text-[0.85rem] mb-4 block font-bold font-heading reveal">Collaborations & Alliances</span>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-4 font-heading text-gradient reveal">Our Partners</h2>
            <p className="text-gray-600 max-w-[700px] mx-auto text-[0.95rem] md:text-[1.05rem] leading-relaxed reveal">
              We collaborate with organizations that share our values and vision to foster peace, leadership, and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {partners.map((partner, idx) => (
              <div 
                key={partner.name} 
                className="w-full max-w-[280px] p-6 bg-white border border-gray-medium/40 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,102,255,0.08)] hover:border-primary-blue/30 hover:-translate-y-1.5 transition-all duration-500 group text-center flex flex-col justify-between items-center reveal"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                {/* Logo wrapper */}
                <div className="relative w-full aspect-video mb-6 rounded-2xl overflow-hidden bg-gray-light/30 border border-gray-medium/10 flex items-center justify-center p-4 transition-all duration-500 group-hover:bg-white group-hover:shadow-[inset_0_0_20px_rgba(0,102,255,0.02)]">
                  <img 
                    src={partner.image || partner.logo} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Partner Name & Link */}
                <div className="mt-2">
                  <h3 className="text-[1.1rem] font-bold mb-2 font-heading text-black-main transition-colors duration-300 group-hover:text-primary-blue">
                    {partner.name}
                  </h3>
                  <a 
                    href={partner.url} 
                    className="inline-flex items-center gap-1 text-[0.8rem] font-semibold text-primary-blue/60 group-hover:text-primary-blue transition-colors duration-300"
                  >
                    Visit Website
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
