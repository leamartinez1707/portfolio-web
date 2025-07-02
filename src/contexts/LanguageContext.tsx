import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Hero
    'hero.greeting': 'Hola, soy un',
    'hero.role': 'Desarrollador Full Stack',
    'hero.role2': 'Desarrollador enfocado al Frontend',
    'hero.description': 'Apasionado por construir experiencias web de alto impacto. Especializado en React && Next.js, Express.js && Nest.js, TypeScript y tecnologías modernas para el desarrollo ágil y escalable.',
    'hero.hire': 'Contratarme',
    'hero.download': 'Descargar CV',

    // About
    'about.title': 'Sobre',
    'about.me': 'Mí',
    'about.subtitle': 'Conoce mi trayectoria y pasión por el desarrollo web',
    'about.story': 'Mi Historia',
    'about.description1': 'Soy un desarrollador frontend apasionado por crear experiencias web únicas y funcionales. Me especializo en React, TypeScript y tecnologías modernas para construir aplicaciones que no solo se ven increíbles, sino que también ofrecen una experiencia de usuario intuitiva y moderna.',
    'about.description2': 'Mi enfoque está en escribir código limpio, mantenible y escalable. Siempre estoy aprendiendo nuevas tecnologías y mejores prácticas para mantenerme al día con las últimas tendencias del desarrollo web.',
    'about.description3': 'Busco mi primera oportunidad profesional, donde pueda aplicar mis conocimientos, contribuir al éxito del equipo y seguir creciendo como desarrollador.',
    'about.projects': 'Proyectos Completados',
    'about.technologies': 'Tecnologías Dominadas',
    'about.clients': 'Clientes Satisfechos',
    'about.certifications': 'Certificaciones',

    // Skills
    'skills.title': 'Stack',
    'skills.tech': 'Tecnológico',
    'skills.subtitle': 'Tecnologías que domino para crear soluciones innovadoras',
    'skills.featured.title': 'Mis Especialidades',
    'skills.featured.subtitle': 'Las tecnologías en las que me enfoco principalmente',
    'skills.featured.focus': 'Enfoque Principal',
    'skills.featured.proficiency': 'Dominio',
    'skills.slider.title': 'Tecnologías que uso diariamente',
    'skills.slider.subtitle': 'Herramientas con las que trabajo en mis proyectos',

    // Projects
    'projects.title': 'Mis',
    'projects.projects': 'Proyectos',
    'projects.subtitle': 'Una selección de mis mejores trabajos que demuestran mis habilidades',
    'projects.featured': 'Proyectos Destacados',
    'projects.others': 'Otros Proyectos',
    'projects.code': 'Código',
    'projects.demo': 'Demo',

    // Contact
    'contact.title': '¡Trabajemos',
    'contact.together': 'Juntos!',
    'contact.subtitle': '¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ayudarte a hacerlo realidad.',
    'contact.info': 'Información de Contacto',
    'contact.social': 'Sígueme en Redes',
    'contact.cta.title': '¿Listo para empezar?',
    'contact.cta.description': 'Envíame un mensaje y hablemos sobre tu próximo proyecto.',
    'contact.cta.email': 'Enviar Email',
    'contact.form.title': 'Envíame un Mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.placeholder.name': 'Tu nombre',
    'contact.form.placeholder.email': 'tu@email.com',
    'contact.form.placeholder.subject': '¿De qué quieres hablar?',
    'contact.form.placeholder.message': 'Cuéntame sobre tu proyecto...',
    'contact.email': 'leandromartinez.dev@gmail.com',
    'contact.phone': '+598 (95) 220-063',
    'contact.location': 'Montevideo, Uruguay',

    // Footer
    'footer.description': 'Desarrollador Full Stack apasionado por crear experiencias web excepcionales.',
    'footer.made': 'Hecho con',
    'footer.by': 'por Leandro Martínez',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Hi, I\'m a',
    'hero.role': 'Full Stack Developer',
    'hero.role2': 'Frontend Oriented Developer',
    'hero.description': 'I\'m passionate about crafting high-impact web experiences. I specialize in React && Next.js, Express.js && Nest.js, TypeScript, and modern tools for building fast and scalable applications.',
    'hero.hire': 'Hire Me',
    'hero.download': 'Download CV',

    // About
    'about.title': 'About',
    'about.me': 'Me',
    'about.subtitle': 'Learn about my journey and passion for web development',
    'about.story': 'My Story',
    'about.description1': 'I\'m a frontend developer passionate about creating unique and functional web experiences. I specialize in React, TypeScript and modern technologies to build applications that not only look amazing, but also offer an exceptional user experience.',
    'about.description2': 'My focus is on writing clean, maintainable and scalable code. I\'m always learning new technologies and best practices to stay up to date with the latest web development trends.',
    'about.description3': 'I\'m looking for my first professional opportunity where I can apply my knowledge, contribute to team success and continue growing as a developer.',
    'about.projects': 'Completed Projects',
    'about.technologies': 'Mastered Technologies',
    'about.clients': 'Satisfied Clients',
    'about.certifications': 'Certifications',

    // Skills
    'skills.title': 'Tech',
    'skills.tech': 'Stack',
    'skills.subtitle': 'Technologies I master to create innovative solutions',
    'skills.featured.title': 'My Specialties',
    'skills.featured.subtitle': 'The technologies I focus on primarily',
    'skills.featured.focus': 'Main Focus',
    'skills.featured.proficiency': 'Proficiency',
    'skills.slider.title': 'Technologies I use daily',
    'skills.slider.subtitle': 'Tools I work with in my projects',

    // Projects
    'projects.title': 'My',
    'projects.projects': 'Projects',
    'projects.subtitle': 'A selection of my best work that demonstrates my skills',
    'projects.featured': 'Featured Projects',
    'projects.others': 'Other Projects',
    'projects.code': 'Code',
    'projects.demo': 'Demo',

    // Contact
    'contact.title': 'Let\'s Work',
    'contact.together': 'Together!',
    'contact.subtitle': 'Have a project in mind? I\'d love to hear about it and help you make it a reality.',
    'contact.info': 'Contact Information',
    'contact.social': 'Follow Me',
    'contact.cta.title': 'Ready to start?',
    'contact.cta.description': 'Send me a message and let\'s talk about your next project.',
    'contact.cta.email': 'Send Email',
    'contact.form.title': 'Send Me a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.subject': 'What do you want to talk about?',
    'contact.form.placeholder.message': 'Tell me about your project...',
    'contact.email': 'leandromartinez.devl@gmail.com',
    'contact.phone': '+598 (95) 220-063',
    'contact.location': 'Montevideo, Uruguay',

    // Footer
    'footer.description': 'Frontend Developer passionate about creating exceptional web experiences.',
    'footer.made': 'Made with',
    'footer.by': 'by a future developer',
    'footer.rights': 'All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};