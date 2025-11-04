"use client";
import { useLanguage } from "../hooks/useLanguage";
import CTACards from "./CTACards";
import Stats from "./Stats";

/**
 * Client Language Provider - Bridges client language state to server components
 * 
 * This component uses the client-side language context and passes it as props
 * to server-side components that need language information.
 * 
 * @returns {JSX.Element} Components with language props
 */
export default function ClientLanguageProvider() {
  const { language } = useLanguage();
  
  return (
    <>
      <CTACards language={language} />
      <Stats language={language} />
    </>
  );
}
