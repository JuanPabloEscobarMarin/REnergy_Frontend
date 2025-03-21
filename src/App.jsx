import styles from "./App.module.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <div>funcionalidad aqui</div>
      <Contact></Contact>
    </div>
  );
}

export default App;
