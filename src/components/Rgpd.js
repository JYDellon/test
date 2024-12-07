// import React, { useState } from 'react';
// import './Rgpd.css';



// const Rgpd = () => {
  
//   const chapitres = [
//     {
//       titre: 'Quelles données collectons-nous ?',
//       contenu: `Nous collectons des informations lorsque vous remplissez un formulaire de contact, demandez un devis ou vous inscrivez à notre newsletter. Les données collectées peuvent inclure : Nom et prénom, Adresse e-mail, Numéro de téléphone, Adresse IP.`,
//     },
//     {
//       titre: 'Comment utilisons-nous vos données ?',
//       contenu: `Nous utilisons vos données pour : Répondre à vos demandes, Envoyer des devis ou des informations sur nos services, Améliorer notre site web et nos services.`,
//     },
//     {
//       titre: 'Partage de vos données',
//       contenu: `Nous ne vendons ni ne louons vos données à des tiers. Vos données peuvent être partagées avec nos partenaires de confiance uniquement dans le cadre de la prestation de nos services.`,
//     },
//     {
//       titre: 'Sécurisation de vos données',
//       contenu: `Nous prenons des mesures de sécurité appropriées pour protéger vos données personnelles. Notre site utilise une connexion sécurisée (HTTPS) et nous appliquons des pratiques strictes de gestion des informations sensibles.`,
//     },
//     {
//       titre: 'Vos droits',
//       contenu: `Conformément au RGPD, vous avez le droit de : Accéder à vos données personnelles, Demander la correction ou la suppression de vos données, Vous opposer au traitement de vos données.`,
//     },
//     {
//       titre: 'Contact',
//       contenu: `Pour toute question concernant la protection de vos données personnelles, vous pouvez nous contacter à l'adresse suivante : contact@tonentreprise.com.`,
//     },
//   ];

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedChapitre, setSelectedChapitre] = useState(null);

//   // Ouvrir ou fermer la modale en fonction du chapitre sélectionné
//   const toggleModal = (chapitreIndex) => {
//     if (selectedChapitre === chapitreIndex) {
//       // Si on clique à nouveau sur le même chapitre, on ferme la modale
//       setIsModalOpen(false);
//       setSelectedChapitre(null);
//     } else {
//       // Sinon, on ouvre la modale avec le chapitre sélectionné
//       setSelectedChapitre(chapitreIndex);
//       setIsModalOpen(true);
//     }
//   };

//   // Passer au chapitre précédent
//   const goToPreviousChapitre = () => {
//     setSelectedChapitre((prev) =>
//       prev > 0 ? prev - 1 : chapitres.length - 1
//     );
//   };

//   // Passer au chapitre suivant
//   const goToNextChapitre = () => {
//     setSelectedChapitre((prev) =>
//       prev < chapitres.length - 1 ? prev + 1 : 0
//     );
//   };

//   return (
//     <div className="rgpd-container">
//       {/* Affichage des cards pour chaque chapitre */}
//       <div className="cards-container">
//         {chapitres.map((chapitre, index) => (
//           <div key={index} className="cardN" onClick={() => toggleModal(index)}>
//             <h3>{chapitre.titre}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Modale affichée quand une card est cliquée */}
//       {isModalOpen && selectedChapitre !== null && (
//         <div className="modal-overlay1" onClick={() => toggleModal(selectedChapitre)}>
//           <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
//             {/* Conteneur pour le titre et le contenu */}
//             <div className="modal-text">
//               <h2>{chapitres[selectedChapitre].titre}</h2>
//               <p>{chapitres[selectedChapitre].contenu}</p>
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rgpd;












// import React, { useState } from 'react';
// import './Rgpd.css';

// const Rgpd = () => {
  
//   const chapitres = [
//     {
//       titre: 'Quelles données collectons-nous ?',
//       contenu: `Nous collectons des informations lorsque vous remplissez un formulaire de contact, demandez un devis ou vous inscrivez à notre newsletter. Les données collectées peuvent inclure : Nom et prénom, Adresse e-mail, Numéro de téléphone, Adresse IP.`,
//     },
//     {
//       titre: 'Comment utilisons-nous vos données ?',
//       contenu: `Nous utilisons vos données pour : Répondre à vos demandes, Envoyer des devis ou des informations sur nos services, Améliorer notre site web et nos services.`,
//     },
//     {
//       titre: 'Partage de vos données',
//       contenu: `Nous ne vendons ni ne louons vos données à des tiers. Vos données peuvent être partagées avec nos partenaires de confiance uniquement dans le cadre de la prestation de nos services.`,
//     },
//     {
//       titre: 'Sécurisation de vos données',
//       contenu: `Nous prenons des mesures de sécurité appropriées pour protéger vos données personnelles. Notre site utilise une connexion sécurisée (HTTPS) et nous appliquons des pratiques strictes de gestion des informations sensibles.`,
//     },
//     {
//       titre: 'Vos droits',
//       contenu: `Conformément au RGPD, vous avez le droit de : Accéder à vos données personnelles, Demander la correction ou la suppression de vos données, Vous opposer au traitement de vos données.`,
//     },
//     {
//       titre: 'Contact',
//       contenu: `Pour toute question concernant la protection de vos données personnelles, vous pouvez nous contacter à l'adresse suivante : contact@tonentreprise.com.`,
//     },
//   ];

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedChapitre, setSelectedChapitre] = useState(null);

//   // Ouvrir ou fermer la modale en fonction du chapitre sélectionné
//   const toggleModal = (chapitreIndex) => {
//     if (selectedChapitre === chapitreIndex) {
//       // Si on clique à nouveau sur le même chapitre, on ferme la modale
//       setIsModalOpen(false);
//       setSelectedChapitre(null);
//     } else {
//       // Sinon, on ouvre la modale avec le chapitre sélectionné
//       setSelectedChapitre(chapitreIndex);
//       setIsModalOpen(true);
//     }
//   };

//   // Passer au chapitre précédent
//   const goToPreviousChapitre = () => {
//     setSelectedChapitre((prev) =>
//       prev > 0 ? prev - 1 : chapitres.length - 1
//     );
//   };

//   // Passer au chapitre suivant
//   const goToNextChapitre = () => {
//     setSelectedChapitre((prev) =>
//       prev < chapitres.length - 1 ? prev + 1 : 0
//     );
//   };

//   return (
//     <div className="rgpd-container">
//       {/* Affichage des cards pour chaque chapitre */}
//       <div className="cards-container">
//         {chapitres.map((chapitre, index) => (
//           <div key={index} className="cardN" onClick={() => toggleModal(index)}>
//             <h3>{chapitre.titre}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Modale affichée quand une card est cliquée */}
//       {isModalOpen && selectedChapitre !== null && (
//         <div className="modal-overlay1" onClick={() => toggleModal(selectedChapitre)}>
//           <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <button className="close-modal" onClick={() => toggleModal(selectedChapitre)}>
//                 &times;
//               </button>
//               <h2>{chapitres[selectedChapitre].titre}</h2>
//             </div>
//             <div className="modal-text">
//               <p>{chapitres[selectedChapitre].contenu}</p>
//             </div>
//             <div className="modal-footer">
//               <button onClick={goToPreviousChapitre} className="previous-button">Chapitre Précédent</button>
//               <button onClick={goToNextChapitre} className="next-button">Chapitre Suivant</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rgpd;











// import React, { useState } from 'react';
// import './Rgpd.css';

// const Rgpd = () => {
  
//   const chapitres = [
//     {
//       titre: 'Quelles données collectons-nous ?',
//       contenu: `Nous collectons des informations lorsque vous remplissez un formulaire de contact, demandez un devis ou vous inscrivez à notre newsletter. Les données collectées peuvent inclure : Nom et prénom, Adresse e-mail, Numéro de téléphone, Adresse IP.`,
//     },
//     {
//       titre: 'Comment utilisons-nous vos données ?',
//       contenu: `Nous utilisons vos données pour : Répondre à vos demandes, Envoyer des devis ou des informations sur nos services, Améliorer notre site web et nos services.`,
//     },
//     {
//       titre: 'Partage de vos données',
//       contenu: `Nous ne vendons ni ne louons vos données à des tiers. Vos données peuvent être partagées avec nos partenaires de confiance uniquement dans le cadre de la prestation de nos services.`,
//     },
//     {
//       titre: 'Sécurisation de vos données',
//       contenu: `Nous prenons des mesures de sécurité appropriées pour protéger vos données personnelles. Notre site utilise une connexion sécurisée (HTTPS) et nous appliquons des pratiques strictes de gestion des informations sensibles.`,
//     },
//     {
//       titre: 'Vos droits',
//       contenu: `Conformément au RGPD, vous avez le droit de : Accéder à vos données personnelles, Demander la correction ou la suppression de vos données, Vous opposer au traitement de vos données.`,
//     },
//     {
//       titre: 'Contact',
//       contenu: `Pour toute question concernant la protection de vos données personnelles, vous pouvez nous contacter à l'adresse suivante : contact@tonentreprise.com.`,
//     },
//   ];

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedChapitre, setSelectedChapitre] = useState(null);

//   // Ouvrir ou fermer la modale en fonction du chapitre sélectionné
//   const toggleModal = (chapitreIndex) => {
//     if (selectedChapitre === chapitreIndex) {
//       // Si on clique à nouveau sur le même chapitre, on ferme la modale
//       setIsModalOpen(false);
//       setSelectedChapitre(null);
//     } else {
//       // Sinon, on ouvre la modale avec le chapitre sélectionné
//       setSelectedChapitre(chapitreIndex);
//       setIsModalOpen(true);
//     }
//   };

//   return (
//     <div className="rgpd-container">
//       {/* Affichage des cards pour chaque chapitre */}
//       <div className="cards-container">
//         {chapitres.map((chapitre, index) => (
//           <div key={index} className="cardN" onClick={() => toggleModal(index)}>
//             <h3>{chapitre.titre}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Modale affichée quand une card est cliquée */}
//       {isModalOpen && selectedChapitre !== null && (
//         <div className="modal-overlay1" onClick={() => toggleModal(selectedChapitre)}>
//           <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h2>{chapitres[selectedChapitre].titre}</h2>
//               <button className="close-modal" onClick={() => toggleModal(selectedChapitre)}>
//                 &times;
//               </button>
//             </div>
//             <div className="modal-text">
//               <p>{chapitres[selectedChapitre].contenu}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rgpd;











// import React, { useState } from 'react';
// import './Rgpd.css';

// function Rgpd() {
//     const sections = [
//         "1. Introduction à la protection des données",
//         "2. Quelles données collectons-nous ?",
//         "3. Comment utilisons-nous vos données ?",
//         "4. Vos droits concernant vos données",
//         "5. Contactez-nous",
//     ];

//     const sectionsDetails = [
//         "La protection des données personnelles est essentielle pour garantir la confidentialité et la sécurité des informations des utilisateurs. Ce document vous explique comment nous collectons, utilisons et protégeons vos données.",
//         "Nous collectons des données personnelles lorsque vous utilisez nos services, telles que votre nom, adresse e-mail, adresse IP, et autres informations nécessaires pour vous fournir nos services.",
//         "Nous utilisons vos données pour personnaliser votre expérience, vous fournir un service de qualité et répondre à vos demandes. Vos données sont également utilisées à des fins de marketing si vous avez consenti.",
//         "Vous avez le droit d'accéder, de modifier, de supprimer, ou de limiter l'utilisation de vos données personnelles. Vous pouvez également vous opposer à leur traitement ou demander une portabilité des données.",
//         "Si vous avez des questions concernant le traitement de vos données ou souhaitez exercer vos droits, n'hésitez pas à nous contacter via notre formulaire ou à l'adresse email de notre support.",
//     ];

//     const [sectionSelectionnee, setSectionSelectionnee] = useState(null);

//     const toggleSection = (index) => {
//         setSectionSelectionnee(sectionSelectionnee === index ? null : index);
//     };

//     return (
//         <div className="rgpd-container">
//             {sections.map((section, index) => (
//                 <div key={index} className="rgpd-toggle-container">
//                     <div
//                         className={`rgpd-toggle-header ${
//                             sectionSelectionnee === index ? 'active' : ''
//                         }`}
//                         onClick={() => toggleSection(index)}
//                     >
//                         <h3>{section}</h3>
                        
//                     </div>
//                     {sectionSelectionnee === index && (
//                         <div className="rgpd-toggle-details">
//                             <p>{sectionsDetails[index]}</p>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Rgpd;





















// import React, { useState } from 'react';
// import './Rgpd.css';

// function Rgpd() {
//     const sections = [
//         "1. Introduction à la protection des données",
//         "2. Quelles données collectons-nous ?",
//         "3. Comment utilisons-nous vos données ?",
//         "4. Vos droits concernant vos données",
//         "5. Contactez-nous",
//     ];

//     const sectionsDetails = [
//         "La protection des données personnelles est essentielle pour garantir la confidentialité et la sécurité des informations des utilisateurs. Ce document vous explique comment nous collectons, utilisons et protégeons vos données.",
//         "Nous collectons des données personnelles lorsque vous utilisez nos services, telles que votre nom, adresse e-mail, adresse IP, et autres informations nécessaires pour vous fournir nos services.",
//         "Nous utilisons vos données pour personnaliser votre expérience, vous fournir un service de qualité et répondre à vos demandes. Vos données sont également utilisées à des fins de marketing si vous avez consenti.",
//         "Vous avez le droit d'accéder, de modifier, de supprimer, ou de limiter l'utilisation de vos données personnelles. Vous pouvez également vous opposer à leur traitement ou demander une portabilité des données.",
//         "Si vous avez des questions concernant le traitement de vos données ou souhaitez exercer vos droits, n'hésitez pas à nous contacter via notre formulaire ou à l'adresse email de notre support.",
//     ];

//     const [sectionSelectionnee, setSectionSelectionnee] = useState(null);

//     const toggleSection = (index) => {
//         setSectionSelectionnee(sectionSelectionnee === index ? null : index);
//     };

//     return (
//         <div className="rgpd-container">
//             {sections.map((section, index) => (
//                 <div key={index} className="rgpd-toggle-container">
//                     {/* En-tête */}
//                     <div
//                         className={`rgpd-toggle-header ${
//                             sectionSelectionnee === index ? 'active' : ''
//                         }`}
//                         onClick={() => toggleSection(index)}
//                     >
//                         <h3>{section}</h3>
//                     </div>

//                     {/* Détails avec animation */}
//                     <div
//                         className={`rgpd-toggle-details ${
//                             sectionSelectionnee === index ? 'show' : 'hide'
//                         }`}
//                     >
//                         <p>{sectionsDetails[index]}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Rgpd;

















import React, { useState, useEffect } from 'react';
import './Rgpd.css';

function Rgpd() {
    const sections = [
        "Introduction à la protection des données",
        "Quelles données collectons-nous ?",
        "Comment utilisons-nous vos données ?",
        "Vos droits concernant vos données",
        "Contactez-nous",
    ];

    const sectionsDetails = [
        "La protection des données personnelles est essentielle pour garantir la confidentialité et la sécurité des informations des utilisateurs. Ce document vous explique comment nous collectons, utilisons et protégeons vos données.",
        "Nous collectons des données personnelles lorsque vous utilisez nos services, telles que votre nom, adresse e-mail, adresse IP, et autres informations nécessaires pour vous fournir nos services.",
        "Nous utilisons vos données pour personnaliser votre expérience, vous fournir un service de qualité et répondre à vos demandes. Vos données sont également utilisées à des fins de marketing si vous avez consenti.",
        "Vous avez le droit d'accéder, de modifier, de supprimer, ou de limiter l'utilisation de vos données personnelles. Vous pouvez également vous opposer à leur traitement ou demander une portabilité des données.",
        "Si vous avez des questions concernant le traitement de vos données ou souhaitez exercer vos droits, n'hésitez pas à nous contacter via notre formulaire ou à l'adresse email de notre support.",
    ];

    const [sectionSelectionnee, setSectionSelectionnee] = useState(null);
    const [isMounted, setIsMounted] = useState(false);

    const toggleSection = (index) => {
        setSectionSelectionnee(sectionSelectionnee === index ? null : index);
    };

    useEffect(() => {
        // Déclenche les animations au montage
        setIsMounted(true);
    }, []);

    return (
        <div className="rgpd-container">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`rgpd-toggle-container animation-${index + 1} ${
                        isMounted ? '' : 'hidden'
                    }`}
                >
                    {/* En-tête */}
                    <div
                        className={`rgpd-toggle-header ${
                            sectionSelectionnee === index ? 'active' : ''
                        }`}
                        onClick={() => toggleSection(index)}
                    >
                        <h3>{section}</h3>
                    </div>

                    {/* Détails avec animation */}
                    <div
                        className={`rgpd-toggle-details ${
                            sectionSelectionnee === index ? 'show' : 'hide'
                        }`}
                    >
                        <p>{sectionsDetails[index]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Rgpd;
