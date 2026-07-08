import About from "@/components/About";
import BottomNav from "@/components/BottomNav";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LeftRail from "@/components/LeftRail";
import MagneticButtons from "@/components/MagneticButtons";
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
      <LeftRail />
      <main>
        <Hero />
        <SelectedWork />
        <ProjectCaseStudies />
        <Experience />
        <Strengths />
        <TechStack />
        <About />
        <RephinaGateway />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
      <MagneticButtons />
    </>
  );
}
