// import React, { useState } from 'react';
// import './APropos.css';

// function APropos() {
//     const [selectedChapitre, setSelectedChapitre] = useState(null);

//     const chapitres = [
//         { titre: 'Notre histoire', contenu: 'Bienvenue chez AeoniX, une agence dédiée à la création de sites web sur mesure, qu’ils soient vitrines, e-commerce ou entièrement personnalisés.' },
//         { titre: 'Notre mission', contenu: 'Notre objectif est simple : créer des expériences digitales uniques pour nos clients, en mettant l’accent sur l’innovation et la personnalisation.' },
//         { titre: 'Nos valeurs', contenu: 'Innovation : Nous restons à la pointe des technologies pour proposer des solutions modernes et efficaces.\nQualité : Chaque projet est une priorité et nous nous assurons de répondre aux plus hauts standards.' },
//         { titre: 'Notre équipe', contenu: 'Notre équipe est composée de développeurs, designers, chefs de projet et experts techniques passionnés par la création de sites web innovants et performants.' },
//         { titre: 'Ce qui nous distingue', contenu: 'Ce qui nous distingue, c’est notre capacité à comprendre les besoins uniques de chaque client et à offrir des solutions personnalisées, qu’il s’agisse de sites vitrines ou de plateformes e-commerce.' },
//         { titre: 'Pourquoi nous choisir ?', contenu: 'Choisir AeoniX, c’est opter pour un partenaire fiable et réactif, capable de vous offrir des solutions sur-mesure qui répondent aux exigences du marché.' }
//     ];

//     const handleSelectChapitre = (index) => {
//         setSelectedChapitre(index === selectedChapitre ? null : index);
//     };

//     return (
//         <div className="apropos-container">
//             <div className="chapitres-container">
//                 {chapitres.map((chapitre, index) => (
//                     <div
//                         key={index}
//                         className={`chapitre-card ${
//                             selectedChapitre === index ? 'active' : ''
//                         }`}
//                         onClick={() => handleSelectChapitre(index)}
//                     >
//                         {chapitre.titre}
//                     </div>
//                 ))}
//             </div>

//             {/* Conteneur qui s'ouvre ou se ferme en fonction du clic */}
//             <div
//                 className={`paragrapheIntro-container ${
//                     selectedChapitre !== null ? 'open' : 'closed'
//                 }`}
//             >
//                 {selectedChapitre !== null && (
//                     <p className="paragrapheIntro">
//                         {chapitres[selectedChapitre].contenu}
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default APropos;











import React, { useState } from 'react';
import './APropos.css';

function APropos() {
    const [selectedChapitre, setSelectedChapitre] = useState(null);
    const [isClosing, setIsClosing] = useState(false); // État pour suivre la fermeture

    const chapitres = [
        { titre: 'Notre histoire', contenu: 'Bienvenue chez AeoniX, une agence dédiée à la création de sites web sur mesure, qu’ils soient vitrines, e-commerce ou entièrement personnalisés.' },
        { titre: 'Notre mission', contenu: 'Notre objectif est simple : créer des expériences digitales uniques pour nos clients, en mettant l’accent sur l’innovation et la personnalisation.' },
        { titre: 'Nos valeurs', contenu: 'Innovation : Nous restons à la pointe des technologies pour proposer des solutions modernes et efficaces.\nQualité : Chaque projet est une priorité et nous nous assurons de répondre aux plus hauts standards.' },
        { titre: 'Notre équipe', contenu: 'Notre équipe est composée de développeurs, designers, chefs de projet et experts techniques passionnés par la création de sites web innovants et performants.' },
        { titre: 'Ce qui nous distingue', contenu: 'Ce qui nous distingue, c’est notre capacité à comprendre les besoins uniques de chaque client et à offrir des solutions personnalisées, qu’il s’agisse de sites vitrines ou de plateformes e-commerce.' },
        { titre: 'Pourquoi nous choisir ?', contenu: 'Choisir AeoniX, c’est opter pour un partenaire fiable et réactif, capable de vous offrir des solutions sur-mesure qui répondent aux exigences du marché.' }
    ];

    const handleSelectChapitre = (index) => {
        if (selectedChapitre === index) {
            // Si on reclique sur le même chapitre, fermer le message
            setIsClosing(true);
            setTimeout(() => {
                setSelectedChapitre(null);
                setIsClosing(false);
            }, 500); // Attente pour l'animation de fermeture (500ms)
        } else {
            if (selectedChapitre !== null) {
                // Si un message est déjà affiché, fermer d'abord l'ancien
                setIsClosing(true);
                setTimeout(() => {
                    setSelectedChapitre(index);
                    setIsClosing(false); // Réinitialisation après l'ouverture
                }, 500); // Attente pour l'animation de fermeture
            } else {
                // Si aucun message n'est affiché, afficher directement le nouveau
                setSelectedChapitre(index);
            }
        }
    };

    return (
        <div className="apropos-container">
            <div className="chapitres-container">
                {chapitres.map((chapitre, index) => (
                    <div
                        key={index}
                        className={`chapitre-card ${
                            selectedChapitre === index ? 'active' : ''
                        }`}
                        onClick={() => handleSelectChapitre(index)}
                    >
                        {chapitre.titre}
                    </div>
                ))}
            </div>

            {/* Conteneur qui s'ouvre ou se ferme en fonction du clic */}
            <div
                className={`paragrapheIntro-container ${
                    isClosing ? 'closing' : selectedChapitre !== null ? 'open' : 'closed'
                }`}
            >
                {selectedChapitre !== null && !isClosing && (
                    <p className="paragrapheIntro">
                        {chapitres[selectedChapitre].contenu}
                    </p>
                )}
            </div>
        </div>
    );
}

export default APropos;
