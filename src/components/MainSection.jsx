import { About } from "./About";
import { Hero } from "./Hero";
import { WorldMap } from "./WorldMap";
import { Contactanos } from "./Contactanos";

export function MainSection() {
  return (
    <div>
      <Hero />
      <About />
      <WorldMap />
      <Contactanos />
    </div>
  )
}
