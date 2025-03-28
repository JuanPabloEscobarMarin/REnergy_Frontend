import React, { useEffect, useState } from "react";
import styles from "./WorldMap.module.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "/src/components/world.json";
const ENERGY_TYPES = {
  1: "Hidroeléctrica",
  2: "Solar",
  3: "Capacidad Solar Instalada",
  4: "Eólica",
  5: "Porcentaje Renovables",
};

export const WorldMap = () => {
  const [energyType, setEnergyType] = useState(1);
  const [year, setYear] = useState(2023);
  const [countryName, setCountryName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    values: {},
  });

  // Función para obtener datos del backend
  const getData = async () => {
    if (!countryName) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/energy-country-continent/${year}/country-continent/${encodeURIComponent(
          countryName
        )}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error fetching data");
      }

      const apiData = await response.json();

      // Transformación de datos
      const transformedData = {
        name: countryName,
        values: apiData.reduce((acc, item) => {
          acc[item.energyData.id] = item.value;
          return acc;
        }, {}),
      };

      setData(transformedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData({
        name: countryName,
        values: {},
        error: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [countryName, year]);

  return (
    <div className={styles.contenedor}>
      {/* Selector de tipo de energía */}
      <select
        onChange={(e) => setEnergyType(Number(e.target.value))}
        className={styles.dropdown}
        value={energyType}
      >
        {Object.entries(ENERGY_TYPES).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>

      {/* Tooltip para mostrar información */}
      <Tooltip
        id="world-map-tooltip"
        place="top"
        float={true}
        content={
          isLoading
            ? "Cargando datos..."
            : data.values[energyType] !== undefined
            ? `${data.name}: ${ENERGY_TYPES[energyType]} - ${data.values[energyType]}`
            : `${data.name}: No hay datos disponibles`
        }
      />

      {/* Mapa interactivo */}
      <div className={styles.mapa}>
        <ComposableMap projection="geoMercator">
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  // Color basado en el valor de energía (opcional)
                  const fillColor = "#D6D6DA"; // Color por defecto

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fillColor}
                      stroke="#EAEAEC"
                      strokeWidth={0.5}
                      onMouseEnter={() => {
                        const { name } = geo.properties;
                        setCountryName(name);
                      }}
                      onMouseLeave={() => {
                        setCountryName(null);
                      }}
                      data-tooltip-id="world-map-tooltip"
                      style={{
                        hover: {
                          fill: "#F53",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Selector de año */}
      <div className={styles.sliderContainer}>
        <div className={styles.sliderLabels}>
          <span>2002</span>
          <input
            type="range"
            min="2002"
            max="2023"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className={styles.slider}
          />
          <span>2023</span>
        </div>
        <span className={styles.currentYear}>{year}</span>
      </div>
    </div>
  );
};
