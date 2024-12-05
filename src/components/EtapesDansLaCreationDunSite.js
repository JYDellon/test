// import React, { useState } from 'react';
// import './EtapesDansLaCreationDunSite.css';

// function EtapesDansLaCreationDunSite() {
//     const etapes = [
//         "1. Compréhension de vos besoins",
//         "2. Proposition et maquette",
//         "3. Développement et intégration",
//         "4. Livraison",
//         "5. Suivi",
//     ];

//     const etapesDetails = [
//         "Nous commencerons par une discussion pour comprendre vos attentes, vos objectifs, et les particularités de votre projet. Cette étape est essentielle pour poser les bases d’un site qui répond parfaitement à vos besoins.",
//         "À partir de vos idées, nous concevrons une proposition accompagnée de maquettes ou de schémas. Cela vous permettra obtenir une vision claire du futur site et de valider son design avant le développement.",
//         "Une fois la maquette approuvée, nous développons votre site avec soin. Chaque fonctionnalité est intégrée et testée pour garantir un rendu optimal et conforme à vos attentes.",
//         "Une fois le site finalisé, nous procédons à sa mise en ligne. Nous vérifions qu’il est parfaitement fonctionnel et prêt à être utilisé par vos visiteurs.",
//         "Après la livraison, nous restons disponibles pour vous accompagner. Nous proposons un suivi personnalisé pour effectuer des mises à jour, des ajustements ou répondre à vos besoins évolutifs.",
//     ];

//     const [selectedStep, setSelectedStep] = useState(null);

//     // Fonction pour ouvrir ou fermer les détails d'une étape
//     const toggleStep = (index) => {
//         setSelectedStep(selectedStep === index ? null : index);
//     };

//     // Fonction pour passer à l'étape précédente
//     const goToPreviousStep = () => {
//         setSelectedStep((prev) => (prev > 0 ? prev - 1 : etapes.length - 1));
//     };

//     // Fonction pour passer à l'étape suivante
//     const goToNextStep = () => {
//         setSelectedStep((prev) => (prev < etapes.length - 1 ? prev + 1 : 0));
//     };

//     return (
//         <div className="etapes-container">
//             <div className="etapes-list">
//                 {etapes.map((etape, index) => (
//                     <div
//                         key={index}
//                         className={`etape-card ${selectedStep === index ? 'active' : ''}`}
//                         onClick={() => toggleStep(index)}
//                     >
//                         {/* <span>Étape {index + 1}</span> */}
//                         <h3>{etape}</h3>
//                     </div>
//                 ))}
//             </div>

//             {/* Affichage conditionnel des cartes des détails sous les étapes */}
//             {selectedStep !== null && (
//                 <div className="etapes-details-container">
//                     <div className="etape-details-card">
//                         <div className="etape-text">
//                             <h3>{etapes[selectedStep]}</h3>
//                             <p>{etapesDetails[selectedStep]}</p>
//                         </div>

//                         {/* Navigation avec flèches */}
//                         {/* <div className="navigation-footer">
//                             <button
//                                 className={`prev-button ${selectedStep === 0 ? 'hidden' : ''}`}
//                                 onClick={goToPreviousStep}
//                             >
//                                 <img src={ArrowLeft} alt="Précédent" />
//                             </button>
//                             <button
//                                 className={`next-button ${selectedStep === etapes.length - 1 ? 'hidden' : ''}`}
//                                 onClick={goToNextStep}
//                             >
//                                 <img src={ArrowRight} alt="Suivant" />
//                             </button>
//                         </div> */}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default EtapesDansLaCreationDunSite;











// import React, { useState } from 'react';
// import './EtapesDansLaCreationDunSite.css';

// function EtapesDansLaCreationDunSite() {
//     const etapes = [
//         "1. Compréhension de vos besoins",
//         "2. Proposition et maquette",
//         "3. Développement et intégration",
//         "4. Livraison",
//         "5. Suivi",
//     ];

//     const etapesDetails = [
//         "Nous commencerons par une discussion pour comprendre vos attentes, vos objectifs, et les particularités de votre projet. Cette étape est essentielle pour poser les bases d’un site qui répond parfaitement à vos besoins.",
//         "À partir de vos idées, nous concevrons une proposition accompagnée de maquettes ou de schémas. Cela vous permettra d'obtenir une vision claire du futur site et de valider son design avant le développement.",
//         "Une fois la maquette approuvée, nous développons votre site avec soin. Chaque fonctionnalité est intégrée et testée pour garantir un rendu optimal et conforme à vos attentes.",
//         "Une fois le site finalisé, nous procédons à sa mise en ligne. Nous vérifions qu’il est parfaitement fonctionnel et prêt à être utilisé par vos visiteurs.",
//         "Après la livraison, nous restons disponibles pour vous accompagner. Nous proposons un suivi personnalisé pour effectuer des mises à jour, des ajustements ou répondre à vos besoins évolutifs.",
//     ];

//     const [etapeSelectionnee, setEtapeSelectionnee] = useState(null);

//     // Ouvrir ou fermer une étape
//     const toggleEtape = (index) => {
//         setEtapeSelectionnee(etapeSelectionnee === index ? null : index);
//     };

//     return (
//         <div className="etapes-container">
//             <div className="etapes-list">
//                 {etapes.map((etape, index) => (
//                     <div
//                         key={index}
//                         className={`etape-card ${etapeSelectionnee === index ? 'active' : ''}`}
//                         onClick={() => toggleEtape(index)}
//                     >
//                         <h3>{etape}</h3>
//                     </div>
//                 ))}
//             </div>

//             {etapeSelectionnee !== null && (
//                 <div className="etapes-details-container">
//                     <div className="etape-details-card">
//                         <div className="etape-text">
//                             <h3>{etapes[etapeSelectionnee]}</h3>
//                             <p>{etapesDetails[etapeSelectionnee]}</p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default EtapesDansLaCreationDunSite;











// import React, { useState } from 'react';
// import './EtapesDansLaCreationDunSite.css';

// function EtapesDansLaCreationDunSite() {
//     const etapes = [
//         "1. Compréhension de vos besoins",
//         "2. Proposition et maquette",
//         "3. Développement et intégration",
//         "4. Livraison",
//         "5. Suivi",
//     ];

//     const etapesDetails = [
//         "Nous commencerons par une discussion pour comprendre vos attentes, vos objectifs, et les particularités de votre projet. Cette étape est essentielle pour poser les bases d’un site qui répond parfaitement à vos besoins.",
//         "À partir de vos idées, nous concevrons une proposition accompagnée de maquettes ou de schémas. Cela vous permettra d'obtenir une vision claire du futur site et de valider son design avant le développement.",
//         "Une fois la maquette approuvée, nous développons votre site avec soin. Chaque fonctionnalité est intégrée et testée pour garantir un rendu optimal et conforme à vos attentes.",
//         "Une fois le site finalisé, nous procédons à sa mise en ligne. Nous vérifions qu’il est parfaitement fonctionnel et prêt à être utilisé par vos visiteurs.",
//         "Après la livraison, nous restons disponibles pour vous accompagner. Nous proposons un suivi personnalisé pour effectuer des mises à jour, des ajustements ou répondre à vos besoins évolutifs.",
//     ];

//     const [etapeSelectionnee, setEtapeSelectionnee] = useState(null);

//     // Ouvrir ou fermer une étape
//     const toggleEtape = (index) => {
//         setEtapeSelectionnee(etapeSelectionnee === index ? null : index);
//     };

//     return (
//         <div className="etapes-container">
//             <div className="etapes-list">
//                 {etapes.map((etape, index) => (
//                     <div
//                         key={index}
//                         className={`etape-card ${etapeSelectionnee === index ? 'active' : ''}`}
//                         onClick={() => toggleEtape(index)}
//                     >
//                         <h3>{etape}</h3>
//                     </div>
//                 ))}
//             </div>

//             {etapeSelectionnee !== null && (
//                 <div className="etapes-details-container">
//                     <div className="etape-details-card slide-in">
//                         <div className="etape-text">
//                             <h3>{etapes[etapeSelectionnee]}</h3>
//                             <p>{etapesDetails[etapeSelectionnee]}</p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default EtapesDansLaCreationDunSite;











import React, { useState } from 'react';
import './EtapesDansLaCreationDunSite.css';

function EtapesDansLaCreationDunSite() {
    const etapes = [
        "1. Compréhension de vos besoins",
        "2. Proposition et maquette",
        "3. Développement et intégration",
        "4. Livraison",
        "5. Suivi",
    ];

    const etapesDetails = [
        "Nous commencerons par une discussion pour comprendre vos attentes, vos objectifs, et les particularités de votre projet. Cette étape est essentielle pour poser les bases d’un site qui répond parfaitement à vos besoins.",
        "À partir de vos idées, nous concevrons une proposition accompagnée de maquettes ou de schémas. Cela vous permettra d'obtenir une vision claire du futur site et de valider son design avant le développement.",
        "Une fois la maquette approuvée, nous développons votre site avec soin. Chaque fonctionnalité est intégrée et testée pour garantir un rendu optimal et conforme à vos attentes.",
        "Une fois le site finalisé, nous procédons à sa mise en ligne. Nous vérifions qu’il est parfaitement fonctionnel et prêt à être utilisé par vos visiteurs.",
        "Après la livraison, nous restons disponibles pour vous accompagner. Nous proposons un suivi personnalisé pour effectuer des mises à jour, des ajustements ou répondre à vos besoins évolutifs.",
    ];

    const [etapeSelectionnee, setEtapeSelectionnee] = useState(null);

    // Ouvrir ou fermer une étape
    const toggleEtape = (index) => {
        setEtapeSelectionnee(etapeSelectionnee === index ? null : index);
    };

    return (
        <div className="etapes-container">
            <div className="etapes-list">
                {etapes.map((etape, index) => (
                    <div
                        key={index}
                        className={`etape-card ${etapeSelectionnee === index ? 'active' : ''}`}
                        onClick={() => toggleEtape(index)}
                    >
                        <h3>{etape}</h3>
                    </div>
                ))}
            </div>

            {etapeSelectionnee !== null && (
                <div className="etapes-details-container">
                    <div
                        className={`etape-details-card ${etapeSelectionnee === null ? 'slide-out' : ''}`}
                        style={{
                            animation: etapeSelectionnee === null ? 'slideOutDetails 0.5s ease-out forwards' : ''
                        }}
                    >
                        <div className="etape-text">
                            <h3>{etapes[etapeSelectionnee]}</h3>
                            <p>{etapesDetails[etapeSelectionnee]}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EtapesDansLaCreationDunSite;
