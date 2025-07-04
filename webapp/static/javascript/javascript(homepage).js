/**
 * File: javascript(homepage).js
 */
document.addEventListener("DOMContentLoaded", () => {
  // Chiameremo initMap una volta che tutto il DOM è pronto
  initMap();

  // Questi sono i tuoi pulsanti di esempio
  document.getElementById("filters-btn").addEventListener("click", () => {
    alert("Funzionalità Filtri in fase di sviluppo!");
  });

  document.getElementById("ai-btn").addEventListener("click", () => {
    alert("Funzionalità AI in fase di sviluppo!");
  });
});

/**
 * Funzione per inizializzare la mappa.
 */
function initMap() {
  // Posizione iniziale (ad esempio Roma)
  const rome = { lat: 41.9028, lng: 12.4964 };

  // Crea la mappa dentro il div con id="map"
  const map = new google.maps.Map(document.getElementById("map"), {
    center: rome,                   // Centro iniziale
    zoom: 8,                        // Livello di zoom
    mapTypeControl: true,           // Permette di passare da Roadmap a Satellite
    streetViewControl: true,        // Mostra Pegman (Street View)
    fullscreenControl: true,        // Icona Fullscreen
    zoomControl: true               // Controllo di Zoom
  });

  // Aggiungiamo un marker semplice su Roma
  new google.maps.Marker({
    position: rome,
    map: map,
    title: "Benvenuto a Roma!"
  });

  // Se vuoi aggiungere altre funzionalità, puoi farlo qui...
}
