import About from "@/components/About";
import Aurora from "@/components/Aurora";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RephinaGateway from "@/components/RephinaGateway";
import ScrollProgress from "@/components/ScrollProgress";
import SelectedWork from "@/components/SelectedWork";
import Strengths from "@/components/Strengths";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Aurora />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Strengths />
        <TechStack />
        <RephinaGateway />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
