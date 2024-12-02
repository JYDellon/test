import React, { useState, useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Devis from './Devis'; // Import du composant Devis

import './FormulaireDevisECommerce.css';

const FormulaireDevisECommerce = () => {
    const servicesDisponibles = {
        'Site E-commerce': [
            { id: 'SiteEcommerce', label: 'Base du site e-commerce (5 pages principales)', price: 2000 },
            { id: 'pageAccueil', label: 'Page Accueil', price: 0, isDefault: true, tooltip: 'Page d\'accueil de votre site.' },
            { id: 'pageCatalogue', label: 'Page Catalogue', price: 0, isDefault: true, tooltip: 'Présentation de vos produits.' },
            { id: 'pageProduit', label: 'Page Produit', price: 0, isDefault: true, tooltip: 'Détails d\'un produit spécifique.' },
            { id: 'pagePanier', label: 'Page Panier', price: 0, isDefault: true, tooltip: 'Affichage des produits sélectionnés.' },
            { id: 'pagePaiement', label: 'Page Paiement', price: 0, isDefault: true, tooltip: 'Processus de paiement sécurisé.' },
            { id: 'gestionProduits', label: 'Système de gestion des produits', price: 500, tooltip: 'Ajoutez, modifiez ou supprimez des produits facilement.' },
            { id: 'filtrageProduits', label: 'Filtrage et tri des produits', price: 300, tooltip: 'Aidez vos clients à trouver rapidement leurs produits.' },
            { id: 'paiement', label: 'Intégration de paiement sécurisé', price: 600, tooltip: 'Acceptez les paiements en ligne en toute sécurité.' },
            { id: 'gestionCommandes', label: 'Gestion avancée des commandes', price: 400, tooltip: 'Suivez et gérez les commandes efficacement.' },
            { id: 'blog', label: 'Blog / Actualités', price: 200, tooltip: 'Partagez des actualités ou des articles.' },
            { id: 'personnalisation', label: 'Personnalisation graphique avancée', price: 800, tooltip: 'Ajoutez un design unique à votre site.' },
        ],
    };

    const [servicesChoisis, setServicesChoisis] = useState(
        servicesDisponibles['Site E-commerce']
            .filter((service) => service.isDefault)
            .map((service) => service.id)
    );
    const [typeProjet, setTypeProjet] = useState(''); // Ajoute cette ligne pour gérer le type de projet

    const [total, setTotal] = useState(0);
    const [modalVisible, setModalVisible] = useState(true); // Etat de la modale
    const [etapeActuelle, setEtapeActuelle] = useState(1); // Suivi de l'étape actuelle
    const [choixDomaine, setChoixDomaine] = useState(''); // Suivi des choix pour Domaine / Hébergement
    const [choixMaintenance, setChoixMaintenance] = useState(''); // Suivi des choix pour Maintenance
    const [choixLangues, setChoixLangues] = useState(''); // Suivi des choix pour Langues
    const modalRef = useRef(null);

    const handleServiceChange = (serviceId) => {
        const service = servicesDisponibles['Site E-commerce']?.find((s) => s.id === serviceId);
        if (service?.isDefault) return;

        const isSelected = servicesChoisis.includes(serviceId);
        const updatedServices = isSelected
            ? servicesChoisis.filter((id) => id !== serviceId)
            : [...servicesChoisis, serviceId];

        setServicesChoisis(updatedServices);
        recalculerTotal(updatedServices);
    };

    useEffect(() => {
        recalculerTotal(servicesChoisis);
    }, [servicesChoisis]);



const genererPDF = () => {
    const doc = new jsPDF();
    
    // Ajout du titre centré
    doc.setFontSize(22);
    doc.text('Devis personnalisé - Site E-commerce', 105, 20, { align: 'center' });

    // Informations de la société
    doc.setFontSize(12);
    doc.text('Société : Ma Société', 10, 30);
    doc.text('Adresse : 123 Rue de Paris', 10, 40);
    doc.text('Email : contact@masociete.com', 10, 50);

    // Débogage pour vérifier la valeur de typeProjet
    console.log("typeProjet:", typeProjet); // Ajout d'une ligne pour vérifier la valeur de typeProjet

    // Initialisation du prix en fonction du type de projet
    let totalTemporaire = 0;
let designationProjet = '';

if (typeProjet === 'creation') {
    totalTemporaire = 2000; // Prix de base pour la création
    designationProjet = "Création d'un site e-commerce personnalisé";
} else if (typeProjet === 'refonte') {
    totalTemporaire = 1500; // Prix de base pour la refonte
    designationProjet = "Refonte d'un site e-commerce existant";
} else {
    console.error("typeProjet n'est pas défini correctement !");
}


    // Débogage pour vérifier le prix et la désignation
    console.log("totalTemporaire:", totalTemporaire); // Vérification du totalTemporaire
    console.log("designationProjet:", designationProjet); // Vérification de la désignation

    // Préparer les données pour la table des services
    const data = [
        [
            'Type de projet',
            '1', // Quantité
            designationProjet,  // Désignation dynamique selon le type de projet
            `${totalTemporaire} €` // Affichage du prix dynamique
        ],
    ];

    // Ajouter les pages/services sélectionnés
    servicesChoisis.forEach((serviceId) => {
        const service = servicesDisponibles['Site E-commerce']?.find((s) => s.id === serviceId);
        if (service && service.id !== 'SiteEcommerce') {
            const prix = service.price === 0 ? 'Inclus' : `${service.price} €`;
            data.push([service.label, '1', service.tooltip || 'Pas de description disponible', prix]);
            if (service.price > 0) {
                totalTemporaire += service.price;
            }
        }
    });
    

    // Ajouter les services de la page 3
    if (choixDomaine === 'aeonix') {
        data.push(['Domaine / Hébergement', '1', 'Hébergement géré par AeoniX', '100 €']);
        totalTemporaire += 100;
    } else {
        data.push(['Domaine / Hébergement', '1', choixDomaine || 'Non précisé', 'Non inclus']);
    }

    if (choixMaintenance === 'offre') {
        data.push(['Maintenance', '1', 'Maintenance annuelle incluant mises à jour et support', '200 €']);
        totalTemporaire += 200;
    } else {
        data.push(['Maintenance', '1', choixMaintenance || 'Non précisé', 'Non incluse']);
    }

    if (choixLangues === 'fr_plus') {
        data.push(['Langues', '1', 'Support multilingue pour site', '300 €']);
        totalTemporaire += 300;
    } else {
        data.push(['Langues', '1', choixLangues || 'Non précisé', 'Uniquement en français']);
    }

    // Ajouter la table des services avec la nouvelle colonne Désignation
    doc.autoTable({
        head: [['Service', 'Qté', 'Désignation', 'Prix']],
        body: data.map(row => [
            row[0],  // Service
            row[1],  // Quantité
            row[2],  // Désignation
            row[3]   // Prix
        ]),
        startY: 60,  // Utiliser la position courante de Y
        columnStyles: {
            1: { halign: 'center' }, // Centrer la colonne Quantité
            2: { halign: 'left' },   // Aligner la colonne Désignation à gauche
            3: { halign: 'right' },  // Aligner la colonne Prix à droite
        },
    });

    // Ajouter le total
    doc.text(`Total : ${totalTemporaire} €`, 10, doc.lastAutoTable.finalY + 10);

    // Sauvegarder le PDF
    doc.save('Devis_Ecommerce.pdf');
};

    
    


    
    const recalculerTotal = (services) => {
        let totalPrice = 0;
    
        // Calcul du prix de base pour le site e-commerce
        const typeDeSiteService = servicesDisponibles['Site E-commerce']?.find((s) => s.id === 'SiteEcommerce');
        totalPrice += typeDeSiteService?.price || 0;
    
        // Calcul du prix pour les services supplémentaires
        services.forEach((serviceId) => {
            if (serviceId !== 'SiteEcommerce') {
                const service = servicesDisponibles['Site E-commerce']?.find((s) => s.id === serviceId);
                if (service && service.price > 0) {
                    totalPrice += service.price;
                }
            }
        });
    
        // Ajouter les prix pour les choix de l'étape 3
        if (choixDomaine === 'aeonix') {
            totalPrice += 100; // Exemple de prix pour l'hébergement géré par AeoniX
        }
    
        if (choixMaintenance === 'offre') {
            totalPrice += 200; // Exemple de prix pour l'offre de maintenance
        }
    
        if (choixLangues === 'fr_plus') {
            totalPrice += 300; // Exemple de prix pour les langues supplémentaires
        }
    
        setTotal(totalPrice);
    };
    


    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalVisible(false); // Fermer la modale
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const passerEtapeSuivante = () => {
        if (etapeActuelle < 3) {
            setEtapeActuelle(etapeActuelle + 1);
        }
    };

    const passerEtapePrecedente = () => {
        if (etapeActuelle > 1) {
            setEtapeActuelle(etapeActuelle - 1);
        }
    };

    const handleSelectionDomaine = (choix) => setChoixDomaine(choix);
    const handleSelectionMaintenance = (choix) => setChoixMaintenance(choix);
    const handleSelectionLangues = (choix) => setChoixLangues(choix);

    return (
        <div>
            {modalVisible ? (
                <div className="modal">
                    <div className="modal-contentX" ref={modalRef} style={{ textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', position: 'relative' }}>
                        {/* Étape 1 : Choix du type de projet */}
                        {etapeActuelle === 1 ? (
                            <div className="questionnaire">
                                <h2>Création d'un site vitrine</h2>
                                <p>Souhaitez-vous créer un nouveau site e-commerce   ou refondre un site existant ?</p>
                                <div className="options">
                                <button onClick={() => { setTypeProjet('creation'); passerEtapeSuivante(); }} className="option-btn">
    Créer un nouveau site e-commerce
</button>
<button onClick={() => { setTypeProjet('refonte'); passerEtapeSuivante(); }} className="option-btn">
    Refondre un site existant
</button>

                                </div>
                            </div>
                        ) : etapeActuelle === 2 ? (
                            <div className="choix-fonctionnalites">
                                <div className="titre">
                                    <h1>Devis pour un Site E-commerce</h1>
                                </div>
                                <h3>Prix Total : {total} €</h3>

                                <div className="Listedesservices" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '60px' }}>
                                    {servicesDisponibles['Site E-commerce']
                                        .filter((service) => service.id !== 'SiteEcommerce')
                                        .map((service) => (
                                            <div
                                                key={service.id}
                                                className={`Cardi ${servicesChoisis.includes(service.id) ? 'selected' : ''}`}
                                                onClick={() => handleServiceChange(service.id)}
                                                style={{
                                                    border: '1px solid #ccc',
                                                    padding: '15px',
                                                    cursor: service.isDefault ? 'not-allowed' : 'pointer',
                                                    backgroundColor: servicesChoisis.includes(service.id) ? 'darkorange' : '#fff',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    textAlign: 'center',
                                                    width: '200px',
                                                }}
                                            >
                                                <h4>{service.label}</h4>
                                                <p>{service.price === 0 ? 'Inclus' : `${service.price} €`}</p>
                                            </div>
                                        ))}
                                </div>

                                <div className="buttons-navigation">
                                    <button onClick={passerEtapePrecedente} disabled={etapeActuelle === 1}>
                                        Précédent
                                    </button>
                                    <button onClick={passerEtapeSuivante}>Suivant</button>
                                </div>
                            </div>
                        ) : etapeActuelle === 3 ? (
<div className="domaine-hebergement">
    <h2>Domaine / Hébergement</h2>
    <p>Quel est votre choix concernant le domaine et l'hébergement ?</p>
    <button
        onClick={() => handleSelectionDomaine('moi')}
        style={{
            backgroundColor: choixDomaine === 'moi' ? 'darkorange' : '',
        }}
    >
        Je m'occupe du domaine et de l'hébergement
    </button>
    <button
        onClick={() => handleSelectionDomaine('aeonix')}
        style={{
            backgroundColor: choixDomaine === 'aeonix' ? 'darkorange' : '',
        }}
    >
        AeoniX s'occupe du domaine et de l'hébergement
    </button>
    <button
        onClick={() => handleSelectionDomaine('migration')}
        style={{
            backgroundColor: choixDomaine === 'migration' ? 'darkorange' : '',
        }}
    >
        AeoniX s'occupe de la migration du site
    </button>

    <h2>Maintenance</h2>
    <p>Souhaitez-vous une offre de maintenance pour votre site ?</p>
    <button
        onClick={() => handleSelectionMaintenance('offre')}
        style={{
            backgroundColor: choixMaintenance === 'offre' ? 'darkorange' : '',
        }}
    >
        Offre de maintenance incluse dans le devis
    </button>
    <button
        onClick={() => handleSelectionMaintenance('moi')}
        style={{
            backgroundColor: choixMaintenance === 'moi' ? 'darkorange' : '',
        }}
    >
        Je m'occuperai de la maintenance moi-même
    </button>

    <h2>Langues disponibles</h2>
    <p>Dans quelles langues souhaitez-vous que votre site soit disponible ?</p>
    <button
        onClick={() => handleSelectionLangues('fr')}
        style={{
            backgroundColor: choixLangues === 'fr' ? 'darkorange' : '',
        }}
    >
        Uniquement en français
    </button>
    <button
        onClick={() => handleSelectionLangues('fr_plus')}
        style={{
            backgroundColor: choixLangues === 'fr_plus' ? 'darkorange' : '',
        }}
    >
        Une ou plusieurs autres langues en plus du français
    </button>

    {/* Message d'erreur si une sélection est manquante */}


    {/* Boutons sur la même ligne */}
    <div className="buttons-navigation-centrees">
        <button onClick={passerEtapePrecedente} disabled={etapeActuelle === 1}>
            Précédent
        </button>
        {/* Bouton de téléchargement désactivé si une option n'est pas sélectionnée */}
        <button
            onClick={genererPDF}
            disabled={!choixDomaine || !choixMaintenance || !choixLangues}  
        >
            Télécharger le PDF
        </button>
    </div>
</div>

                        ) : null}
                    </div>
                </div>
            ) : (
                <Devis total={total} servicesChoisis={servicesChoisis} /> // Afficher Devis lorsque la modale est fermée
            )}
        </div>
    );
};

export default FormulaireDevisECommerce;

