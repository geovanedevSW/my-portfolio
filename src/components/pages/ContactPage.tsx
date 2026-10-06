import { ArrowUpRight } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { PageFrame } from "../portfolio/PageFrame";

export function ContactPage() {
  const { copy } = usePreferences();
  return (
    <PageFrame>
      <section className="section-shell flex min-h-[calc(100svh-7rem)] flex-col justify-center pb-24 pt-32">
        <p data-page-reveal className="section-kicker">{copy.contact.kicker}</p>
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
          <h1 data-page-reveal className="font-display text-5xl font-bold leading-[0.95] sm:text-7xl lg:col-span-8">{copy.contact.title}</h1>
          <div data-page-reveal className="grid lg:col-span-4">
            <a href="mailto:gviniciossalesp@gmail.com" className="contact-link">{copy.contact.email} <ArrowUpRight /></a>
            <a href="https://github.com/geovanedevSW" target="_blank" rel="noreferrer" className="contact-link">GitHub <ArrowUpRight /></a>
            <a href="https://linkedin.com/in/geovanevinicios" target="_blank" rel="noreferrer" className="contact-link">LinkedIn <ArrowUpRight /></a>
          </div>
        </div>
        <p className="mt-16 break-all text-sm text-muted-foreground">gviniciossalesp@gmail.com</p>
      </section>
    </PageFrame>
  );
}
