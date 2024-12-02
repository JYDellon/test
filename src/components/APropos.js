import React, { useState } from 'react';
import './APropos.css'; // Fichier CSS pour styliser le composant

function APropos() {
    const [selectedChapitre, setSelectedChapitre] = useState(null);

    const chapitres = [
        { titre: 'Notre histoire', contenu: 'Bienvenue chez AeoniX, une agence dédiée à la création de sites web sur mesure, qu’ils soient vitrines, e-commerce ou entièrement personnalisés.' },
        { titre: 'Notre mission', contenu: 'Notre objectif est simple : créer des expériences digitales uniques pour nos clients, en mettant l’accent sur l’innovation et la personnalisation.' },
        { titre: 'Nos valeurs', contenu: 'Innovation : Nous restons à la pointe des technologies pour proposer des solutions modernes et efficaces.\nQualité : Chaque projet est une priorité et nous nous assurons de répondre aux plus hauts standards.' },
        { titre: 'Notre équipe', contenu: 'Notre équipe est composée de développeurs, designers, chefs de projet et experts techniques passionnés par la création de sites web innovants et performants.' },
        { titre: 'Ce qui nous distingue', contenu: 'Ce qui nous distingue, c’est notre capacité à comprendre les besoins uniques de chaque client et à offrir des solutions personnalisées, qu’il s’agisse de sites vitrines ou de plateformes e-commerce.' },
        { titre: 'Pourquoi nous choisir ?', contenu: 'Choisir AeoniX, c’est opter pour un partenaire fiable et réactif, capable de vous offrir des solutions sur-mesure qui répondent aux exigences du marché.' }
    ];

    const handleSelectChapitre = (index) => {
        setSelectedChapitre(index === selectedChapitre ? null : index);
    };

    return (
        <div className="apropos-container">
            <div className="chapitres-container">
                {chapitres.map((chapitre, index) => (
                    <div
                        key={index}
                        className={`chapitre-card chapitre-card-${index + 1} ${
                            selectedChapitre === index ? 'active' : ''
                        }`}
                        onClick={() => handleSelectChapitre(index)}
                    >
                        {chapitre.titre}
                    </div>
                ))}
            </div>
            <div className="paragrapheIntro-container">
                <p className="paragrapheIntro">
                    {selectedChapitre !== null
                        ? chapitres[selectedChapitre].contenu
                        : 'Bienvenue chez [Nom de ton entreprise], une agence passionnée par la création de sites web innovants et sur mesure.'}
                </p>
            </div>
        </div>
    );
}

export default APropos;





