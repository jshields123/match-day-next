import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { googleApi } from '../app.config';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 10,
    lng: 10
  };
  
  function Map() {
    const [lat, setLat] = React.useState(0)
    const [lng, setLng] = React.useState(0)
    
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: `${googleApi}`
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)

      setLat(5)
      setLng(10)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
  }
  export default React.memo(Map)