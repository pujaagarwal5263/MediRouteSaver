import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker1 from '../assets/mapmarker.svg';
import mapmarker from '../assets/ep1.svg';
import axios from 'axios';
import { Heading } from '@chakra-ui/react';

const MapComponent = () => {
  const location = useLocation();
  const [markersData, setMarkersData] = useState([]);
  const [routeCoordinates, setrouteCoordinates] = useState([]);
  const [shortestDistance, setshortestDistance] = useState();
  const { state } = location;

    // Function to make a POST request
    const sendPostRequest = async () => {
      if (state) {
        try {
          const response = await axios.post('https://mediroute-backend.onrender.com/route-order', {
            state
          });
  
          // Handle the response data
          console.log('Received data:', response.data);
          
           setMarkersData(response.data.result);
           setshortestDistance(response.data.shortestDistance)
           //setMarkersData([...markersData,{Postcode: "Destination- Southampton General Hospital", Latitude:50.9331825, Longitude: -1.4344979 }])
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };
  
    useEffect(() => {
      sendPostRequest();
    }, []);

    useEffect(() => {
      const coordinates = markersData.map((marker) => [marker.Latitude, marker.Longitude]);
      setrouteCoordinates(coordinates.concat([[50.9331825, -1.4344979]])); // Adding University destination
    }, [markersData]);
  
    // Sample route coordinates (Latitude, Longitude)
    // const routeCoordinates = [
    //   [50.9460637,-1.4757606], //source
    //   [50.9859114, -1.4419434], // Sample1 collection
    //   [50.9197539, -1.5168058], // Sample2 collection
    //   [50.9331825, -1.4344979], // University - destination
    // ];
  
    const sourceIcon = new L.Icon({
      iconUrl: marker1,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  
    const destinationIcon = new L.Icon({
      iconUrl: marker1,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  
    const intermediateIcon = new L.Icon({
      iconUrl: mapmarker,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  
    return (
      <>
      <MapContainer center={[50.9331825, -1.4344979]} zoom={12} style={{ height: '700px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* {routeCoordinates.slice(1).map((coords, index) => (
          <Marker key={index} position={coords} icon={intermediateIcon}>
            <Tooltip>{`Sample ${index + 1} collection`}</Tooltip>
          </Marker>
        ))} */}
        {markersData.map((marker, index) => (
        <Marker key={index} position={[marker.Latitude, marker.Longitude]} icon={index===0 ? sourceIcon: intermediateIcon}>
          <Tooltip>{index===0 ? "Source- " + marker.Postcode : "Stop " + `${index} - ` + marker.Postcode }</Tooltip>
        </Marker>
      ))}
        <Marker position={[50.9331825, -1.4344979]} icon={destinationIcon}>
        <Tooltip>Destination- Southampton General Hospital</Tooltip>
      </Marker>
      <Polyline positions={routeCoordinates} color="blue" />
      </MapContainer>
      <div style={{marginTop: "15px", marginLeft:"20px"}}>
      {shortestDistance ? <Heading as="h6" size="md">Shortest Distance among the points: <span style={{color:"blue"}}>{shortestDistance} km</span></Heading> : <p></p> }
      </div>
      </>
    );
  };
  
  export default MapComponent;
