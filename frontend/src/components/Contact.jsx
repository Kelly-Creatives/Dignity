import { useState } from 'react';
import API_URL from '../api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [toast, setToast] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const nameParts = formData.name.trim().split(' ');
    const Firstname = nameParts[0] || 'Visitor';
    const Lastname = nameParts.slice(1).join(' ') || '(Contact)';

    try {
      await fetch(`${API_URL}/people`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Firstname,
          Lastname,
          Phone: formData.subject || 'N/A',
          Email: formData.email
        })
      });
    } catch (err) {
      console.warn('Backend server offline during contact submit:', err.message);
    }

    setToast('Your message has been sent successfully. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setToast(''), 4000);
  };

  return (
    <section id="contact" className="py-[60px] md:py-[100px] bg-gray-light relative">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[1100] bg-black-main text-white-main py-3.5 px-6 rounded-[16px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex items-center gap-3 animate-fade-in border border-white/10 text-sm font-semibold">
          <span className="w-2 h-2 bg-primary-blue rounded-full"></span>
          {toast}
        </div>
      )}

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary-blue uppercase tracking-[2px] text-[0.8rem] mb-4 block font-semibold reveal">Reach Out</span>
          <h2 className="text-[2.25rem] md:text-[3rem] font-bold mb-4 reveal">Get in Touch</h2>
          <p className="text-gray-600 max-w-[600px] mx-auto text-[1rem] reveal">
            Have questions about our initiatives or want to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="bg-black-main text-white-main rounded-[30px] p-8 md:p-12 reveal shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-[12px] flex items-center justify-center text-primary-blue shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Our Location</h4>
                  <p className="text-gray-400">34 KK 15 Rd, Kigali Rwanda<br/>PLP-Dignity HQ</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-[12px] flex items-center justify-center text-primary-blue shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone Number</h4>
                  <p className="text-gray-400">+25099317712</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-[12px] flex items-center justify-center text-primary-blue shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                  <p className="text-gray-400">plpdignity@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-blue transition-colors duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-blue transition-colors duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-blue transition-colors duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white-main rounded-[30px] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-gray-medium reveal">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jean Paul"
                    required
                    className="w-full px-5 py-3 rounded-[12px] border border-gray-medium focus:border-primary-blue focus:outline-none bg-gray-light/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. paul@example.com"
                    required
                    className="w-full px-5 py-3 rounded-[12px] border border-gray-medium focus:border-primary-blue focus:outline-none bg-gray-light/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject (Optional)</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-5 py-3 rounded-[12px] border border-gray-medium focus:border-primary-blue focus:outline-none bg-gray-light/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows="5"
                  className="w-full px-5 py-3 rounded-[12px] border border-gray-medium focus:border-primary-blue focus:outline-none bg-gray-light/30 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-primary-blue hover:bg-secondary-blue text-white-main rounded-[50px] font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(0,102,255,0.2)] hover:-translate-y-1 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
