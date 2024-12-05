import React, { useState } from 'react';
import './NosServices.css';
import { useNavigate } from 'react-router-dom';

const NosServices = () => {
    const services = [
        'Les sites vitrines',
        'Les sites e-commerce',
        'Les sites personnalisés',
        'Le référencement et SEO',
        "L'hébergement sécurisé",
        'Gestion et maintenance',
    ];

    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState(null);
    const [selectedSubCard, setSelectedSubCard] = useState(null);

    // const handleServiceClick = (index) => {
    //     setSelectedService(index);
    //     setSelectedSubCard(null);
    // };

    const handleServiceClick = (index) => {
        // Vérifie si le service sélectionné est déjà celui qui a été cliqué
        if (selectedService === index) {
            // Si c'est le cas, réinitialiser la sélection
            setSelectedService(null);
            setSelectedSubCard(null);
        } else {
            // Sinon, sélectionne le nouveau service
            setSelectedService(index);
            setSelectedSubCard(null);
        }
    };
    

    const handleDevisClick = () => {
        switch (services[selectedService]) {
            case 'Les sites vitrines':
                navigate('/devis');
                break;
            case 'Les sites e-commerce':
                navigate('/formulaire-devis');
                break;
            case 'Les sites personnalisés':
                navigate('/formulaire-devis');
                break;
            case 'Le référencement et SEO':
                navigate('/formulaire-devis');
                break;
            case "L'hébergement sécurisé":
                navigate('/formulaire-devis');
                break;
            case 'Gestion et maintenance':
                navigate('/formulaire-devis');
                break;
            default:
                console.log('Service non défini pour le devis');
                break;
        }
    };

    const handleSubCardSelect = (subCardIndex) => {
        setSelectedSubCard(subCardIndex);
    };

    return (
        <div className="nos-services-container">
            {/* Liste des services */}
            <div className="services-list">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`service-card ${selectedService === index ? 'active' : ''}`}
                        onClick={() => handleServiceClick(index)}
                    >
                        {service}
                    </div>
                ))}
            </div>

            {/* Contenu principal avec sous-cards à gauche et détails à droite */}
            <div className="content-container">
                {/* Sous-cards à gauche */}
                {selectedService !== null && (
                    <div className="sub-cards-left">
                        <div className='soustitre'>
                            {['Caractéristiques principales', `À quoi sert un ${services[selectedService].toLowerCase()} ?`].map((label, index) => (
                                <div
                                    key={index}
                                    className={`sub-card ${selectedSubCard === index ? 'active' : ''}`}
                                    onClick={() => handleSubCardSelect(index)}
                                >
                                    <h5>{label}</h5>
                                </div>
                            ))}
                        </div>
                        {/* Bouton Devis */}
                        <div className="deviser">
                            <button className="devis-button" onClick={handleDevisClick}>
                                DEVIS
                            </button>
                        </div>
                    </div>
                )}

                {/* Détails à droite */}
                <div className="sub-cards-right">
                    {/* Sites vitrines */}
                    {selectedService === 0 && selectedSubCard === 0 && (
                        
                        <div className="sub">
                            <h4>Caractéristiques principales</h4>
                        <div className="sub-card-details">
                            
                            <div className="info-cards-container">
                                <div className="info-card">
                                    <strong>Présentation de l'activité :</strong>
                                    <p>Un site vitrine met en avant les informations essentielles sur une entreprise, son activité et ses services.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Navigation simple :</strong>
                                    <p>Le site est conçu avec une structure claire pour que les visiteurs trouvent rapidement les informations dont ils ont besoin.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Pas de vente en ligne :</strong>
                                    <p>Ce type de site ne propose pas d'outils pour acheter des produits ou services directement en ligne.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Accessible à tous :</strong>
                                    <p>Un site vitrine est facile d'accès et fonctionne sur différents appareils, comme les ordinateurs ou smartphones.</p>
                                </div>
                            </div>
                        </div></div>
                    )}

                    {selectedService === 0 && selectedSubCard === 1 && (
                    <div className="sub">
                                <h4>À quoi sert un site vitrine ?</h4>
                        <div className="sub-card-details">
                           
                            
                            <div className="info-cards-container">
                                <div className="info-card">
                                    <strong>Donner une image professionnelle :</strong>
                                    <p>Un site vitrine offre une présence en ligne sérieuse et soignée qui renforce la crédibilité de l'entreprise.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Informer :</strong>
                                    <p>Il permet de fournir des informations essentielles sur l'entreprise, ses services, ou ses produits.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Gagner en visibilité :</strong>
                                    <p>Le site aide à attirer de nouveaux visiteurs et à accroître la notoriété de l'entreprise sur internet.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Faciliter le contact :</strong>
                                    <p>Le site permet aux visiteurs de contacter facilement l'entreprise via des formulaires ou des coordonnées.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )}

                    {/* Sites e-commerce */}
                    {selectedService === 1 && selectedSubCard === 0 && (
                            <div className="sub">
                                <h4>Caractéristiques principales</h4>
                                <div className="sub-card-details">
                                    <div className="info-cards-container">
                                        <div className="info-card">
                                            <strong>Vente de produits ou services :</strong>
                                            <p>Un site e-commerce permet de vendre des produits ou services directement en ligne, avec un panier et un système de paiement sécurisé.</p>
                                        </div>
                                        <div className="info-card">
                                            <strong>Gestion des transactions sécurisées :</strong>
                                            <p>Les transactions sont gérées de manière fluide et sécurisée pour garantir la confiance des clients.</p>
                                        </div>
                                        <div className="info-card">
                                            <strong>Catalogue de produits :</strong>
                                            <p>Un site e-commerce présente un catalogue de produits avec des descriptions détaillées et des images pour faciliter l'achat.</p>
                                        </div>
                                        <div className="info-card">
                                            <strong>Support client intégré :</strong>
                                            <p>Il est possible d'intégrer des outils de support client, comme un chat en direct ou une page FAQ.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )}

                    {selectedService === 1 && selectedSubCard === 1 && (
                            <div className="sub">
                                <h4>À quoi sert un site e-commerce ?</h4>
                                <div className="sub-card-details">
                            <div className="info-cards-container">
                                <div className="info-card">
                                    <strong>Vendre des produits ou services :</strong>
                                    <p>Un site e-commerce permet à une entreprise de vendre directement en ligne, ce qui augmente sa portée et ses revenus.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Offrir une expérience d'achat fluide :</strong>
                                    <p>Il offre une expérience d'achat optimisée avec un processus de commande simple et sécurisé.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Automatiser la gestion des commandes :</strong>
                                    <p>Le site automatise la gestion des stocks et des commandes, permettant un suivi plus efficace.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Faciliter les paiements :</strong>
                                    <p>Les sites e-commerce permettent d'accepter plusieurs modes de paiement en ligne, y compris les cartes bancaires et les plateformes de paiement.</p>
                                </div>
                            </div>
                        </div></div>
                    )}

                    {/* Sites personnalisés */}
                    {selectedService === 2 && selectedSubCard === 0 && (
                            <div className="sub">
                            <h4>Caractéristiques principales</h4>
                            <div className="sub-card-details">
                            <div className="info-cards-container">
                                <div className="info-card">
                                    <strong>Sites sur mesure :</strong>
                                    <p>Les sites personnalisés sont créés pour répondre aux besoins spécifiques des entreprises, avec des fonctionnalités uniques et adaptées.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Fonctionnalités avancées :</strong>
                                    <p>Les sites personnalisés peuvent inclure des outils de gestion, des plateformes d'interaction avec les clients ou des intégrations avec des systèmes existants.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Design unique :</strong>
                                    <p>Le design et la structure du site sont entièrement adaptés à l'image de marque et aux besoins spécifiques de l'entreprise.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Scalabilité :</strong>
                                    <p>Les sites personnalisés sont conçus pour évoluer avec l'entreprise, en ajoutant des fonctionnalités supplémentaires au fur et à mesure de la croissance.</p>
                                </div>
                            </div>
                        </div> </div>
                    )}

                    {selectedService === 2 && selectedSubCard === 1 && (
                            <div className="sub">
                            <h4>À quoi sert un site personnalisé ?</h4>
                        <div className="sub-card-details">
                            <div className="info-cards-container">
                                <div className="info-card">
                                    <strong>Répondre à des besoins spécifiques :</strong>
                                    <p>Un site personnalisé est conçu pour répondre aux besoins uniques de l'entreprise, qu'il s'agisse de fonctionnalités complexes ou d'intégration avec d'autres systèmes.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Offrir une flexibilité maximale :</strong>
                                    <p>Il offre une grande flexibilité pour s'adapter aux changements de l'entreprise à mesure qu'elle se développe.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Optimiser l'expérience utilisateur :</strong>
                                    <p>Un site personnalisé est optimisé pour offrir la meilleure expérience utilisateur possible, en fonction des besoins de l'entreprise et de ses utilisateurs.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Améliorer l'efficacité :</strong>
                                    <p>Il permet d'optimiser les processus internes et d'améliorer l'efficacité opérationnelle grâce à des outils adaptés.</p>
                                </div>
                            </div>
                        </div></div>
                    )}

                    {/* Référencement SEO */}
                    {selectedService === 3 && selectedSubCard === 0 && (
                            <div className="sub">
                        <div className="sub-card-details">
                            <h4>Caractéristiques principales</h4>
                            <div className="info-cards-container">
                                <div className="info-card">
                                    <strong>Optimisation pour les moteurs de recherche :</strong>
                                    <p>Le référencement SEO permet d'améliorer la visibilité du site sur des moteurs de recherche comme Google.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Optimisation des mots-clés :</strong>
                                    <p>Nous optimisons les contenus en utilisant les mots-clés pertinents pour améliorer le classement du site.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Amélioration de la vitesse de chargement :</strong>
                                    <p>Nous mettons en œuvre des pratiques pour rendre votre site plus rapide, ce qui est essentiel pour l'expérience utilisateur et le référencement.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Analyse de la concurrence :</strong>
                                    <p>Nous effectuons une analyse approfondie des sites concurrents pour identifier les meilleures stratégies de référencement.</p>
                                </div>
                            </div>
                            </div></div>
                    )}

                    {selectedService === 3 && selectedSubCard === 1 && (
                            <div className="sub">
                        <div className="sub-card-details">
                            <h4>À quoi sert le référencement SEO ?</h4>
                            <div className="info-cards-container">
                                <div className="info-card">
                                    <strong>Accroître la visibilité :</strong>
                                    <p>Un bon référencement permet à votre site de se positionner en haut des résultats de recherche, augmentant ainsi la visibilité de votre entreprise.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Générer du trafic qualifié :</strong>
                                    <p>Le SEO aide à attirer des visiteurs qui recherchent des produits ou services similaires à ceux que vous proposez.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Augmenter les conversions :</strong>
                                    <p>Un bon référencement génère du trafic qualifié, ce qui peut conduire à un meilleur taux de conversion et à une augmentation des ventes.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Renforcer la crédibilité :</strong>
                                    <p>Les sites qui apparaissent en haut des résultats de recherche sont souvent perçus comme plus crédibles et professionnels par les utilisateurs.</p>
                                </div>
                                </div></div>
                        </div>
                    )}
                    
                    {/* Hébergement sécurisé */}
                    {selectedService === 4 && selectedSubCard === 0 && (
                            <div className="sub">
                        <div className="sub-card-details">
                            <h4>Caractéristiques principales</h4>
                            <div className="info-cards-container">
                                <div className="info-card">
                                    <strong>Sécurisation des données :</strong>
                                    <p>L'hébergement sécurisé garantit la protection des données sensibles grâce à des technologies avancées de sécurité.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Backups réguliers :</strong>
                                    <p>Les données sont sauvegardées régulièrement pour assurer leur récupération en cas d'incident.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Certificat SSL :</strong>
                                    <p>L'hébergement sécurisé intègre un certificat SSL pour protéger la communication entre le serveur et les utilisateurs.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Protection contre les attaques :</strong>
                                    <p>Les serveurs sont protégés contre les attaques courantes comme les DDoS et les intrusions malveillantes.</p>
                                </div>
                                </div></div>
                        </div>
                    )}

                    {selectedService === 4 && selectedSubCard === 1 && (
                            <div className="sub">
                        <div className="sub-card-details">
                            <h4>À quoi sert l'hébergement sécurisé ?</h4>
                            <div className="info-cards-container">
                                <div className="info-card">
                                    <strong>Protéger les données des utilisateurs :</strong>
                                    <p>Assurer la sécurité des informations personnelles et des transactions des utilisateurs qui visitent votre site.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Assurer la disponibilité du site :</strong>
                                    <p>Un hébergement sécurisé garantit que votre site est en ligne et disponible en permanence, même en cas de trafic élevé.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Renforcer la confiance des utilisateurs :</strong>
                                    <p>Un certificat SSL et une infrastructure sécurisée renforcent la confiance des visiteurs et des clients potentiels.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Optimiser la performance :</strong>
                                    <p>L'hébergement sécurisé optimise la vitesse et la performance de votre site grâce à une infrastructure fiable.</p>
                                </div>
                            </div>
                            </div></div>
                    )}
                   {/* Gestion et maintenance */}
                   {selectedService === 5 && selectedSubCard === 0 && (
                            <div className="sub">
                        <div className="sub-card-details">
                            <h4>Caractéristiques principales</h4>
                            <div className="info-cards-container">
                                <div className="info-card">
                                    <strong>Maintenance continue :</strong>
                                    <p>Nous offrons une maintenance continue de votre site pour garantir sa sécurité et ses performances.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Mises à jour régulières :</strong>
                                    <p>Nous assurons la mise à jour régulière de ton site pour garantir qu'il fonctionne parfaitement.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Sauvegardes régulières :</strong>
                                    <p>Des sauvegardes régulières de ton site sont effectuées pour éviter toute perte de données.</p>
                                </div>
                            </div>
                            </div></div>
                    )}
                    {selectedService === 5 && selectedSubCard === 1 && (
                            <div className="sub">
                        <div className="sub-card-details">
                            <h4>À quoi sert la gestion et maintenance ?</h4>
                            <div className="info-cards-container">
                                <div className="info-card">
                                    <strong>Assurer la sécurité :</strong>
                                    <p>La gestion et maintenance permet de maintenir la sécurité de ton site en détectant et en corrigeant les vulnérabilités.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Optimiser les performances :</strong>
                                    <p>Elle garantit un site rapide et performant, avec une gestion proactive des ressources.</p>
                                </div>
                                <div className="info-card">
                                    <strong>Support technique :</strong>
                                    <p>En cas de problème, un support technique est disponible pour résoudre les éventuels soucis rapidement.</p>
                                </div>
                                </div></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NosServices;






