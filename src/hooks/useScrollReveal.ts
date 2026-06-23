"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export interface ScrollRevealOptions {
  /** Vertical offset in px (default: 30) */
  y?: number;
  /** Stagger delay between children in seconds (default: 0.1) */
  stagger?: number;
  /** Animation duration in seconds (default: 0.7) */
  duration?: number;
  /** CSS selector for children to animate. If omitted, direct children are used. */
  childSelector?: string;
  /** ScrollTrigger start position (default: "top 85%") */
  start?: string;
}

/**
 * Reusable scroll-triggered fade-in + translateY reveal.
 *
 * Animates the container's matched children when they enter the viewport.
 * Uses gsap.context() for automatic cleanup. Respects prefers-reduced-motion.
 *
 * UX rationale: Sections appearing from nothing feel jarring. A subtle
 * upward slide + fade gives users a sense of spatial progression and
 * draws attention to newly visible content.
 */
export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {}
): void {
  const prefersReducedMotion = useReducedMotion();

  const {
    y = 30,
    stagger = 0.1,
    duration = 0.7,
    childSelector,
    start = "top 85%",
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const targets = childSelector
        ? container.querySelectorAll(childSelector)
        : container.children;

      if (!targets || targets.length === 0) return;

      gsap.set(targets, {
        opacity: 0,
        y,
        force3D: true,
      });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: container,
          start,
          toggleActions: "play none none none",
          once: true,
        },
        onComplete: () => {
          // Clean up will-change after animation finishes
          gsap.set(targets, { clearProps: "willChange" });
        },
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef, prefersReducedMotion, y, stagger, duration, childSelector, start]);
}
