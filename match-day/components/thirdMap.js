import React from 'react'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'
import { formatRelative } from 'date-fns'
import { googleApi } from '../app.config.js'
import mapStyles from './snazzyMaps'

const libraries = ['places']
const mapContainerStyle = {
  width: '60vw',
  height: '60vw',
}
const center = {
  lat: 43.2,
  lng: 79
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}

export default function Mappy() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: googleApi,
    libraries,
  })

  if (loadError) return 'Error loading'
  if (!isLoaded) return 'Loading Maps'
 
  return <div>
    <h1> Games <span role='img' aria-label='football'>⚽️</span></h1>
    <GoogleMap 
    mapContainerStyle={mapContainerStyle}
    zoom={8}
    center={center}
    options={options}
    ></GoogleMap>
  </div>

}