import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { WorldMap } from "./components/WorldMap";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WorldMap />
      <Contact />
    </div>
  );
}

export default App;
