import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker1 from './components/marker1.png';
import mapmarker from './components/mapmarker.svg';

const MapComponent = () => {
  // Sample route coordinates (Latitude, Longitude)
  const routeCoordinates = [
    [50.9331825, -1.4344979], // London
    [50.9859114, -1.4419434], // Paris
    // Rome
    // Add more coordinates for the full route
  ];

  const customIcon = new L.Icon({
    iconUrl: mapmarker, // Replace with the path to your custom marker icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer center={[51.5074, -0.1278]} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {routeCoordinates.map((coords, index) => (
        <Marker key={index} position={coords} icon={customIcon}>
          <Popup>{`Marker ${index + 1}`}</Popup>
        </Marker>
      ))}
      <Polyline positions={routeCoordinates} color="blue" />
    </MapContainer>
  );
};

export default MapComponent;
