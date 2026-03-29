import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ThemeToggle } from "../components/ThemeToggle";
import { AnythingButAGunSection } from "../components/AnythingButAGunSection";

export const AnythingButAGun = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflox-x-hidden">
      <ThemeToggle />
      <Header page={"Anything but a Gun Unity Game Project"} />
      {/*Anything but a Gun Title and Main Stay Header With Image */}
      <AnythingButAGunSection />
      <Footer />
      {/*Detailed Description of Myself and What I did in Anything but a Gun*/}
    </div>
  );
};
