import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";

// Lazy-load below-the-fold components to optimize initial JS bundle size and interactive loading time (FID/INP)
const WhySolo360 = dynamic(() => import("@/components/WhySolo360"));
const Capabilities = dynamic(() => import("@/components/Capabilities"));
const Process = dynamic(() => import("@/components/Process"));
const SelectedExperience = dynamic(() => import("@/components/SelectedExperience"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const About = dynamic(() => import("@/components/About"));
const ExperienceEnvironments = dynamic(() => import("@/components/ExperienceEnvironments"));
const Engagements = dynamic(() => import("@/components/Engagements"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Metrics />
        <WhySolo360 />
        <Capabilities />
        <Process />
        <Testimonials />
        <About />
        <ExperienceEnvironments />
        <Engagements />
        <FinalCTA />
        {/* <ContactForm /> */}
      </main>
      <Footer />
    </div>
  );
}
