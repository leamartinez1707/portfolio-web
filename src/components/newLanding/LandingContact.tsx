import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { enqueueSnackbar, SnackbarProvider } from 'notistack';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const LandingContact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !message) {
      enqueueSnackbar('Please fill in all fields.', { variant: 'warning' });
      return;
    }

    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY });
      enqueueSnackbar('Message sent! I\'ll get back to you soon.', { variant: 'success' });
      form.current.reset();
    } catch {
      enqueueSnackbar('Failed to send. Please try again or email me directly.', { variant: 'error' });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SnackbarProvider maxSnack={3} />
      <section id="contact" className="py-40 px-8 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-secondary"></div>
              <span className="font-label text-secondary uppercase tracking-[0.3em] text-xs">Get In Touch</span>
            </div>
            <h2 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none text-on-surface mb-6">
              LET'S<br /><span className="text-primary italic">WORK</span><br />TOGETHER.
            </h2>
            <p className="max-w-xl text-on-surface-variant text-lg leading-relaxed font-body">
              Open to full-time positions, freelance projects, and technical collaborations. Let's build something great.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-4 space-y-10">
              <div>
                <h3 className="font-headline text-xl font-bold mb-6 uppercase text-on-surface">Contact Details</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:leandromartinez.dev@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 shrink-0 bg-surface-container-low flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/30 transition-colors">
                      <span className="material-symbols-outlined text-primary text-sm" data-icon="mail">mail</span>
                    </div>
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Email</p>
                      <p className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">leandromartinez.dev@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/59895220063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 shrink-0 bg-surface-container-low flex items-center justify-center border border-outline-variant/10 group-hover:border-secondary/30 transition-colors">
                      <span className="material-symbols-outlined text-secondary text-sm" data-icon="phone">phone</span>
                    </div>
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">WhatsApp</p>
                      <p className="font-body text-sm text-on-surface group-hover:text-secondary transition-colors">+598 (95) 220-063</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 bg-surface-container-low flex items-center justify-center border border-outline-variant/10">
                      <span className="material-symbols-outlined text-outline text-sm" data-icon="location_on">location_on</span>
                    </div>
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Location</p>
                      <p className="font-body text-sm text-on-surface">Montevideo, Uruguay</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h3 className="font-headline text-xl font-bold mb-6 uppercase text-on-surface">Find Me Online</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/leamartinez1707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors border border-outline-variant/20 px-4 py-3 hover:border-primary/30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/leandromartinezuy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors border border-outline-variant/20 px-4 py-3 hover:border-primary/30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Availability status */}
              <div className="bg-surface-container-low p-6 border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></div>
                  <span className="font-label text-xs uppercase tracking-widest text-secondary">Available Now</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Open to full-time roles and select freelance projects. Response within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-8 bg-surface-container-low p-10 border border-outline-variant/10">
              <h3 className="font-headline text-2xl font-bold mb-8 uppercase text-on-surface">Send a Message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-surface-container-high border border-outline-variant/20 px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      required
                      className="w-full bg-surface-container-high border border-outline-variant/20 px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Job opportunity / Project collaboration / ..."
                    className="w-full bg-surface-container-high border border-outline-variant/20 px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    className="w-full bg-surface-container-high border border-outline-variant/20 px-4 py-3 font-body text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto px-12 py-4 bg-primary-container text-on-primary-container font-label font-bold uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingContact;
