import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ThermoFlux } from "./pages/ThermoFlux";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { ZeroS } from "./pages/ZeroS";
import { PortfolioWebsite } from "./pages/PortfolioWebsite";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/ThermoFlux" element={<ThermoFlux />} />
          <Route path="/ZeroS" element={<ZeroS />} />
          <Route path="/Portfolio" element={<PortfolioWebsite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
