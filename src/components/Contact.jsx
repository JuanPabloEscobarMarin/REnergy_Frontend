import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contactanos</h2>
        <ul>
          <li className={styles.link}>
            <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
            <a href="mailto:juanpabloescobarmarin@gmail.com">
              kevinjay@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
            <a href="mailto:juanpabloescobarmarin@gmail.com">
              sergiogomez@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:juanpabloescobarmarin@gmail.com">
            camilobello@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:juanpabloescobarmarin@gmail.com">
            juanpabloescobarmarin@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:juanpabloescobarmarin@gmail.com">
            andrescallejas@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
};
