import { FaPhone, FaEnvelope, FaUser, FaLinkedin } from "react-icons/fa";
import styles from "./Contactanos.module.css";

import CamiloBelloFoto from "./assets/perfiles/camilo-bello.jpg";
import SergioGomezFoto from "./assets/perfiles/sergio-gomez.jpg";
import KevinHerreraFoto from "./assets/perfiles/kevin-herrera.jpg";
import JuanEscobarFoto from "./assets/perfiles/juan-escobar.jpg";
import AndresCallejasFoto from "./assets/perfiles/andres-callejas.jpg";

export const Contactanos = () => {
  const equipo = [
    {
      nombre: "Camilo Andres\nBello Hernandez",
      numero: "573003238218",
      email: "cbelloh@unal.edu.co",
      linkedin: "https://www.linkedin.com/in/camilo-andres-bello-hernandez/",
      foto: CamiloBelloFoto,
    },
    {
      nombre: "Andres Felipe\nCallejas Ruiz",
      numero: "573126400738",
      email: "acallejasr@unal.edu.co",
      linkedin:
        "https://www.linkedin.com/in/andres-felipe-callejas-ruiz-4691992b7/",
      foto: AndresCallejasFoto,
    },
    {
      nombre: "Kevin Jay\nHerrera",
      numero: "573008667253",
      email: "kjayh@unal.edu.co",
      linkedin: "https://www.linkedin.com/in/kevin-jay-herrera-1a1291233/",
      foto: KevinHerreraFoto,
    },
    {
      nombre: "Juan Pablo\nEscobar Marín",
      numero: "573218426226",
      email: "jmazob@unal.edu.co",
      linkedin: "https://www.linkedin.com/in/pablo-escobar-marín-5b2979280/",
      foto: JuanEscobarFoto,
    },
    {
      nombre: "Sergio Daniel\nGomez Palacios",
      numero: "573164392848",
      email: "sgomezpa@unal.edu.co",
      linkedin: "https://www.linkedin.com/in/sergio-g%C3%B3mez-0a169b358",
      foto: SergioGomezFoto,
    },
  ];

  const openWhatsApp = (phone) => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  const formatPhoneNumber = (phone) => {
    return `+${phone.substring(0, 2)} ${phone.substring(
      2,
      5
    )} ${phone.substring(5, 8)} ${phone.substring(8)}`;
  };

  return (
    <>
      <div className={styles["contactanos-container"]}>
        <h1>Contactanos</h1>
        <div className={styles["contactanos-list"]}>
          {equipo.map((miembro, index) => (
            <div key={index} className={styles["contactanos-card"]}>
              {miembro.foto ? (
                <img
                  src={miembro.foto}
                  alt={`Foto de ${miembro.nombre}`}
                  className={styles["contactanos-foto"]}
                />
              ) : (
                <div className={styles["contactanos-icono-usuario"]}>
                  <FaUser size={40} />
                </div>
              )}
              <h3 className={styles["contactanos-nombre"]}>{miembro.nombre}</h3>

              {/* Teléfono con WhatsApp - Ahora arriba */}
              <div
                className={styles["contactanos-detalle"]}
                onClick={() => openWhatsApp(miembro.numero)}
                style={{ cursor: "pointer" }}
              >
                <FaPhone className={styles["contactanos-icono"]} />
                <span>{formatPhoneNumber(miembro.numero)}</span>
              </div>

              {/* Email - Ahora debajo del teléfono */}
              <a
                href={`mailto:${miembro.email}`}
                className={styles["contactanos-detalle"]}
                style={{ textDecoration: "none" }}
              >
                <FaEnvelope className={styles["contactanos-icono"]} />
                <span>{miembro.email}</span>
              </a>

              {/* LinkedIn */}
              {miembro.linkedin && (
                <a
                  href={miembro.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["contactanos-detalle"]}
                  style={{ textDecoration: "none" }}
                >
                  <FaLinkedin className={styles["contactanos-icono"]} />
                  <span>Ver perfil</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
