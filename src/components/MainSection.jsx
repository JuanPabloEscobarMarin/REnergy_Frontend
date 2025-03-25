import { About } from "./About";
import { Hero } from "./Hero";
import { WorldMap } from "./WorldMap";
import { Contactanos } from "./Contactanos";
import { Gallery } from "./Gallery";

export function MainSection() {
  return (
    <div>
      <Hero />
      <About />
      <WorldMap />
      <Gallery />
      <Contactanos />
    </div>
  )
}
