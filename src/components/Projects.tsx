import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import GithubIcon from './icons/GithubIcon';
import { projects } from '../libs/projects';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  const currentProjects = projects[language];
  const featuredProjects = currentProjects.filter(project => project.featured);
  const otherProjects = currentProjects.filter(project => !project.featured);

  return (
    <section id="proyectos" ref={sectionRef} className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {t('projects.title')} <span className="important-text-gradient">{t('projects.projects')}</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">{t('projects.featured')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 ${isVisible ? 'animate-fade-in-up' : ''
                    }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-4 md:p-6">
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 md:px-3 py-1 bg-blue-100 text-blue-800 text-xs md:text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 md:gap-4">
                      <a
                        href={project.github}
                        target='_blank'
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm md:text-base touch-manipulation"
                      >
                        <GithubIcon className="size-4 md:w-5 md:h-5" />
                        {t('projects.code')}
                      </a>
                      <a
                        target='_blank'
                        href={project.demo}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 text-sm md:text-base touch-manipulation"
                      >
                        <ExternalLink size={18} className="md:w-5 md:h-5" />
                        {t('projects.demo')}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">{t('projects.others')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className={`group bg-gray-50 rounded-lg p-4 md:p-6 hover:bg-white hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : ''
                    }`}
                  style={{ animationDelay: `${(index + 2) * 200}ms` }}
                >
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-800 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <a
                        target='_blank'
                        href={project.github}
                        className="text-gray-600 hover:text-gray-800 transition-colors duration-300 touch-manipulation"
                      >
                        <GithubIcon />
                      </a>
                      <a
                        target='_blank'
                        href={project.demo}
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300 touch-manipulation"
                      >
                        <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
                      </a>
                    </div>
                    <ArrowRight size={16} className="md:w-[18px] md:h-[18px] text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              ))}
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='gradient-text hover:underline flex flex-col items-center justify-center font-bold text-lg md:text-2xl underline hover:underline-offset-4 transition-all duration-300 touch-manipulation p-4 md:p-6'
                href='https://github.com/leamartinez1707'>Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;