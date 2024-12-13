import './FormulaireContact.css';
import React, { useState } from 'react';

const FormulaireContact = ({ onClose }) => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const envoyerMessage = async (data) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(true);
        if (onClose) onClose();
      } else {
        setError(result.error || 'Une erreur est survenue.');
      }
    } catch (error) {
      setError('Erreur de connexion au serveur.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { prenom, nom, email, telephone, message };
    envoyerMessage(data);
  };

  return (
    <form onSubmit={handleSubmit} className="form-contact-ui">
      {/* Ligne 1 : Prénom et Nom */}
      <div className="ligne">
        <div className="champ">
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className={`input ${!prenom && 'input-erreur'}`}
            placeholder="Entrez votre prénom"
          />
        </div>
        <div className="champ">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className={`input ${!nom && 'input-erreur'}`}
            placeholder="Entrez votre nom"
          />
        </div>
      </div>

      {/* Ligne 2 : Email et Téléphone */}
      <div className="ligne">
        <div className="champ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`input ${!email && 'input-erreur'}`}
            placeholder="exemple@domaine.com"
          />
        </div>
        <div className="champ">
          <label htmlFor="telephone">Téléphone</label>
          <input
            type="text"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="input"
            placeholder="0123456789"
          />
        </div>
      </div>

      {/* Ligne 3 : Message */}
      <div className="ligne">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea"
          placeholder="Écrivez votre message ici..."
        ></textarea>
      </div>

      {/* Feedback utilisateur */}
      {error && <div className="message-erreur">{error}</div>}
      {success && <div className="message-success">Message envoyé avec succès !</div>}

      {/* Bouton */}
      <button
        type="submit"
        className="bouton-envoyer"
        disabled={!prenom || !nom || !email || !message || isSubmitting}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  );
};

export default FormulaireContact;
