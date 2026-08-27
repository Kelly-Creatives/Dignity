const Footer = () => {
  return (
    <footer className="bg-gray-light pt-20 pb-10 border-t border-gray-medium">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-16">
          <div className="footer-info">
            <div className="text-2xl font-extrabold tracking-tighter text-black-main mb-6">
              PLP<span className="text-primary-blue">-Dignity</span>
            </div>
            <p className="text-gray-600 mb-8 max-w-xs leading-relaxed text-[0.95rem]">
              Join our mission to restore dignity and empower lives. Every action counts towards a more equitable future.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/plp_dignity/" className="w-10 h-10 bg-primary-blue/10 rounded-[12px] flex items-center justify-center text-primary-blue hover:bg-primary-blue hover:text-white-main hover:-translate-y-1 transition-all duration-300">ig</a>
            </div>
          </div>
          <div>
            <h4 className="text-[1.1rem] font-bold mb-6 text-black-main">Organization</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-[0.9rem] hover:text-primary-blue hover:pl-1 transition-all duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-600 text-[0.9rem] hover:text-primary-blue hover:pl-1 transition-all duration-300">Our Team</a></li>
              <li><a href="#" className="text-gray-600 text-[0.9rem] hover:text-primary-blue hover:pl-1 transition-all duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-600 text-[0.9rem] hover:text-primary-blue hover:pl-1 transition-all duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[1.1rem] font-bold mb-6 text-black-main">Programs</h4>
            <ul className="space-y-3">
              <li><a href="Publications" className="text-gray-600 text-[0.9rem] hover:text-primary-blue hover:pl-1 transition-all duration-300">Education</a></li>
              <li><a href="#" className="text-gray-600 text-[0.9rem] hover:text-primary-blue hover:pl-1 transition-all duration-300">Advocacy</a></li>
              {/* <li><a href="#" className="text-gray-600 text-[0.9rem] hover:text-primary-blue hover:pl-1 transition-all duration-300">Grants</a></li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-[1.1rem] font-bold mb-6 text-black-main">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-[0.9rem] hover:text-primary-blue hover:pl-1 transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 text-[0.9rem] hover:text-primary-blue hover:pl-1 transition-all duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 text-[0.9rem] hover:text-primary-blue hover:pl-1 transition-all duration-300">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-medium flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left md:gap-0 text-gray-500 text-[0.85rem]">
          <p>&copy; 2026 PLP-Dignity Club. All rights reserved.</p>
          <p>Designed with ❤️ for social impact by Makria Labs.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
