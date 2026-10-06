import { usePreferences } from "@/context/PreferencesContext";
import { PageFrame } from "../portfolio/PageFrame";

export function AboutPage() {
  const { copy } = usePreferences();
  return (
    <PageFrame>
      <section className="section-shell grid min-h-[calc(100svh-7rem)] content-center gap-12 pb-24 pt-32 lg:grid-cols-12">
        <p data-page-reveal className="section-kicker lg:col-span-3">{copy.about.kicker}</p>
        <div data-page-reveal className="lg:col-span-8">
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">{copy.about.title}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">{copy.about.body}</p>
        </div>
      </section>
    </PageFrame>
  );
}
