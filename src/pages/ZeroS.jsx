import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ThemeToggle } from "../components/ThemeToggle";
import { ZeroSSection } from "../components/ZeroSSection";

export const ZeroS = () => {
  return (
    <div>
      <ThemeToggle />
      <Header page={"Zero-S Minecraft Game Server"} />
      {/* Title and Main Stay Header With Image */}
      <ZeroSSection />
      <Footer />
    </div>
  );
};
