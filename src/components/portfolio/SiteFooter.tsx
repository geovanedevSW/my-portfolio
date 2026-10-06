import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";

export function SiteFooter() {
  const { copy } = usePreferences();
  return (
    <footer className="bg-ink py-8 text-primary-foreground">
      <div className="section-shell flex flex-col gap-5 text-xs sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display font-bold">Geovane Vinicios</p>
          <p className="mt-2 text-primary-foreground/55">{copy.common.footerRole}</p>
        </div>
        <div className="flex items-center gap-7">
          <span>© 2026</span>
          <Link to="/" className="inline-flex items-center gap-2">{copy.common.backHome} <ArrowUp size={14} /></Link>
        </div>
      </div>
    </footer>
  );
}
