import React, { memo } from "react";

import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const MapChart = ({ setTooltipContent }) => {

  return (
    <div data-tip="" >
      <ComposableMap>
          <Geographies geography="/features.json" >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                        // fill: "#D6D6DA",
                        // fill: "green",
                      fill: "#C8C6C6",
                      outline: "none"
                    },
                    hover: {
                      // fill: "#F53",
                      fill: "#F0E5CF",
                      outline: "none"
                    },
                    pressed: {
                      // fill: "#E42",
                      fill: "#F7F6F2",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
