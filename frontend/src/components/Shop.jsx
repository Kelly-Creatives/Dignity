import Footer from './Footer';
import tee from '../assets/tee.jpeg';
import hoodie from '../assets/hoodie.jpeg';
import cap from '../assets/cap.jpeg';
import tote from '../assets/tote.jpeg';

const Shop = () => {
  return (
    <div className="min-h-screen bg-white-main text-black-main font-body flex flex-col justify-between">
      {/* Sleek Sub-Navbar / Header for Shop */}
      <nav className="fixed top-0 left-0 right-0 h-20 flex items-center z-[1000] bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center w-full">
          <div className="text-lg md:text-2xl font-extrabold tracking-tighter text-black-main font-heading">
            <span className="text-primary-blue">Dignity</span> <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-2">Store.</span>
          </div>
          
          <button 
            onClick={() => window.location.reload()} 
            className="group inline-flex items-center gap-2 py-1.5 px-4 sm:py-2.5 sm:px-6 rounded-[50px] font-semibold cursor-pointer transition-all duration-300 border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white-main text-[10px] sm:text-sm"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 text-center bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.04),transparent)] bg-dots px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block py-1.5 px-4 bg-primary-blue/10 text-primary-blue rounded-[50px] text-[0.8rem] sm:text-[0.85rem] font-semibold mb-6 animate-fade-in">
            Official PLP-Dignity Merchandise
          </span>
          <h1 className="text-[2.25rem] sm:text-[3rem] md:text-[4rem] font-heading font-extrabold text-gradient mb-6 tracking-tight leading-tight">
            PLP <span className="text-primary-blue">Dignity</span> Shop
          </h1>
          <p className="text-gray-600 max-w-[650px] mx-auto text-sm sm:text-base md:text-lg mb-10 leading-relaxed">
            Support our missions directly by purchasing official branded apparel and goods. 100% of all proceeds are channeled back into our local community development initiatives.
          </p>
          
          {/* Quote-style Donation/Thank you message */}
          <div className="bg-primary-blue/5 border-l-4 border-primary-blue p-5 sm:p-6 rounded-r-2xl mb-8 max-w-3xl mx-auto text-left shadow-[0_4px_12px_rgba(0,102,255,0.02)]">
            <span className="text-primary-blue font-bold text-xs uppercase tracking-wider block mb-2 font-heading">Message to our Supporters</span>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <strong>Dear Donator,</strong> Thank you for your generosity. Your contribution will help us provide essential resources to those in need. Together, we can make a difference. All PLP branded material will be sold here. Click the button below to explore our Take App Market!
            </p>
          </div>
        </div>
      </section>

      {/* Merchandise Showcase Grid */}
      <section className="py-10 max-w-[1200px] mx-auto px-4 md:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-3 text-black-main">Branded Collection</h2>
          <p className="text-gray-500 max-w-md mx-auto text-xs sm:text-sm">
            High-quality items designed to spread peace, love, and dignity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1: T-Shirt */}
          <div className="bg-white border border-gray-medium rounded-[24px] overflow-hidden transition-all duration-300 hover:border-primary-blue hover:shadow-[0_15px_30px_rgba(0,102,255,0.08)] hover:-translate-y-1 group flex flex-col">
            <div className="h-52 bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 flex items-center justify-center relative overflow-hidden">
              <span className="absolute top-3 right-3 py-1 px-3 bg-primary-blue text-white-main rounded-full text-[10px] font-bold uppercase tracking-wider z-10">Coming Soon</span>
              <img src={tee} alt="PLP Unity T-Shirt" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-black-main mb-1 group-hover:text-primary-blue transition-colors duration-300">PLP Unity T-Shirt</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">Premium heavyweight organic cotton tee featuring our embossed core values.</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-medium pt-4">
                <span className="font-extrabold text-black-main text-base sm:text-lg">15,000 RWF</span>
                <span className="text-[11px] text-primary-blue font-bold tracking-wide uppercase">Donate & Support</span>
              </div>
            </div>
          </div>

          {/* Card 2: Hoodie */}
          <div className="bg-white border border-gray-medium rounded-[24px] overflow-hidden transition-all duration-300 hover:border-primary-blue hover:shadow-[0_15px_30px_rgba(0,102,255,0.08)] hover:-translate-y-1 group flex flex-col">
            <div className="h-52 bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 flex items-center justify-center relative overflow-hidden">
              <span className="absolute top-3 right-3 py-1 px-3 bg-primary-blue text-white-main rounded-full text-[10px] font-bold uppercase tracking-wider z-10">Coming Soon</span>
              <img src={hoodie} alt="Dignity Fleece Hoodie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-black-main mb-1 group-hover:text-primary-blue transition-colors duration-300">Dignity Fleece Hoodie</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">Ultra-soft, double-brushed premium fleece designed for maximum comfort and style.</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-medium pt-4">
                <span className="font-extrabold text-black-main text-base sm:text-lg">25,000 RWF</span>
                <span className="text-[11px] text-primary-blue font-bold tracking-wide uppercase">Donate & Support</span>
              </div>
            </div>
          </div>

          {/* Card 3: Cap */}
          <div className="bg-white border border-gray-medium rounded-[24px] overflow-hidden transition-all duration-300 hover:border-primary-blue hover:shadow-[0_15px_30px_rgba(0,102,255,0.08)] hover:-translate-y-1 group flex flex-col">
            <div className="h-52 bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 flex items-center justify-center relative overflow-hidden">
              <span className="absolute top-3 right-3 py-1 px-3 bg-primary-blue text-white-main rounded-full text-[10px] font-bold uppercase tracking-wider z-10">Coming Soon</span>
              <img src={cap} alt="Dignity Signature Cap" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-black-main mb-1 group-hover:text-primary-blue transition-colors duration-300">Dignity Signature Cap</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">A high-quality structured cap with custom PLP Dignity stitching.</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-medium pt-4">
                <span className="font-extrabold text-black-main text-base sm:text-lg">10,000 RWF</span>
                <span className="text-[11px] text-primary-blue font-bold tracking-wide uppercase">Donate & Support</span>
              </div>
            </div>
          </div>

          {/* Card 4: Tote Bag */}
          <div className="bg-white border border-gray-medium rounded-[24px] overflow-hidden transition-all duration-300 hover:border-primary-blue hover:shadow-[0_15px_30px_rgba(0,102,255,0.08)] hover:-translate-y-1 group flex flex-col">
            <div className="h-52 bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 flex items-center justify-center relative overflow-hidden">
              <span className="absolute top-3 right-3 py-1 px-3 bg-primary-blue text-white-main rounded-full text-[10px] font-bold uppercase tracking-wider z-10">Coming Soon</span>
              <img src={tote} alt="PLP Eco Tote Bag" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-black-main mb-1 group-hover:text-primary-blue transition-colors duration-300">PLP Eco Tote Bag</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">Highly durable canvas tote bag with reinforced stitching and 100% organic cotton.</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-medium pt-4">
                <span className="font-extrabold text-black-main text-base sm:text-lg">7,000 RWF</span>
                <span className="text-[11px] text-primary-blue font-bold tracking-wide uppercase">Donate & Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-dots relative overflow-hidden w-full border-t border-gray-medium">
        {/* Glow ambient background effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-black-main mb-4 leading-tight">
            Explore the Live Take App Market
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Discover and trade in our dynamic app-driven community marketplace. Click below to experience our cutting-edge, live Take App Market.
          </p>
          <a 
            href="https://take.app/plpdignity" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center py-3 px-8 sm:py-4 sm:px-10 rounded-[50px] font-semibold cursor-pointer transition-all duration-300 bg-primary-blue text-white-main hover:bg-secondary-blue hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,102,255,0.25)] text-sm sm:text-base"
          >
            Explore Take App Market
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Payments We Accept Section */}
      <section className="py-8 bg-gray-light border-t border-gray-medium w-full">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold text-black-main font-heading uppercase tracking-wider">Payment Methods We Accept</h4>
            <p className="text-xs text-gray-500 mt-1">Secured, fast, and encrypted transactions for all contributions.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            {/* MTN MoMo */}
            <div className="bg-white border border-gray-medium rounded-[12px] px-3 py-1.5 flex items-center gap-2 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
              <svg className="w-7 h-5 flex-shrink-0" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="20" rx="4" fill="#FFCC00"/>
                <ellipse cx="14" cy="10" rx="9" ry="7" fill="#FFCC00" stroke="#002D62" strokeWidth="1.2"/>
                <text x="14" y="13" fontFamily="system-ui, sans-serif" fontSize="7" fontWeight="900" fill="#002D62" textAnchor="middle">MTN</text>
              </svg>
              <span className="text-xs font-bold text-gray-800">MTN MoMo</span>
            </div>
            {/* Airtel Money */}
            <div className="bg-white border border-gray-medium rounded-[12px] px-3 py-1.5 flex items-center gap-2 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
              <svg className="w-7 h-5 flex-shrink-0" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="20" rx="4" fill="#E30613"/>
                <path d="M9 14.5V8c0-1.5.8-2.5 2-2.5s2 1 2 2.5v6.5m0-4.5c0-1 .8-2 2-2s2 1 2 2v4.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs font-bold text-gray-800">Airtel Money</span>
            </div>
            {/* Visa */}
            <div className="bg-white border border-gray-medium rounded-[12px] px-3 py-1.5 flex items-center gap-2 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
              <svg className="w-8 h-5 flex-shrink-0 text-[#1A1F71]" viewBox="0 0 36 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.62 1.16L11.58 11h-2.1L7.4 2.8c-.24-.9-.92-1.26-1.72-1.3L3.6 1.4v-.24h3.66c.46 0 .88.3 1 .84l1.3 6.88 2.16-7.72h1.9zm8.56 5.86c.02-1.88-2.6-1.98-2.58-2.82.02-.26.26-.54.82-.62.28-.04 1.04-.08 1.9.32l.34.16.32-2.02c-.52-.18-1.2-.38-2.04-.38-2.14 0-3.64 1.14-3.66 2.76-.02 2.02 2.82 2.12 2.8 3.22-.02.34-.34.62-.94.7-1.12.14-1.98-.32-1.98-.32l-.36 2.06c.56.24 1.3.46 2.08.46 2.28 0 3.64-1.14 3.66-2.74zm7.98-5.86h-1.62c-.5 0-.88.3-1.08.78L26.3 11h2.2l.44-1.22h2.7l.26 1.22h1.94L32.16 1.16zm-2.04 6.74l1.1-3 1.1 3h-2.2zM2.8 1.16L.18 8.92c-.22.62-.06.84.44.84h3.76c.48 0 .86-.34 1-.78l2.64-7.82H7.94" />
              </svg>
              <span className="text-xs font-bold text-gray-800">Visa</span>
            </div>
            {/* Mastercard */}
            <div className="bg-white border border-gray-medium rounded-[12px] px-3 py-1.5 flex items-center gap-2 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
              <svg className="w-7 h-5 flex-shrink-0" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="6" fill="#EB001B" />
                <circle cx="16" cy="8" r="6" fill="#F79E1B" opacity="0.9" />
                <path d="M12 3.8a5.97 5.97 0 012.2 4.2A5.97 5.97 0 0112 12.2a5.97 5.97 0 01-2.2-4.2A5.97 5.97 0 0112 3.8z" fill="#FF5F00" />
              </svg>
              <span className="text-xs font-bold text-gray-800">Mastercard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Shop;



