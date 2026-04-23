const LandingBuildings = () => {
  return (
    <div id="about" className="py-40 px-8 bg-surface">
      {/* // <!-- Hero Section / About --> */}
      <section className="max-w-[1440px] mx-auto px-8 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <span className="font-label text-secondary text-xs tracking-[0.3em] uppercase mb-6 block">The Architect's Core</span>
            <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">
              I BUILD <br />
              <span className="text-primary">DIGITAL</span> <br />
              STRUCTURES.
            </h1>
            <div className="max-w-xl">
              <p className="text-lg text-on-surface/80 leading-relaxed mb-8">
                A Full Stack Engineer with a obsession for high-performance architecture and editorial-grade UI. I view code as more than just logic—it's a medium for technical mastery and visual storytelling. From optimized backend pipelines to pixel-perfect micro-interactions, I engineer digital experiences that command attention.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-surface-container-highest px-4 py-2 flex items-center gap-2 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-secondary text-sm">bolt</span>
                  <span className="font-label text-xs uppercase tracking-widest font-bold">10k+ Hours Code</span>
                </div>
                <div className="bg-surface-container-highest px-4 py-2 flex items-center gap-2 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-secondary text-sm">deployed_code</span>
                  <span className="font-label text-xs uppercase tracking-widest font-bold">50+ Shipped Apps</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden group">
              <img alt="Professional portrait" className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="dramatic low-key portrait of a focused male software engineer in a dark studio, cinematic lighting on side of face, moody aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKdrK2uNr85fquCxi0HZwMifL0wdeKQTL8Z8s6SZDz634auCYbfuaCmfrHRsnEtciRWtl9RdVSABu3M3Askd3P5VCdsx7D7um8vudGXbK_aKzQfnaDF6-Yi5JVAzIYjlM90nFaD9EsPFpBXaeApb6V9AduewuaoJP25S2Ye6N_28kH5yIQtavISpnMAAjdk-N3fc8WYOtqfqXfq_ssw9t7p3UWVVJzOZQ0XcY65lvGM_CkhoXpO8nfKxYqPMX1pvS5PAg1NEkJxIkr" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-container p-8 hidden lg:block">
              <span className="font-headline text-4xl font-black block text-on-primary-container">08+</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-primary-container/80">Years Excellence</span>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- Bento Grid Stats / Achievements --> */}
      <section className="max-w-[1440px] mx-auto px-8 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 bg-surface-container-low p-10 border border-outline-variant/5">
            <span className="font-label text-xs text-primary mb-4 block">01 / TECHNICAL PHILOSOPHY</span>
            <h3 className="font-headline text-3xl font-bold mb-6">Clean Architecture. Zero Technical Debt.</h3>
            <p className="text-on-surface/60 font-body">My process prioritizes scalability and maintainability. I build systems that don't just work today, but evolve tomorrow.</p>
          </div>
          <div className="md:col-span-1 bg-primary-container p-10 flex flex-col justify-between">
            <span className="material-symbols-outlined text-4xl text-on-primary-container">terminal</span>
            <div>
              <h4 className="font-headline text-2xl font-bold text-on-primary-container">99.9%</h4>
              <p className="font-label text-[10px] uppercase tracking-tighter text-on-primary-container/70">Uptime Reliability</p>
            </div>
          </div>
          <div className="md:col-span-1 bg-surface-container-high p-10 border border-outline-variant/5">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">speed</span>
            <h4 className="font-headline text-xl font-bold mb-2">Performance Obsessed</h4>
            <p className="text-xs text-on-surface/50 font-label">Optimizing for Core Web Vitals is not a task; it's a standard.</p>
          </div>
          <div className="md:col-span-1 bg-[#1c1b1b] p-10 border border-outline-variant/5">
            <h4 className="font-headline text-4xl font-black text-outline/20">AWS</h4>
            <p className="font-label text-[10px] uppercase tracking-widest mt-4">Cloud Native</p>
          </div>
          <div className="md:col-span-3 bg-surface p-10 border border-outline-variant/10 relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-label text-xs text-primary mb-2 block">RECENT ACHIEVEMENT</span>
              <h3 className="font-headline text-2xl font-bold">Featured on Awwwards for Technical Excellence in Frontend Engineering.</h3>
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