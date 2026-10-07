import { ArrowUpRight } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { PageFrame } from "../portfolio/PageFrame";

export function ContactPage() {
  const { copy } = usePreferences();

  return (
    <PageFrame>
      <section className="section-shell flex min-h-[calc(100svh-5rem)] flex-col justify-center py-20 sm:py-24 lg:py-32">
        <p
          data-page-reveal
          className="section-kicker"
        >
          {copy.contact.kicker}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h1
            data-page-reveal
            className="
              min-w-0
              break-words
              font-display
              text-4xl
              font-bold
              leading-[0.95]
              sm:text-5xl
              md:text-6xl
              lg:col-span-8
              lg:text-7xl
            "
          >
            {copy.contact.title}
          </h1>

          <div
            data-page-reveal
            className="
              grid
              min-w-0
              gap-1
              lg:col-span-4
            "
          >
            <a
              href="mailto:gviniciossalesp@gmail.com"
              className="contact-link flex min-w-0 items-center justify-between gap-4"
            >
              <span className="min-w-0 break-words">
                {copy.contact.email}
              </span>

              <ArrowUpRight className="h-5 w-5 shrink-0" />
            </a>

            <a
              href="https://github.com/geovanedevSW"
              target="_blank"
              rel="noreferrer"
              className="contact-link flex items-center justify-between gap-4"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-5 w-5 shrink-0" />
            </a>

            <a
              href="https://linkedin.com/in/geovanevinicios"
              target="_blank"
              rel="noreferrer"
              className="contact-link flex items-center justify-between gap-4"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-5 w-5 shrink-0" />
            </a>
          </div>
        </div>
        <div className="mt-12 max-w-2xl sm:mt-16">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Obrigado por chegar até aqui. Se meu trabalho ou minha trajetória fizerem
            sentido para você, fique à vontade para entrar em contato.
          </p>
        </div>  
      </section>
    </PageFrame>
  );
}