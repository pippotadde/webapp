// Map.js
import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      console.log("✅ Google Maps API caricata con successo!");
      console.log("mapRef.current:", mapRef.current); // Controlla se è il div

      const mapOptions = {
        center: { lat: 45.4384, lng: 10.9916 }, // Esempio: Verona - USA LE TUE COORDINATE!
        zoom: 13,
      };
      console.log("Opzioni mappa:", mapOptions);

      if (mapRef.current) {
        try {
          const map = new window.google.maps.Map(mapRef.current, mapOptions);
          console.log("🗺️ Mappa inizializzata:", map);
        } catch (error) {
          console.error("🔴 Errore durante l'inizializzazione della mappa:", error);
        }
      } else {
        console.error("🔴 mapRef.current è null. Il div non è ancora nel DOM?");
      }

    } else {
      console.error("🔴 Google Maps API non ancora caricata al momento dell'esecuzione di useEffect.");
    }
  }, []); // Array di dipendenze vuoto

  return (
    // IL DIV DEVE AVERE DIMENSIONI!
    <div ref={mapRef} style={{ width: '100%', height: '500px', backgroundColor: 'lightgrey' }} />
    // Ho aggiunto un backgroundColor per vedere se il div stesso è visibile
  );
};

export default Map;