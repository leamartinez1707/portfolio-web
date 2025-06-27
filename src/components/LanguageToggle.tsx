import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-gray-600" />
      <div className="flex bg-gray-100 rounded-full p-1">
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'es'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'en'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;