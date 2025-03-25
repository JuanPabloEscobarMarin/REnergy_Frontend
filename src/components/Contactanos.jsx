import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import CamiloBelloFoto from "./assets/perfiles/camilo-bello.jpg";
import SergioGomezFoto from "./assets/perfiles/sergio-gomez.jpg";
import KevinHerreraFoto from "./assets/perfiles/kevin-herrera.jpg";
import JuanEscobarFoto from "./assets/perfiles/juan-escobar.jpg";
import AndresCallejasFoto from "./assets/perfiles/andres-callejas.jpg";

export const Contactanos = () => {
  const equipo = [
    {
      nombre: "Camilo Bello",
      numero: "573003238218",
      email: "cbelloh@unal.edu.co",
      linkedin: "https://www.linkedin.com/in/camilo-andres-bello-hernandez/",
      foto: CamiloBelloFoto,
    },
    {
      nombre: "Andres Callejas",
      numero: "573126400738",
      email: "acallejasr@unal.edu.co",
      linkedin:
        "https://www.linkedin.com/in/andres-felipe-callejas-ruiz-4691992b7/",
      foto: AndresCallejasFoto,
    },
    {
      nombre: "Kevin Jay",
      numero: "573008667253",
      email: "kjayh@unal.edu.co",
      linkedin: "https://www.linkedin.com/in/kevin-jay-herrera-1a1291233/",
      foto: KevinHerreraFoto,
    },
    {
      nombre: "Juan Escobar",
      numero: "573218426226",
      email: "jmazob@unal.edu.co",
      linkedin: "https://www.linkedin.com/in/pablo-escobar-marín-5b2979280/",
      foto: JuanEscobarFoto,
    },
    {
      nombre: "Sergio Gomez",
      numero: "573164392848",
      email: "sgomezpa@unal.edu.co",
      linkedin: "https://www.linkedin.com/in/sergio-g%C3%B3mez-0a169b358",
      foto: SergioGomezFoto,
    },
  ];

  return (
    <div className="flex pb-10 gap-5">
      {equipo.map((miembro, index) => (
        <div key={index} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm p-3">

          <div class="flex flex-col items-center">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={miembro.foto} alt={miembro.nombre} />
            <h5 class="mb-1 text-xl font-medium text-gray-900">{miembro.nombre}</h5>
            <span class="text-sm text-gray-500">Ing. Sistemas e Informatica</span>

            <div class="flex mt-4 md:mt-6">
              <a href={miembro.linkedin} class="inline-flex gap-2 items-center px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"><FaLinkedin /> LinkedIn</a>
              <a href={miembro.email} class="flex gap-2 justify-center items-center py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"><FaEnvelope />{miembro.email}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
