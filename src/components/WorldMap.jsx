import React, { useState } from "react";
import styles from "./WorldMap.module.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Importa el CSS de react-tooltip

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "/src/components/world.json";

export const WorldMap = () => {
  const [content, setContent] = useState("");

  return (
    <div className={styles.contenedor}>
      <h1>Mapa Titulo</h1>
      <Tooltip id="my-tooltip" content={content} />
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
                      setContent(`${name}`);
                    }}
                    onMouseLeave={() => {
                      setContent("");
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
