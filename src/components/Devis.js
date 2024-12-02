import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Pour naviguer entre les composants
import './Devis.css';
import FormulaireDevisSiteVitrine from './FormulaireDevisSiteVitrine';
import FormulaireDevisECommerce from './FormulaireDevisECommerce';
import FormulaireDevisSitePersonnalise from './FormulaireDevisSitePersonnalise';
import FormulaireDevisSEO from './FormulaireDevisSEO';
import FormulaireDevisHébergement from './FormulaireDevisHébergement';
import FormulaireDevisMaintenance from './FormulaireDevisMaintenance';

function Devis() {
    const [selectedForm, setSelectedForm] = useState(null); // État pour suivre le formulaire sélectionné
    const navigate = useNavigate(); // Utilisé pour naviguer vers le composant Contact.js

    // Naviguer vers Contact.js
    const allerAContact = () => navigate('/contact');

    // Définir quel formulaire afficher en fonction de la sélection
    const afficherFormulaire = (type) => setSelectedForm(type);

    // Réinitialiser l'affichage pour retourner à la section "DEVIS RAPIDE"
    const fermerFormulaire = () => setSelectedForm(null);

    return (
        <>
            {/* Affichage de "DEVIS RAPIDE" ou des cartes en fonction de l'état */}
            {!selectedForm && (
                <div className="devis-container">
                    <h1 className="devis-titre">DEVIS RAPIDE</h1>
                    <p className="devis-description">Vous pouvez obtenir un devis de deux façons :</p>
                    <ul className="devis-options">
                        <li>
                            Directement depuis le site en cliquant{' '}
                            <span className="link" onClick={() => setSelectedForm('cards')}>
                                ici
                            </span>{' '}
                            : Une fois les services souhaités sélectionnés, vous pouvez valider vos choix et télécharger votre devis au format PDF.
                        </li>
                        <li>
                            Nous contacter directement : Choisissez un moyen de communication dans{' '}
                            <span className="link" onClick={allerAContact}>
                                Contact
                            </span>
                            . Nous vous apporterons une réponse au plus vite.
                        </li>
                    </ul>
                </div>
            )}

            {/* Affichage des cartes de devis prédéfinis */}
            {selectedForm === 'cards' && (
                <div className="devis-cards-container">
                    <h2>Choisissez un devis</h2>
                    <div className="cards-grid">
                        <div className="devis-card" onClick={() => afficherFormulaire('vitrine')}>
                            <h3>Site Vitrine</h3>
                        </div>
                        <div className="devis-card" onClick={() => afficherFormulaire('eCommerce')}>
                            <h3>Site E-commerce</h3>
                        </div>
                        <div className="devis-card" onClick={() => afficherFormulaire('sitePersonnalise')}>
                            <h3>Site Personnalisé</h3>
                        </div>
                        <div className="devis-card" onClick={() => afficherFormulaire('seo')}>
                            <h3>Référencement et SEO</h3>
                        </div>
                        <div className="devis-card" onClick={() => afficherFormulaire('hebergement')}>
                            <h3>Hébergement sécurisé</h3>
                        </div>
                        <div className="devis-card" onClick={() => afficherFormulaire('maintenance')}>
                            <h3>Gestion et maintenance</h3>
                        </div>
                    </div>
                </div>
            )}

            {/* Affichage du formulaire spécifique en fonction de la sélection */}
            {selectedForm === 'vitrine' && <FormulaireDevisSiteVitrine onClose={fermerFormulaire} />}
            {selectedForm === 'eCommerce' && <FormulaireDevisECommerce onClose={fermerFormulaire} />}
            {selectedForm === 'sitePersonnalise' && <FormulaireDevisSitePersonnalise onClose={fermerFormulaire} />}
            {selectedForm === 'seo' && <FormulaireDevisSEO onClose={fermerFormulaire} />}
            {selectedForm === 'hebergement' && <FormulaireDevisHébergement onClose={fermerFormulaire} />}
            {selectedForm === 'maintenance' && <FormulaireDevisMaintenance onClose={fermerFormulaire} />}
        </>
    );
}

export default Devis;
