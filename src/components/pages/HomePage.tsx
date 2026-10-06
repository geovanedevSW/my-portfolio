import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { PageFrame } from "../portfolio/PageFrame";
import { ProfileCard } from "../portfolio/ProfileCard";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export function HomePage() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const introContentRef = useRef<HTMLDivElement>(null);
  const [profileCardHeight, setProfileCardHeight] = useState<number>();

  const { language, copy } = usePreferences();

  useLayoutEffect(() => {
    const content = introContentRef.current;
    if (!content) return;

    const desktop = window.matchMedia("(min-width: 1024px)");

    const syncHeight = () => {
      setProfileCardHeight(
        desktop.matches
          ? Math.ceil(content.getBoundingClientRect().height)
          : undefined,
      );
    };

    const observer = new ResizeObserver(syncHeight);

    observer.observe(content);
    desktop.addEventListener("change", syncHeight);
    syncHeight();

    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", syncHeight);
    };
  }, []);

  useEffect(() => {
    const target = typedRef.current;

    if (
      !target ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    target.innerText = `${copy.home.initialTerm}.`;

    const timeline = gsap
      .timeline({
        repeat: -1,
        repeatDelay: 1.2,
      })
      .to(target, {
        duration: 0.6,
        text: { value: "", rtl: true },
        delay: 2.4,
        ease: "none",
      })
      .to(target, {
        duration: 0.8,
        text: `${copy.home.alternateTerm}.`,
        ease: "none",
      })
      .to(target, {
        duration: 0.6,
        text: { value: "", rtl: true },
        delay: 2.4,
        ease: "none",
      })
      .to(target, {
        duration: 0.8,
        text: `${copy.home.initialTerm}.`,
        ease: "none",
      });

    return () => {
      timeline.kill();
    };
  }, [copy.home.alternateTerm, copy.home.initialTerm, language]);

  return (
    <PageFrame includeFooter={false}>
      <section className="section-shell grid min-h-[100svh] grid-cols-1 items-center gap-8 pb-10 pt-24 lg:grid-cols-12 lg:gap-12 lg:pb-12 lg:pt-28">
        <div ref={introContentRef} className="lg:col-span-7">
          <p data-page-reveal className="section-kicker">
            {copy.home.kicker}
          </p>

          <h1
            data-page-reveal
            className="mt-5 font-display text-[clamp(3.5rem,8vw,7.8rem)] font-bold leading-[0.9]"
          >
            Geovane
            <br />
            Vinicios
          </h1>

          <p
            data-page-reveal
            className="mt-8 max-w-3xl text-xl font-semibold leading-relaxed sm:text-2xl"
          >
            {copy.home.introBefore}{" "}
            <span
              ref={typedRef}
              aria-hidden="true"
              className="typed-caret inline text-accent"
            >
              {copy.home.initialTerm}.
            </span>
            <span className="sr-only">{copy.home.accessibleFocus}</span>
          </p>

          <p
            data-page-reveal
            className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {copy.home.body}
          </p>

          <div
            data-page-reveal
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <Link
              to="/projetos"
              className="inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-petrol active:scale-95"
            >
              {copy.home.projects}
              <ArrowDown size={17} />
            </Link>

            <a
              href="/cv-geovane-vinicios.pdf"
              download
              className="text-link transition-all duration-200 hover:translate-x-1 hover:text-accent"
            >
              {copy.home.download}
              <Download size={15} />
            </a>

            <a
              href="https://github.com/geovanedevSW"
              target="_blank"
              rel="noreferrer"
              className="text-link text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-accent"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://linkedin.com/in/geovanevinicios"
              target="_blank"
              rel="noreferrer"
              className="text-link text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-accent"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>

          <p
            data-page-reveal
            className="mt-8 text-xs font-semibold text-muted-foreground"
          >
            {copy.home.explore}
          </p>
        </div>

        <ProfileCard height={profileCardHeight} />
      </section>
    </PageFrame>
  );
}