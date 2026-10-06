import { useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { PageFrame } from "../portfolio/PageFrame";
import projectPreview from "@/assets/portfolio-jn-ugc.webp";

type Language = "pt" | "en";

type Project = {
  id: string;
  name: string;
  image: string;
  technologies: string[];
  description: Record<Language, string>;
  repositoryUrl: string;
  siteUrl: string;
};

const projects: Project[] = [
  {
    id: "portfolio-jn-ugc",
    name: "Jhenifer Nogueira — UGC",
    image: projectPreview,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "EmailJS",
    ],
    description: {
      pt: "Landing page desenvolvida para apresentar o trabalho de uma criadora de conteúdo UGC e facilitar o contato com marcas. Reúne a apresentação dos trabalhos e um formulário de briefing com envio por EmailJS, em uma interface responsiva com animações.",
      en: "A landing page built to showcase a UGC creator's work and help brands get in touch. It combines a portfolio showcase with a briefing form submitted through EmailJS, within a responsive interface with animations.",
    },
    repositoryUrl:
      "https://github.com/geovanedevSW/portfolio-jn-ugc",
    siteUrl: "https://jhenifernogueira.com.br",
  },
];

function ProjectCard({
  project,
  language,
}: {
  project: Project;
  language: Language;
}) {
  const [flipped, setFlipped] = useState(false);
  const reduceMotion = useReducedMotion();
  const descriptionId = useId();

  const labels = {
    description: language === "pt" ? "Descrição" : "Description",
    showDescription:
      language === "pt" ? "Ver descrição" : "View description",
    back: language === "pt" ? "Voltar ao projeto" : "Back to project",
    site: language === "pt" ? "Ver site" : "Visit site",
    code: language === "pt" ? "Código" : "Source",
    preview: language === "pt" ? "Prévia do projeto" : "Project preview",
  };

  const linkClass =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card";

  return (
    <article
      data-page-reveal
      className="relative h-full min-w-0 w-full [perspective:1200px]"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.55,
          ease: [0.22, 0.61, 0.36, 1],
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative grid h-full"
      >
        {/* Frente */}
        <div
          aria-hidden={flipped}
          inert={flipped}
          className={`col-start-1 row-start-1 flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground [backface-visibility:hidden] ${
            flipped ? "pointer-events-none" : ""
          }`}
        >
          <div className="p-5 pb-4">
            <h2 className="font-display text-lg font-bold leading-snug">
              {project.name}
            </h2>
          </div>

          <div className="mx-5 aspect-video shrink-0 overflow-hidden rounded-lg bg-secondary">
            <motion.img
              src={project.image}
              alt={`${labels.preview}: ${project.name}`}
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col p-5">
            <ul className="flex flex-wrap gap-1.5">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-md bg-secondary px-2 py-1 text-[11px] font-semibold text-secondary-foreground"
                >
                  {technology}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setFlipped(true)}
              aria-controls={descriptionId}
              aria-expanded={flipped}
              className="mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded-md text-sm font-semibold text-accent transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {labels.showDescription}
              <ArrowRight size={16} aria-hidden="true" />
            </button>

            <div className="mt-auto pt-3">
              <div className="grid grid-cols-2 gap-2 border-t border-border pt-4">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} bg-primary text-primary-foreground hover:bg-petrol`}
                >
                  {labels.site}
                  <ExternalLink
                    size={15}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} border border-border hover:bg-secondary`}
                >
                  <Github
                    size={16}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                  {labels.code}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Verso */}
        <div
          id={descriptionId}
          aria-hidden={!flipped}
          inert={!flipped}
          style={{ transform: "rotateY(180deg)" }}
          className={`absolute inset-0 flex flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground [backface-visibility:hidden] ${
            !flipped ? "pointer-events-none" : ""
          }`}
        >
          <h2 className="font-display text-lg font-bold leading-snug">
            {project.name}
          </h2>

          <div className="mt-5 min-h-0 flex-1 overflow-y-auto">
            <h3 className="text-sm font-semibold text-accent">
              {labels.description}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description[language]}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setFlipped(false)}
            className="mt-5 inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {labels.back}
          </button>
        </div>
      </motion.div>

      <button
        type="button"
        onClick={() => setFlipped((value) => !value)}
        aria-expanded={flipped}
        aria-controls={descriptionId}
        className="sr-only focus:not-sr-only focus:absolute focus:bottom-4 focus:left-4 focus:z-10 focus:rounded-lg focus:bg-card focus:px-4 focus:py-3 focus:text-sm focus:ring-2 focus:ring-accent"
      >
        {flipped ? labels.back : labels.showDescription}
      </button>
    </article>
  );
}

export function ProjectsPage() {
  const { copy, language } = usePreferences();

  return (
    <PageFrame>
      <section className="min-h-[calc(100svh-7rem)] bg-secondary pb-24 pt-32">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-12">
            <p
              data-page-reveal
              className="section-kicker lg:col-span-3"
            >
              {copy.projects.kicker}
            </p>

            <div data-page-reveal className="lg:col-span-9">
              <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
                {copy.projects.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {copy.projects.body}
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                language={language}
              />
            ))}

            <article
              data-page-reveal
              className="flex h-full min-h-80 min-w-0 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 p-6 text-center"
            >
              <span className="rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-accent">
                {language === "pt" ? "Em breve" : "Coming soon"}
              </span>

              <h2 className="mt-5 font-display text-xl font-bold">
                {language === "pt" ? "Próximo projeto" : "Next project"}
              </h2>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {language === "pt"
                  ? "Este espaço vai receber o próximo projeto da minha jornada em desenvolvimento."
                  : "This space will feature the next project in my development journey."}
              </p>
            </article>
          </div>

          <a
            href="https://github.com/geovanedevSW"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link mt-10 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            {copy.projects.link}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </PageFrame>
  );
}