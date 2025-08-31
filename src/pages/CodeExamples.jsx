import { CodeExamplesSection } from "../components/CodeExamplesSection";
import { Header } from "../components/Header";
import { ThemeToggle } from "../components/ThemeToggle";

export const CodeExamples = () => {
  return (
    <div>
      <ThemeToggle />
      <Header page={"Code Examples Page"} />
      {/* This page will be an assortion of screenshots of code */}
      <CodeExamplesSection />
    </div>
  );
};
