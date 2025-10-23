import { useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = (): void => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="app">
      <Topbar isMenuOpen={isMenuOpen} updateMenuState={handleMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} onClick={handleMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}

export default App;
