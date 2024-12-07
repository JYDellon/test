// import React, { useState } from 'react';
// import './APropos.css';

// function APropos() {
//     const chapitres = [
//         "Notre histoire",
//         "Notre mission",
//         "Nos valeurs",
//         "Notre équipe",
//         "Ce qui nous distingue",
//         "Pourquoi nous choisir ?",
//     ];

//     const chapitresDetails = [
//         "Bienvenue chez AeoniX, une agence dédiée à la création de sites web sur mesure, qu’ils soient vitrines, e-commerce ou entièrement personnalisés.",
//         "Notre objectif est simple : créer des expériences digitales uniques pour nos clients, en mettant l’accent sur l’innovation et la personnalisation.",
//         "Innovation : Nous restons à la pointe des technologies pour proposer des solutions modernes et efficaces. Qualité : Chaque projet est une priorité et nous nous assurons de répondre aux plus hauts standards.",
//         "Notre équipe est composée de développeurs, designers, chefs de projet et experts techniques passionnés par la création de sites web innovants et performants.",
//         "Ce qui nous distingue, c’est notre capacité à comprendre les besoins uniques de chaque client et à offrir des solutions personnalisées, qu’il s’agisse de sites vitrines ou de plateformes e-commerce.",
//         "Choisir AeoniX, c’est opter pour un partenaire fiable et réactif, capable de vous offrir des solutions sur-mesure qui répondent aux exigences du marché.",
//     ];

//     const [chapitreSelectionne, setChapitreSelectionne] = useState(null);

//     const toggleChapitre = (index) => {
//         setChapitreSelectionne(chapitreSelectionne === index ? null : index);
//     };

//     return (
//         <div className="apropos-container">
//             {chapitres.map((chapitre, index) => (
//                 <div key={index} className="chapitre-toggle-container">
//                     <div
//                         className={`chapitre-toggle-header ${chapitreSelectionne === index ? 'active' : ''}`}
//                         onClick={() => toggleChapitre(index)}
//                     >
//                         <h3>{chapitre}</h3>

//                     </div>
//                     {chapitreSelectionne === index && (
//                         <div className="chapitre-toggle-details">
//                             <p>{chapitresDetails[index]}</p>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default APropos;



















// import React, { useState } from 'react';
// import './APropos.css';

// function APropos() {
//     const chapitres = [
//         "Notre histoire",
//         "Notre mission",
//         "Nos valeurs",
//         "Notre équipe",
//         "Ce qui nous distingue",
//         "Pourquoi nous choisir ?",
//     ];

//     const chapitresDetails = [
//         "Bienvenue chez AeoniX, une agence dédiée à la création de sites web sur mesure, qu’ils soient vitrines, e-commerce ou entièrement personnalisés.",
//         "Notre objectif est simple : créer des expériences digitales uniques pour nos clients, en mettant l’accent sur l’innovation et la personnalisation.",
//         "Innovation : Nous restons à la pointe des technologies pour proposer des solutions modernes et efficaces. Qualité : Chaque projet est une priorité et nous nous assurons de répondre aux plus hauts standards.",
//         "Notre équipe est composée de développeurs, designers, chefs de projet et experts techniques passionnés par la création de sites web innovants et performants.",
//         "Ce qui nous distingue, c’est notre capacité à comprendre les besoins uniques de chaque client et à offrir des solutions personnalisées, qu’il s’agisse de sites vitrines ou de plateformes e-commerce.",
//         "Choisir AeoniX, c’est opter pour un partenaire fiable et réactif, capable de vous offrir des solutions sur-mesure qui répondent aux exigences du marché.",
//     ];

//     const [chapitreSelectionne, setChapitreSelectionne] = useState(null);

//     const toggleChapitre = (index) => {
//         setChapitreSelectionne(chapitreSelectionne === index ? null : index);
//     };

//     return (
//         <div className="apropos-container">
//             {chapitres.map((chapitre, index) => (
//                 <div
//                     key={index}
//                     className={`chapitre-toggle-container ${index % 2 === 0 ? 'gauche' : 'droite'}`}
//                     onClick={() => toggleChapitre(index)}
//                 >
//                     <div className="chapitre-toggle-header">
//                         <h3>{chapitre}</h3>
//                     </div>
//                     {chapitreSelectionne === index && (
//                         <div className="chapitre-toggle-details">
//                             <p>{chapitresDetails[index]}</p>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default APropos;



















// import React, { useState } from 'react';
// import './APropos.css';

// function APropos() {
//     const chapitres = [
//         "Notre histoire",
//         "Notre mission",
//         "Nos valeurs",
//         "Notre équipe",
//         "Ce qui nous distingue",
//         "Pourquoi nous choisir ?",
//     ];

//     const chapitresDetails = [
//         "Bienvenue chez AeoniX, une agence dédiée à la création de sites web sur mesure, qu’ils soient vitrines, e-commerce ou entièrement personnalisés.",
//         "Notre objectif est simple : créer des expériences digitales uniques pour nos clients, en mettant l’accent sur l’innovation et la personnalisation.",
//         "Innovation : Nous restons à la pointe des technologies pour proposer des solutions modernes et efficaces. Qualité : Chaque projet est une priorité et nous nous assurons de répondre aux plus hauts standards.",
//         "Notre équipe est composée de développeurs, designers, chefs de projet et experts techniques passionnés par la création de sites web innovants et performants.",
//         "Ce qui nous distingue, c’est notre capacité à comprendre les besoins uniques de chaque client et à offrir des solutions personnalisées, qu’il s’agisse de sites vitrines ou de plateformes e-commerce.",
//         "Choisir AeoniX, c’est opter pour un partenaire fiable et réactif, capable de vous offrir des solutions sur-mesure qui répondent aux exigences du marché.",
//     ];

//     const [chapitreSelectionne, setChapitreSelectionne] = useState(null);

//     const toggleChapitre = (index) => {
//         setChapitreSelectionne(chapitreSelectionne === index ? null : index);
//     };

//     return (
//         <div className="apropos-container">
//             {chapitres.map((chapitre, index) => (
//                 <div
//                     key={index}
//                     className={`chapitre-toggle-container ${index % 2 === 0 ? 'gauche' : 'droite'}`}
//                     style={{
//                         animationDelay: `${index * 0.2}s`
//                     }}
//                     onClick={() => toggleChapitre(index)}
//                 >
//                     <div className="chapitre-toggle-header">
//                         <h3>{chapitre}</h3>
//                     </div>
//                     {chapitreSelectionne === index && (
//                         <div className="chapitre-toggle-details">
//                             <p>{chapitresDetails[index]}</p>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default APropos;

























import React, { useState } from 'react';
import './APropos.css';

function APropos() {
    const chapitres = [
        "Notre histoire",
        "Notre mission",
        "Nos valeurs",
        "Notre équipe",
        "Ce qui nous distingue",
        "Pourquoi nous choisir ?",
    ];

    const chapitresDetails = [
        "Bienvenue chez AeoniX, une agence dédiée à la création de sites web sur mesure, qu’ils soient vitrines, e-commerce ou entièrement personnalisés.",
        "Notre objectif est simple : créer des expériences digitales uniques pour nos clients, en mettant l’accent sur l’innovation et la personnalisation.",
        "Innovation : Nous restons à la pointe des technologies pour proposer des solutions modernes et efficaces. Qualité : Chaque projet est une priorité et nous nous assurons de répondre aux plus hauts standards.",
        "Notre équipe est composée de développeurs, designers, chefs de projet et experts techniques passionnés par la création de sites web innovants et performants.",
        "Ce qui nous distingue, c’est notre capacité à comprendre les besoins uniques de chaque client et à offrir des solutions personnalisées, qu’il s’agisse de sites vitrines ou de plateformes e-commerce.",
        "Choisir AeoniX, c’est opter pour un partenaire fiable et réactif, capable de vous offrir des solutions sur-mesure qui répondent aux exigences du marché.",
    ];

    const [chapitreSelectionne, setChapitreSelectionne] = useState(null);

    const toggleChapitre = (index) => {
        setChapitreSelectionne(chapitreSelectionne === index ? null : index);
    };

    return (
        <div className="apropos-container">
            {chapitres.map((chapitre, index) => (
                <div
                    key={index}
                    className={`chapitre-toggle-container ${
                        index % 2 === 0 ? 'gauche' : 'droite'
                    }`}
                    style={{
                        animationDelay: `${index * 0.1}s`
                    }}
                >
                    {/* En-tête avec gestion de l'état */}
                    <div
                        className="chapitre-toggle-header"
                        onClick={() => toggleChapitre(index)}
                    >
                        <h3>{chapitre}</h3>
                    </div>

                    {/* Contenu avec état dynamique pour l'animation */}
                    <div
                        className={`chapitre-toggle-details ${
                            chapitreSelectionne === index ? 'show' : 'hide'
                        }`}
                    >
                        <p>{chapitresDetails[index]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default APropos;
