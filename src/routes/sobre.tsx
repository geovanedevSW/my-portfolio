import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages/AboutPage";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [
    { title: "Sobre — Geovane Vinicios" },
    { name: "description", content: "Conheça a trajetória de Geovane Vinicios entre tecnologia, sistemas, dados e desenvolvimento de software." },
    { property: "og:title", content: "Sobre — Geovane Vinicios" },
    { property: "og:description", content: "Trajetória em suporte, sistemas, páginas web, dados e automação." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AboutPage,
});