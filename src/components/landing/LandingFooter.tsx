import { type Language } from '../../libs/i18n';

type LandingFooterProps = {
  language: Language;
};

export const LandingFooter = ({ language: _language }: LandingFooterProps) => {

  return (
    <footer data-gsap-reveal className="w-full py-12 sm:py-20 px-4 sm:px-8 bg-[#0e0e0e] border-t border-[#464555]/15">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span className="font-headline text-base sm:text-lg font-black tracking-tighter text-[#e5e2e1]/80">LEANDRO MARTÍNEZ</span>
            <span className="font-label text-[10px] sm:text-xs tracking-widest uppercase text-[#e5e2e1]/30">
              © 2026 Leandro Martínez
            </span>
          </div>
          <div className="flex items-center gap-6 sm:gap-10">
            <a
              href="https://github.com/leamartinez1707"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-[10px] sm:text-xs tracking-widest uppercase text-[#e5e2e1]/40 hover:text-[#e5e2e1] hover:tracking-[0.2em] transition-all duration-500"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/leandromartinezuy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-[10px] sm:text-xs tracking-widest uppercase text-[#e5e2e1]/40 hover:text-[#e5e2e1] hover:tracking-[0.2em] transition-all duration-500"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/59895220063"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-[10px] sm:text-xs tracking-widest uppercase text-[#e5e2e1]/40 hover:text-[#e5e2e1] hover:tracking-[0.2em] transition-all duration-500"
            >
              WhatsApp
            </a>
            <a
              href="mailto:leandromartinez.dev@gmail.com"
              className="font-label text-[10px] sm:text-xs tracking-widest uppercase text-secondary hover:tracking-[0.2em] transition-all duration-500"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
