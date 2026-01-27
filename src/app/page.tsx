import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <Navbar className="fixed top-0 z-50 order-1 w-full lg:sticky lg:top-0 lg:order-2 lg:h-screen lg:w-72 lg:shrink-0" />
      <div className="order-2 min-w-0 flex-1 pt-14 lg:order-1 lg:pt-0">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
}
