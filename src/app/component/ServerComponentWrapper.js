import CTACardsServer from "./CTACardsServer";
import StatsServer from "./StatsServer";

/**
 * Server Component Wrapper - Handles server-side language detection
 * 
 * This component demonstrates how to use server-side components with
 * language detection from URL searchParams or cookies.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.searchParams - URL search parameters
 * @param {string} props.defaultLanguage - Default language fallback
 * @returns {JSX.Element} Server-side rendered components
 */
export default function ServerComponentWrapper({ searchParams, defaultLanguage = 'ar' }) {
  // Get language from searchParams (e.g., ?lang=en) or use default
  const language = searchParams?.lang || defaultLanguage;

  return (
    <>
      <CTACardsServer language={language} />
      <StatsServer language={language} />
    </>
  );
}
