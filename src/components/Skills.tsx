import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredSkills = [
    { name: 'React', level: 80, knowledge: 'Avanzado', color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
    { name: 'Next.js', level: 60, knowledge: 'Intermedio', color: 'from-gray-700 to-gray-900', icon: '▲' },
    { name: 'TypeScript', level: 80, knowledge: 'Avanzado', color: 'from-blue-600 to-blue-800', icon: '🔷' },
    { name: 'Express.js', level: 80, knowledge: 'Avanzado', color: 'from-green-500 to-green-700', icon: '🚀' },
    { name: 'Nest.js', level: 60, knowledge: 'Intermedio', color: 'from-red-500 to-red-700', icon: '🏰' },
    { name: 'Node.js', level: 80, knowledge: 'Avanzado', color: 'from-green-600 to-green-800', icon: '🟢' }
  ];

  const allTechnologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Git', icon: '📝' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Redux', icon: '🟣' },
    { name: 'Vercel', icon: '🔺' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'Nest.js', icon: '🏰' },
    { name: 'Zustand', icon: '🗃️' },
  ];

  return (
    <section id="habilidades" ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {t('skills.title')} <span className="important-text-gradient">{t('skills.tech')}</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </div>

          <div className="mb-12 md:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 ${isVisible ? 'animate-fade-in-up' : ''
                    }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="text-3xl md:text-4xl">{skill.icon}</div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-800">{skill.name}</h4>
                      <p className="text-gray-600 text-xs md:text-sm">{t('skills.featured.focus')}</p>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-sm font-medium text-gray-700">{t('skills.featured.proficiency')}</span>
                      <span className="text-xs md:text-sm font-bold text-gray-800">{skill.knowledge}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150 + 500}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold important-text-gradient mb-4">
                {t('skills.slider.title')}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                {t('skills.slider.subtitle')}
              </p>
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-4 md:w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-4 md:w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>

            {/* First row - moves left */}
            <div className="relative overflow-hidden mb-6 md:mb-8">
              <div className="flex animate-scroll-smooth space-x-4 md:space-x-8 py-4 md:py-6">
                {[...allTechnologies.slice(0, 10), ...allTechnologies.slice(0, 10), ...allTechnologies.slice(0, 10)].map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-2 md:gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 px-4 md:px-8 py-3 md:py-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group cursor-default min-w-fit touch-manipulation"
                  >
                    <span className="text-xl md:text-3xl group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    <span className="text-gray-800 font-semibold md:font-bold text-sm md:text-lg whitespace-nowrap group-hover:text-blue-700 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row - moves right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-reverse space-x-4 md:space-x-8 py-4 md:py-6">
                {[...allTechnologies.slice(10), ...allTechnologies.slice(10), ...allTechnologies.slice(10)].map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-2 md:gap-4 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 px-4 md:px-8 py-3 md:py-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 group cursor-default min-w-fit touch-manipulation"
                  >
                    <span className="text-xl md:text-3xl group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    <span className="text-gray-800 font-semibold md:font-bold text-sm md:text-lg whitespace-nowrap group-hover:text-purple-700 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;