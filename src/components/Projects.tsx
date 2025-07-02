import { useEffect, useRef, useState } from 'react';
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
        title: 'Chatbot con IA para E-commerce',
        description: 'Chatbot inteligente que asiste a los clientes en la compra de productos, responde preguntas frecuentes y recomienda artículos.',
        image: '/chatbot_photo.png',
        technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/leamartinez1707/IA-Catalog-Chatbot',
        demo: 'https://ia-catalog-chatbot.vercel.app/',
        featured: true
      },
      {
        title: 'SaludNet - Plataforma de Telemedicina',
        description: 'Plataforma de telemedicina que conecta pacientes con médicos, permite agendar citas, realizar consultas en línea y gestionar historiales médicos.',
        image: '/saludnet_screenshot.png',
        technologies: ['React.js', 'Node.js', 'Express.js', 'API REST', 'MongoDB', 'Tailwind CSS', 'Context API', 'Vercel', 'Render'],
        github: 'https://github.com/No-Country-simulation/c20-37-n-node-react',
        demo: 'https://saludnet.vercel.app/',
        featured: false
      },
      {
        title: 'CVBoost - Optimizador de CV con IA',
        description: 'Landing page que utiliza IA para mejorar currículums. Permite a los usuarios subir su CV en texto y recibir sugerencias de mejoras, basadas en las mejores prácticas en base al puesto solicitado.',
        image: '/cvboost_screenshot.png',
        technologies: ['React.js', 'JavaScript', 'OpenAI API', 'Axios', 'PDFjs', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/leamartinez1707/cv_boost',
        demo: 'https://cv-ai-boost.vercel.app/',
        featured: true
      },
      {
        title: 'FastFood - Gestión de Restaurantes',
        description: 'Aplicación para restaurantes de comida rápida que permite gestionar pedidos en tiempo real, administración de menú y seguimiento de pedidos. Dashboard para administración y control de productos.',
        image: '/fastfood_screenshot.png',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'MongoDB', 'SWR', 'Tailwind CSS', 'Zustand', 'Cloudinary', 'Vercel'],
        github: 'https://github.com/leamartinez1707/next-tienda',
        demo: 'https://fastfooduy.vercel.app/order/cafe',
        featured: true
      },
      {
        title: 'UpTask - Gestión de Proyectos',
        description: 'Aplicación de gestión de proyectos estilo Kanban que permite crear, asignar y gestionar tareas en equipo. Incluye autenticación, drag and drop de tareas y un sistema de comentarios.',
        image: '/uptask_screenshot.png',
        technologies: ['React.js', 'React Query', 'TypeScript', 'Drag and Drop Kit', 'Tailwind CSS', 'Chakra UI', 'Express.js', 'MongoDB', 'JWT', 'NodeMailer', 'Vercel'],
        github: 'https://github.com/leamartinez1707/mytasks-frontend',
        demo: 'https://uptask-projectmanagement-phi.vercel.app/auth/login',
        featured: true
      },
      {
        title: 'TodoMuebles | Landing Page de Carpintería',
        description: 'Landing page para una carpintería que ofrece muebles personalizados. Incluye catálogo de productos y formulario de contacto.',
        image: '/todo_muebles_screenshot.png',
        technologies: ['Next.js', 'Motion', 'HeadlessUi', 'NodeMailer', 'Tailwind CSS', 'Vercel'],
        github: '#',
        demo: 'https://todomueblesuy.vercel.app/home',
        featured: false
      }
    ],
    en: [
      {
        title: 'AI Chatbot for E-commerce',
        description: 'Intelligent chatbot that assists customers with product purchases, answers FAQs, and recommends items.',
        image: '/chatbot_photo.png',
        technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/leamartinez1707/IA-Catalog-Chatbot',
        demo: 'https://ia-catalog-chatbot.vercel.app/',
        featured: true
      },
      {
        title: 'SaludNet - Telemedicine Platform',
        description: 'Telemedicine platform connecting patients with doctors, allowing appointment scheduling, online consultations, and medical record management.',
        image: '/saludnet_screenshot.png',
        technologies: ['React.js', 'Node.js', 'Express.js', 'REST API', 'MongoDB', 'Tailwind CSS', 'Context API', 'Vercel', 'Render'],
        github: 'https://github.com/No-Country-simulation/c20-37-n-node-react',
        demo: 'https://saludnet.vercel.app/',
        featured: false
      },
      {
        title: 'CVBoost - AI Resume Optimizer',
        description: 'Landing page that uses AI to improve resumes. Users can upload their CV as text and receive suggestions based on best practices for the desired position.',
        image: '/cvboost_screenshot.png',
        technologies: ['React.js', 'JavaScript', 'OpenAI API', 'Axios', 'PDFjs', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/leamartinez1707/cv_boost',
        demo: 'https://cv-ai-boost.vercel.app/',
        featured: true
      },
      {
        title: 'FastFood - Restaurant Management',
        description: 'App for fast food restaurants to manage real-time orders, menu administration, and order tracking. Includes dashboard for product control.',
        image: '/fastfood_screenshot.png',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'MongoDB', 'SWR', 'Tailwind CSS', 'Zustand', 'Cloudinary', 'Vercel'],
        github: 'https://github.com/leamartinez1707/next-tienda',
        demo: 'https://fastfooduy.vercel.app/order/cafe',
        featured: true
      },
      {
        title: 'UpTask - Project Management',
        description: 'Kanban-style project management app to create, assign, and manage team tasks. Includes authentication, drag and drop, and a comment system.',
        image: '/uptask_screenshot.png',
        technologies: ['React.js', 'React Query', 'TypeScript', 'Drag and Drop Kit', 'Tailwind CSS', 'Chakra UI', 'Express.js', 'MongoDB', 'JWT', 'NodeMailer', 'Vercel'],
        github: 'https://github.com/leamartinez1707/mytasks-frontend',
        demo: 'https://uptask-projectmanagement-phi.vercel.app/auth/login',
        featured: true
      },
      {
        title: 'TodoMuebles | Carpentry Landing Page',
        description: 'Landing page for a carpentry business offering custom furniture. Includes product catalog and contact form.',
        image: '/todo_muebles_screenshot.png',
        technologies: ['Next.js', 'Motion', 'HeadlessUi', 'NodeMailer', 'Tailwind CSS', 'Vercel'],
        github: '#',
        demo: 'https://todomueblesuy.vercel.app/home',
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
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
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
                        target='_blank'
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                      >
                        <Github size={20} />
                        {t('projects.code')}
                      </a>
                      <a
                        target='_blank'
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
                        target='_blank'
                        href={project.github}
                        className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        target='_blank'
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