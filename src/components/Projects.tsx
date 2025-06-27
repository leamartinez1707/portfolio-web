import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = {
    es: [
      {
        title: 'E-commerce Moderno',
        description: 'Plataforma de comercio electrónico completa con carrito de compras, autenticación y pagos integrados.',
        image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
        github: '#',
        demo: '#',
        featured: true
      },
      {
        title: 'Dashboard Analytics',
        description: 'Panel de control interactivo con gráficos en tiempo real y métricas de rendimiento.',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Chart.js', 'Tailwind CSS', 'API REST'],
        github: '#',
        demo: '#',
        featured: true
      },
      {
        title: 'App de Tareas',
        description: 'Aplicación de gestión de tareas con drag & drop, categorías y sincronización en tiempo real.',
        image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'TypeScript', 'Firebase', 'React DnD'],
        github: '#',
        demo: '#',
        featured: false
      },
      {
        title: 'Portfolio Personal',
        description: 'Sitio web personal responsive con animaciones suaves y diseño minimalista.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        github: '#',
        demo: '#',
        featured: false
      },
      {
        title: 'Chat en Tiempo Real',
        description: 'Aplicación de mensajería instantánea con salas de chat y notificaciones push.',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
        github: '#',
        demo: '#',
        featured: false
      },
      {
        title: 'Weather App',
        description: 'Aplicación del clima con pronóstico de 7 días, geolocalización y mapas interactivos.',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'OpenWeather API', 'Leaflet', 'CSS3'],
        github: '#',
        demo: '#',
        featured: false
      }
    ],
    en: [
      {
        title: 'Modern E-commerce',
        description: 'Complete e-commerce platform with shopping cart, authentication and integrated payments.',
        image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
        github: '#',
        demo: '#',
        featured: true
      },
      {
        title: 'Analytics Dashboard',
        description: 'Interactive control panel with real-time charts and performance metrics.',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Chart.js', 'Tailwind CSS', 'REST API'],
        github: '#',
        demo: '#',
        featured: true
      },
      {
        title: 'Task Management App',
        description: 'Task management application with drag & drop, categories and real-time synchronization.',
        image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'TypeScript', 'Firebase', 'React DnD'],
        github: '#',
        demo: '#',
        featured: false
      },
      {
        title: 'Personal Portfolio',
        description: 'Responsive personal website with smooth animations and minimalist design.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        github: '#',
        demo: '#',
        featured: false
      },
      {
        title: 'Real-time Chat',
        description: 'Instant messaging application with chat rooms and push notifications.',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
        github: '#',
        demo: '#',
        featured: false
      },
      {
        title: 'Weather App',
        description: 'Weather application with 7-day forecast, geolocation and interactive maps.',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'OpenWeather API', 'Leaflet', 'CSS3'],
        github: '#',
        demo: '#',
        featured: false
      }
    ]
  };

  const currentProjects = projects[language];
  const featuredProjects = currentProjects.filter(project => project.featured);
  const otherProjects = currentProjects.filter(project => !project.featured);

  return (
    <section id="proyectos" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t('projects.title')} <span className="text-blue-600">{t('projects.projects')}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">{t('projects.featured')}</h3>
            <div className="grid lg:grid-cols-2 gap-8">
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
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                      >
                        <Github size={20} />
                        {t('projects.code')}
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
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
            <h3 className="text-2xl font-bold text-gray-800 mb-8">{t('projects.others')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className={`group bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : ''
                    }`}
                  style={{ animationDelay: `${(index + 2) * 200}ms` }}
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <ArrowRight size={18} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
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

export default Projects;