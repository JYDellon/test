import './FormulaireContact.css';
import React, { useState } from 'react';

const FormulaireContact = ({ onClose }) => { // Ajout de la prop onClose
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');


  const envoyerMessage = async (data) => {
    try {
      // Ajout d'un log pour vérifier les données avant l'envoi
      console.log('Données envoyées au serveur:', data);
  
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if (response.ok) {
        console.log('Message envoyé avec succès!', result);
        if (onClose) onClose(); // Ferme la modale après succès
      } else {
        console.log('Erreur:', result.error);
      }
    } catch (error) {
      console.error('Erreur de requête:', error);
    }
  };
  

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const data = {
      prenom,
      nom,
      email,
      telephone,
      message,
    };
    envoyerMessage(data); // Appel à la fonction envoyerMessage
  };

  return (
    <form onSubmit={handleSubmit} className="form-contact">
      {/* Ligne 1 : Prénom et Nom */}
      <div className="ligne1">
        <div className="champ">
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className='lesInputs'
          />
        </div>
        <div className="champ">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className='lesInputs'
          />
        </div>
      </div>

      {/* Ligne 2 : Email et Téléphone */}
      <div className="ligne2">
        <div className="champ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='lesInputs'
          />
        </div>
        <div className="champ">
          <label htmlFor="telephone">Téléphone</label>
          <input
            type="text"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className='lesInputs'
          />
        </div>
      </div>

      {/* Ligne 3 : Message */}
      <div className="ligne3">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default FormulaireContact;
