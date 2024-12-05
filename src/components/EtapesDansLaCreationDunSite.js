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
//                     <div
//                         className={`etape-details-card ${etapeSelectionnee === null ? 'slide-out' : ''}`}
//                         style={{
//                             animation: etapeSelectionnee === null ? 'slideOutDetails 0.5s ease-out forwards' : ''
//                         }}
//                     >
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
//                     <div
//                         className={`etape-details-card`}
//                     >
//                         <button
//                             className="fermer-details"
//                             onClick={() => setEtapeSelectionnee(null)}
//                         >
//                             &times;
//                         </button>
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
//                     <div className="etape-details-card">
//                         <button
//                             className="fermer-details"
//                             onClick={() => setEtapeSelectionnee(null)}
//                         >
//                             &times;
//                         </button>
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
                    <div className="etape-details-card">
                        <button
                            className="fermer-details"
                            onClick={() => setEtapeSelectionnee(null)}
                        >
                            &times;
                        </button>
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
