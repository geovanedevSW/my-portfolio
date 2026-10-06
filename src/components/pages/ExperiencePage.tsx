import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePreferences } from "@/context/PreferencesContext";
import { PageFrame } from "../portfolio/PageFrame";

gsap.registerPlugin(ScrollTrigger);

export function ExperiencePage() {
  const { copy, language } = usePreferences();

  const timelineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const timeline = timelineRef.current;
    const progressLine = progressLineRef.current;

    if (!timeline || !progressLine) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        progressLine,
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 70%",
            end: "clamp(bottom 70%)",
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => {
      media.revert();
    };
  }, [language, copy.experience.items]);

  return (
    <PageFrame dark>
      <section className="section-shell min-h-screen pb-24 pt-32">
        <div className="grid gap-8 lg:grid-cols-12">
          <p
            data-page-reveal
            className="section-kicker text-mist lg:col-span-3"
          >
            {copy.experience.kicker}
          </p>

          <h1
            data-page-reveal
            className="font-display text-4xl font-bold sm:text-6xl lg:col-span-8"
          >
            {copy.experience.title}
          </h1>
        </div>

        <div ref={timelineRef} className="relative mt-16 sm:mt-20">
          {/* Linha de fundo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[7px] top-0 w-px bg-primary-foreground/20 md:left-[30%]"
          />

          {/* Linha preenchida pelo scroll */}
          <div
            ref={progressLineRef}
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[7px] top-0 w-px origin-top bg-mist md:left-[30%]"
          />

          {copy.experience.items.map((item, index) => (
            <article
              data-page-reveal
              key={`${item.date}-${item.role}`}
              className="relative grid gap-3 border-b border-primary-foreground/15 py-8 pl-9 first:pt-0 md:grid-cols-[30%_1fr] md:gap-12 md:pl-0"
            >
              <span
                aria-hidden="true"
                className={`absolute left-[2px] h-3 w-3 rounded-full border-2 border-ink bg-mist md:left-[calc(30%-5px)] ${
                  index === 0 ? "top-1" : "top-9"
                }`}
              />

              <p className="text-xs font-bold uppercase text-mist md:pr-10 md:text-right">
                {item.date}
              </p>

              <div>
                <p className="text-sm font-semibold text-primary-foreground/55">
                  {item.company}
                </p>

                <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                  {item.role}
                </h2>

                <p className="mt-4 max-w-2xl leading-relaxed text-primary-foreground/65">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}