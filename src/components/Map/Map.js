import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import '../Map/Map.css';

export default function Map({ selectedCoords }) {
  console.log(selectedCoords);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom] = useState(16);
  maptilersdk.config.apiKey = 'w76ogODTcB6r9clqLPUa';
  const markerRef = useRef(null);
  useEffect(() => {
    if(!map.current) {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.OPENSTREETMAP,
        center: [selectedCoords.lng, selectedCoords.lat],
        zoom: zoom,
        speed: 1,
        curve: 1,

        easing(t) {
          return t; // Linear easing for smoother animation
        },
      });
      map.current.setMinZoom(15); // Set the minimum zoom level (e.g., 5)
      map.current.setMaxZoom(18);
      // const bounds = [
      //   [minLongitude, minLatitude], // Southwest coordinates
      //   [maxLongitude, maxLatitude], // Northeast coordinates
      // ];
      // map.current.fitBounds(bounds, {
      //   padding: 20, // Optional padding around the bounds (in pixels)
      //   maxZoom: 14, // Optional maximum zoom level for fitting the bounds
      // });

      markerRef.current =  new maptilersdk.Marker({ color: '#FF0000' })
        .setLngLat([selectedCoords.lng, selectedCoords.lat])
        .addTo(map.current);
    }
    else {
      map.current.flyTo({
        center: [selectedCoords.lng, selectedCoords.lat],
        zoom: zoom,
        speed: 1, // Adjust the speed of transition as needed
        curve: 1, // Control the smoothness of the transition curve
        easing(t) {
          return t; // Linear easing for smoother animation
        },
      });

      if (markerRef.current) {
        markerRef.current.setLngLat([selectedCoords.lng, selectedCoords.lat]);
      }
    }
  }, [selectedCoords, zoom]);

  return <div className="map-wrap"><div ref={mapContainer} className="map" /></div>;
}
