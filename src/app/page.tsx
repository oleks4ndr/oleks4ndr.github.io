import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <section id="top"><HeroSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="experience"><ExperienceSection /></section>
      <section id="contact"><ContactSection /></section>
    </main>
  );
}
