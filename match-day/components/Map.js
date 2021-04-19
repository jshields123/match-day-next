// import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';
// import { googleApi } from '../app.config';


import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import { mapAPI } from "../app.config";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = `${mapAPI}`;

const Map = () => {
	const mapContainer = useRef();
	const [lng, setLng] = useState(-2.2446022);
	const [lat, setLat] = useState(51.3498525);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});
		map.on("move", () => {
			setLng(map.getCenter().lng.toFixed(4));
			setLat(map.getCenter().lat.toFixed(4));
			setZoom(map.getZoom().toFixed(2));
		});
		return () => map.remove();
	}, []);

	return (
		<div>
			<div className="sidebar">
				Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
			</div>
			<div className="map-container" ref={mapContainer} />
		</div>
	);
};

export default Map;
// ReactDOM.render(<Map />, document.getElementById("app"));




































// const containerStyle = {
//     width: '400px',
//     height: '400px'
//   };
  
//   const center = {
//     lat: 10,
//     lng: 10
//   };
  
//   function Map() {
//     const [lat, setLat] = React.useState(0)
//     const [lng, setLng] = React.useState(0)
    
//     const { isLoaded } = useJsApiLoader({
//       id: 'google-map-script',
//       googleMapsApiKey: `${googleApi}`
//     })
  
//     const [map, setMap] = React.useState(null)

//     React.useEffect(() => {
//       setLat(5)
//       setLng(10)
//     })
  
//     const onLoad = React.useCallback(function callback(map) {
//       const bounds = new window.google.maps.LatLngBounds();
//       map.fitBounds(bounds);

//       setMap(map)


//     }, [])
  
//     const onUnmount = React.useCallback(function callback(map) {
//       setMap(null)
//     }, [])
  
//     return isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={10}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//         >
//           { /* Child components, such as markers, info windows, etc. */ }
//           <></>
//         </GoogleMap>
//     ) : <><p>hello</p></>
//   }
//   export default React.memo(Map)