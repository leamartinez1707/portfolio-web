import { projects } from '../../libs/projects';

const featuredProjects = projects.en.filter(p => p.featured);

const LandingSelectedWork = () => {
    const [main, second, third, fourth, ...rest] = featuredProjects;

    return (
        <section id="projects" className="py-40 px-8 bg-surface-container-lowest">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <header data-gsap-reveal className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-secondary"></div>
                        <span className="font-label text-secondary uppercase tracking-[0.3em] text-xs">Selected Work</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <h2 data-gsap-heading className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none text-on-surface overflow-hidden">
                            <span data-gsap-line className="block">FEATURED</span>
                            <span data-gsap-line className="block text-primary italic">PROJECTS</span>
                        </h2>
                        <p className="md:max-w-sm text-on-surface-variant font-body text-lg leading-relaxed text-right">
                            Real-world apps solving real problems — full stack, production-ready.
                        </p>
                    </div>
                </header>

                {/* Big Feature: Project 1 */}
                {main && (
                    <div data-gsap-reveal className="mb-20 group">
                        <div data-gsap-stagger className="grid grid-cols-12 gap-8 items-end">
                            <div data-gsap-item className="col-span-12 lg:col-span-8">
                                <div data-gsap-media data-gsap-parallax className="relative aspect-video overflow-hidden mb-6 bg-surface-container-low transition-all duration-500 hover:translate-y-[-4px]">
                                    <img
                                        src={main.image}
                                        alt={main.title}
                                        className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                                        {main.technologies.slice(0, 3).map(tech => (
                                            <span key={tech} className="bg-surface-container-highest/80 backdrop-blur-md px-3 py-1 font-label text-[10px] text-primary tracking-widest uppercase">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                    <div className="max-w-lg">
                                        <h3 className="font-headline text-3xl font-bold mb-3 group-hover:text-primary transition-colors uppercase">{main.title}</h3>
                                        <p className="text-on-surface-variant font-body mb-4 leading-relaxed">{main.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {main.technologies.map(tech => (
                                                <span key={tech} className="bg-surface-container-high px-3 py-1 font-label text-xs uppercase tracking-tight text-on-surface/60">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex gap-4 shrink-0">
                                        {main.github !== '#' && (
                                            <a href={main.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors border border-outline-variant/30 px-4 py-2">
                                                Code
                                            </a>
                                        )}
                                        {main.demo !== '#' && (
                                            <a href={main.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-primary-container bg-primary-container px-4 py-2 hover:bg-secondary transition-colors">
                                                Live Demo <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* Side card - Project 2 */}
                            {second && (
                                <div data-gsap-item data-gsap-reveal className="col-span-12 lg:col-span-4 lg:mb-0 group/side">
                                    <div data-gsap-media data-gsap-parallax className="relative aspect-[4/3] overflow-hidden mb-4 bg-surface-container-low transition-all duration-500 hover:translate-y-[-4px]">
                                        <img
                                            src={second.image}
                                            alt={second.title}
                                            className="w-full h-full object-cover opacity-60 grayscale group-hover/side:grayscale-0 group-hover/side:opacity-100 transition-all duration-700"
                                        />
                                    </div>
                                    <h3 className="font-headline text-2xl font-bold mb-2 group-hover/side:text-secondary transition-colors uppercase">{second.title}</h3>
                                    <p className="text-on-surface-variant font-body text-sm mb-3 leading-relaxed line-clamp-2">{second.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {second.technologies.slice(0, 4).map(tech => (
                                            <span key={tech} className="bg-surface-container-high px-2 py-1 font-label text-[10px] uppercase tracking-tight text-on-surface/60">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        {second.github !== '#' && (
                                            <a href={second.github} target="_blank" rel="noopener noreferrer" className="font-label text-xs uppercase tracking-widest text-on-surface/50 hover:text-primary transition-colors">Code</a>
                                        )}
                                        {second.demo !== '#' && (
                                            <a href={second.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-label text-xs uppercase tracking-widest text-secondary hover:tracking-[0.2em] transition-all duration-300">
                                                Demo <span className="material-symbols-outlined text-sm" data-icon="arrow_right_alt">arrow_right_alt</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Row: Projects 3 & 4 */}
                <div data-gsap-stagger className="grid grid-cols-12 gap-8 mb-12">
                    {[third, fourth].filter(Boolean).map((project, idx) => (
                        <div key={project!.title} data-gsap-item data-gsap-reveal data-gsap-tilt className={"col-span-12 md:col-span-6 group" + (idx === 1 ? " md:mt-16" : "")}>
                            <div data-gsap-media data-gsap-parallax className="relative aspect-video overflow-hidden mb-4 bg-surface-container-low transition-all duration-500 hover:translate-y-[-4px]">
                                <img
                                    src={project!.image}
                                    alt={project!.title}
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                />
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-2 group-hover:text-primary transition-colors uppercase">{project!.title}</h3>
                            <p className="text-on-surface-variant font-body text-sm mb-3 leading-relaxed line-clamp-2">{project!.description}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project!.technologies.slice(0, 4).map(tech => (
                                    <span key={tech} className="bg-surface-container-high px-2 py-1 font-label text-[10px] uppercase tracking-tight text-on-surface/60">{tech}</span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                {project!.github !== '#' && (
                                    <a href={project!.github} target="_blank" rel="noopener noreferrer" className="font-label text-xs uppercase tracking-widest text-on-surface/50 hover:text-primary transition-colors">Code</a>
                                )}
                                {project!.demo !== '#' && (
                                    <a href={project!.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-label text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                                        Live Demo <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Remaining projects grid */}
                {rest.length > 0 && (
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-outline-variant/15"></div>
                            <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant">More Projects</span>
                            <div className="h-px flex-1 bg-outline-variant/15"></div>
                        </div>
                        <div data-gsap-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {rest.map(project => (
                                <div key={project.title} data-gsap-item data-gsap-reveal data-gsap-tilt className="group bg-surface-container-low p-6 border border-outline-variant/10 hover:border-primary/30 transition-all duration-300">
                                    <h4 className="font-headline text-lg font-bold mb-2 group-hover:text-primary transition-colors uppercase">{project.title}</h4>
                                    <p className="text-on-surface-variant font-body text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map(tech => (
                                            <span key={tech} className="bg-surface-container-highest px-2 py-1 font-label text-[9px] uppercase tracking-widest text-on-surface/50">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        {project.github !== '#' && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-label text-[10px] uppercase tracking-widest text-on-surface/40 hover:text-primary transition-colors">Code</a>
                                        )}
                                        {project.demo !== '#' && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="font-label text-[10px] uppercase tracking-widest text-secondary hover:text-primary transition-colors">Demo</a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* View all on GitHub */}
                <div data-gsap-reveal className="mt-20 text-center">
                    <a
                        href="https://github.com/leamartinez1707"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 font-label text-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors border border-outline-variant/30 px-10 py-4 hover:border-primary/50"
                        data-gsap-magnetic
                    >
                        View All on GitHub <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LandingSelectedWork;
