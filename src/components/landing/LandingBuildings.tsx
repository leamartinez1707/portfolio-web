const LandingBuildings = () => {
  return (
    <div id="about" className="py-40 px-8 bg-surface">
      {/* // <!-- Hero Section / About --> */}
      <section className="max-w-[1440px] mx-auto px-8 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <span className="font-label text-secondary text-xs tracking-[0.3em] uppercase mb-6 block">Junior Profile</span>
            <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">
              I BUILD <br />
              <span className="text-primary">SOLID</span> <br />
              FOUNDATIONS.
            </h1>
            <div className="max-w-xl">
              <p className="text-lg text-on-surface/80 leading-relaxed mb-8">
                I'm a junior full stack developer with a strong frontend focus, building real projects with React, Next.js, TypeScript and Node.js. I care about clean code, performance and thoughtful interfaces, and I'm looking for teams where I can contribute, learn fast and keep improving with every release.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-surface-container-highest px-4 py-2 flex items-center gap-2 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-secondary text-sm">bolt</span>
                  <span className="font-label text-xs uppercase tracking-widest font-bold">Frontend Focus</span>
                </div>
                <div className="bg-surface-container-highest px-4 py-2 flex items-center gap-2 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-secondary text-sm">deployed_code</span>
                  <span className="font-label text-xs uppercase tracking-widest font-bold">Real Projects, Real Iteration</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden group">
              <img alt="Professional portrait" className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="dramatic low-key portrait of a focused male software engineer in a dark studio, cinematic lighting on side of face, moody aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKdrK2uNr85fquCxi0HZwMifL0wdeKQTL8Z8s6SZDz634auCYbfuaCmfrHRsnEtciRWtl9RdVSABu3M3Askd3P5VCdsx7D7um8vudGXbK_aKzQfnaDF6-Yi5JVAzIYjlM90nFaD9EsPFpBXaeApb6V9AduewuaoJP25S2Ye6N_28kH5yIQtavISpnMAAjdk-N3fc8WYOtqfqXfq_ssw9t7p3UWVVJzOZQ0XcY65lvGM_CkhoXpO8nfKxYqPMX1pvS5PAg1NEkJxIkr" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-container p-8 hidden lg:block">
              <span className="font-headline text-4xl font-black block text-on-primary-container">JR</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-primary-container/80">Building Experience</span>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- Bento Grid Stats / Achievements --> */}
      <section className="max-w-[1440px] mx-auto px-8 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 bg-surface-container-low p-10 border border-outline-variant/5">
            <span className="font-label text-xs text-primary mb-4 block">01 / HOW I WORK</span>
            <h3 className="font-headline text-3xl font-bold mb-6">Clean code, clear structure, steady progress.</h3>
            <p className="text-on-surface/60 font-body">I like building features with readable code, reusable components and room to scale. As a junior developer, I value feedback, iteration and shipping things the right way.</p>
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
            <h4 className="font-headline text-xl font-bold mb-2">Fast Learner</h4>
            <p className="text-xs text-on-surface/50 font-label">I adapt quickly, document what I learn and turn new tools into shipped work.</p>
          </div>
          <div className="md:col-span-1 bg-[#1c1b1b] p-10 border border-outline-variant/5">
            <h4 className="font-headline text-4xl font-black text-outline/20">UI</h4>
            <p className="font-label text-[10px] uppercase tracking-widest mt-4">Frontend Craft</p>
          </div>
          <div className="md:col-span-3 bg-surface p-10 border border-outline-variant/10 relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-label text-xs text-primary mb-2 block">CURRENT GOAL</span>
              <h3 className="font-headline text-2xl font-bold">Join a team where I can add value early, keep learning fast and grow into a stronger full stack engineer.</h3>
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