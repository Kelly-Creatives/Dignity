import Footer from './Footer';
import dac from '../assets/dac.jpeg';
import olga2 from '../assets/olga2.jpeg';
import img from '../assets/img.jpeg';
import djanat from '../assets/djanat.jpeg';

const About = () => {
  return (
    <div className="min-h-screen bg-white-main text-black-main font-body flex flex-col justify-between">
      {/* Sleek Sub-Navbar / Header for About */}
      <nav className="fixed top-0 left-0 right-0 h-20 flex items-center z-[1000] bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center w-full">
          <div className="text-lg md:text-2xl font-extrabold tracking-tighter text-black-main font-heading">
            PLP-Dignity <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-2">About Us.</span>
          </div>
          
          <button 
            onClick={() => window.location.reload()} 
            className="group inline-flex items-center gap-2 py-1.5 px-4 sm:py-2.5 sm:px-6 rounded-[50px] font-semibold cursor-pointer transition-all duration-300 border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white-main text-[10px] sm:text-sm font-heading"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.04),transparent)] bg-dots px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block py-1.5 px-4 bg-primary-blue/10 text-primary-blue rounded-[50px] text-[0.8rem] sm:text-[0.85rem] font-semibold mb-6 animate-fade-in font-heading">
            Our Identity & Legacy
          </span>
          <h1 className="text-[2.25rem] sm:text-[3rem] md:text-[4.5rem] font-heading font-extrabold text-gradient mb-6 tracking-tight leading-tight">
            Restoring Dignity <br className="hidden sm:inline" />
            <span className="text-primary-blue">Empowering Generations.</span>
          </h1>
          <p className="text-gray-600 max-w-[800px] mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            PLP-Dignity is a dynamic, action-oriented affiliate club of <strong>Peace and Love Proclaimers (PLP)</strong>, a prominent non-profit organization renowned for fostering peace, unity, and social development across Rwanda and beyond since 2007.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-12 bg-white max-w-[1200px] mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-primary-blue uppercase tracking-wider text-xs font-bold font-heading">Our Origin Story</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-black-main leading-tight">
              From a Vision of Peace to Hands-on Community Empowerment
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Peace and Love Proclaimers (PLP) was founded with the dream of unifying Rwandan youth and healing communities after the 1994 Genocide against the Tutsi. Best known for initiating the annual <strong>Walk to Remember</strong>, PLP has inspired hundreds of thousands of youth globally to champion unity, remembrance, and reconciliation.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              In 2025, the <strong>PLP-Dignity Club</strong> was established as an action-focused affiliate. While PLP seeds the foundations of peace and reconciliation, PLP-Dignity takes that message directly to the grassroots—implementing active community projects, socio-economic aid, healthcare coverage, and leadership mentorship to ensure every individual enjoys the basic standard of living they deserve.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-blue to-[#001133] rounded-[32px] p-8 sm:p-12 text-white-main relative overflow-hidden shadow-xl min-h-[350px] flex flex-col justify-between group">
            {/* Ambient visual overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,102,255,0.15),transparent)] pointer-events-none" />
            <div>
              <span className="text-primary-blue/80 text-xs font-bold uppercase tracking-wider block mb-2 font-heading">The Foundation</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4 leading-snug">
                "Dignity is not a privilege, it is a fundamental human right."
              </h3>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm opacity-80 leading-relaxed">
                By equipping youth with leadership skills and dedicating our efforts to restorative community service, we are building a lasting legacy of empathy and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Synergy Section */}
      <section className="py-16 bg-gray-light border-t border-gray-medium w-full px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary-blue uppercase tracking-wider text-xs font-bold font-heading">Socio-Economic Engine</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-black-main mt-2">
              The Synergy: PLP & Dignity Club
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-xs sm:text-sm mt-3">
              How our foundational peace organization coordinates with our hands-on community action group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-medium rounded-[32px] p-8 sm:p-10 hover:border-primary-blue hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="inline-block py-1 px-3 bg-primary-blue/10 text-primary-blue rounded-[20px] text-xs font-semibold mb-4 font-heading">
                  Established 2007
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-black-main mb-4">
                  Peace and Love Proclaimers (PLP)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Born out of a necessity to rebuild social cohesion and heal the nation, PLP focused on youth advocacy, peace education, and remembrance. By launching the global <strong>Walk to Remember</strong>, PLP created a international standard of unity, encouraging youth to heal communities and prevent future atrocities.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-500 border-t border-black/5 pt-4">
                <span>✓ Unity & Healing</span>
                <span>•</span>
                <span>✓ Remembrance</span>
                <span>•</span>
                <span>✓ Global Harmony</span>
              </div>
            </div>

            <div className="bg-white border border-gray-medium rounded-[32px] p-8 sm:p-10 hover:border-primary-blue hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="inline-block py-1 px-3 bg-primary-blue/10 text-primary-blue rounded-[20px] text-xs font-semibold mb-4 font-heading">
                  Established 2025
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-black-main mb-4">
                  PLP-Dignity Club
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Serving as the direct executive arm of PLP’s core values, Dignity translation is purely action-oriented. We transform the theoretical values of peace into active community health campaigns, direct student mentorships, housing support, and economic empowerment initiatives at the grassroots level.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-primary-blue border-t border-black/5 pt-4">
                <span>✓ Mega care</span>
                <span>•</span>
                <span>✓ Remembrance</span>
                <span>•</span>
                <span>✓ School mentorship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Indicators / Stats */}
      <section className="py-16 bg-white w-full px-4 md:px-8 border-b border-gray-medium">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-blue font-heading mb-2">2 Years</div>
              <div className="text-gray-600 text-xs sm:text-sm font-semibold uppercase tracking-wider font-heading">Legacy of Mobilization</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-blue font-heading mb-2">50+</div>
              <div className="text-gray-600 text-xs sm:text-sm font-semibold uppercase tracking-wider font-heading">Members</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-blue font-heading mb-2">10</div>
              <div className="text-gray-600 text-xs sm:text-sm font-semibold uppercase tracking-wider font-heading">Institutions</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-blue font-heading mb-2">20</div>
              <div className="text-gray-600 text-xs sm:text-sm font-semibold uppercase tracking-wider font-heading">Leaders Mentored</div>
            </div>
          </div>
        </div>
      </section>


           


            

        

      {/* Core Values Interactive List */}
      <section className="py-16 max-w-[1200px] mx-auto px-4 md:px-8 w-full border-b border-gray-medium">
        <div className="text-center mb-16">
          <span className="text-primary-blue uppercase tracking-wider text-xs font-bold font-heading">Our Guiding Compass</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-black-main mt-2">
            The 11 Core Values of Dignity
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-xs sm:text-sm mt-3">
            These fundamental principles guide every choice we make and project we run.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Love */}
          <div className="bg-white border border-gray-medium rounded-2xl p-6 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
            <h4 className="text-base font-bold font-heading text-black-main flex items-center gap-2 mb-2">
              <span className="text-primary-blue font-bold">♥</span> Love
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">Compassion and care for every single member and community we reach.</p>
          </div>

          {/* Integrity */}
          <div className="bg-white border border-gray-medium rounded-2xl p-6 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
            <h4 className="text-base font-bold font-heading text-black-main flex items-center gap-2 mb-2">
              <span className="text-primary-blue font-bold">✓</span> Integrity
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">Complete honesty, transparency, and ethical conduct in all actions.</p>
          </div>

          {/* Resilience */}
          <div className="bg-white border border-gray-medium rounded-2xl p-6 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
            <h4 className="text-base font-bold font-heading text-black-main flex items-center gap-2 mb-2">
              <span className="text-primary-blue font-bold">⚓</span> Resilience
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">Developing inner strength to overcome challenges and persist in serving others.</p>
          </div>

          {/* Respect */}
          <div className="bg-white border border-gray-medium rounded-2xl p-6 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
            <h4 className="text-base font-bold font-heading text-black-main flex items-center gap-2 mb-2">
              <span className="text-primary-blue font-bold">⚖</span> Respect
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">Upholding individual dignity and preserving historical Rwandan traditions.</p>
          </div>

          {/* Unity */}
          <div className="bg-white border border-gray-medium rounded-2xl p-6 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
            <h4 className="text-base font-bold font-heading text-black-main flex items-center gap-2 mb-2">
              <span className="text-primary-blue font-bold">🤝</span> Unity
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">Building powerful bonds that keep our members together to foster collective growth.</p>
          </div>

          {/* Responsibility */}
          <div className="bg-white border border-gray-medium rounded-2xl p-6 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
            <h4 className="text-base font-bold font-heading text-black-main flex items-center gap-2 mb-2">
              <span className="text-primary-blue font-bold">⚿</span> Responsibility
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">Full accountability to oneself, the family unit, and our wider community.</p>
          </div>

          {/* Leadership */}
          <div className="bg-white border border-gray-medium rounded-2xl p-6 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
            <h4 className="text-base font-bold font-heading text-black-main flex items-center gap-2 mb-2">
              <span className="text-primary-blue font-bold">⚡</span> Leadership
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">Guiding, serving, and inspiring our peers through daily example and positive action.</p>
          </div>

          {/* Empowerment */}
          <div className="bg-white border border-gray-medium rounded-2xl p-6 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
            <h4 className="text-base font-bold font-heading text-black-main flex items-center gap-2 mb-2">
              <span className="text-primary-blue font-bold">🎯</span> Empowerment
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">Enabling youth to discover their absolute potential and contribute meaningfully.</p>
          </div>

          {/* Solidarity */}
          <div className="bg-white border border-gray-medium rounded-2xl p-6 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
            <h4 className="text-base font-bold font-heading text-black-main flex items-center gap-2 mb-2">
              <span className="text-primary-blue font-bold">✊</span> Solidarity
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">Standing tightly together with those in need to promote complete social cohesion.</p>
          </div>

          {/* Legacy */}
          <div className="bg-white border border-gray-medium rounded-2xl p-6 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
            <h4 className="text-base font-bold font-heading text-black-main flex items-center gap-2 mb-2">
              <span className="text-primary-blue font-bold">🏛</span> Legacy
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">Preserving the rich history, values, and core peace vision of PLP for future eras.</p>
          </div>

          {/* Service */}
          <div className="bg-white border border-gray-medium rounded-2xl p-6 hover:border-primary-blue hover:shadow-sm transition-all duration-300">
            <h4 className="text-base font-bold font-heading text-black-main flex items-center gap-2 mb-2">
              <span className="text-primary-blue font-bold">☘</span> Service
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">An unyielding dedication to mentorship, positive support, and community development.</p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-light w-full px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary-blue uppercase tracking-wider text-xs font-bold font-heading">Our Steering Force</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-black-main mt-2">
              Meet Our Visionary Leaders
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-xs sm:text-sm mt-3">
              The passionate individuals directing our programs and upholding the values of PLP-Dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Coordinator */}
            <div className="bg-white border border-gray-medium rounded-[32px] p-6 text-center hover:border-primary-blue hover:shadow-lg transition-all duration-300 group flex flex-col items-center">
              <div className="w-[160px] h-[160px] mb-6 rounded-full overflow-hidden border-4 border-gray-light group-hover:border-primary-blue transition-all duration-300">
                <img src={dac} alt="Nyirimpeta Patrick" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold font-heading text-black-main group-hover:text-primary-blue transition-colors duration-300">
                Nyirimpeta Patrick
              </h3>
              <p className="text-primary-blue text-xs font-semibold uppercase tracking-wider mt-1 font-heading">
                Coordinator
              </p>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                Oversees general operations, ensuring our local grassroot projects are aligned with core PLP initiatives.
              </p>
            </div>

            {/* Vice Coordinator */}
            <div className="bg-white border border-gray-medium rounded-[32px] p-6 text-center hover:border-primary-blue hover:shadow-lg transition-all duration-300 group flex flex-col items-center">
              <div className="w-[160px] h-[160px] mb-6 rounded-full overflow-hidden border-4 border-gray-light group-hover:border-primary-blue transition-all duration-300">
                <img src={olga2} alt="Gatako Amelie Olga" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold font-heading text-black-main group-hover:text-primary-blue transition-colors duration-300">
                Gatako Amelie Olga
              </h3>
              <p className="text-primary-blue text-xs font-semibold uppercase tracking-wider mt-1 font-heading">
                Vice Coordinator
              </p>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                Manages strategic partnerships, resource allocation, and external club growth campaigns.
              </p>
            </div>

            {/* Event and program manager */}
            <div className="bg-white border border-gray-medium rounded-[32px] p-6 text-center hover:border-primary-blue hover:shadow-lg transition-all duration-300 group flex flex-col items-center">
              <div className="w-[160px] h-[160px] mb-6 rounded-full overflow-hidden border-4 border-gray-light group-hover:border-primary-blue transition-all duration-300">
                <img src={img} alt="Igisubizo Kelly" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold font-heading text-black-main group-hover:text-primary-blue transition-colors duration-300">
                Igisubizo Kelly
              </h3>
              <p className="text-primary-blue text-xs font-semibold uppercase tracking-wider mt-1 font-heading">
                Program Manager
              </p>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                Orchestrates community service programs, student aid workshops, and active legacy commemoration events.
              </p>
            </div>

            {/* Communication lead */}
            <div className="bg-white border border-gray-medium rounded-[32px] p-6 text-center hover:border-primary-blue hover:shadow-lg transition-all duration-300 group flex flex-col items-center">
              <div className="w-[160px] h-[160px] mb-6 rounded-full overflow-hidden border-4 border-gray-light group-hover:border-primary-blue transition-all duration-300">
                <img src={djanat} alt="Manzi Djanat" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold font-heading text-black-main group-hover:text-primary-blue transition-colors duration-300">
                Manzi Djanat
              </h3>
              <p className="text-primary-blue text-xs font-semibold uppercase tracking-wider mt-1 font-heading">
                Communication Lead
              </p>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                Drives public relations, coordinates digital media campaigns, and interfaces with local community forums.
              </p>
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
            Be Part of Restoring Dignity
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Whether you want to join our active membership, volunteer for our local  services, or support our programs financially, your hand matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a 
              href="https://take.app/plpdignity" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block py-3 px-8 rounded-[50px] font-semibold cursor-pointer transition-all duration-300 border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white-main font-heading"
            >
              Support Our Cause
            </a>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default About;
