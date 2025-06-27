import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <span className="text-blue-400">{'<'}</span>
              Portfolio
              <span className="text-blue-400">{'/>'}</span>
            </div>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="mb-4 p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 hover:scale-110 transform"
            >
              <ArrowUp size={20} />
            </button>
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>{t('footer.made')}</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>{t('footer.by')}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Portfolio. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;