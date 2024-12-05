import React, { useState, useEffect, useRef } from 'react';
import './APropos.css';

function APropos() {
    const chapitres = [
        { titre: 'Notre histoire', contenu: 'Bienvenue chez AeoniX, une agence dédiée à la création de sites web sur mesure, qu’ils soient vitrines, e-commerce ou entièrement personnalisés.' },
        { titre: 'Notre mission', contenu: 'Notre objectif est simple : créer des expériences digitales uniques pour nos clients, en mettant l’accent sur l’innovation et la personnalisation.' },
        { titre: 'Nos valeurs', contenu: 'Innovation : Nous restons à la pointe des technologies pour proposer des solutions modernes et efficaces.\nQualité : Chaque projet est une priorité et nous nous assurons de répondre aux plus hauts standards.' },
        { titre: 'Notre équipe', contenu: 'Notre équipe est composée de développeurs, designers, chefs de projet et experts techniques passionnés par la création de sites web innovants et performants.' },
        { titre: 'Ce qui nous distingue', contenu: 'Ce qui nous distingue, c’est notre capacité à comprendre les besoins uniques de chaque client et à offrir des solutions personnalisées, qu’il s’agisse de sites vitrines ou de plateformes e-commerce.' },
        { titre: 'Pourquoi nous choisir ?', contenu: 'Choisir AeoniX, c’est opter pour un partenaire fiable et réactif, capable de vous offrir des solutions sur-mesure qui répondent aux exigences du marché.' }
    ];

    const [chapitreSelectionne, setChapitreSelectionne] = useState(null);

    const detailsRef = useRef(null);

    // Fermer la carte si on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (detailsRef.current && !detailsRef.current.contains(event.target)) {
                setChapitreSelectionne(null);
            }
        };

        if (chapitreSelectionne !== null) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [chapitreSelectionne]);

    const toggleChapitre = (index) => {
        setChapitreSelectionne(chapitreSelectionne === index ? null : index);
    };

    return (
        <div className="apropos-container">
            <div className="chapitres-container">
                {chapitres.map((chapitre, index) => (
                    <div
                        key={index}
                        className={`chapitre-card ${chapitreSelectionne === index ? 'active' : ''}`}
                        onClick={() => toggleChapitre(index)}
                    >
                        <h3>{chapitre.titre}</h3>
                    </div>
                ))}
            </div>

            {chapitreSelectionne !== null && (
                <div className="chapitres-details-container">
                    <div ref={detailsRef} className="chapitre-details-card">
                        <button
                            className="fermer-details"
                            onClick={() => setChapitreSelectionne(null)}
                        >
                            &times;
                        </button>
                        <div className="chapitre-text">
                            <h3>{chapitres[chapitreSelectionne].titre}</h3>
                            <p>{chapitres[chapitreSelectionne].contenu}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default APropos;
