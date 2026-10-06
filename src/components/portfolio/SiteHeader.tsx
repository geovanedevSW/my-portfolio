import { Link, useLocation } from "@tanstack/react-router";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePreferences } from "@/context/PreferencesContext";
import resume from "@/assets/cv-geovane-vinicios.pdf.asset.json";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useLocation({ select: (location) => location.pathname });
  const { language, theme, copy, toggleLanguage, toggleTheme } =
    usePreferences();
  const showResume = pathname !== "/";

  const controls = (
    <div className="flex items-center gap-1.5">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        aria-label={
          theme === "dark"
            ? copy.header.lightTheme
            : copy.header.darkTheme
        }
        title={
          theme === "dark"
            ? copy.header.lightTheme
            : copy.header.darkTheme
        }
        className="h-9 w-9 rounded-lg bg-background"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </Button>
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-4 z-50 sm:px-6 lg:px-4">
      <nav
        className="section-shell relative flex min-h-14 items-center justify-between rounded-xl border border-border bg-background/90 px-4 shadow-float backdrop-blur-md sm:px-5 lg:justify-center"
        aria-label={copy.header.navigation}
      >
        <div className="flex items-center gap-2 lg:absolute lg:left-4">
          <Button
            type="button"
            variant="outline"
            onClick={toggleLanguage}
            aria-label={copy.header.language}
            title={copy.header.language}
            className="h-9 min-w-11 rounded-lg bg-background px-2 text-[11px] font-bold"
          >
            {language === "pt" ? "EN" : "PT"}
          </Button>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          {copy.navigation.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-accent" }}
              className="nav-link"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:absolute lg:right-4">
          {showResume && (
            <a
              href={resume.url}
              download="cv-geovane-vinicios.pdf"
              className="hidden items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold uppercase text-primary-foreground transition-colors duration-200 hover:bg-petrol sm:inline-flex"
            >
              {copy.header.resume}
              <Download size={14} />
            </a>
          )}

          {controls}

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={
              menuOpen
                ? copy.header.closeMenu
                : copy.header.openMenu
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="h-9 w-9 rounded-lg bg-background lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </nav>

      {menuOpen && (
        <div className="section-shell mt-2 grid rounded-xl border border-border bg-background px-4 py-3 shadow-float lg:hidden">
          {copy.navigation.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-accent" }}
              onClick={() => setMenuOpen(false)}
              className="border-b border-border py-3 text-sm font-semibold transition-colors duration-200 last:border-0"
            >
              {label}
            </Link>
          ))}

          {showResume && (
            <a
              href={resume.url}
              download="cv-geovane-vinicios.pdf"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
            >
              {copy.header.resume}
              <Download size={15} />
            </a>
          )}
        </div>
      )}
    </header>
  );
}