import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";
import { Roles } from "./Roles";

export const Hero = () => {
  return (
    <section className="relative flex items-center justify-between mt-49 z-10 ml-[10%] mr-[10%]">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hola somos REnergy by:<Roles></Roles>
        </h1>
        <p className={styles.description}>
          REnergy es una aplicación web integral e interactiva para
          visualización y gestión de datos registrados desde 1965 hasta 2023
          relacionados con alternativas de energía renovable. En específico la
          solar, eólica, biocombustibles e hidroeléctrica
        </p>
        <div className={styles.btncontainer}>
          <a
            href="https://github.com/JuanPabloEscobarMarin/REnergy_Frontend"
            className={styles.btn}
          >
            <img
              src={getImageUrl("githubIcon.png")}
              alt="LinkedIn icon"
              className={styles.icon}
            />
            GitHub Frontend
          </a>
          <a
            href="https://github.com/camilobelloHZ/REnergy"
            className={styles.btn}
          >
            <img
              src={getImageUrl("githubIcon.png")}
              alt="Github icon"
              className={styles.icon}
            />
            GitHub Backend
          </a>
          <a href="mailto:renergy@gmail.com" className={styles.btn}>
            <img
              src={getImageUrl("emailIcon.png")}
              alt="Email icon"
              className={styles.icon}
            />
            renergy@gmail.com
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("logo_REnergy.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
