import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

// Elements revealed on scroll. Visibility is driven by CSS (see index.css,
// "scroll reveal system") and toggled with a single IntersectionObserver —
// no ScrollTrigger, no cached pixel offsets, so nothing goes stale when
// webfonts swap in or images load and shift the page layout.
const REVEAL_SELECTOR =
  '[data-gsap-reveal], [data-gsap-item], [data-gsap-heading], [data-gsap-media], [data-gsap-skillbar]';

/**
 * Animate a numeric counter from 0 to its target value.
 * The target is read from the element's textContent ("20+", "3+", etc.).
 */
function animateCounter(element: HTMLElement) {
  const raw = (element.textContent ?? '').trim();
  const suffix = raw.replace(/[0-9]/g, '');
  const target = parseInt(raw, 10);
  if (isNaN(target)) return;

  const obj = { val: 0 };
  gsap.to(obj, {
    val: target,
    duration: 1.6,
    ease: 'power2.out',
    onUpdate() {
      element.textContent = Math.round(obj.val) + suffix;
    },
  });
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export const useLandingGsap = (enabled: boolean) => {
  const scope = useRef<HTMLDivElement>(null);

  // ── Entrance animation (nav + hero + magnetic buttons) ─────────────────────
  // Plays once on load. Nothing here depends on scroll position, so it can't
  // go out of sync the way ScrollTrigger-based reveals could.
  useGSAP(
    () => {
      if (!enabled) return;

      gsap.set(scope.current, { visibility: 'visible' });

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      gsap.from('[data-gsap-nav]', {
        y: -28,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'expo.out',
        delay: 0.05,
      });

      gsap
        .timeline({ defaults: { ease: 'power3.out' }, delay: 0.12 })
        .from('[data-gsap-hero-badge]', { y: 24, autoAlpha: 0, duration: 0.65 }, 0)
        .from('[data-gsap-hero-title]', { y: 36, autoAlpha: 0, duration: 0.85 }, 0.1)
        .from('[data-gsap-hero-subtitle]', { y: 32, autoAlpha: 0, duration: 0.75 }, 0.45)
        .from('[data-gsap-hero-cta]', { y: 24, autoAlpha: 0, duration: 0.65, stagger: 0.14 }, 0.6)
        .from('[data-gsap-hero-codecard]', { x: 36, autoAlpha: 0, duration: 0.9 }, 0.65)
        .from('[data-gsap-stat]', { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.09 }, 0.75);

      // Magnetic CTA buttons — desktop / fine-pointer only.
      const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const magneticCleanups: (() => void)[] = [];

      if (!isCoarsePointer) {
        gsap.utils.toArray<HTMLElement>('[data-gsap-magnetic]').forEach((btn) => {
          const onMove = (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.28;
            const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.28;
            gsap.to(btn, { x: dx, y: dy, duration: 0.35, ease: 'power2.out' });
          };
          const onLeave = () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
          };

          btn.addEventListener('mousemove', onMove);
          btn.addEventListener('mouseleave', onLeave);
          magneticCleanups.push(() => {
            btn.removeEventListener('mousemove', onMove);
            btn.removeEventListener('mouseleave', onLeave);
          });
        });
      }

      return () => magneticCleanups.forEach((fn) => fn());
    },
    { scope, dependencies: [enabled], revertOnUpdate: false }
  );

  // ── Scroll reveals ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = scope.current;
    if (!root) return;

    const revealEls = root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
    const counterEls = root.querySelectorAll<HTMLElement>('[data-gsap-stat-number]');

    let revealObserver: IntersectionObserver | undefined;
    let counterObserver: IntersectionObserver | undefined;

    if (revealEls.length) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            revealObserver?.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
      );
      revealEls.forEach((el) => revealObserver?.observe(el));
    }

    if (counterEls.length) {
      counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target as HTMLElement);
            counterObserver?.unobserve(entry.target);
          });
        },
        { threshold: 0.4 }
      );
      counterEls.forEach((el) => counterObserver?.observe(el));
    }

    return () => {
      revealObserver?.disconnect();
      counterObserver?.disconnect();
    };
  }, [enabled]);

  return scope;
};
