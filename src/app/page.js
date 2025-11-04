import Hero from "./component/Hero";
import About from "./component/About";
import Articles from "./component/Articles";
import BeforeAfter from "./component/BeforeAfter";
import CTACards from "./component/CTACards";
import Experience from "./component/Experience";
import FAQ from "./component/FAQ";
import Journey from "./component/Journey";
import Partners from "./component/Partners";
import Reviews from "./component/Reviews";
import Stats from "./component/Stats";
import Testimonial from "./component/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <CTACards />
      <About />
      <Journey />
      <Partners />
      <Stats />
      <Articles />
      <BeforeAfter />
      <Testimonial />
      <Experience />
      <Reviews />
      <FAQ />
    </>
  );
}
