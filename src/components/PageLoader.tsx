import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
  onComplete: () => void;
}

export const PageLoader = ({ onComplete }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Progress bar + counter fill
    tl.fromTo(
      barRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.6, ease: 'power2.inOut' },
      0
    )
      .fromTo(
        counterRef.current,
        { textContent: '0' },
        {
          textContent: '100',
          duration: 1.6,
          ease: 'power2.inOut',
          snap: { textContent: 1 },
          onUpdate() {
            if (counterRef.current) {
              counterRef.current.textContent =
                Math.round(Number(counterRef.current.textContent)) + '%';
            }
          },
        },
        0
      )
      // Name reveal
      .fromTo(
        textRef.current,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        0.3
      )
      // Wipe panels out
      .to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.85,
          ease: 'power4.inOut',
        },
        1.8
      );
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0e0e0e]"
    >
      {/* Name */}
      <div className="overflow-hidden mb-12">
        <span
          ref={textRef}
          className="block font-headline text-2xl font-black tracking-[0.35em] uppercase text-[#e5e2e1]"
          style={{ opacity: 0 }}
        >
          LEANDRO_MARTÍNEZ
        </span>
      </div>

      {/* Progress track */}
      <div className="w-64 h-[1px] bg-[#e5e2e1]/10 relative overflow-hidden">
        <div
          ref={barRef}
          className="absolute inset-0 bg-gradient-to-r from-primary to-secondary origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* Counter */}
      <span
        ref={counterRef}
        className="mt-4 font-label text-xs tracking-[0.3em] text-[#e5e2e1]/40"
      >
        0%
      </span>
    </div>
  );
};

export default PageLoader;
