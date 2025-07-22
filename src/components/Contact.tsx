import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import emailjs from '@emailjs/browser';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
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

  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(form.current!);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !message) {
      enqueueSnackbar('Por favor, completa todos los campos correctamente.', { variant: 'warning' });
      return;
    }
    try {
      if (form.current) {
        emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
            publicKey: PUBLIC_KEY,
          })
          .then(
            () => {
              enqueueSnackbar('¡Mensaje enviado! Te contactaré pronto.', { variant: 'success' });
            },
            (error) => {
              console.error('Error al enviar el correo:', error);
              enqueueSnackbar('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.', { variant: 'error' });
            },
          );
        form.current.reset();
      } else {
        enqueueSnackbar('Error al enviar el mensaje. Verifique que todos los campos esten llenos.', { variant: 'error' });
        return;
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      enqueueSnackbar('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.', { variant: 'error' });
      return;

    }

  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: t('contact.email'),
      href: `mailto:${t('contact.email')}`
    },
    {
      icon: Phone,
      label: t('contact.form.name'),
      value: t('contact.phone'),
      href: `tel:${t('contact.phone')}`
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: t('contact.location'),
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      label: 'GitHub',
      href: 'https://github.com/leamartinez1707',
      color: 'hover:text-gray-800'
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/leandromartinezuy/',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/59895220063',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contacto" ref={sectionRef} className="lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 mb-10">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t('contact.title')} <span className="gradient-text">{t('contact.together')}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {t('contact.info')}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-violet-600">
                        <info.icon size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="text-gray-800 font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {t('contact.social')}
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-gray-600 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-2">{t('contact.cta.title')}</h4>
                <p className="mb-4 opacity-90">
                  {t('contact.cta.description')}
                </p>
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="inline-flex items-center gap-2 bg-white text-violet-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  <Mail size={18} />
                  {t('contact.cta.email')}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {t('contact.form.title')}
              </h3>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                      placeholder={t('contact.form.placeholder.name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                      placeholder={t('contact.form.placeholder.email')}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder={t('contact.form.placeholder.message')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      />
    </section>
  );
};

export default Contact;