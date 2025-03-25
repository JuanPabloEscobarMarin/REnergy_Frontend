import { Roles } from "./Roles";

export const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="text-4xl text-bold bg-linear-to-r bg-clip-text from-green-500 to-red-500 text-center">
        <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Hola somos REnergy:
          <Roles></Roles>
        </h1>

        <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 px-30">
          REnergy es una aplicación web integral e interactiva para
          visualización y gestión de datos registrados desde 1965 hasta 2023
          relacionados con alternativas de energía renovable. En específico la
          solar, eólica, biocombustibles e hidroeléctrica</p>
      </div>
    </section>
  );
};
