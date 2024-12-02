// src/components/Modale.js

import React from 'react';
import './Modale.css';  // Si tu as un fichier CSS pour la modale

const Modale = ({ message, onClose }) => {
  return (
    <div className="modale-overlay">
      <div className="modale-content">
        <p>{message}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Modale;
