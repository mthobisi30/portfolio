import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FieldNotes from "@/components/FieldNotes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCaseStudies from "@/components/ProjectCaseStudies";
import RephinaGateway from "@/components/RephinaGateway";
import ScrollProgress from "@/components/ScrollProgress";
import SelectedWork from "@/components/SelectedWork";
import Strengths from "@/components/Strengths";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <ProjectCaseStudies />
        <Experience />
        <FieldNotes />
        <Strengths />
        <TechStack />
        <About />
        <RephinaGateway />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
