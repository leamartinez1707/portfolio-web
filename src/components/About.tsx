import React, { useEffect, useRef, useState } from 'react';
import { Code, Rocket, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
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

  const stats = [
    { icon: Code, label: t('about.projects'), value: '20+' },
    { icon: Rocket, label: t('about.technologies'), value: '6+' },
    { icon: Users, label: t('about.clients'), value: '3+' },
    { icon: Award, label: t('about.certifications'), value: '5+' }
  ];

  return (
    <section id="sobre-mi" ref={sectionRef} className="lg:py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {t('about.title')} <span className="important-text-gradient">{t('about.me')}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t('about.story')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.description2')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.description3')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-fade-in-up' : ''
                    }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-3 text-violet-600">
                    <stat.icon size={32} />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;