import { allTechnologies, featuredSkills } from '../../libs/skills';

export const LandingMainContent = () => {
  return (
    <section id="stack" className="py-40 px-8 bg-surface">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <header data-gsap-reveal className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">Tech Stack</span>
            <h2 data-gsap-heading className="font-headline font-black text-6xl md:text-8xl leading-none tracking-tighter text-on-surface overflow-hidden">
              <span data-gsap-line className="block">THE</span>
              <span data-gsap-line className="block text-primary">STACK.</span>
            </h2>
          </div>
          <div className="md:max-w-sm mb-4">
            <p className="text-on-surface-variant font-body text-lg leading-relaxed">
              A curated set of battle-tested tools I use to architect digital experiences that scale.
            </p>
          </div>
        </header>

        {/* Featured Skills Bento */}
        <div data-gsap-stagger className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Frontend block */}
          <div data-gsap-item data-gsap-reveal data-gsap-tilt className="md:col-span-8 bg-surface-container-low p-10 rounded-xl relative overflow-hidden group border border-outline-variant/10">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[160px]" data-icon="code">code</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-1 w-12 bg-primary rounded-full"></span>
                <span className="font-label text-xs tracking-widest uppercase text-primary">Frontend</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">React & Next.js Ecosystem</h3>
              <p className="text-on-surface-variant max-w-xl mb-8 leading-relaxed font-body text-sm">
                Type-safe, component-driven UIs with React 19 and Next.js. I build state management systems, SSR/SSG apps, and pixel-perfect interfaces with TypeScript and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'TanStack Query', 'Zustand'].map(tech => (
                  <div key={tech} className="bg-surface-container-highest px-4 py-2 font-label text-sm text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-primary" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Proficiency block */}
          <div data-gsap-item data-gsap-reveal data-gsap-tilt className="md:col-span-4 bg-surface-container-high p-10 rounded-xl flex flex-col justify-between border border-outline-variant/10">
            <div className="mb-6">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 block" data-icon="speed">speed</span>
              <h4 className="font-headline text-2xl font-bold mb-3">Skill Levels</h4>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                Built from real projects: client work, freelance, and open-source.
              </p>
            </div>
            <div className="space-y-4">
              {featuredSkills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center text-xs font-label uppercase tracking-widest mb-1">
                    <span>{skill.name}</span>
                    <span className="text-secondary">{skill.knowledge}</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                    <div data-gsap-skillbar className="bg-secondary h-full transition-all duration-700" style={{ width: skill.level + '%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend block */}
          <div data-gsap-item data-gsap-reveal data-gsap-tilt className="md:col-span-4 bg-surface-container-low p-10 rounded-xl group hover:bg-surface-container-high transition-colors border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block" data-icon="database">database</span>
            <h4 className="font-headline text-2xl font-bold mb-4">Backend & APIs</h4>
            <p className="text-on-surface-variant text-sm font-body mb-6 leading-relaxed">
              Scalable Node.js services, REST APIs, and microservices with Express and Nest.js. Type-safe data access with Prisma, MongoDB, and PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'Nest.js', 'MongoDB', 'PostgreSQL', 'Prisma', 'JWT'].map(tech => (
                <span key={tech} className="text-[10px] font-label px-2 py-1 bg-surface-container-highest text-outline uppercase tracking-tighter">{tech}</span>
              ))}
            </div>
          </div>

          {/* Tools & DevOps block */}
          <div data-gsap-item data-gsap-reveal data-gsap-tilt className="md:col-span-5 bg-surface-container-low p-10 rounded-xl border border-outline-variant/10">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 block" data-icon="cloud_done">cloud_done</span>
            <h4 className="font-headline text-3xl font-bold mb-4">Tools & Cloud</h4>
            <p className="text-on-surface-variant text-sm font-body mb-6 leading-relaxed">
              CI/CD with GitHub Actions, cloud deployments on Vercel and AWS, containerization with Docker and AI integrations via OpenAI API.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Docker', 'Vercel', 'AWS', 'Firebase', 'OpenAI API', 'GitHub Actions'].map(tech => (
                <span key={tech} className="text-[10px] font-label px-2 py-1 bg-surface-container-highest text-outline uppercase tracking-tighter">{tech}</span>
              ))}
            </div>
          </div>

          {/* Design focus block */}
          <div data-gsap-item data-gsap-reveal data-gsap-tilt className="md:col-span-3 bg-primary-container p-10 rounded-xl flex items-center justify-center text-center">
            <div>
              <span className="material-symbols-outlined text-6xl text-on-primary-container mb-4 block" data-icon="architecture">architecture</span>
              <div className="font-headline font-black text-on-primary-container text-xl leading-tight">
                CLEAN<br />CODE<br />FOCUSED
              </div>
            </div>
          </div>
        </div>

        {/* All technologies icon row */}
        <div data-gsap-reveal>
          <h3 className="font-headline text-xl font-bold mb-10 text-center uppercase tracking-widest">Full Ecosystem</h3>
          <div className="flex flex-wrap justify-center gap-10 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
            {allTechnologies.map(tech => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <img src={tech.icon} alt={tech.name} className="size-14" />
                <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
