export const LandingFooter = () => {
  return (
    <footer data-gsap-reveal className="w-full py-20 px-8 bg-[#0e0e0e] border-t border-[#464555]/15">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-headline text-lg font-black tracking-tighter text-[#e5e2e1]/80">LM.DEV</span>
            <span className="font-label text-xs tracking-widest uppercase text-[#e5e2e1]/30">
              © 2026 Leandro Martínez. Built with React &amp; TypeScript.
            </span>
          </div>
          <div className="flex items-center gap-10">
            <a
              href="https://github.com/leamartinez1707"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-xs tracking-widest uppercase text-[#e5e2e1]/40 hover:text-[#e5e2e1] hover:tracking-[0.2em] transition-all duration-500"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/leandromartinezuy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-xs tracking-widest uppercase text-[#e5e2e1]/40 hover:text-[#e5e2e1] hover:tracking-[0.2em] transition-all duration-500"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/59895220063"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-xs tracking-widest uppercase text-[#e5e2e1]/40 hover:text-[#e5e2e1] hover:tracking-[0.2em] transition-all duration-500"
            >
              WhatsApp
            </a>
            <a
              href="mailto:leandromartinez.dev@gmail.com"
              className="font-label text-xs tracking-widest uppercase text-[#4edea3] hover:tracking-[0.2em] transition-all duration-500"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
