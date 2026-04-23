import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Custom magnetic cursor (desktop only – hidden on touch devices).
 * - Inner dot follows mouse exactly with quickSetter for 60fps.
 * - Outer halo lags behind with ease for a fluid feel.
 * - Expands + blends when hovering links/buttons.
 */
export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply on pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = dotRef.current!;
    const halo = haloRef.current!;

    // Hide native cursor
    document.documentElement.style.cursor = 'none';

    const setDotX = gsap.quickSetter(dot, 'x', 'px');
    const setDotY = gsap.quickSetter(dot, 'y', 'px');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let haloX = mouseX;
    let haloY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let rafId: number;
    const tick = () => {
      setDotX(mouseX);
      setDotY(mouseY);

      haloX = lerp(haloX, mouseX, 0.1);
      haloY = lerp(haloY, mouseY, 0.1);
      gsap.set(halo, { x: haloX, y: haloY });

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // Hover state on interactive elements
    const interactiveSelector = 'a, button, [role="button"], input, textarea, label';

    const onEnter = () => {
      gsap.to(dot, { scale: 0, duration: 0.25, ease: 'power2.out' });
      gsap.to(halo, {
        scale: 2.2,
        borderColor: 'rgba(34, 211, 238, 0.95)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const onLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.25, ease: 'power2.out' });
      gsap.to(halo, {
        scale: 1,
        borderColor: 'rgba(34, 211, 238, 0.5)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Use event delegation from the document root
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(interactiveSelector)) onEnter();
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(interactiveSelector)) onLeave();
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.documentElement.style.cursor = '';
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[300] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary will-change-transform"
        aria-hidden="true"
      />
      {/* Outer halo */}
      <div
        ref={haloRef}
        className="fixed top-0 left-0 z-[300] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-primary/50 will-change-transform"
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
