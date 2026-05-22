import { landingText, type Language } from '../../libs/i18n';

type LandingBuildingsProps = {
  language: Language;
};

const LandingBuildings = ({ language }: LandingBuildingsProps) => {
  const t = landingText.about;

  return (
    <div id="about" className="py-40 md:px-8 bg-surface">
      {/* // <!-- Hero Section / About --> */}
      <section className="max-w-[1440px] mx-auto px-8 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <span className="font-label text-secondary text-xs tracking-[0.3em] uppercase mb-6 block">{t.badge[language]}</span>
            <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">
              {t.titleLine1[language]} <br />
              <span className="text-primary">{t.titleLine2[language]}</span> <br />
              {t.titleLine3[language]}
            </h1>
            <div className="max-w-xl">
              <p className="text-lg text-on-surface/80 leading-relaxed mb-8">
                {t.paragraph[language]}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-surface-container-highest px-4 py-2 flex items-center gap-2 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-secondary text-sm">bolt</span>
                  <span className="font-label text-xs uppercase tracking-widest font-bold">{t.chipFocus[language]}</span>
                </div>
                <div className="bg-surface-container-highest px-4 py-2 flex items-center gap-2 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-secondary text-sm">deployed_code</span>
                  <span className="font-label text-xs uppercase tracking-widest font-bold">{t.chipProjects[language]}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden group">
              <img
                loading="lazy"
                alt={t.portraitAlt[language]} className="w-full h-full object-cover lg:grayscale lg:contrast-125 lg:opacity-70 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 transition-all duration-700" src="/assets/profile_image.webp" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-container p-8 hidden lg:block">
              <span className="font-headline text-4xl font-black block text-on-primary-container">JR</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-primary-container/80">{t.jrTag[language]}</span>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- Bento Grid Stats / Achievements --> */}
      <section className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 bg-surface-container-low p-10 border border-outline-variant/5">
            <span className="font-label text-xs text-primary mb-4 block">{t.howIWorkTag[language]}</span>
            <h3 className="font-headline text-3xl font-bold mb-6">{t.howIWorkTitle[language]}</h3>
            <p className="text-on-surface/60 font-body">{t.howIWorkText[language]}</p>
          </div>
          <div className="md:col-span-1 bg-primary-container p-10 flex flex-col justify-between">
            <span className="material-symbols-outlined text-4xl text-on-primary-container">terminal</span>
            <div>
              <h4 className="font-headline text-2xl font-bold text-on-primary-container">React</h4>
              <p className="font-label text-[10px] uppercase tracking-tighter text-on-primary-container/70">TypeScript · Next.js · Node.js</p>
            </div>
          </div>
          <div className="md:col-span-1 bg-surface-container-high p-10 border border-outline-variant/5">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">speed</span>
            <h4 className="font-headline text-xl font-bold mb-2">{t.fastLearnerTitle[language]}</h4>
            <p className="text-xs text-on-surface/50 font-label">{t.fastLearnerText[language]}</p>
          </div>
          <div className="md:col-span-1 bg-[#1c1b1b] p-10 border border-outline-variant/5">
            <h4 className="font-headline text-4xl font-black text-outline/20">UI</h4>
            <p className="font-label text-[10px] uppercase tracking-widest mt-4">{t.uiCraft[language]}</p>
          </div>
          <div className="md:col-span-3 bg-surface p-10 border border-outline-variant/10 relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-label text-xs text-primary mb-2 block">{t.currentGoalTag[language]}</span>
              <h3 className="font-headline text-2xl font-bold">{t.currentGoalText[language]}</h3>
            </div>
            <div className="absolute right-[-10%] top-[-20%] opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">trophy</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingBuildings