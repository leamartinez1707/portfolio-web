import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Splits an element's textContent into word-spans in-place.
 * Returns an array of the created span elements.
 */
function splitWords(element: HTMLElement): HTMLSpanElement[] {
  const original = element.textContent ?? '';
  const words = original.split(/(\s+)/);
  element.textContent = '';
  element.style.overflow = 'hidden';

  const spans: HTMLSpanElement[] = [];
  words.forEach((chunk) => {
    if (/^\s+$/.test(chunk)) {
      element.appendChild(document.createTextNode(chunk));
      return;
    }
    const outer = document.createElement('span');
    outer.style.display = 'inline-block';
    outer.style.overflow = 'hidden';
    outer.style.verticalAlign = 'bottom';

    const inner = document.createElement('span');
    inner.style.display = 'inline-block';
    inner.textContent = chunk;

    outer.appendChild(inner);
    element.appendChild(outer);
    spans.push(inner);
  });
  return spans;
}

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
    duration: 1.8,
    ease: 'power2.out',
    onUpdate() {
      element.textContent = Math.round(obj.val) + suffix;
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      once: true,
    },
  });
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export const useLandingGsap = (enabled: boolean) => {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!enabled) {
        return;
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const mm = gsap.matchMedia();

      // ── Nav slide-in ────────────────────────────────────────────────────────
      gsap.from('[data-gsap-nav]', {
        y: -28,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'expo.out',
        delay: 0.05,
      });

      // ── Hero intro timeline ─────────────────────────────────────────────────
      const heroTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.12,
      });

      heroTl
        .from('[data-gsap-hero-badge]', { y: 24, autoAlpha: 0, duration: 0.65 }, 0)
        .from('[data-gsap-hero-subtitle]', { y: 32, autoAlpha: 0, duration: 0.75 }, 0.45)
        .from('[data-gsap-hero-cta]', { y: 24, autoAlpha: 0, duration: 0.65, stagger: 0.14 }, 0.6)
        .from('[data-gsap-hero-codecard]', { x: 36, autoAlpha: 0, duration: 0.9 }, 0.65)
        .from('[data-gsap-stat]', { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.09 }, 0.75);

      // Hero title — word-by-word reveal
      const heroTitleEl = document.querySelector<HTMLElement>('[data-gsap-hero-title]');
      if (heroTitleEl) {
        // Fallback simple reveal — word split not needed on element with nested spans
        gsap.from(heroTitleEl, { y: 36, autoAlpha: 0, duration: 0.85, ease: 'power3.out' });
      }

      // ── Stat counters ───────────────────────────────────────────────────────
      const statNumbers = gsap.utils.toArray<HTMLElement>('[data-gsap-stat-number]');
      statNumbers.forEach(animateCounter);

      // ── Scroll reveal ───────────────────────────────────────────────────────
      const reveals = gsap.utils.toArray<HTMLElement>('[data-gsap-reveal]');
      reveals.forEach((el, i) => {
        gsap.from(el, {
          y: 56,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: (i % 3) * 0.06,
          scrollTrigger: {
            trigger: el,
            start: 'top 86%',
            once: true,
          },
        });
      });

      // ── Section heading word-split on scroll ────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap-heading]').forEach((heading) => {
        const lines = heading.querySelectorAll<HTMLElement>('[data-gsap-line]');

        if (lines.length > 0) {
          gsap.from(lines, {
            yPercent: 110,
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power4.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: heading,
              start: 'top 88%',
              once: true,
            },
          });
          return;
        }

        const words = splitWords(heading);
        gsap.from(words, {
          y: '110%',
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power4.out',
          stagger: 0.045,
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            once: true,
          },
        });
      });

      // ── Skill bars ──────────────────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap-skillbar]').forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: { trigger: bar, start: 'top 90%', once: true },
          }
        );
      });

      // ── Media reveal (cinematic) ────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap-media]').forEach((media) => {
        gsap.from(media, {
          clipPath: 'inset(18% 0 20% 0 round 0px)',
          autoAlpha: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: media,
            start: 'top 84%',
            once: true,
          },
        });
      });

      // ── Stagger groups ──────────────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap-stagger]').forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>('[data-gsap-item]');
        if (!items.length) return;

        gsap.from(items, {
          y: 40,
          autoAlpha: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: group,
            start: 'top 86%',
            once: true,
          },
        });
      });

      // ── Float decoration ────────────────────────────────────────────────────
      const floatTweens = gsap.utils
        .toArray<HTMLElement>('[data-gsap-float]')
        .map((el, i) =>
          gsap.to(el, {
            y: i % 2 === 0 ? 18 : -18,
            duration: 3.8 + i * 0.25,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        );

      // ── Magnetic CTA buttons ────────────────────────────────────────────────
      const magneticCleanups: (() => void)[] = [];

      gsap.utils
        .toArray<HTMLElement>('[data-gsap-magnetic]')
        .forEach((btn) => {
          const onMove = (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) * 0.28;
            const dy = (e.clientY - cy) * 0.28;
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

      // ── Subtle tilt cards ───────────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-gsap-tilt]').forEach((card) => {
        const onMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * -4;

          gsap.to(card, {
            rotateX: y,
            rotateY: x,
            transformPerspective: 900,
            transformOrigin: 'center',
            duration: 0.35,
            ease: 'power2.out',
          });
        };

        const onLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        };

        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);

        magneticCleanups.push(() => {
          card.removeEventListener('mousemove', onMove);
          card.removeEventListener('mouseleave', onLeave);
        });
      });

      // ── Parallax (desktop only) ─────────────────────────────────────────────
      mm.add('(min-width: 1024px)', () => {
        const parallaxTweens = gsap.utils
          .toArray<HTMLElement>('[data-gsap-parallax]')
          .map((el) =>
            gsap.fromTo(
              el,
              { yPercent: -8 },
              {
                yPercent: 8,
                ease: 'none',
                scrollTrigger: {
                  trigger: el,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.6,
                },
              }
            )
          );
        return () => parallaxTweens.forEach((t) => t.kill());
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        floatTweens.forEach((t) => t.kill());
        magneticCleanups.forEach((fn) => fn());
        mm.revert();
      };
    },
    { scope, dependencies: [enabled], revertOnUpdate: true }
  );

  return scope;
};