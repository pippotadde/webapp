// homepage.js

import React, { useState } from 'react';
// Import dei componenti come già fai
import Sidebar from '../../shared/components/Sidebar';
import SearchBar from '../../shared/components/SearchBar';
import Map from '../../shared/components/Map';

const HomePage = () => {
  console.log("✅ React sta funzionando correttamente!");

  // 1) Creo lo stato (false = sidebar inizialmente chiusa)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 2) Funzioni di apertura/chiusura
  const apriSidebar = () => {
    setIsSidebarOpen(true);
  };

  const chiudiSidebar = () => {
    setIsSidebarOpen(false);
  };

  return ( 
    <div>
      <h1 style={{ color: 'red' }}>TEST: React funziona</h1>
      {/* Pulsante che apre la sidebar */}
      <button 
        className="btn btn-primary m-3"
        onClick={apriSidebar}
      >
        Apri Menu
      </button>

      {/* Passo lo stato e la funzione di chiusura alla Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={chiudiSidebar}
      />

      {/* La parte principale della pagina, con la SearchBar e la mappa */}
      <div style={{ marginLeft: '0px' }}>
        <SearchBar />
        <Map />
      </div>
    </div>
  );
};

export default HomePage;
