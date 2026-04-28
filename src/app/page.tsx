import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import Systems from "@/components/Systems";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <Systems />
        <Specialties />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
