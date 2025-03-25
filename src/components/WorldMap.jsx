import React, { useEffect, useState } from "react";
import styles from "./WorldMap.module.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Importa el CSS de react-tooltip

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
    solarCapacity: 100,
    renewablesPercentage: 300
  });

  const getData = () => {
    setIsLoading(true);
    fetch(`http://localhost:8080/energy-data/${year}/${countryName}`)
      .then((res) => res.json().then((json) => setData(json)))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getData();
    console.log(data[energyType]);
  }, [countryName])

  return (
    <div className="h-screen">
      <select onChange={(e) => setYear(e.target.value)}>
        <option value="2023">2023</option>
        <option value="2020">2020</option>
      </select>

      <select onChange={(e) => setEnergyType(e.target.value)}>
        <option value="renewablesPercentage">Porcentaje de energia renovable</option>
        <option value="solarCapacity">Capacidad energia solar instalada</option>
        <option value="biofuelsProductionTWh">Opcion 3</option>
      </select>
      <Tooltip id="my-tooltip" content={isLoading ? "Loading..." : `nombre: ${data.name}, energy type: ${energyType}, data: ${data[energyType]}`} />
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
                      setEnergyCountry(null)
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
    </div>
  );
};
