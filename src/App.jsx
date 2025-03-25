import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WorldMap } from "./components/WorldMap";
import { Contactanos } from "./components/Contactanos";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WorldMap />
      <Gallery/>
      <Contactanos/>
    </div>
  );
}

export default App;
