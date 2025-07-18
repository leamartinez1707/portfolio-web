import { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-14 md:mt-0">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bol important-text-gradient mb-6 ">
            {t('hero.greeting')}{' '}
            <Typewriter loop words={[t('hero.role'), t('hero.role2')]} cursor cursorStyle="|" typeSpeed={100} deleteSpeed={50} delaySpeed={1500}>
              { }
            </Typewriter>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('contacto')}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              {t('hero.hire')}
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </button>

            <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full focus:border-violet-600 font-semibold hover:border-violet-600 hover:text-violet-600 hover:shadow-md transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              {t('hero.download')}
            </button>
          </div>  

          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-gray-400 hover:text-violet-600 transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;