import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { key: 'inicio', label: t('nav.home') },
    { key: 'sobre-mi', label: t('nav.about') },
    { key: 'habilidades', label: t('nav.skills') },
    { key: 'proyectos', label: t('nav.projects') },
    { key: 'contacto', label: t('nav.contact') }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4" id='header'>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold important-text-gradient">
            <span className="text-violet-900">{'<'}</span>
            <button className='hover:cursor-pointer' onClick={() => scrollToSection('inicio')}>Leandro Martínez</button>
            <span className="text-violet-700">{'<'}</span>
            <span className="text-violet-600">{'/'}</span>
            <span className="text-violet-500">{'>'}</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="text-gray-700 hover:text-violet-600 transition-colors duration-300 font-medium"
              >
                {item.label}

              </button>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-violet-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}

          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-violet-600 hover:bg-blue-50 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-2 border-t border-gray-200 mt-2 pt-4">
              <LanguageToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;