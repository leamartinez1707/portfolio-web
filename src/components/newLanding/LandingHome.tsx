const LandingHome = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-32 pb-40 px-8 overflow-hidden">
        {/* Background Decoration */}
        <div data-gsap-float className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-primary/30 to-transparent"></div>
        </div>

        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-8">
            <div data-gsap-hero-badge className="inline-flex items-center space-x-4 mb-8">
              <span className="h-[1px] w-12 bg-secondary"></span>
              <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs">Available for Work · Montevideo, Uruguay</span>
            </div>
            <h1 data-gsap-hero-title className="font-headline text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-12 text-on-surface overflow-hidden">
              <span data-gsap-line className="block">FULL STACK</span>
              <span data-gsap-line className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DEVELOPER</span>
              <span data-gsap-line className="block">FRONTEND FOCUSED</span>
            </h1>
            <p data-gsap-hero-subtitle className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
              Hi, I'm <strong className="text-on-surface">Leandro Martinez</strong> - I build high-impact web experiences with React, Next.js, TypeScript and Node.js. Passionate about clean code, performance and pixel-perfect UIs.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="#contact"
                data-gsap-hero-cta
                data-gsap-magnetic
                className="group relative px-10 py-5 bg-primary-container text-on-primary-container font-label font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:bg-secondary hover:text-on-secondary"
              >
                <span className="relative z-10">Hire Me</span>
              </a>
              <a
                href="/leandro-martinez-fullstack-curriculum.pdf"
                download
                data-gsap-hero-cta
                data-gsap-magnetic
                className="font-label text-sm tracking-widest uppercase border-b border-outline-variant/30 pb-1 hover:text-primary transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Code snippet card */}
          <div className="col-span-12 lg:col-span-4 hidden lg:block">
            <div data-gsap-hero-codecard className="relative p-8 bg-surface-container-low rounded-lg border border-outline-variant/10 shadow-2xl">
              <div className="flex space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="font-label text-xs space-y-2 opacity-80">
                <p className="text-secondary">const developer = {'{'}</p>
                <p className="pl-4">name: <span className="text-primary">"Leandro Martinez"</span>,</p>
                <p className="pl-4">role: <span className="text-primary">"Full Stack Dev"</span>,</p>
                <p className="pl-4">focus: <span className="text-primary">"Frontend"</span>,</p>
                <p className="pl-4">location: <span className="text-primary">"Montevideo, UY"</span>,</p>
                <p className="pl-4">stack: [</p>
                <p className="pl-8 text-secondary">"React", "Next.js",</p>
                <p className="pl-8 text-secondary">"Node.js", "Express.js", "TypeScript"</p>
                <p className="pl-4">],</p>
                <p className="pl-4">openToWork: <span className="text-[#27c93f]">true</span></p>
                <p className="text-secondary">{'}'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="absolute bottom-12 left-0 right-0 px-8">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="flex flex-wrap gap-12 border-t border-outline-variant/15 pt-10">
              <div data-gsap-stat>
                <span data-gsap-stat-number className="font-headline text-4xl font-black text-on-surface">20+</span>
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mt-1">Projects Built</p>
              </div>
              <div data-gsap-stat>
                <span data-gsap-stat-number className="font-headline text-4xl font-black text-on-surface">6+</span>
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mt-1">Technologies</p>
              </div>
              <div data-gsap-stat>
                <span data-gsap-stat-number className="font-headline text-4xl font-black text-on-surface">5+</span>
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mt-1">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingHome;
