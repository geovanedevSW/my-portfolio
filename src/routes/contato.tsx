import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/ContactPage";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [
    { title: "Contato — Geovane Vinicios" },
    { name: "description", content: "Entre em contato com Geovane Vinicios por e-mail, GitHub ou LinkedIn." },
    { property: "og:title", content: "Contato — Geovane Vinicios" },
    { property: "og:description", content: "Canais de contato profissional de Geovane Vinicios." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});