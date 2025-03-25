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

export const WorldMap = () => {
  const [content, setContent] = useState("");
  const [energyCountry, setEnergyCountry] = useState(null);
  const [energyType, setEnergyType] = useState("renewablesPercentage");
  const [year, setYear] = useState(2023);
  const [countryName, setCountryName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    solarCapacity: null,
    renewablesPercentage: null,
    biofuelsProductionTWh: null,
    electricitySolarTWh: null,
    electricityWindTWh: null,
    electricityHydroTWh: null,
    biofuelsProductivityTWh: null,
    name: "",
  });

  const getData = () => {
    if (!countryName) return;
    setIsLoading(true);
    fetch(`http://localhost:8080/energy-data/${year}/${countryName}`)
      .then((res) => res.json())
      .then((json) => {
        setData({
          solarCapacity: json.solarCapacity,
          renewablesPercentage: json.renewablesPercentage,
          biofuelsProductionTWh: json.biofuelsProductionTWh,
          electricitySolarTWh: json.electricitySolarTWh,
          electricityWindTWh: json.electricityWindTWh,
          electricityHydroTWh: json.electricityHydroTWh,
          biofuelsProductivityTWh: json.biofuelsProductivityTWh,
          name: json.name,
        });
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, [countryName, year]);

  return (
    <div className={styles.contenedor}>
      <select
        onChange={(e) => setEnergyType(e.target.value)}
        className={styles.dropdown}
      >
        <option value="renewablesPercentage">
          Porcentaje de energía renovable
        </option>
        <option value="solarCapacity">
          Capacidad de energía solar instalada
        </option>
        <option value="biofuelsProductionTWh">
          Producción de biocombustibles (TWh)
        </option>
        <option value="electricitySolarTWh">Electricidad solar (TWh)</option>
        <option value="electricityWindTWh">Electricidad eólica (TWh)</option>
        <option value="electricityHydroTWh">
          Electricidad hidroeléctrica (TWh)
        </option>
        <option value="biofuelsProductivityTWh">
          Productividad de biocombustibles (TWh)
        </option>
      </select>
      <Tooltip
        id="my-tooltip"
        content={
          isLoading
            ? "Loading..."
            : `nombre: ${data.name}, energy type: ${energyType}, data: ${data[energyType]}`
        }
      />
      <div className={styles.mapa}>
        <ComposableMap>
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { name } = geo.properties;
                      setCountryName(name);
                    }}
                    onMouseLeave={() => {
                      setEnergyCountry(null);
                    }}
                    style={{
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                    }}
                    data-tooltip-id="my-tooltip"
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderLabels}>
          <span>1965</span>
          <input
            type="range"
            min="1965"
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
