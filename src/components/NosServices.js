// import React, { useState } from 'react';
// import './NosServices.css';
// import { useNavigate } from 'react-router-dom';

// const NosServices = () => {
//     const services = [
//         'Les sites vitrines',
//         'Les sites e-commerce',
//         'Les sites personnalisés',
//         'Le référencement et SEO',
//         "L'hébergement sécurisé",
//         'Gestion et maintenance',
//     ];

//     const navigate = useNavigate();
//     const [selectedService, setSelectedService] = useState(null);
//     const [selectedSubCard, setSelectedSubCard] = useState(null);

//     // const handleServiceClick = (index) => {
//     //     setSelectedService(index);
//     //     setSelectedSubCard(null);
//     // };

//     const handleServiceClick = (index) => {
//         // Vérifie si le service sélectionné est déjà celui qui a été cliqué
//         if (selectedService === index) {
//             // Si c'est le cas, réinitialiser la sélection
//             setSelectedService(null);
//             setSelectedSubCard(null);
//         } else {
//             // Sinon, sélectionne le nouveau service
//             setSelectedService(index);
//             setSelectedSubCard(null);
//         }
//     };
    

//     const handleDevisClick = () => {
//         switch (services[selectedService]) {
//             case 'Les sites vitrines':
//                 navigate('/devis');
//                 break;
//             case 'Les sites e-commerce':
//                 navigate('/formulaire-devis');
//                 break;
//             case 'Les sites personnalisés':
//                 navigate('/formulaire-devis');
//                 break;
//             case 'Le référencement et SEO':
//                 navigate('/formulaire-devis');
//                 break;
//             case "L'hébergement sécurisé":
//                 navigate('/formulaire-devis');
//                 break;
//             case 'Gestion et maintenance':
//                 navigate('/formulaire-devis');
//                 break;
//             default:
//                 console.log('Service non défini pour le devis');
//                 break;
//         }
//     };

//     const handleSubCardSelect = (subCardIndex) => {
//         setSelectedSubCard(subCardIndex);
//     };

//     return (
//         <div className="nos-services-container">
//             {/* Liste des services */}
//             <div className="services-list">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className={`service-card ${selectedService === index ? 'active' : ''}`}
//                         onClick={() => handleServiceClick(index)}
//                     >
//                         {service}
//                     </div>
//                 ))}
//             </div>

//             {/* Contenu principal avec sous-cards à gauche et détails à droite */}
//             <div className="content-container">
//                 {/* Sous-cards à gauche */}
//                 {selectedService !== null && (
//                     <div className="sub-cards-left">
//                         <div className='soustitre'>
//                             {['Caractéristiques principales', `À quoi sert un ${services[selectedService].toLowerCase()} ?`].map((label, index) => (
//                                 <div
//                                     key={index}
//                                     className={`sub-card ${selectedSubCard === index ? 'active' : ''}`}
//                                     onClick={() => handleSubCardSelect(index)}
//                                 >
//                                     <h5>{label}</h5>
//                                 </div>
//                             ))}
//                         </div>
//                         {/* Bouton Devis */}
//                         <div className="deviser">
//                             <button className="devis-button" onClick={handleDevisClick}>
//                                 DEVIS
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Détails à droite */}
//                 <div className="sub-cards-right">
//                     {/* Sites vitrines */}
//                     {selectedService === 0 && selectedSubCard === 0 && (
                        
//                         <div className="sub">
//                             <h4>Caractéristiques principales</h4>
//                         <div className="sub-card-details">
                            
//                             <div className="info-cards-container">
//                                 <div className="info-card">
//                                     <strong>Présentation de l'activité :</strong>
//                                     <p>Un site vitrine met en avant les informations essentielles sur une entreprise, son activité et ses services.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Navigation simple :</strong>
//                                     <p>Le site est conçu avec une structure claire pour que les visiteurs trouvent rapidement les informations dont ils ont besoin.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Pas de vente en ligne :</strong>
//                                     <p>Ce type de site ne propose pas d'outils pour acheter des produits ou services directement en ligne.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Accessible à tous :</strong>
//                                     <p>Un site vitrine est facile d'accès et fonctionne sur différents appareils, comme les ordinateurs ou smartphones.</p>
//                                 </div>
//                             </div>
//                         </div></div>
//                     )}

//                     {selectedService === 0 && selectedSubCard === 1 && (
//                     <div className="sub">
//                                 <h4>À quoi sert un site vitrine ?</h4>
//                         <div className="sub-card-details">
                           
                            
//                             <div className="info-cards-container">
//                                 <div className="info-card">
//                                     <strong>Donner une image professionnelle :</strong>
//                                     <p>Un site vitrine offre une présence en ligne sérieuse et soignée qui renforce la crédibilité de l'entreprise.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Informer :</strong>
//                                     <p>Il permet de fournir des informations essentielles sur l'entreprise, ses services, ou ses produits.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Gagner en visibilité :</strong>
//                                     <p>Le site aide à attirer de nouveaux visiteurs et à accroître la notoriété de l'entreprise sur internet.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Faciliter le contact :</strong>
//                                     <p>Le site permet aux visiteurs de contacter facilement l'entreprise via des formulaires ou des coordonnées.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         </div>
//                     )}

//                     {/* Sites e-commerce */}
//                     {selectedService === 1 && selectedSubCard === 0 && (
//                             <div className="sub">
//                                 <h4>Caractéristiques principales</h4>
//                                 <div className="sub-card-details">
//                                     <div className="info-cards-container">
//                                         <div className="info-card">
//                                             <strong>Vente de produits ou services :</strong>
//                                             <p>Un site e-commerce permet de vendre des produits ou services directement en ligne, avec un panier et un système de paiement sécurisé.</p>
//                                         </div>
//                                         <div className="info-card">
//                                             <strong>Gestion des transactions sécurisées :</strong>
//                                             <p>Les transactions sont gérées de manière fluide et sécurisée pour garantir la confiance des clients.</p>
//                                         </div>
//                                         <div className="info-card">
//                                             <strong>Catalogue de produits :</strong>
//                                             <p>Un site e-commerce présente un catalogue de produits avec des descriptions détaillées et des images pour faciliter l'achat.</p>
//                                         </div>
//                                         <div className="info-card">
//                                             <strong>Support client intégré :</strong>
//                                             <p>Il est possible d'intégrer des outils de support client, comme un chat en direct ou une page FAQ.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                     )}

//                     {selectedService === 1 && selectedSubCard === 1 && (
//                             <div className="sub">
//                                 <h4>À quoi sert un site e-commerce ?</h4>
//                                 <div className="sub-card-details">
//                             <div className="info-cards-container">
//                                 <div className="info-card">
//                                     <strong>Vendre des produits ou services :</strong>
//                                     <p>Un site e-commerce permet à une entreprise de vendre directement en ligne, ce qui augmente sa portée et ses revenus.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Offrir une expérience d'achat fluide :</strong>
//                                     <p>Il offre une expérience d'achat optimisée avec un processus de commande simple et sécurisé.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Automatiser la gestion des commandes :</strong>
//                                     <p>Le site automatise la gestion des stocks et des commandes, permettant un suivi plus efficace.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Faciliter les paiements :</strong>
//                                     <p>Les sites e-commerce permettent d'accepter plusieurs modes de paiement en ligne, y compris les cartes bancaires et les plateformes de paiement.</p>
//                                 </div>
//                             </div>
//                         </div></div>
//                     )}

//                     {/* Sites personnalisés */}
//                     {selectedService === 2 && selectedSubCard === 0 && (
//                             <div className="sub">
//                             <h4>Caractéristiques principales</h4>
//                             <div className="sub-card-details">
//                             <div className="info-cards-container">
//                                 <div className="info-card">
//                                     <strong>Sites sur mesure :</strong>
//                                     <p>Les sites personnalisés sont créés pour répondre aux besoins spécifiques des entreprises, avec des fonctionnalités uniques et adaptées.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Fonctionnalités avancées :</strong>
//                                     <p>Les sites personnalisés peuvent inclure des outils de gestion, des plateformes d'interaction avec les clients ou des intégrations avec des systèmes existants.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Design unique :</strong>
//                                     <p>Le design et la structure du site sont entièrement adaptés à l'image de marque et aux besoins spécifiques de l'entreprise.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Scalabilité :</strong>
//                                     <p>Les sites personnalisés sont conçus pour évoluer avec l'entreprise, en ajoutant des fonctionnalités supplémentaires au fur et à mesure de la croissance.</p>
//                                 </div>
//                             </div>
//                         </div> </div>
//                     )}

//                     {selectedService === 2 && selectedSubCard === 1 && (
//                             <div className="sub">
//                             <h4>À quoi sert un site personnalisé ?</h4>
//                         <div className="sub-card-details">
//                             <div className="info-cards-container">
//                                 <div className="info-card">
//                                     <strong>Répondre à des besoins spécifiques :</strong>
//                                     <p>Un site personnalisé est conçu pour répondre aux besoins uniques de l'entreprise, qu'il s'agisse de fonctionnalités complexes ou d'intégration avec d'autres systèmes.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Offrir une flexibilité maximale :</strong>
//                                     <p>Il offre une grande flexibilité pour s'adapter aux changements de l'entreprise à mesure qu'elle se développe.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Optimiser l'expérience utilisateur :</strong>
//                                     <p>Un site personnalisé est optimisé pour offrir la meilleure expérience utilisateur possible, en fonction des besoins de l'entreprise et de ses utilisateurs.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Améliorer l'efficacité :</strong>
//                                     <p>Il permet d'optimiser les processus internes et d'améliorer l'efficacité opérationnelle grâce à des outils adaptés.</p>
//                                 </div>
//                             </div>
//                         </div></div>
//                     )}

//                     {/* Référencement SEO */}
//                     {selectedService === 3 && selectedSubCard === 0 && (
//                             <div className="sub">
//                         <div className="sub-card-details">
//                             <h4>Caractéristiques principales</h4>
//                             <div className="info-cards-container">
//                                 <div className="info-card">
//                                     <strong>Optimisation pour les moteurs de recherche :</strong>
//                                     <p>Le référencement SEO permet d'améliorer la visibilité du site sur des moteurs de recherche comme Google.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Optimisation des mots-clés :</strong>
//                                     <p>Nous optimisons les contenus en utilisant les mots-clés pertinents pour améliorer le classement du site.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Amélioration de la vitesse de chargement :</strong>
//                                     <p>Nous mettons en œuvre des pratiques pour rendre votre site plus rapide, ce qui est essentiel pour l'expérience utilisateur et le référencement.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Analyse de la concurrence :</strong>
//                                     <p>Nous effectuons une analyse approfondie des sites concurrents pour identifier les meilleures stratégies de référencement.</p>
//                                 </div>
//                             </div>
//                             </div></div>
//                     )}

//                     {selectedService === 3 && selectedSubCard === 1 && (
//                             <div className="sub">
//                         <div className="sub-card-details">
//                             <h4>À quoi sert le référencement SEO ?</h4>
//                             <div className="info-cards-container">
//                                 <div className="info-card">
//                                     <strong>Accroître la visibilité :</strong>
//                                     <p>Un bon référencement permet à votre site de se positionner en haut des résultats de recherche, augmentant ainsi la visibilité de votre entreprise.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Générer du trafic qualifié :</strong>
//                                     <p>Le SEO aide à attirer des visiteurs qui recherchent des produits ou services similaires à ceux que vous proposez.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Augmenter les conversions :</strong>
//                                     <p>Un bon référencement génère du trafic qualifié, ce qui peut conduire à un meilleur taux de conversion et à une augmentation des ventes.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Renforcer la crédibilité :</strong>
//                                     <p>Les sites qui apparaissent en haut des résultats de recherche sont souvent perçus comme plus crédibles et professionnels par les utilisateurs.</p>
//                                 </div>
//                                 </div></div>
//                         </div>
//                     )}
                    
//                     {/* Hébergement sécurisé */}
//                     {selectedService === 4 && selectedSubCard === 0 && (
//                             <div className="sub">
//                         <div className="sub-card-details">
//                             <h4>Caractéristiques principales</h4>
//                             <div className="info-cards-container">
//                                 <div className="info-card">
//                                     <strong>Sécurisation des données :</strong>
//                                     <p>L'hébergement sécurisé garantit la protection des données sensibles grâce à des technologies avancées de sécurité.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Backups réguliers :</strong>
//                                     <p>Les données sont sauvegardées régulièrement pour assurer leur récupération en cas d'incident.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Certificat SSL :</strong>
//                                     <p>L'hébergement sécurisé intègre un certificat SSL pour protéger la communication entre le serveur et les utilisateurs.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Protection contre les attaques :</strong>
//                                     <p>Les serveurs sont protégés contre les attaques courantes comme les DDoS et les intrusions malveillantes.</p>
//                                 </div>
//                                 </div></div>
//                         </div>
//                     )}

//                     {selectedService === 4 && selectedSubCard === 1 && (
//                             <div className="sub">
//                         <div className="sub-card-details">
//                             <h4>À quoi sert l'hébergement sécurisé ?</h4>
//                             <div className="info-cards-container">
//                                 <div className="info-card">
//                                     <strong>Protéger les données des utilisateurs :</strong>
//                                     <p>Assurer la sécurité des informations personnelles et des transactions des utilisateurs qui visitent votre site.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Assurer la disponibilité du site :</strong>
//                                     <p>Un hébergement sécurisé garantit que votre site est en ligne et disponible en permanence, même en cas de trafic élevé.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Renforcer la confiance des utilisateurs :</strong>
//                                     <p>Un certificat SSL et une infrastructure sécurisée renforcent la confiance des visiteurs et des clients potentiels.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Optimiser la performance :</strong>
//                                     <p>L'hébergement sécurisé optimise la vitesse et la performance de votre site grâce à une infrastructure fiable.</p>
//                                 </div>
//                             </div>
//                             </div></div>
//                     )}
//                    {/* Gestion et maintenance */}
//                    {selectedService === 5 && selectedSubCard === 0 && (
//                             <div className="sub">
//                         <div className="sub-card-details">
//                             <h4>Caractéristiques principales</h4>
//                             <div className="info-cards-container">
//                                 <div className="info-card">
//                                     <strong>Maintenance continue :</strong>
//                                     <p>Nous offrons une maintenance continue de votre site pour garantir sa sécurité et ses performances.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Mises à jour régulières :</strong>
//                                     <p>Nous assurons la mise à jour régulière de ton site pour garantir qu'il fonctionne parfaitement.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Sauvegardes régulières :</strong>
//                                     <p>Des sauvegardes régulières de ton site sont effectuées pour éviter toute perte de données.</p>
//                                 </div>
//                             </div>
//                             </div></div>
//                     )}
//                     {selectedService === 5 && selectedSubCard === 1 && (
//                             <div className="sub">
//                         <div className="sub-card-details">
//                             <h4>À quoi sert la gestion et maintenance ?</h4>
//                             <div className="info-cards-container">
//                                 <div className="info-card">
//                                     <strong>Assurer la sécurité :</strong>
//                                     <p>La gestion et maintenance permet de maintenir la sécurité de ton site en détectant et en corrigeant les vulnérabilités.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Optimiser les performances :</strong>
//                                     <p>Elle garantit un site rapide et performant, avec une gestion proactive des ressources.</p>
//                                 </div>
//                                 <div className="info-card">
//                                     <strong>Support technique :</strong>
//                                     <p>En cas de problème, un support technique est disponible pour résoudre les éventuels soucis rapidement.</p>
//                                 </div>
//                                 </div></div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NosServices;
















// import React, { useState } from 'react';
// import './NosServices.css';
// import { useNavigate } from 'react-router-dom';

// const NosServices = () => {
//     const services = [
//         {
//             title: 'Les sites vitrines',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Présentation de l\'activité', description: 'Un site vitrine met en avant les informations essentielles sur une entreprise, son activité et ses services.' },
//                         { title: 'Navigation simple', description: 'Le site est conçu avec une structure claire pour que les visiteurs trouvent rapidement les informations dont ils ont besoin.' },
//                         { title: 'Pas de vente en ligne', description: 'Ce type de site ne propose pas d\'outils pour acheter des produits ou services directement en ligne.' },
//                         { title: 'Accessible à tous', description: 'Un site vitrine est facile d\'accès et fonctionne sur différents appareils, comme les ordinateurs ou smartphones.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert un site vitrine ?',
//                     content: [
//                         { title: 'Donner une image professionnelle', description: 'Un site vitrine offre une présence en ligne sérieuse et soignée qui renforce la crédibilité de l\'entreprise.' },
//                         { title: 'Informer', description: 'Il permet de fournir des informations essentielles sur l\'entreprise, ses services, ou ses produits.' },
//                         { title: 'Gagner en visibilité', description: 'Le site aide à attirer de nouveaux visiteurs et à accroître la notoriété de l\'entreprise sur internet.' },
//                         { title: 'Faciliter le contact', description: 'Le site permet aux visiteurs de contacter facilement l\'entreprise via des formulaires ou des coordonnées.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Les sites e-commerce',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Vente de produits ou services', description: 'Un site e-commerce permet de vendre des produits ou services directement en ligne, avec un panier et un système de paiement sécurisé.' },
//                         { title: 'Gestion des transactions sécurisées', description: 'Les transactions sont gérées de manière fluide et sécurisée pour garantir la confiance des clients.' },
//                         { title: 'Catalogue de produits', description: 'Un site e-commerce présente un catalogue de produits avec des descriptions détaillées et des images pour faciliter l\'achat.' },
//                         { title: 'Support client intégré', description: 'Il est possible d\'intégrer des outils de support client, comme un chat en direct ou une page FAQ.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert un site e-commerce ?',
//                     content: [
//                         { title: 'Vendre des produits ou services', description: 'Un site e-commerce permet à une entreprise de vendre directement en ligne, ce qui augmente sa portée et ses revenus.' },
//                         { title: 'Offrir une expérience d\'achat fluide', description: 'Il offre une expérience d\'achat optimisée avec un processus de commande simple et sécurisé.' },
//                         { title: 'Automatiser la gestion des commandes', description: 'Le site automatise la gestion des stocks et des commandes, permettant un suivi plus efficace.' },
//                         { title: 'Faciliter les paiements', description: 'Les sites e-commerce permettent d\'accepter plusieurs modes de paiement en ligne, y compris les cartes bancaires et les plateformes de paiement.' },
//                     ],
//                 },
//             ],
//         },
//         // Ajoute d'autres services similaires ici
//     ];

//     const navigate = useNavigate();
//     const [openToggles, setOpenToggles] = useState({});

//     const toggleService = (index) => {
//         setOpenToggles((prevState) => ({
//             ...prevState,
//             [index]: !prevState[index],
//         }));
//     };

//     const handleDevisClick = (serviceTitle) => {
//         if (serviceTitle === 'Les sites vitrines') navigate('/devis');
//         else navigate('/formulaire-devis');
//     };

//     return (
//         <div className="nos-services-container">
//             <h2 className="nos-services-title">Nos Services</h2>
//             <div className="services-list">
//                 {services.map((service, index) => (
//                     <div key={index} className="service-section">
//                         <div
//                             className={`service-card ${openToggles[index] ? 'active' : ''}`}
//                             onClick={() => toggleService(index)}
//                         >
//                             {service.title}
//                         </div>
//                         {openToggles[index] && (
//                             <div className="service-details">
//                                 {service.details.map((detail, subIndex) => (
//                                     <div key={subIndex} className="detail-section">
//                                         <h4 className="detail-title">{detail.subtitle}</h4>
//                                         <div className="info-cards-container">
//                                             {detail.content.map((item, itemIndex) => (
//                                                 <div key={itemIndex} className="info-card">
//                                                     <strong>{item.title} :</strong>
//                                                     <p>{item.description}</p>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ))}
//                                 <button
//                                     className="devis-button"
//                                     onClick={() => handleDevisClick(service.title)}
//                                 >
//                                     Obtenir un devis
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default NosServices;
















// import React, { useState } from 'react';
// import './NosServices.css';
// import { useNavigate } from 'react-router-dom';

// const NosServices = () => {
//     const services = [
//         {
//             title: 'Les sites vitrines',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Présentation de l\'activité', description: 'Un site vitrine met en avant les informations essentielles sur une entreprise, son activité et ses services.' },
//                         { title: 'Navigation simple', description: 'Le site est conçu avec une structure claire pour que les visiteurs trouvent rapidement les informations dont ils ont besoin.' },
//                         { title: 'Pas de vente en ligne', description: 'Ce type de site ne propose pas d\'outils pour acheter des produits ou services directement en ligne.' },
//                         { title: 'Accessible à tous', description: 'Un site vitrine est facile d\'accès et fonctionne sur différents appareils, comme les ordinateurs ou smartphones.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert un site vitrine ?',
//                     content: [
//                         { title: 'Donner une image professionnelle', description: 'Un site vitrine offre une présence en ligne sérieuse et soignée qui renforce la crédibilité de l\'entreprise.' },
//                         { title: 'Informer', description: 'Il permet de fournir des informations essentielles sur l\'entreprise, ses services, ou ses produits.' },
//                         { title: 'Gagner en visibilité', description: 'Le site aide à attirer de nouveaux visiteurs et à accroître la notoriété de l\'entreprise sur internet.' },
//                         { title: 'Faciliter le contact', description: 'Le site permet aux visiteurs de contacter facilement l\'entreprise via des formulaires ou des coordonnées.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Les sites e-commerce',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Vente de produits ou services', description: 'Un site e-commerce permet de vendre des produits ou services directement en ligne, avec un panier et un système de paiement sécurisé.' },
//                         { title: 'Gestion des transactions sécurisées', description: 'Les transactions sont gérées de manière fluide et sécurisée pour garantir la confiance des clients.' },
//                         { title: 'Catalogue de produits', description: 'Un site e-commerce présente un catalogue de produits avec des descriptions détaillées et des images pour faciliter l\'achat.' },
//                         { title: 'Support client intégré', description: 'Il est possible d\'intégrer des outils de support client, comme un chat en direct ou une page FAQ.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert un site e-commerce ?',
//                     content: [
//                         { title: 'Vendre des produits ou services', description: 'Un site e-commerce permet à une entreprise de vendre directement en ligne, ce qui augmente sa portée et ses revenus.' },
//                         { title: 'Offrir une expérience d\'achat fluide', description: 'Il offre une expérience d\'achat optimisée avec un processus de commande simple et sécurisé.' },
//                         { title: 'Automatiser la gestion des commandes', description: 'Le site automatise la gestion des stocks et des commandes, permettant un suivi plus efficace.' },
//                         { title: 'Faciliter les paiements', description: 'Les sites e-commerce permettent d\'accepter plusieurs modes de paiement en ligne, y compris les cartes bancaires et les plateformes de paiement.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Référencement SEO',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Optimisation pour les moteurs de recherche', description: 'Le référencement SEO permet d\'améliorer la visibilité du site sur des moteurs de recherche comme Google.' },
//                         { title: 'Optimisation des mots-clés', description: 'Nous optimisons les contenus en utilisant les mots-clés pertinents pour améliorer le classement du site.' },
//                         { title: 'Amélioration de la vitesse de chargement', description: 'Nous mettons en œuvre des pratiques pour rendre votre site plus rapide, ce qui est essentiel pour l\'expérience utilisateur et le référencement.' },
//                         { title: 'Analyse de la concurrence', description: 'Nous effectuons une analyse approfondie des sites concurrents pour identifier les meilleures stratégies de référencement.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert le référencement SEO ?',
//                     content: [
//                         { title: 'Accroître la visibilité', description: 'Un bon référencement permet à votre site de se positionner en haut des résultats de recherche, augmentant ainsi la visibilité de votre entreprise.' },
//                         { title: 'Générer du trafic qualifié', description: 'Le SEO aide à attirer des visiteurs qui recherchent des produits ou services similaires à ceux que vous proposez.' },
//                         { title: 'Augmenter les conversions', description: 'Un bon référencement génère du trafic qualifié, ce qui peut conduire à un meilleur taux de conversion et à une augmentation des ventes.' },
//                         { title: 'Renforcer la crédibilité', description: 'Les sites qui apparaissent en haut des résultats de recherche sont souvent perçus comme plus crédibles et professionnels par les utilisateurs.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Hébergement sécurisé',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Sécurisation des données', description: 'L\'hébergement sécurisé garantit la protection des données sensibles grâce à des technologies avancées de sécurité.' },
//                         { title: 'Backups réguliers', description: 'Les données sont sauvegardées régulièrement pour assurer leur récupération en cas d\'incident.' },
//                         { title: 'Certificat SSL', description: 'L\'hébergement sécurisé intègre un certificat SSL pour protéger la communication entre le serveur et les utilisateurs.' },
//                         { title: 'Protection contre les attaques', description: 'Les serveurs sont protégés contre les attaques courantes comme les DDoS et les intrusions malveillantes.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert l\'hébergement sécurisé ?',
//                     content: [
//                         { title: 'Protéger les données des utilisateurs', description: 'Assurer la sécurité des informations personnelles et des transactions des utilisateurs qui visitent votre site.' },
//                         { title: 'Assurer la disponibilité du site', description: 'Un hébergement sécurisé garantit que votre site est en ligne et disponible en permanence, même en cas de trafic élevé.' },
//                         { title: 'Renforcer la confiance des utilisateurs', description: 'Un certificat SSL et une infrastructure sécurisée renforcent la confiance des visiteurs et des clients potentiels.' },
//                         { title: 'Optimiser la performance', description: 'L\'hébergement sécurisé optimise la vitesse et la performance de votre site grâce à une infrastructure fiable.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Gestion et maintenance',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Maintenance continue', description: 'Nous offrons une maintenance continue de votre site pour garantir sa sécurité et ses performances.' },
//                         { title: 'Mises à jour régulières', description: 'Nous assurons la mise à jour régulière de ton site pour garantir qu\'il fonctionne parfaitement.' },
//                         { title: 'Sauvegardes régulières', description: 'Des sauvegardes régulières de ton site sont effectuées pour éviter toute perte de données.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert la gestion et maintenance ?',
//                     content: [
//                         { title: 'Assurer la sécurité', description: 'La gestion et maintenance permet de maintenir la sécurité de ton site en détectant et en corrigeant les vulnérabilités.' },
//                         { title: 'Optimiser les performances', description: 'Elle garantit un site rapide et performant, avec une gestion proactive des ressources.' },
//                         { title: 'Support technique', description: 'En cas de problème, un support technique est disponible pour résoudre les éventuels soucis rapidement.' },
//                     ],
//                 },
//             ],
//         },
//     ];

//     const navigate = useNavigate();
//     const [openToggles, setOpenToggles] = useState({});

//     const toggleService = (index) => {
//         setOpenToggles((prevState) => ({
//             ...prevState,
//             [index]: !prevState[index],
//         }));
//     };

//     return (
//         <div className="nos-services-container">
//             <h2 className="nos-services-title">Nos Services</h2>
//             <div className="services-list">
//                 {services.map((service, index) => (
//                     <div key={index} className="service-section">
//                         <div
//                             className={`service-card ${openToggles[index] ? 'active' : ''}`}
//                             onClick={() => toggleService(index)}
//                         >
//                             {service.title}
//                         </div>
//                         {openToggles[index] && (
//                             <div className="service-details">
//                                 {service.details.map((detail, subIndex) => (
//                                     <div key={subIndex} className="detail-section">
//                                         <h4 className="detail-title">{detail.subtitle}</h4>
//                                         <div className="info-cards-container">
//                                             {detail.content.map((item, itemIndex) => (
//                                                 <div key={itemIndex} className="info-card">
//                                                     <strong>{item.title} :</strong>
//                                                     <p>{item.description}</p>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default NosServices;














// import React, { useState } from 'react';
// import './NosServices.css';

// const NosServices = () => {
//     const services = [
//         {
//             title: 'Les sites vitrines',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Présentation de l\'activité', description: 'Un site vitrine met en avant les informations essentielles sur une entreprise, son activité et ses services.' },
//                         { title: 'Navigation simple', description: 'Le site est conçu avec une structure claire pour que les visiteurs trouvent rapidement les informations dont ils ont besoin.' },
//                         { title: 'Pas de vente en ligne', description: 'Ce type de site ne propose pas d\'outils pour acheter des produits ou services directement en ligne.' },
//                         { title: 'Accessible à tous', description: 'Un site vitrine est facile d\'accès et fonctionne sur différents appareils, comme les ordinateurs ou smartphones.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert un site vitrine ?',
//                     content: [
//                         { title: 'Donner une image professionnelle', description: 'Un site vitrine offre une présence en ligne sérieuse et soignée qui renforce la crédibilité de l\'entreprise.' },
//                         { title: 'Informer', description: 'Il permet de fournir des informations essentielles sur l\'entreprise, ses services, ou ses produits.' },
//                         { title: 'Gagner en visibilité', description: 'Le site aide à attirer de nouveaux visiteurs et à accroître la notoriété de l\'entreprise sur internet.' },
//                         { title: 'Faciliter le contact', description: 'Le site permet aux visiteurs de contacter facilement l\'entreprise via des formulaires ou des coordonnées.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Les sites e-commerce',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Boutique en ligne', description: 'Permet de vendre des produits ou services en ligne grâce à une plateforme dédiée.' },
//                         { title: 'Paiements sécurisés', description: 'Intégration de systèmes de paiement sécurisés pour garantir des transactions fiables.' },
//                         { title: 'Gestion des stocks', description: 'Inclut des outils pour gérer les stocks en temps réel.' },
//                         { title: 'Interface intuitive', description: 'Conçue pour offrir une expérience utilisateur optimale.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert un site e-commerce ?',
//                     content: [
//                         { title: 'Augmenter les ventes', description: 'Permet d\'atteindre une clientèle plus large et d\'augmenter les ventes.' },
//                         { title: 'Faciliter les transactions', description: 'Offre une plateforme où les clients peuvent acheter facilement, 24h/24.' },
//                         { title: 'Renforcer la visibilité', description: 'Améliore la présence en ligne de l\'entreprise et attire de nouveaux clients.' },
//                         { title: 'Offrir une expérience personnalisée', description: 'Propose des recommandations et des promotions ciblées pour les utilisateurs.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Référencement SEO',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Optimisation pour les moteurs de recherche', description: 'Améliore la visibilité du site sur des moteurs comme Google.' },
//                         { title: 'Optimisation des mots-clés', description: 'Utilisation de mots-clés pertinents pour améliorer le classement.' },
//                         { title: 'Amélioration de la vitesse', description: 'Rend le site plus rapide, essentiel pour le référencement et l\'expérience utilisateur.' },
//                         { title: 'Analyse de la concurrence', description: 'Identifie les meilleures stratégies grâce à une étude approfondie des concurrents.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert le référencement SEO ?',
//                     content: [
//                         { title: 'Accroître la visibilité', description: 'Permet à votre site de se positionner en haut des résultats de recherche.' },
//                         { title: 'Générer du trafic qualifié', description: 'Attire des visiteurs intéressés par vos produits ou services.' },
//                         { title: 'Augmenter les conversions', description: 'Un trafic qualifié conduit à de meilleurs taux de conversion.' },
//                         { title: 'Renforcer la crédibilité', description: 'Les sites bien positionnés sont perçus comme crédibles et professionnels.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Hébergement sécurisé',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Sécurisation des données', description: 'Protection des données sensibles grâce à des technologies avancées.' },
//                         { title: 'Backups réguliers', description: 'Sauvegardes fréquentes pour garantir la récupération en cas de problème.' },
//                         { title: 'Certificat SSL', description: 'Sécurise la communication entre le serveur et les utilisateurs.' },
//                         { title: 'Protection contre les attaques', description: 'Protège les serveurs contre les attaques DDoS et autres.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert l\'hébergement sécurisé ?',
//                     content: [
//                         { title: 'Protéger les données', description: 'Assure la sécurité des informations personnelles des utilisateurs.' },
//                         { title: 'Assurer la disponibilité', description: 'Garantit un site toujours en ligne, même en cas de forte demande.' },
//                         { title: 'Renforcer la confiance', description: 'Améliore la confiance grâce à une infrastructure sécurisée.' },
//                         { title: 'Optimiser les performances', description: 'Offre une vitesse et des performances optimales.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Gestion et maintenance',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Maintenance continue', description: 'Garantit la sécurité et les performances du site.' },
//                         { title: 'Mises à jour régulières', description: 'Permet au site de rester fonctionnel et performant.' },
//                         { title: 'Sauvegardes régulières', description: 'Évite toute perte de données grâce à des sauvegardes fréquentes.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert la gestion et maintenance ?',
//                     content: [
//                         { title: 'Assurer la sécurité', description: 'Détecte et corrige les vulnérabilités pour un site sécurisé.' },
//                         { title: 'Optimiser les performances', description: 'Garantit un site rapide et performant.' },
//                         { title: 'Support technique', description: 'Offre une assistance rapide en cas de problème.' },
//                     ],
//                 },
//             ],
//         },
//     ];

//     const [openToggles, setOpenToggles] = useState({});
//     const [openSubToggles, setOpenSubToggles] = useState({});

//     const toggleService = (index) => {
//         setOpenToggles((prevState) => ({
//             ...prevState,
//             [index]: !prevState[index],
//         }));
//     };

//     const toggleSubCategory = (serviceIndex, subIndex) => {
//         const key = `${serviceIndex}-${subIndex}`;
//         setOpenSubToggles((prevState) => ({
//             ...prevState,
//             [key]: !prevState[key],
//         }));
//     };

//     return (
//         <div className="nos-services-container">
//             <h2 className="nos-services-title">Nos Services</h2>
//             <div className="services-list">
//                 {services.map((service, serviceIndex) => (
//                     <div key={serviceIndex} className="service-section">
//                         <div
//                             className={`service-card ${openToggles[serviceIndex] ? 'active' : ''}`}
//                             onClick={() => toggleService(serviceIndex)}
//                         >
//                             {service.title}
//                         </div>
//                         {openToggles[serviceIndex] && (
//                             <div className="service-details">
//                                 {service.details.map((detail, detailIndex) => (
//                                     <div key={detailIndex} className="detail-section">
//                                         <div
//                                             className={`detail-title ${openSubToggles[`${serviceIndex}-${detailIndex}`] ? 'active' : ''}`}
//                                             onClick={() => toggleSubCategory(serviceIndex, detailIndex)}
//                                         >
//                                             {detail.subtitle}
//                                         </div>
//                                         {openSubToggles[`${serviceIndex}-${detailIndex}`] && (
//                                             <div className="info-cards-container">
//                                                 {detail.content.map((item, itemIndex) => (
//                                                     <div key={itemIndex} className="info-card">
//                                                         <strong>{item.title} :</strong>
//                                                         <p>{item.description}</p>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default NosServices;










// import React, { useState } from 'react';
// import './NosServices.css';

// const NosServices = () => {
//     const services = [
//         {
//             title: 'Les sites vitrines',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Présentation de l\'activité', description: 'Un site vitrine met en avant les informations essentielles sur une entreprise, son activité et ses services.' },
//                         { title: 'Navigation simple', description: 'Le site est conçu avec une structure claire pour que les visiteurs trouvent rapidement les informations dont ils ont besoin.' },
//                         { title: 'Pas de vente en ligne', description: 'Ce type de site ne propose pas d\'outils pour acheter des produits ou services directement en ligne.' },
//                         { title: 'Accessible à tous', description: 'Un site vitrine est facile d\'accès et fonctionne sur différents appareils, comme les ordinateurs ou smartphones.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert un site vitrine ?',
//                     content: [
//                         { title: 'Donner une image professionnelle', description: 'Un site vitrine offre une présence en ligne sérieuse et soignée qui renforce la crédibilité de l\'entreprise.' },
//                         { title: 'Informer', description: 'Il permet de fournir des informations essentielles sur l\'entreprise, ses services, ou ses produits.' },
//                         { title: 'Gagner en visibilité', description: 'Le site aide à attirer de nouveaux visiteurs et à accroître la notoriété de l\'entreprise sur internet.' },
//                         { title: 'Faciliter le contact', description: 'Le site permet aux visiteurs de contacter facilement l\'entreprise via des formulaires ou des coordonnées.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Les sites e-commerce',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Boutique en ligne', description: 'Permet de vendre des produits ou services en ligne grâce à une plateforme dédiée.' },
//                         { title: 'Paiements sécurisés', description: 'Intégration de systèmes de paiement sécurisés pour garantir des transactions fiables.' },
//                         { title: 'Gestion des stocks', description: 'Inclut des outils pour gérer les stocks en temps réel.' },
//                         { title: 'Interface intuitive', description: 'Conçue pour offrir une expérience utilisateur optimale.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert un site e-commerce ?',
//                     content: [
//                         { title: 'Augmenter les ventes', description: 'Permet d\'atteindre une clientèle plus large et d\'augmenter les ventes.' },
//                         { title: 'Faciliter les transactions', description: 'Offre une plateforme où les clients peuvent acheter facilement, 24h/24.' },
//                         { title: 'Renforcer la visibilité', description: 'Améliore la présence en ligne de l\'entreprise et attire de nouveaux clients.' },
//                         { title: 'Offrir une expérience personnalisée', description: 'Propose des recommandations et des promotions ciblées pour les utilisateurs.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Référencement SEO',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Optimisation pour les moteurs de recherche', description: 'Améliore la visibilité du site sur des moteurs comme Google.' },
//                         { title: 'Optimisation des mots-clés', description: 'Utilisation de mots-clés pertinents pour améliorer le classement.' },
//                         { title: 'Amélioration de la vitesse', description: 'Rend le site plus rapide, essentiel pour le référencement et l\'expérience utilisateur.' },
//                         { title: 'Analyse de la concurrence', description: 'Identifie les meilleures stratégies grâce à une étude approfondie des concurrents.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert le référencement SEO ?',
//                     content: [
//                         { title: 'Accroître la visibilité', description: 'Permet à votre site de se positionner en haut des résultats de recherche.' },
//                         { title: 'Générer du trafic qualifié', description: 'Attire des visiteurs intéressés par vos produits ou services.' },
//                         { title: 'Augmenter les conversions', description: 'Un trafic qualifié conduit à de meilleurs taux de conversion.' },
//                         { title: 'Renforcer la crédibilité', description: 'Les sites bien positionnés sont perçus comme crédibles et professionnels.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Hébergement sécurisé',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Sécurisation des données', description: 'Protection des données sensibles grâce à des technologies avancées.' },
//                         { title: 'Backups réguliers', description: 'Sauvegardes fréquentes pour garantir la récupération en cas de problème.' },
//                         { title: 'Certificat SSL', description: 'Sécurise la communication entre le serveur et les utilisateurs.' },
//                         { title: 'Protection contre les attaques', description: 'Protège les serveurs contre les attaques DDoS et autres.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert l\'hébergement sécurisé ?',
//                     content: [
//                         { title: 'Protéger les données', description: 'Assure la sécurité des informations personnelles des utilisateurs.' },
//                         { title: 'Assurer la disponibilité', description: 'Garantit un site toujours en ligne, même en cas de forte demande.' },
//                         { title: 'Renforcer la confiance', description: 'Améliore la confiance grâce à une infrastructure sécurisée.' },
//                         { title: 'Optimiser les performances', description: 'Offre une vitesse et des performances optimales.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Gestion et maintenance',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Maintenance continue', description: 'Garantit la sécurité et les performances du site.' },
//                         { title: 'Mises à jour régulières', description: 'Permet au site de rester fonctionnel et performant.' },
//                         { title: 'Sauvegardes régulières', description: 'Évite toute perte de données grâce à des sauvegardes fréquentes.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert la gestion et maintenance ?',
//                     content: [
//                         { title: 'Assurer la sécurité', description: 'Détecte et corrige les vulnérabilités pour un site sécurisé.' },
//                         { title: 'Optimiser les performances', description: 'Garantit un site rapide et performant.' },
//                         { title: 'Support technique', description: 'Offre une assistance rapide en cas de problème.' },
//                     ],
//                 },
//             ],
//         },
//     ];

//     const [openService, setOpenService] = useState(null);
//     const [openSubCategory, setOpenSubCategory] = useState(null);

//     const toggleService = (index) => {
//         setOpenService(openService === index ? null : index); // Fermeture si déjà ouvert
//     };

//     const toggleSubCategory = (serviceIndex, subIndex) => {
//         const key = `${serviceIndex}-${subIndex}`;
//         setOpenSubCategory(openSubCategory === key ? null : key); // Fermeture si déjà ouvert
//     };

//     return (
//         <div className="nos-services-container">
//             <h2 className="nos-services-title">Nos Services</h2>
//             <div className="services-list">
//                 {services.map((service, serviceIndex) => (
//                     <div key={serviceIndex} className="service-section">
//                         <div
//                             className={`service-card ${openService === serviceIndex ? 'active' : ''}`}
//                             onClick={() => toggleService(serviceIndex)}
//                         >
//                             {service.title}
//                         </div>
//                         {openService === serviceIndex && (
//                             <div className="service-details">
//                                 {service.details.map((detail, detailIndex) => (
//                                     <div key={detailIndex} className="detail-section">
//                                         <div
//                                             className={`detail-title ${openSubCategory === `${serviceIndex}-${detailIndex}` ? 'active' : ''}`}
//                                             onClick={() => toggleSubCategory(serviceIndex, detailIndex)}
//                                         >
//                                             {detail.subtitle}
//                                         </div>
//                                         {openSubCategory === `${serviceIndex}-${detailIndex}` && (
//                                             <div className="info-cards-container">
//                                                 {detail.content.map((item, itemIndex) => (
//                                                     <div key={itemIndex} className="info-card">
//                                                         <strong>{item.title} :</strong>
//                                                         <p>{item.description}</p>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default NosServices;










// import React, { useState } from 'react';
// import './NosServices.css';

// const NosServices = () => {
    // const services = [
    //     {
    //         title: 'Les sites vitrines',
    //         details: [
    //             {
    //                 subtitle: 'Caractéristiques principales',
    //                 content: [
    //                     { title: 'Présentation de l\'activité', description: 'Un site vitrine met en avant les informations essentielles sur une entreprise, son activité et ses services.' },
    //                     { title: 'Navigation simple', description: 'Le site est conçu avec une structure claire pour que les visiteurs trouvent rapidement les informations dont ils ont besoin.' },
    //                     { title: 'Pas de vente en ligne', description: 'Ce type de site ne propose pas d\'outils pour acheter des produits ou services directement en ligne.' },
    //                     { title: 'Accessible à tous', description: 'Un site vitrine est facile d\'accès et fonctionne sur différents appareils, comme les ordinateurs ou smartphones.' },
    //                 ],
    //             },
    //             {
    //                 subtitle: 'À quoi sert un site vitrine ?',
    //                 content: [
    //                     { title: 'Donner une image professionnelle', description: 'Un site vitrine offre une présence en ligne sérieuse et soignée qui renforce la crédibilité de l\'entreprise.' },
    //                     { title: 'Informer', description: 'Il permet de fournir des informations essentielles sur l\'entreprise, ses services, ou ses produits.' },
    //                     { title: 'Gagner en visibilité', description: 'Le site aide à attirer de nouveaux visiteurs et à accroître la notoriété de l\'entreprise sur internet.' },
    //                     { title: 'Faciliter le contact', description: 'Le site permet aux visiteurs de contacter facilement l\'entreprise via des formulaires ou des coordonnées.' },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         title: 'Les sites e-commerce',
    //         details: [
    //             {
    //                 subtitle: 'Caractéristiques principales',
    //                 content: [
    //                     { title: 'Boutique en ligne', description: 'Permet de vendre des produits ou services en ligne grâce à une plateforme dédiée.' },
    //                     { title: 'Paiements sécurisés', description: 'Intégration de systèmes de paiement sécurisés pour garantir des transactions fiables.' },
    //                     { title: 'Gestion des stocks', description: 'Inclut des outils pour gérer les stocks en temps réel.' },
    //                     { title: 'Interface intuitive', description: 'Conçue pour offrir une expérience utilisateur optimale.' },
    //                 ],
    //             },
    //             {
    //                 subtitle: 'À quoi sert un site e-commerce ?',
    //                 content: [
    //                     { title: 'Augmenter les ventes', description: 'Permet d\'atteindre une clientèle plus large et d\'augmenter les ventes.' },
    //                     { title: 'Faciliter les transactions', description: 'Offre une plateforme où les clients peuvent acheter facilement, 24h/24.' },
    //                     { title: 'Renforcer la visibilité', description: 'Améliore la présence en ligne de l\'entreprise et attire de nouveaux clients.' },
    //                     { title: 'Offrir une expérience personnalisée', description: 'Propose des recommandations et des promotions ciblées pour les utilisateurs.' },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         title: 'Référencement SEO',
    //         details: [
    //             {
    //                 subtitle: 'Caractéristiques principales',
    //                 content: [
    //                     { title: 'Optimisation pour les moteurs de recherche', description: 'Améliore la visibilité du site sur des moteurs comme Google.' },
    //                     { title: 'Optimisation des mots-clés', description: 'Utilisation de mots-clés pertinents pour améliorer le classement.' },
    //                     { title: 'Amélioration de la vitesse', description: 'Rend le site plus rapide, essentiel pour le référencement et l\'expérience utilisateur.' },
    //                     { title: 'Analyse de la concurrence', description: 'Identifie les meilleures stratégies grâce à une étude approfondie des concurrents.' },
    //                 ],
    //             },
    //             {
    //                 subtitle: 'À quoi sert le référencement SEO ?',
    //                 content: [
    //                     { title: 'Accroître la visibilité', description: 'Permet à votre site de se positionner en haut des résultats de recherche.' },
    //                     { title: 'Générer du trafic qualifié', description: 'Attire des visiteurs intéressés par vos produits ou services.' },
    //                     { title: 'Augmenter les conversions', description: 'Un trafic qualifié conduit à de meilleurs taux de conversion.' },
    //                     { title: 'Renforcer la crédibilité', description: 'Les sites bien positionnés sont perçus comme crédibles et professionnels.' },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         title: 'Hébergement sécurisé',
    //         details: [
    //             {
    //                 subtitle: 'Caractéristiques principales',
    //                 content: [
    //                     { title: 'Sécurisation des données', description: 'Protection des données sensibles grâce à des technologies avancées.' },
    //                     { title: 'Backups réguliers', description: 'Sauvegardes fréquentes pour garantir la récupération en cas de problème.' },
    //                     { title: 'Certificat SSL', description: 'Sécurise la communication entre le serveur et les utilisateurs.' },
    //                     { title: 'Protection contre les attaques', description: 'Protège les serveurs contre les attaques DDoS et autres.' },
    //                 ],
    //             },
    //             {
    //                 subtitle: 'À quoi sert l\'hébergement sécurisé ?',
    //                 content: [
    //                     { title: 'Protéger les données', description: 'Assure la sécurité des informations personnelles des utilisateurs.' },
    //                     { title: 'Assurer la disponibilité', description: 'Garantit un site toujours en ligne, même en cas de forte demande.' },
    //                     { title: 'Renforcer la confiance', description: 'Améliore la confiance grâce à une infrastructure sécurisée.' },
    //                     { title: 'Optimiser les performances', description: 'Offre une vitesse et des performances optimales.' },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         title: 'Gestion et maintenance',
    //         details: [
    //             {
    //                 subtitle: 'Caractéristiques principales',
    //                 content: [
    //                     { title: 'Maintenance continue', description: 'Garantit la sécurité et les performances du site.' },
    //                     { title: 'Mises à jour régulières', description: 'Permet au site de rester fonctionnel et performant.' },
    //                     { title: 'Sauvegardes régulières', description: 'Évite toute perte de données grâce à des sauvegardes fréquentes.' },
    //                 ],
    //             },
    //             {
    //                 subtitle: 'À quoi sert la gestion et maintenance ?',
    //                 content: [
    //                     { title: 'Assurer la sécurité', description: 'Détecte et corrige les vulnérabilités pour un site sécurisé.' },
    //                     { title: 'Optimiser les performances', description: 'Garantit un site rapide et performant.' },
    //                     { title: 'Support technique', description: 'Offre une assistance rapide en cas de problème.' },
    //                 ],
    //             },
    //         ],
    //     },
    // ];

//     const [openService, setOpenService] = useState(null);
//     const [openSubCategory, setOpenSubCategory] = useState(null);

//     const toggleService = (index) => {
//         setOpenService(openService === index ? null : index); // Fermeture si déjà ouvert
//     };

//     const toggleSubCategory = (serviceIndex, subIndex) => {
//         const key = `${serviceIndex}-${subIndex}`;
//         setOpenSubCategory(openSubCategory === key ? null : key); // Fermeture si déjà ouvert
//     };

//     return (
//         <div className="nos-services-container">
//             <h2 className="nos-services-title">Nos Services</h2>
//             <div className="services-list">
//                 {services.map((service, serviceIndex) => (
//                     <div key={serviceIndex} className="service-section">
//                         <div
//                             className={`service-card ${openService === serviceIndex ? 'active' : ''}`}
//                             onClick={() => toggleService(serviceIndex)}
//                         >
//                             <span>{service.title}</span>
//                             <span className="toggle-button">
//                                 {openService === serviceIndex ? '-' : '+'}
//                             </span>
//                         </div>
//                         {openService === serviceIndex && (
//                             <div className="service-details">
//                                 {service.details.map((detail, detailIndex) => (
//                                     <div key={detailIndex} className="detail-section">
//                                         <div
//                                             className={`detail-title ${openSubCategory === `${serviceIndex}-${detailIndex}` ? 'active' : ''}`}
//                                             onClick={() => toggleSubCategory(serviceIndex, detailIndex)}
//                                         >
//                                             <span>{detail.subtitle}</span>
//                                             <span className="toggle-button">
//                                                 {openSubCategory === `${serviceIndex}-${detailIndex}` ? '-' : '+'}
//                                             </span>
//                                         </div>
//                                         {openSubCategory === `${serviceIndex}-${detailIndex}` && (
//                                             <div className="info-cards-container">
//                                                 {detail.content.map((item, itemIndex) => (
//                                                     <div key={itemIndex} className="info-card">
//                                                         <strong>{item.title} :</strong>
//                                                         <p>{item.description}</p>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default NosServices;













// import React, { useState } from 'react';
// import './NosServices.css';

// const NosServices = () => {
//     const services = [
//         {
//             title: 'Les sites vitrines',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Présentation de l\'activité', description: 'Un site vitrine met en avant les informations essentielles sur une entreprise, son activité et ses services.' },
//                         { title: 'Navigation simple', description: 'Le site est conçu avec une structure claire pour que les visiteurs trouvent rapidement les informations dont ils ont besoin.' },
//                         { title: 'Pas de vente en ligne', description: 'Ce type de site ne propose pas d\'outils pour acheter des produits ou services directement en ligne.' },
//                         { title: 'Accessible à tous', description: 'Un site vitrine est facile d\'accès et fonctionne sur différents appareils, comme les ordinateurs ou smartphones.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert un site vitrine ?',
//                     content: [
//                         { title: 'Donner une image professionnelle', description: 'Un site vitrine offre une présence en ligne sérieuse et soignée qui renforce la crédibilité de l\'entreprise.' },
//                         { title: 'Informer', description: 'Il permet de fournir des informations essentielles sur l\'entreprise, ses services, ou ses produits.' },
//                         { title: 'Gagner en visibilité', description: 'Le site aide à attirer de nouveaux visiteurs et à accroître la notoriété de l\'entreprise sur internet.' },
//                         { title: 'Faciliter le contact', description: 'Le site permet aux visiteurs de contacter facilement l\'entreprise via des formulaires ou des coordonnées.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Les sites e-commerce',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Boutique en ligne', description: 'Permet de vendre des produits ou services en ligne grâce à une plateforme dédiée.' },
//                         { title: 'Paiements sécurisés', description: 'Intégration de systèmes de paiement sécurisés pour garantir des transactions fiables.' },
//                         { title: 'Gestion des stocks', description: 'Inclut des outils pour gérer les stocks en temps réel.' },
//                         { title: 'Interface intuitive', description: 'Conçue pour offrir une expérience utilisateur optimale.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert un site e-commerce ?',
//                     content: [
//                         { title: 'Augmenter les ventes', description: 'Permet d\'atteindre une clientèle plus large et d\'augmenter les ventes.' },
//                         { title: 'Faciliter les transactions', description: 'Offre une plateforme où les clients peuvent acheter facilement, 24h/24.' },
//                         { title: 'Renforcer la visibilité', description: 'Améliore la présence en ligne de l\'entreprise et attire de nouveaux clients.' },
//                         { title: 'Offrir une expérience personnalisée', description: 'Propose des recommandations et des promotions ciblées pour les utilisateurs.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Référencement SEO',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Optimisation pour les moteurs de recherche', description: 'Améliore la visibilité du site sur des moteurs comme Google.' },
//                         { title: 'Optimisation des mots-clés', description: 'Utilisation de mots-clés pertinents pour améliorer le classement.' },
//                         { title: 'Amélioration de la vitesse', description: 'Rend le site plus rapide, essentiel pour le référencement et l\'expérience utilisateur.' },
//                         { title: 'Analyse de la concurrence', description: 'Identifie les meilleures stratégies grâce à une étude approfondie des concurrents.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert le référencement SEO ?',
//                     content: [
//                         { title: 'Accroître la visibilité', description: 'Permet à votre site de se positionner en haut des résultats de recherche.' },
//                         { title: 'Générer du trafic qualifié', description: 'Attire des visiteurs intéressés par vos produits ou services.' },
//                         { title: 'Augmenter les conversions', description: 'Un trafic qualifié conduit à de meilleurs taux de conversion.' },
//                         { title: 'Renforcer la crédibilité', description: 'Les sites bien positionnés sont perçus comme crédibles et professionnels.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Hébergement sécurisé',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Sécurisation des données', description: 'Protection des données sensibles grâce à des technologies avancées.' },
//                         { title: 'Backups réguliers', description: 'Sauvegardes fréquentes pour garantir la récupération en cas de problème.' },
//                         { title: 'Certificat SSL', description: 'Sécurise la communication entre le serveur et les utilisateurs.' },
//                         { title: 'Protection contre les attaques', description: 'Protège les serveurs contre les attaques DDoS et autres.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert l\'hébergement sécurisé ?',
//                     content: [
//                         { title: 'Protéger les données', description: 'Assure la sécurité des informations personnelles des utilisateurs.' },
//                         { title: 'Assurer la disponibilité', description: 'Garantit un site toujours en ligne, même en cas de forte demande.' },
//                         { title: 'Renforcer la confiance', description: 'Améliore la confiance grâce à une infrastructure sécurisée.' },
//                         { title: 'Optimiser les performances', description: 'Offre une vitesse et des performances optimales.' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Gestion et maintenance',
//             details: [
//                 {
//                     subtitle: 'Caractéristiques principales',
//                     content: [
//                         { title: 'Maintenance continue', description: 'Garantit la sécurité et les performances du site.' },
//                         { title: 'Mises à jour régulières', description: 'Permet au site de rester fonctionnel et performant.' },
//                         { title: 'Sauvegardes régulières', description: 'Évite toute perte de données grâce à des sauvegardes fréquentes.' },
//                     ],
//                 },
//                 {
//                     subtitle: 'À quoi sert la gestion et maintenance ?',
//                     content: [
//                         { title: 'Assurer la sécurité', description: 'Détecte et corrige les vulnérabilités pour un site sécurisé.' },
//                         { title: 'Optimiser les performances', description: 'Garantit un site rapide et performant.' },
//                         { title: 'Support technique', description: 'Offre une assistance rapide en cas de problème.' },
//                     ],
//                 },
//             ],
//         },
//     ];

//     const [openService, setOpenService] = useState(null);
//     const [openSubCategory, setOpenSubCategory] = useState(null);

//     const toggleService = (index) => {
//         setOpenService(openService === index ? null : index); // Fermeture si déjà ouvert
//     };

//     const toggleSubCategory = (serviceIndex, subIndex) => {
//         const key = `${serviceIndex}-${subIndex}`;
//         setOpenSubCategory(openSubCategory === key ? null : key); // Fermeture si déjà ouvert
//     };

//     return (
//         <div className="nos-services-container">
//             <div className="services-list">
//                 {services.map((service, serviceIndex) => (
//                     <div key={serviceIndex} className="service-section">
//                         <div
//                             className={`service-card ${openService === serviceIndex ? 'active' : ''}`}
//                             onClick={() => toggleService(serviceIndex)}
//                         >
//                             {service.title}
//                         </div>
//                         {openService === serviceIndex && (
//                             <div className="service-details">
//                                 {service.details.map((detail, detailIndex) => (
//                                     <div key={detailIndex} className="detail-section">
//                                         <div
//                                             className={`detail-title ${openSubCategory === `${serviceIndex}-${detailIndex}` ? 'active' : ''}`}
//                                             onClick={() => toggleSubCategory(serviceIndex, detailIndex)}
//                                         >
//                                             {detail.subtitle}
//                                         </div>
//                                         {openSubCategory === `${serviceIndex}-${detailIndex}` && (
//                                             <div className="info-cards-container">
//                                                 {detail.content.map((item, itemIndex) => (
//                                                     <div key={itemIndex} className="info-card">
//                                                         <strong>{item.title} :</strong>
//                                                         <p>{item.description}</p>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default NosServices;










// import React, { useState } from 'react';
// import './NosServices.css';

// const NosServices = () => {
//   const services = [
//     {
//       title: 'Les sites vitrines',
//       details: [
//         {
//           subtitle: 'Caractéristiques principales',
//           content: [
//             { title: 'Présentation de l\'activité', description: 'Un site vitrine met en avant les informations essentielles sur une entreprise, son activité et ses services.' },
//             { title: 'Navigation simple', description: 'Le site est conçu avec une structure claire pour que les visiteurs trouvent rapidement les informations dont ils ont besoin.' },
//             { title: 'Pas de vente en ligne', description: 'Ce type de site ne propose pas d\'outils pour acheter des produits ou services directement en ligne.' },
//             { title: 'Accessible à tous', description: 'Un site vitrine est facile d\'accès et fonctionne sur différents appareils, comme les ordinateurs ou smartphones.' },
//           ],
//         },
//         {
//           subtitle: 'À quoi sert un site vitrine ?',
//           content: [
//             { title: 'Donner une image professionnelle', description: 'Un site vitrine offre une présence en ligne sérieuse et soignée qui renforce la crédibilité de l\'entreprise.' },
//             { title: 'Informer', description: 'Il permet de fournir des informations essentielles sur l\'entreprise, ses services, ou ses produits.' },
//           ],
//         },
//       ],
//     },
//     {
//       title: 'Les sites e-commerce',
//       details: [
//         {
//           subtitle: 'Caractéristiques principales',
//           content: [
//             { title: 'Boutique en ligne', description: 'Permet de vendre des produits ou services en ligne grâce à une plateforme dédiée.' },
//             { title: 'Paiements sécurisés', description: 'Intégration de systèmes de paiement sécurisés pour garantir des transactions fiables.' },
//             { title: 'Gestion des stocks', description: 'Inclut des outils pour gérer les stocks en temps réel.' },
//           ],
//         },
//         {
//           subtitle: 'À quoi sert un site e-commerce ?',
//           content: [
//             { title: 'Augmenter les ventes', description: 'Permet d\'atteindre une clientèle plus large et d\'augmenter les ventes.' },
//             { title: 'Faciliter les transactions', description: 'Offre une plateforme où les clients peuvent acheter facilement, 24h/24.' },
//           ],
//         },
//       ],
//     },
//     {
//       title: 'Référencement SEO',
//       details: [
//         {
//           subtitle: 'Caractéristiques principales',
//           content: [
//             { title: 'Optimisation pour les moteurs de recherche', description: 'Améliore la visibilité du site sur des moteurs comme Google.' },
//             { title: 'Analyse de la concurrence', description: 'Identifie les meilleures stratégies grâce à une étude approfondie des concurrents.' },
//           ],
//         },
//       ],
//     },
//     {
//       title: 'Hébergement sécurisé',
//       details: [
//         {
//           subtitle: 'Caractéristiques principales',
//           content: [
//             { title: 'Sécurisation des données', description: 'Protection des données sensibles grâce à des technologies avancées.' },
//             { title: 'Certificat SSL', description: 'Sécurise la communication entre le serveur et les utilisateurs.' },
//           ],
//         },
//       ],
//     },
//     {
//       title: 'Gestion et maintenance',
//       details: [
//         {
//           subtitle: 'Caractéristiques principales',
//           content: [
//             { title: 'Maintenance continue', description: 'Garantit la sécurité et les performances du site.' },
//             { title: 'Mises à jour régulières', description: 'Permet au site de rester fonctionnel et performant.' },
//           ],
//         },
//       ],
//     },
//   ];

//   const [openService, setOpenService] = useState(null);
//   const [openSubCategory, setOpenSubCategory] = useState(null);

//   const toggleService = (index) => {
//     setOpenService(openService === index ? null : index);
//   };

//   const toggleSubCategory = (serviceIndex, subIndex) => {
//     const key = `${serviceIndex}-${subIndex}`;
//     setOpenSubCategory(openSubCategory === key ? null : key);
//   };

//   return (
//     <>
//       {/* Navbar en haut */}
//       <div className="navbar">
//         <h1>Nos Services</h1>
//       </div>

//       {/* Menu déroulant avec scrollbar juste sous la navbar */}
//       <div className="toggle-container">
//         {services.map((service, serviceIndex) => (
//           <div key={serviceIndex} className="service-section">
//             <div
//               className={`service-card ${openService === serviceIndex ? 'active' : ''}`}
//               onClick={() => toggleService(serviceIndex)}
//             >
//               {service.title}
//             </div>
//             {openService === serviceIndex && (
//               <div className="service-details">
//                 {service.details.map((detail, detailIndex) => (
//                   <div
//                     key={detailIndex}
//                     className="detail-title"
//                     onClick={() => toggleSubCategory(serviceIndex, detailIndex)}
//                   >
//                     {detail.subtitle}
//                     {openSubCategory === `${serviceIndex}-${detailIndex}` && (
//                       <div className="info-cards-container">
//                         {detail.content.map((item, itemIndex) => (
//                           <div key={itemIndex} className="info-card">
//                             <strong>{item.title} :</strong> {item.description}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Contenu principal de la page */}
//       <div className="main-content">
//         <p>Explorez nos services et contactez-nous pour plus d'informations !</p>
//       </div>
//     </>
//   );
// };

// export default NosServices;



























import React, { useState } from 'react';
import './NosServices.css';

const NosServices = () => {
    const services = [
        {
            title: 'Les sites vitrines',
            details: [
                {
                    subtitle: 'Caractéristiques principales',
                    content: [
                        { title: 'Présentation de l\'activité', description: 'Un site vitrine met en avant les informations essentielles sur une entreprise, son activité et ses services.' },
                        { title: 'Navigation simple', description: 'Le site est conçu avec une structure claire pour que les visiteurs trouvent rapidement les informations dont ils ont besoin.' },
                        { title: 'Pas de vente en ligne', description: 'Ce type de site ne propose pas d\'outils pour acheter des produits ou services directement en ligne.' },
                        { title: 'Accessible à tous', description: 'Un site vitrine est facile d\'accès et fonctionne sur différents appareils, comme les ordinateurs ou smartphones.' },
                    ],
                },
                {
                    subtitle: 'À quoi sert un site vitrine ?',
                    content: [
                        { title: 'Donner une image professionnelle', description: 'Un site vitrine offre une présence en ligne sérieuse et soignée qui renforce la crédibilité de l\'entreprise.' },
                        { title: 'Informer', description: 'Il permet de fournir des informations essentielles sur l\'entreprise, ses services, ou ses produits.' },
                        { title: 'Gagner en visibilité', description: 'Le site aide à attirer de nouveaux visiteurs et à accroître la notoriété de l\'entreprise sur internet.' },
                        { title: 'Faciliter le contact', description: 'Le site permet aux visiteurs de contacter facilement l\'entreprise via des formulaires ou des coordonnées.' },
                    ],
                },
            ],
        },
        {
            title: 'Les sites e-commerce',
            details: [
                {
                    subtitle: 'Caractéristiques principales',
                    content: [
                        { title: 'Boutique en ligne', description: 'Permet de vendre des produits ou services en ligne grâce à une plateforme dédiée.' },
                        { title: 'Paiements sécurisés', description: 'Intégration de systèmes de paiement sécurisés pour garantir des transactions fiables.' },
                        { title: 'Gestion des stocks', description: 'Inclut des outils pour gérer les stocks en temps réel.' },
                        { title: 'Interface intuitive', description: 'Conçue pour offrir une expérience utilisateur optimale.' },
                    ],
                },
                {
                    subtitle: 'À quoi sert un site e-commerce ?',
                    content: [
                        { title: 'Augmenter les ventes', description: 'Permet d\'atteindre une clientèle plus large et d\'augmenter les ventes.' },
                        { title: 'Faciliter les transactions', description: 'Offre une plateforme où les clients peuvent acheter facilement, 24h/24.' },
                        { title: 'Renforcer la visibilité', description: 'Améliore la présence en ligne de l\'entreprise et attire de nouveaux clients.' },
                        { title: 'Offrir une expérience personnalisée', description: 'Propose des recommandations et des promotions ciblées pour les utilisateurs.' },
                    ],
                },
            ],
        },
        {
            title: 'Référencement SEO',
            details: [
                {
                    subtitle: 'Caractéristiques principales',
                    content: [
                        { title: 'Optimisation pour les moteurs de recherche', description: 'Améliore la visibilité du site sur des moteurs comme Google.' },
                        { title: 'Optimisation des mots-clés', description: 'Utilisation de mots-clés pertinents pour améliorer le classement.' },
                        { title: 'Amélioration de la vitesse', description: 'Rend le site plus rapide, essentiel pour le référencement et l\'expérience utilisateur.' },
                        { title: 'Analyse de la concurrence', description: 'Identifie les meilleures stratégies grâce à une étude approfondie des concurrents.' },
                    ],
                },
                {
                    subtitle: 'À quoi sert le référencement SEO ?',
                    content: [
                        { title: 'Accroître la visibilité', description: 'Permet à votre site de se positionner en haut des résultats de recherche.' },
                        { title: 'Générer du trafic qualifié', description: 'Attire des visiteurs intéressés par vos produits ou services.' },
                        { title: 'Augmenter les conversions', description: 'Un trafic qualifié conduit à de meilleurs taux de conversion.' },
                        { title: 'Renforcer la crédibilité', description: 'Les sites bien positionnés sont perçus comme crédibles et professionnels.' },
                    ],
                },
            ],
        },
        {
            title: 'Hébergement sécurisé',
            details: [
                {
                    subtitle: 'Caractéristiques principales',
                    content: [
                        { title: 'Sécurisation des données', description: 'Protection des données sensibles grâce à des technologies avancées.' },
                        { title: 'Backups réguliers', description: 'Sauvegardes fréquentes pour garantir la récupération en cas de problème.' },
                        { title: 'Certificat SSL', description: 'Sécurise la communication entre le serveur et les utilisateurs.' },
                        { title: 'Protection contre les attaques', description: 'Protège les serveurs contre les attaques DDoS et autres.' },
                    ],
                },
                {
                    subtitle: 'À quoi sert l\'hébergement sécurisé ?',
                    content: [
                        { title: 'Protéger les données', description: 'Assure la sécurité des informations personnelles des utilisateurs.' },
                        { title: 'Assurer la disponibilité', description: 'Garantit un site toujours en ligne, même en cas de forte demande.' },
                        { title: 'Renforcer la confiance', description: 'Améliore la confiance grâce à une infrastructure sécurisée.' },
                        { title: 'Optimiser les performances', description: 'Offre une vitesse et des performances optimales.' },
                    ],
                },
            ],
        },
        {
            title: 'Gestion et maintenance',
            details: [
                {
                    subtitle: 'Caractéristiques principales',
                    content: [
                        { title: 'Maintenance continue', description: 'Garantit la sécurité et les performances du site.' },
                        { title: 'Mises à jour régulières', description: 'Permet au site de rester fonctionnel et performant.' },
                        { title: 'Sauvegardes régulières', description: 'Évite toute perte de données grâce à des sauvegardes fréquentes.' },
                    ],
                },
                {
                    subtitle: 'À quoi sert la gestion et maintenance ?',
                    content: [
                        { title: 'Assurer la sécurité', description: 'Détecte et corrige les vulnérabilités pour un site sécurisé.' },
                        { title: 'Optimiser les performances', description: 'Garantit un site rapide et performant.' },
                        { title: 'Support technique', description: 'Offre une assistance rapide en cas de problème.' },
                    ],
                },
            ],
        },
    ];

  const [openService, setOpenService] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

  const toggleSubCategory = (serviceIndex, subIndex) => {
    const key = `${serviceIndex}-${subIndex}`;
    setOpenSubCategory(openSubCategory === key ? null : key);
  };

  return (
    <>


      <div className="toggle-container">
        {services.map((service, serviceIndex) => (
          <div key={serviceIndex} className="service-section">
            <div
              className={`service-card ${openService === serviceIndex ? 'active' : ''}`}
              onClick={() => toggleService(serviceIndex)}
            >
              {service.title}
            </div>
            {openService === serviceIndex && (
              <div className="service-details">
                {service.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className={`detail-card ${openSubCategory === `${serviceIndex}-${detailIndex}` ? 'active' : ''}`}
                    onClick={() => toggleSubCategory(serviceIndex, detailIndex)}
                  >
                    {detail.subtitle}
                    {openSubCategory === `${serviceIndex}-${detailIndex}` && (
                      <div className="info-cards-container">
                        {detail.content.map((item, itemIndex) => (
                          <div key={itemIndex} className="info-card">
                            <strong>{item.title} :</strong> {item.description}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default NosServices;
