import React from "react";
import { getImageUrl } from "../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>¿Qué puedo encontrar aquí?</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("brazil.svg")}
          alt="brazil.svg"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("panel.svg")}
              alt="panel.svg"
              className={styles.aboutSvg}
            />
            <div className={styles.aboutItemText}>
              <h3>Energías Renovables</h3>
              <p>
                Información sobre el uso de energías limpias y sostenibles en
                diferentes regiones del mundo, destacando su impacto ambiental.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("viento.svg")}
              alt="viento.svg"
              className={styles.aboutSvg}
            />
            <div className={styles.aboutItemText}>
              <h3>Energía Eólica</h3>
              <p>
                Datos sobre la generación de electricidad a partir del viento,
                incluyendo capacidad instalada y crecimiento anual en TWh.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("hydro.svg")}
              alt="hydro.svg"
              className={styles.aboutSvg}
            />
            <div className={styles.aboutItemText}>
              <h3>Energía Hidroeléctrica</h3>
              <p>
                Información sobre la producción de energía a través del agua,
                con cifras de generación en diferentes países y continentes.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("biofuel.svg")}
              alt="biofuel.svg"
              className={styles.aboutSvg}
            />
            <div className={styles.aboutItemText}>
              <h3>Biocombustibles</h3>
              <p>
                Análisis del uso de biocombustibles como alternativa energética,
                su producción global y eficiencia comparada con otras fuentes.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("sol.svg")}
              alt="sol.svg"
              className={styles.aboutSvg}
            />
            <div className={styles.aboutItemText}>
              <h3>Energía Solar</h3>
              <p>
                Datos sobre la generación de electricidad a partir del sol,
                incluyendo avances en tecnología fotovoltaica y rendimiento en
                distintos países.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
