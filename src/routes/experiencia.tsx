import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/pages/ExperiencePage";

export const Route = createFileRoute("/experiencia")({
  head: () => ({ meta: [
    { title: "Experiência — Geovane Vinicios" },
    { name: "description", content: "Trajetória profissional de Geovane Vinicios em riscos, marketing, sistemas, testes e suporte de TI." },
    { property: "og:title", content: "Experiência — Geovane Vinicios" },
    { property: "og:description", content: "Experiência profissional em dados, automação, páginas web, sistemas e suporte." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ExperiencePage,
});