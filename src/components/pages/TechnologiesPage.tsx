import { motion, useReducedMotion } from "motion/react";
import { usePreferences } from "@/context/PreferencesContext";
import { PageFrame } from "../portfolio/PageFrame";
import {
  TechIcon,
  type TechIconName,
} from "../portfolio/TechIcon";

type LocalizedText = {
  pt: string;
  en: string;
};

type TechnologyItem = {
  name: string | LocalizedText;
  icon: TechIconName;
  detail: LocalizedText;
};

type TechnologyGroup = {
  id: string;
  description: LocalizedText;
  items: TechnologyItem[];
};

const technologyGroups: TechnologyGroup[] = [
  {
    id: "frontend",
    description: {
      pt: "Estudos em interfaces e aplicações web.",
      en: "Studies in interfaces and web applications.",
    },
    items: [
      {
        name: "HTML5",
        icon: "siHtml5",
        detail: {
          pt: "Estrutura e semântica",
          en: "Structure and semantics",
        },
      },
      {
        name: "CSS",
        icon: "siCss",
        detail: {
          pt: "Estilos e layouts responsivos",
          en: "Styling and responsive layouts",
        },
      },
      {
        name: "JavaScript",
        icon: "siJavascript",
        detail: {
          pt: "Fundamentos e recursos ES6+",
          en: "Fundamentals and ES6+ features",
        },
      },
      {
        name: "TypeScript",
        icon: "siTypescript",
        detail: {
          pt: "Tipagem estática",
          en: "Static typing",
        },
      },
      {
        name: "React",
        icon: "siReact",
        detail: {
          pt: "Componentes e Hooks",
          en: "Components and Hooks",
        },
      },
      {
        name: "Redux",
        icon: "siRedux",
        detail: {
          pt: "Gerenciamento de estado",
          en: "State management",
        },
      },
    ],
  },
  {
    id: "backend",
    description: {
      pt: "Estudos em serviços, APIs e integração com bancos de dados.",
      en: "Studies in services, APIs, and database integration.",
    },
    items: [
      {
        name: "Node.js",
        icon: "siNodedotjs",
        detail: {
          pt: "JavaScript no servidor",
          en: "Server-side JavaScript",
        },
      },
      {
        name: "Express",
        icon: "siExpress",
        detail: {
          pt: "Rotas e middlewares",
          en: "Routing and middleware",
        },
      },
      {
        name: "APIs REST",
        icon: "api",
        detail: {
          pt: "Comunicação entre aplicações",
          en: "Communication between applications",
        },
      },
    ],
  },
  {
    id: "data",
    description: {
      pt: "Análise de dados no trabalho e estudos em persistência.",
      en: "Data analysis at work and studies in persistence.",
    },
    items: [
      {
        name: "SQL",
        icon: "sql",
        detail: {
          pt: "Consultas e análise de dados",
          en: "Queries and data analysis",
        },
      },
      {
        name: "Databricks",
        icon: "siDatabricks",
        detail: {
          pt: "Plataforma utilizada nas análises",
          en: "Platform used for analysis",
        },
      },
      {
        name: "MongoDB",
        icon: "siMongodb",
        detail: {
          pt: "Banco de dados NoSQL",
          en: "NoSQL database",
        },
      },
    ],
  },
  {
    id: "tools",
    description: {
      pt: "Ferramentas de desenvolvimento, suporte e validação.",
      en: "Development, support, and validation tools.",
    },
    items: [
      {
        name: "Git",
        icon: "siGit",
        detail: {
          pt: "Controle de versão",
          en: "Version control",
        },
      },
      {
        name: "GitHub",
        icon: "siGithub",
        detail: {
          pt: "Repositórios e colaboração",
          en: "Repositories and collaboration",
        },
      },
      {
        name: "Postman",
        icon: "siPostman",
        detail: {
          pt: "Requisições e validação de APIs",
          en: "API requests and validation",
        },
      },
      {
        name: "Jira",
        icon: "siJira",
        detail: {
          pt: "Demandas e acompanhamento de bugs",
          en: "Task and bug tracking",
        },
      },
      {
        name: "GLPI",
        icon: "support",
        detail: {
          pt: "Chamados e suporte de TI",
          en: "Tickets and IT support",
        },
      },
      {
        name: "Zendesk",
        icon: "siZendesk",
        detail: {
          pt: "Atendimento e suporte",
          en: "Customer service and support",
        },
      },
      {
        name: {
          pt: "Testes funcionais",
          en: "Functional testing",
        },
        icon: "testing",
        detail: {
          pt: "Validação de funcionalidades",
          en: "Feature validation",
        },
      },
    ],
  },
];

export function TechnologiesPage() {
  const { copy, language } = usePreferences();
  const reduceMotion = useReducedMotion();

  return (
    <PageFrame>
      <section className="section-shell min-h-[calc(100svh-7rem)] pb-24 pt-32">
        <div className="grid gap-8 lg:grid-cols-12">
          <p
            data-page-reveal
            className="section-kicker lg:col-span-3"
          >
            {copy.technologies.kicker}
          </p>

          <h1
            data-page-reveal
            className="font-display text-4xl font-bold sm:text-6xl lg:col-span-8"
          >
            {copy.technologies.title}
          </h1>
        </div>

        <div className="mt-12 border-t border-border sm:mt-16">
          {technologyGroups.map((group, index) => (
            <section
              key={group.id}
              aria-labelledby={`technology-${group.id}`}
              className="grid gap-6 border-b border-border py-8 sm:py-10 lg:grid-cols-12 lg:gap-12"
            >
              <div data-page-reveal className="lg:col-span-3">
                <h2
                  id={`technology-${group.id}`}
                  className="font-display text-xl font-bold text-accent"
                >
                  {copy.technologies.groups[index]}
                </h2>

                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {group.description[language]}
                </p>
              </div>

              <ul
                data-page-reveal
                className="grid min-w-0 gap-x-6 gap-y-2 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-3"
              >
                {group.items.map((item) => {
                  const name =
                    typeof item.name === "string"
                      ? item.name
                      : item.name[language];

                  return (
                    <motion.li
                      key={item.icon}
                      whileHover={
                        reduceMotion ? undefined : { x: 3 }
                      }
                      transition={{ duration: 0.16 }}
                      className="flex min-w-0 items-center gap-4 border-b border-border/60 py-4"
                    >
                      <div className="flex w-8 shrink-0 items-center justify-center text-accent">
                        <TechIcon
                          icon={item.icon}
                          className="h-6 w-6"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-bold text-foreground">
                          {name}
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {item.detail[language]}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}