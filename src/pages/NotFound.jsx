import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NotFoundLander } from "../components/NotFoundLander";
import { ThemeToggle } from "../components/ThemeToggle";

export const NotFound = () => {
  return (
    <div>
      <ThemeToggle />
      <Header page={"404 Not Found"} />
      <NotFoundLander />
      <Footer />
    </div>
  );
};
