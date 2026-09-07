import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Thin scroll-progress bar pinned to the top of the viewport.
 * Uses ScrollTrigger's scrub for silky performance at any frame rate.
 */
export const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tween = gsap.fromTo(
      barRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0,
        },
      }
    );

    // Webfonts (and images without reserved space) can resize the page after
    // this ScrollTrigger's "end" was first measured — refresh once they've
    // settled so the bar still reaches 100% exactly at the real bottom.
    document.fonts?.ready.then(() => ScrollTrigger.refresh()).catch(() => {});

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === document.documentElement) st.kill();
      });
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[150] h-[2px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-primary to-secondary origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};

export default ScrollProgress;
