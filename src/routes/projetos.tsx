import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/pages/ProjectsPage";

export const Route = createFileRoute("/projetos")({
  head: () => ({ meta: [
    { title: "Projetos — Geovane Vinicios" },
    { name: "description", content: "Projetos públicos e estudos de desenvolvimento web de Geovane Vinicios reunidos no GitHub." },
    { property: "og:title", content: "Projetos — Geovane Vinicios" },
    { property: "og:description", content: "Código, projetos públicos e evolução prática em desenvolvimento web." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ProjectsPage,
});