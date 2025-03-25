import { SolarPanelIcon } from "./icons/SolarPanelIcon";
import { WindEnergyIcon } from "./icons/WindEnergyIcon";
import { WaterEnergyIcon } from "./icons/WaterEnergyIcon";
import { BiofuelIcon } from "./icons/BiofuelIcon";

export const About = () => {
  return (
    <section className="h-screen">
      <h1 className="text-3xl pb-10 text-bold">¿Qué puedo encontrar aquí?</h1>
      <ul className="flex flex-col gap-12">
        <li className="w-2/3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 py-5 px-2">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Energía Eólica</h5>
            <p className="mb-3 font-normal text-gray-700">Datos sobre la generación de electricidad a partir del viento,
              incluyendo capacidad instalada y crecimiento anual en TWh.</p>
          </div>
          <WindEnergyIcon />
        </li>
        <li className="self-end w-2/3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 py-5 px-2">
          <WaterEnergyIcon />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Energía Hidroeléctrica</h5>
            <p className="mb-3 font-normal text-gray-700">Información sobre la producción de energía a través del agua,
              con cifras de generación en diferentes países y continentes.</p>
          </div>
        </li>
        <li className="w-2/3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 py-5 px-2">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Biocombustibles</h5>
            <p className="mb-3 font-normal text-gray-700">Análisis del uso de biocombustibles como alternativa energética,
              su producción global y eficiencia comparada con otras fuentes.</p>
          </div>
          <BiofuelIcon />
        </li>

        <li className="self-end w-2/3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 py-5 px-2">
          <SolarPanelIcon />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Energía Solar</h5>
            <p className="mb-3 font-normal text-gray-700">Datos sobre la generación de electricidad a partir del sol,
              incluyendo avances en tecnología fotovoltaica y rendimiento en
              distintos países</p>
          </div>
        </li>

      </ul>
    </section>
  );
};
