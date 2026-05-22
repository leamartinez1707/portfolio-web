import { landingText, type Language } from '../../libs/i18n';

type LandingHomeProps = {
  language: Language;
};

const LandingHome = ({ language }: LandingHomeProps) => {
  const t = landingText.home;

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
              <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs">{t.availability[language]}</span>
            </div>
            <h1 data-gsap-hero-title className="font-headline text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-12 text-on-surface overflow-hidden">
              <span data-gsap-line className="block">{t.titleLine1[language]}</span>
              <span data-gsap-line className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t.titleLine2[language]}</span>
              <span data-gsap-line className="block">{t.titleLine3[language]}</span>
            </h1>
            <p data-gsap-hero-subtitle className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
              {t.subtitle[language]}
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-8">
              <a
                href="#contact"
                data-gsap-hero-cta
                data-gsap-magnetic
                className="group relative px-10 py-5 bg-primary-container text-on-primary-container font-label font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:bg-secondary hover:text-on-secondary"
              >
                <span className="relative z-10">{t.ctaHireMe[language]}</span>
              </a>
              <a
                href="/leandro_martinez_fullstack_resume.pdf"
                download
                data-gsap-hero-cta
                data-gsap-magnetic
                className="font-label text-sm tracking-widest uppercase border-b border-outline-variant/30 pb-1 hover:text-primary transition-colors"
              >
                {t.downloadCvEn[language]}
              </a>
              <a
                href="/leandro_martinez_fullstack_curriculum.pdf"
                download
                data-gsap-hero-cta
                data-gsap-magnetic
                className="font-label text-sm tracking-widest uppercase border-b border-outline-variant/30 pb-1 hover:text-primary transition-colors"
              >
                {t.downloadCvEs[language]}
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
                <p className="pl-4">{t.codeKeyName[language]}: <span className="text-primary">"Leandro Martinez"</span>,</p>
                <p className="pl-4">{t.codeKeyRole[language]}: <span className="text-primary">"{t.codeRole[language]}"</span>,</p>
                <p className="pl-4">{t.codeKeyFocus[language]}: <span className="text-primary">"{t.codeFocus[language]}"</span>,</p>
                <p className="pl-4">{t.codeKeyLocation[language]}: <span className="text-primary">"{t.codeLocation[language]}"</span>,</p>
                <p className="pl-4">{t.codeKeyStack[language]}: [</p>
                <p className="pl-8 text-secondary">"React", "Next.js",</p>
                <p className="pl-8 text-secondary">"Node.js", "Express.js", "TypeScript"</p>
                <p className="pl-4">],</p>
                <p className="pl-4">{t.codeKeyOpenToWork[language]}: <span className="text-[#27c93f]">true</span></p>
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
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mt-1">{t.statProjects[language]}</p>
              </div>
              <div data-gsap-stat>
                <span data-gsap-stat-number className="font-headline text-4xl font-black text-on-surface">6+</span>
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mt-1">{t.statTechnologies[language]}</p>
              </div>
              <div data-gsap-stat>
                <span data-gsap-stat-number className="font-headline text-4xl font-black text-on-surface">5+</span>
                <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mt-1">{t.statCertifications[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingHome;
