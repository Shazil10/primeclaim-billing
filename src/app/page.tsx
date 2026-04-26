import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import TrustSection from "@/components/TrustSection";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustSection />
        <Services />
        <Pricing />
        <Process />
        <Specialties />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
