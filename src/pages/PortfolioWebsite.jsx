import { ExternalLinkIcon, Github, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { Header } from "../components/Header";
import { PortfolioSection } from "../components/PortfolioSection";
import { Footer } from "../components/Footer";

export const PortfolioWebsite = () => {
  return (
    <div>
      <ThemeToggle />
      <Header page={"Portfolio Website"} />
      {/* Title and Main Stay Header With Image */}
      <PortfolioSection />
      <Footer />
    </div>
  );
};
