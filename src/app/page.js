import Image from "next/image";
import Hero from "./component/Hero";
import CTACards from "./component/CTACards";
import About from "./component/About";
import Experience from "./component/Experience";
import Stats from "./component/Stats";
import BeforeAfter from "./component/BeforeAfter";
import Testimonial from "./component/Testimonial";
import Reviews from "./component/Reviews";
import Journey from "./component/Journey";
import Partners from "./component/Partners";
import FAQ from "./component/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <CTACards />
      <About />
         <Journey />
   <Partners />
      <Stats />
      <BeforeAfter />
      <Testimonial />
        <Experience />
      <Reviews />
     
         
      <FAQ />
    </>
  );
}
