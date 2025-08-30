import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ThemeToggle } from "../components/ThemeToggle";
import { ThermoFluxSection } from "../components/ThermoFluxSection";

export const ThermoFlux = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflox-x-hidden">
      <ThemeToggle />
      <Header page={"ThermoFlux Unity Game Project"} />
      {/*ThermoFlux Title and Main Stay Header With Image */}
      <ThermoFluxSection />
      <Footer />
      {/*Detailed Description of Myself and What I did in ThermoFlux*/}
    </div>
  );
};
