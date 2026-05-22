import { useCallback, useEffect, useRef, useState } from 'react';
import { LandingFooter } from "../components/landing/LandingFooter";
import { LandingMainContent } from "../components/landing/LandingMainContent";
import { LandingTopNav } from "../components/landing/LandingTopNav";
import LandingHome from "../components/landing/LandingHome";
import LandingSelectedWork from "../components/landing/LandingSelectedWork";
import LandingContact from "../components/landing/LandingContact";
import LandingBuildings from "../components/landing/LandingBuildings";
import { useLandingGsap } from "../hooks/useLandingGsap";
import PageLoader from "../components/PageLoader";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, type Language } from "../libs/i18n";

export const LandingPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return savedLanguage === 'en' || savedLanguage === 'es' ? savedLanguage : DEFAULT_LANGUAGE;
  });
  const scope = useLandingGsap(loaded);
  const initialHtmlOverflow = useRef<string | null>(null);
  const initialBodyOverflow = useRef<string | null>(null);
  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (initialHtmlOverflow.current === null) {
      initialHtmlOverflow.current = document.documentElement.style.overflow;
    }
    if (initialBodyOverflow.current === null) {
      initialBodyOverflow.current = document.body.style.overflow;
    }

    if (!loaded) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = initialHtmlOverflow.current;
      document.body.style.overflow = initialBodyOverflow.current;
    }

    return () => {
      if (initialHtmlOverflow.current !== null) {
        document.documentElement.style.overflow = initialHtmlOverflow.current;
      }
      if (initialBodyOverflow.current !== null) {
        document.body.style.overflow = initialBodyOverflow.current;
      }
    };
  }, [loaded]);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  return (
    <>
      <CustomCursor />
      {loaded && <ScrollProgress />}
      {!loaded && <PageLoader onComplete={handleLoaderComplete} />}
      <div ref={scope} className="relative overflow-x-hidden portfolio-atmosphere editorial-texture">
        <LandingTopNav language={language} onLanguageChange={setLanguage} />
        <LandingHome language={language} />
        <LandingBuildings language={language} />
        <LandingSelectedWork language={language} />
        <LandingMainContent language={language} />
        <LandingContact language={language} />
        <LandingFooter language={language} />
      </div>
    </>
  );
};

export default LandingPage;
