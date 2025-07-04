// Sidebar.js

import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  // Se non è aperta, non mostriamo niente (return null)
  if (!isOpen) {
    return null;
  }

  // Se è aperta, mostriamo il div con la X in alto a destra
  return (
    <div
      className="bg-light shadow p-3"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '250px',
        transition: 'width 0.3s',
        overflow: 'hidden',
        zIndex: 9999, // per stare sopra altri elementi
      }}
    >
      {/* Icona "X" in alto a destra per chiudere */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer'
        }}
      >
        X
      </button>

      {/* Contenuto del menu */}
      <ul className="list-unstyled mt-5">
        <li className="mb-3">
          <i className="bi bi-person me-2" />
          Profilo
        </li>
        <li className="mb-3">
          <i className="bi bi-heart me-2" />
          Posti Piaciuti
        </li>
        <li className="mb-3">
          <i className="bi bi-chat me-2" />
          Messaggi
        </li>
        <li className="mb-3">
          <i className="bi bi-bell me-2" />
          Novità
        </li>
        <li className="mb-3">
          <i className="bi bi-gear me-2" />
          Impostazioni
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
