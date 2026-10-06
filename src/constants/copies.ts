export type Language = "pt" | "en";
export type Theme = "light" | "dark";

export type Copy = {
  navigation: readonly [string, string][];
  header: { navigation: string; openMenu: string; closeMenu: string; lightTheme: string; darkTheme: string; language: string; resume: string };
  common: { role: string; location: string; focus: string; backHome: string; footerRole: string };
  home: { kicker: string; introBefore: string; initialTerm: string; alternateTerm: string; accessibleFocus: string; body: string; download: string; projects: string; explore: string };
  about: { kicker: string; title: string; body: string };
  experience: { kicker: string; title: string; items: Array<{ date: string; role: string; company: string; body: string }> };
  technologies: { kicker: string; title: string; groups: string[] };
  projects: { kicker: string; title: string; body: string; link: string };
  contact: { kicker: string; title: string; email: string };
};

export const copies: Record<Language, Copy> = {
  pt: {
    navigation: [["Início", "/"], ["Sobre", "/sobre"], ["Experiência", "/experiencia"], ["Tecnologias", "/tecnologias"], ["Projetos", "/projetos"], ["Contato", "/contato"]],
    header: { navigation: "Navegação principal", openMenu: "Abrir menu", closeMenu: "Fechar menu", lightTheme: "Usar tema claro", darkTheme: "Usar tema escuro", language: "Alterar idioma para inglês", resume: "Currículo" },
    common: { role: "Desenvolvedor de Software", location: "Belo Horizonte — MG", focus: "Frontend · Backend", backHome: "Voltar ao início", footerRole: "Desenvolvedor de Software | Belo Horizonte, MG — Brasil" },
    home: { kicker: "Quem sou", introBefore: "Estudante de Engenharia de Software, atualmente aprofundando meus conhecimentos em desenvolvimento", initialTerm: "front-end", alternateTerm: "back-end", accessibleFocus: "Frontend e Backend", body: "Unindo minha experiência com análise de dados e automação para construir soluções de software eficientes e escaláveis.", download: "Baixar currículo PDF", projects: "Ver projetos", explore: "Explore pelo menu superior" },
    about: { kicker: "Sobre", title: "Minha trajetória une tecnologia, sistemas e dados.", body: "Sou estudante de Engenharia de Software e hoje trabalho com análise de riscos usando SQL no Databricks. Já passei por suporte, testes e análise de sistemas. Essa trajetória me deu contato com problemas reais de operação. Agora estou aprofundando JavaScript e TypeScript para desenvolver aplicações full stack, com React no front-end, Node.js e Express no back-end e MongoDB no banco de dados." },
    experience: {
      kicker: "Experiência",
      title: "Trajetória profissional.",
      items: [
        {
          date: "Ago/2026 — Atual",
          role: "Analista de Riscos",
          company: "Stellar Gaming",
          body: "Atuo no monitoramento de operações e na investigação de possíveis fraudes. Utilizo SQL no Databricks para consultar dados, identificar padrões de comportamento e analisar inconsistências que apoiam as decisões do time. Também desenvolvo automações e utilizo inteligência artificial como apoio às análises, buscando reduzir tarefas manuais e facilitar processos recorrentes.",
        },
        {
          date: "Jan/2025 — Ago/2026",
          role: "Analista de Marketing",
          company: "Stellar Gaming",
          body: "Desenvolvi e mantive páginas e landing pages com HTML, CSS e JavaScript via CMS, com atenção à experiência do usuário e à conversão. Trabalhei na configuração e gestão de campanhas promocionais e bônus em plataformas como Backoffice e Smartico. Colaborei com os times de produto, design, desenvolvimento e performance para transformar demandas de campanha em entregas e validar seu funcionamento.",
        },
        {
          date: "Mai/2024 — Jan/2025",
          role: "Analista de Sistemas",
          company: "Stellar Gaming",
          body: "Trabalhei no levantamento de requisitos e na documentação de regras de negócio e processos operacionais. Participei da homologação de funcionalidades, da investigação de falhas e do acompanhamento de demandas no Jira. Essa experiência aproximou meu trabalho das etapas de desenvolvimento e me ajudou a compreender a relação entre necessidades da operação, comportamento dos sistemas e validação das entregas.",
        },
        {
          date: "Mai/2023 — Mai/2024",
          role: "Assistente de TI",
          company: "Stellar Gaming",
          body: "Realizei testes funcionais, identifiquei e reportei bugs e acompanhei o funcionamento dos sistemas para apoiar a operação. Também participei do desenvolvimento de páginas web e prestei suporte de segundo nível na investigação de problemas. Nesse período, ampliei meu contato com front-end, qualidade de software e resolução de incidentes.",
        },
        {
          date: "Jan/2022 — Fev/2023",
          role: "Jovem Aprendiz em Suporte de TI",
          company: "Assprom",
          body: "Iniciei minha trajetória em tecnologia prestando suporte a usuários no Hospital Risoleta Tolentino Neves, por meio da Assprom. Apoiei a instalação e a manutenção de equipamentos e o atendimento de problemas do dia a dia. Essa experiência desenvolveu minha capacidade de investigar falhas, explicar soluções de forma clara e compreender as necessidades de quem utiliza a tecnologia.",
        },
      ],
    },
    technologies: { kicker: "Tecnologias", title: "Conhecimentos em desenvolvimento, dados e qualidade.", groups: ["Frontend", "Backend", "Dados", "Ferramentas e qualidade"] },
    projects: {
      kicker: "Projetos",
      title: "Projetos que coloquei em prática.",
      body: "Aplicações desenvolvidas para necessidades reais, com detalhes sobre o objetivo, as tecnologias e o código de cada projeto.",
      link: "Ver meu GitHub",
    }, 
    contact: { kicker: "Contato", title: "Vamos conversar sobre desenvolvimento.", email: "E-mail" },
  },
  en: {
    navigation: [["Home", "/"], ["About", "/sobre"], ["Experience", "/experiencia"], ["Technologies", "/tecnologias"], ["Projects", "/projetos"], ["Contact", "/contato"]],
    header: { navigation: "Main navigation", openMenu: "Open menu", closeMenu: "Close menu", lightTheme: "Use light theme", darkTheme: "Use dark theme", language: "Change language to Portuguese", resume: "Resume" },
    common: { role: "Software Developer", location: "Belo Horizonte — MG", focus: "Frontend · Backend", backHome: "Back to home", footerRole: "Software Developer | Belo Horizonte, MG — Brazil" },
    home: { kicker: "About me", introBefore: "Software Engineering student currently deepening my knowledge in", initialTerm: "front-end", alternateTerm: "back-end", accessibleFocus: "Frontend and Backend", body: "Combining my experience in data analysis and automation to build efficient and scalable software solutions.", download: "Download resume PDF", projects: "View projects", explore: "Explore using the menu above" },
    about: { kicker: "About", title: "My journey brings together technology, systems, and data.", body: "I am a Software Engineering student building a career across support, testing, systems, web pages, data, and automation. I currently work with data analysis using SQL and Databricks in Risk. I want to direct this experience toward software development and continue deepening my studies in JavaScript, TypeScript, React, Node.js, Express, and MongoDB." },
    experience: {
      kicker: "Experience",
      title: "Professional journey.",
      items: [
        {
          date: "Aug/2026 — Present",
          role: "Risk Analyst",
          company: "Stellar Gaming",
          body: "I monitor operations and investigate potential fraud. I use SQL in Databricks to query data, identify behavioral patterns, and analyze inconsistencies that support the team's decisions. I also develop automations and use AI to assist with analysis, aiming to reduce manual tasks and simplify recurring processes.",
        },
        {
          date: "Jan/2025 — Aug/2026",
          role: "Marketing Analyst",
          company: "Stellar Gaming",
          body: "I developed and maintained web pages and landing pages using HTML, CSS, and JavaScript through a CMS, with attention to user experience and conversion. I configured and managed promotional campaigns and bonuses in platforms such as Backoffice and Smartico. I collaborated with product, design, development, and performance teams to turn campaign requirements into deliverables and validate their functionality.",
        },
        {
          date: "May/2024 — Jan/2025",
          role: "Systems Analyst",
          company: "Stellar Gaming",
          body: "I gathered requirements and documented business rules and operational processes. I participated in acceptance testing, investigated issues, and tracked requests in Jira. This experience brought me closer to the software development process and helped me understand how operational needs relate to system behavior and delivery validation.",
        },
        {
          date: "May/2023 — May/2024",
          role: "IT Assistant",
          company: "Stellar Gaming",
          body: "I performed functional testing, identified and reported bugs, and monitored system behavior to support daily operations. I also contributed to web page development and provided second-level support to investigate issues. During this period, I gained more experience with front-end development, software quality, and incident resolution.",
        },
        {
          date: "Jan/2022 — Feb/2023",
          role: "IT Support Apprentice",
          company: "Assprom",
          body: "I started my technology career providing user support at Hospital Risoleta Tolentino Neves through Assprom. I assisted with equipment installation and maintenance and helped resolve everyday technical issues. This experience developed my ability to investigate problems, explain solutions clearly, and understand the needs of the people using technology.",
        },
      ],
    },
    technologies: { kicker: "Technologies", title: "Knowledge across development, data, and quality.", groups: ["Frontend", "Backend", "Data", "Tools and quality"] },
    projects: { kicker: "Projects", title: "Code and studies gathered on GitHub.", body: "Follow my public repositories and hands-on progress in web development.", link: "Visit GitHub" },
    contact: { kicker: "Contact", title: "Let's talk about development.", email: "Email" },
  },
};
