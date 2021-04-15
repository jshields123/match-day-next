import { ComposableMap, Geographies,
  Geography,
  ZoomableGroup, } from "react-simple-maps"

import React from 'react'
const geoUrl =
"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function SecondMap() {

  return (
    <div>
      <ComposableMap> 
        <ZoomableGroup zoom={1} center={{lat: 3, lng: 4}}>
          <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}
