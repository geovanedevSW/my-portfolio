import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Language, Theme, Copy, copies } from "@/constants/copies";

type PreferencesContextType = {
  language: Language;
  theme: Theme;
  copy: Copy;
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<PreferencesContextType | null>(null);

export function PortfolioPreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const nextLanguage: Language = savedLanguage === "en" ? "en" : "pt";
    const nextTheme: Theme = savedTheme === "dark" || (savedTheme === null && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    setLanguage(nextLanguage);
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <PreferencesContext.Provider
      value={{
        language,
        theme,
        copy: copies[language],
        toggleLanguage: () => setLanguage((current) => current === "pt" ? "en" : "pt"),
        toggleTheme: () => setTheme((current) => current === "light" ? "dark" : "light")
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences must be used within PortfolioPreferencesProvider");
  return context;
}
