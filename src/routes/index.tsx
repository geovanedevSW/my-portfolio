import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Geovane Vinicios — Desenvolvimento de Software Júnior" },
    { name: "description", content: "Portfólio de Geovane Vinicios, estudante de Engenharia de Software com experiência em suporte, sistemas, páginas web, dados e automação." },
    { property: "og:title", content: "Geovane Vinicios — Desenvolvimento de Software Júnior" },
    { property: "og:description", content: "Experiência, tecnologias e trajetória de Geovane Vinicios em software, dados e automação." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});