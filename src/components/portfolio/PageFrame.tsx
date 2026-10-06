import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { usePreferences } from "@/context/PreferencesContext";
import { SiteFooter } from "./SiteFooter";
import gsap from "gsap";

type PageFrameProps = {
  children: ReactNode;
  dark?: boolean;
  includeFooter?: boolean;
};

export function PageFrame({
  children,
  dark = false,
  includeFooter = true,
}: PageFrameProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  const { language } = usePreferences();

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      // Respeita a preferência por movimento reduzido.
      if (reduceMotion) return;

      const revealTargets = gsap.utils.toArray<HTMLElement>(
        "[data-page-reveal]",
        content,
      );

      const timeline = gsap.timeline({
        defaults: {
          overwrite: "auto",
        },
      });

      timeline.fromTo(
        content,
        {
          autoAlpha: 0,
          y: 12,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.24,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        },
      );

      if (revealTargets.length > 0) {
        timeline.fromTo(
          revealTargets,
          {
            autoAlpha: 0,
            y: 12,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.26,
            stagger: 0.045,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          },
          0.04,
        );
      }
    }, content);

    return () => {
      context.revert();
    };
  }, [pathname, language]);

  return (
    <main
      className={
        dark
          ? "min-h-screen bg-ink text-primary-foreground"
          : "min-h-screen bg-background text-foreground"
      }
    >
      <div ref={contentRef} key={`${pathname}-${language}`}>
        {children}
      </div>

      {includeFooter && <SiteFooter />}
    </main>
  );
}