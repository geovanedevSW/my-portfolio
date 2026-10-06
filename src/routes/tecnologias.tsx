import { createFileRoute } from "@tanstack/react-router";
import { TechnologiesPage } from "@/components/pages/TechnologiesPage";

export const Route = createFileRoute("/tecnologias")({
  head: () => ({ meta: [
    { title: "Tecnologias — Geovane Vinicios" },
    { name: "description", content: "Tecnologias de frontend, backend, dados, ferramentas e qualidade conhecidas por Geovane Vinicios." },
    { property: "og:title", content: "Tecnologias — Geovane Vinicios" },
    { property: "og:description", content: "Conhecimentos em desenvolvimento, dados e qualidade de software." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: TechnologiesPage,
});