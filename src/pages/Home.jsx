import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { AboutSection } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection"; //More indepth and complicated Contact that was removed for a simplier one, preserved in the code for future use
import { Footer } from "../components/Footer";
import { SimpleContactSection } from "../components/SimpleContact";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflox-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <SimpleContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
