import { cookies } from 'next/headers';
import Hero from "./component/Hero";
import CTACardsServer from "./component/CTACardsServer";
import StatsServer from "./component/StatsServer";
import About from "./component/About";
import Experience from "./component/Experience";
import Articles from "./component/Articles";
import BeforeAfter from "./component/BeforeAfter";
import Testimonial from "./component/Testimonial";
import Reviews from "./component/Reviews";
import Journey from "./component/Journey";
import Partners from "./component/Partners";
import FAQ from "./component/FAQ";

/**
 * Example Server-Side Page with Language Support
 * 
 * This demonstrates how to create a page that uses server-side components
 * with language detection from cookies or searchParams.
 * 
 * @param {Object} props - Page props
 * @param {Object} props.searchParams - URL search parameters
 * @returns {JSX.Element} Server-side rendered page
 */
export default async function ExampleServerPage({ searchParams }) {
  // Get language from searchParams or cookies
  const cookieStore = cookies();
  const languageFromCookie = cookieStore.get('lang')?.value;
  const language = searchParams?.lang || languageFromCookie || 'ar';

  return (
    <>
      {/* Components that need client-side interactivity */}
      <Hero />
      
      {/* Server-side rendered components with language props */}
      <CTACardsServer language={language} />
      <About />
      <Journey />
      <Partners />
      <StatsServer language={language} />
      <Articles />
      <BeforeAfter />
      <Testimonial />
      <Experience />
      <Reviews />
      <FAQ />
    </>
  );
}
