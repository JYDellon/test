import React, { useState, useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './FormulaireDevisSitePersonnalise.css';
import Devis from './Devis'; // Importation du composant Devis

const FormulaireDevisSitePersonnalise = () => {
    const [typeProjet, setTypeProjet] = useState(''); // Type de projet (Création ou Refonte)
    const [servicesChoisis, setServicesChoisis] = useState([]); // Services choisis
    const [total, setTotal] = useState(0); // Total du devis
    const [modalVisible, setModalVisible] = useState(true); // Modal visible ou non
    const [etapeActuelle, setEtapeActuelle] = useState(1); // Suivi de l'étape actuelle
    const modalRef = useRef(null); // Référence du modal

    // Services disponibles pour chaque type de projet
    const servicesDisponibles = [
        { id: 'PageAccueil', label: 'Page d\'Accueil', price: 500, description: 'La page principale du site.' },
        { id: 'PageCatalogue', label: 'Page Catalogue', price: 400, description: 'Une page pour vos produits/services.' },
        { id: 'ECommerce', label: 'E-commerce', price: 2000, description: 'Boutique en ligne.' },
        { id: 'CMS', label: 'Système de gestion de contenu (CMS)', price: 800, description: 'Outil permettant de gérer facilement le contenu.' },
        { id: 'AuditSite', label: 'Audit du site existant', price: 300, description: 'Analyse du site actuel.' },
        { id: 'OptimisationSEO', label: 'Optimisation SEO', price: 600, description: 'Amélioration du référencement.' },
        { id: 'Redesign', label: 'Redesign du site', price: 1500, description: 'Nouveau design.' },
        { id: 'Maintenance', label: 'Maintenance annuelle', price: 400, description: 'Assistance pour la mise à jour du site.' },
    ];

    const [choixMaintenance, setChoixMaintenance] = useState(''); // Suivi des choix pour Maintenance
    const [choixLangues, setChoixLangues] = useState(''); // Suivi des choix pour Langues
    const [choixDomaine, setChoixDomaine] = useState(''); // Suivi des choix pour Domaine / Hébergement

    const handleSelectionDomaine = (choix) => {
        setChoixDomaine(choix);
    };

    const handleSelectionMaintenance = (choix) => {
        setChoixMaintenance(choix);
    };

    const handleSelectionLangues = (choix) => {
        setChoixLangues(choix);
    };

    const handleChoixProjet = (type) => {
        setTypeProjet(type);
        setServicesChoisis([]);
        setTotal(0);
        setEtapeActuelle(2);
    };

    const handleServiceChange = (serviceId) => {
        const isSelected = servicesChoisis.includes(serviceId);
        const updatedServices = isSelected
            ? servicesChoisis.filter((id) => id !== serviceId)
            : [...servicesChoisis, serviceId];

        setServicesChoisis(updatedServices);
    };



    // Utiliser useEffect pour recalculer le total à chaque changement d'état
    useEffect(() => {
        recalculerTotal();
    }, [servicesChoisis, typeProjet, choixDomaine, choixMaintenance, choixLangues]);



    const recalculerTotal = () => {
        let totalPrice = 0;

        if (typeProjet === 'Création') {
            totalPrice += 2000;
        } else if (typeProjet === 'Refonte') {
            totalPrice += 1500;
        }

        servicesChoisis.forEach((serviceId) => {
            const service = servicesDisponibles.find((s) => s.id === serviceId);
            if (service) totalPrice += service.price;
        });

        if (choixDomaine === 'aeonix') totalPrice += 100;
        if (choixMaintenance === 'offre') totalPrice += 200;
        if (choixLangues === 'fr_plus') totalPrice += 300;

        setTotal(totalPrice);
    };


    const genererPDF = () => {
        const doc = new jsPDF();
    
        // Ajout du titre centré
        doc.setFontSize(22);
        doc.text(`Devis ${typeProjet} - Site Personnalisé`, 105, 20, { align: 'center' });
    
        // Sauter 5 lignes avant l'adresse
        let currentY = 60;  // Position initiale pour l'adresse
    
        // Informations de la société
        doc.setFontSize(12);
        doc.text('Société : Ma Société', 10, currentY);
    
        currentY += 10;  // Saute 1 ligne
    
        doc.text('Adresse : 123 Rue de Paris', 10, currentY);
    
        currentY += 10;  // Saute encore 1 ligne
    
        doc.text('Email : contact@masociete.com', 10, currentY);
    
        currentY += 10;  // Saute encore 1 ligne
    
        // Sauter 3 lignes avant la section du devis
        currentY += 20;  // Décale de 3 lignes
    
        // Préparer les données pour la table des services
        const data = [
            // Ajouter le Type de projet avec sa description
            ['Type de projet', '1', 
                typeProjet === 'Création' ? 'Création d\'un site personnalisé' : 'Refonte d\'un site personnalisé',
                typeProjet === 'Création' ? '2000 €' : '1500 €'],
    
            // Ajouter les services sélectionnés
            ...servicesChoisis
                .map((serviceId) => {
                    const service = servicesDisponibles.find((s) => s.id === serviceId);
                    if (service) {
                        return [
                            service.label,
                            '1',  // Quantité fixée à 1
                            service.description,  // Description du service
                            service.price === 0 ? 'Inclus' : `${service.price} €`,  // Prix formaté avec €
                        ];
                    }
                    return null;
                })
                .filter((service) => service !== null),
    
            // Ajouter les services de la page 3 (Domaine/Hébergement, Maintenance, Langues)
            ['Domaine / Hébergement', '1', 'Hébergement géré par AeoniX', 
                choixDomaine === 'aeonix' ? '100 €' : 'Non inclus'],
    
            ['Maintenance', '1', 'Maintenance annuelle incluant mises à jour et support', 
                choixMaintenance === 'offre' ? '200 €' : 'Non incluse'],
            
            ['Langues', '1', 'Support multilingue pour site', 
                choixLangues === 'fr_plus' ? '300 €' : 'Non applicable'],
        ];
    
        // Ajouter la table des services avec la nouvelle colonne Description
        doc.autoTable({
            head: [['Service', 'Qté', 'Description', 'Prix']],
            body: data.map(row => [
                row[0],  // Service
                row[1],  // Quantité fixée à 1
                row[2],  // Description
                row[3]   // Prix
            ]),
            startY: currentY,  // Utiliser la position courante de Y
            columnStyles: {
                1: { halign: 'center' }, // Centrer la colonne Quantité
                2: { halign: 'left' },   // Aligner la colonne Description à gauche
                3: { halign: 'right' },  // Aligner la colonne Prix à droite
            },
        });
    
        // Ajouter le total
        doc.text(`Total : ${total} €`, 10, doc.lastAutoTable.finalY + 10);
    
        // Sauvegarder le PDF avec un nom dynamique basé sur le type de projet
        doc.save(`Devis_${typeProjet}.pdf`);
    };
    

    const passerEtapeSuivante = () => {
        setEtapeActuelle(etapeActuelle + 1);
    };
    
    const passerEtapePrecedente = () => {
        setEtapeActuelle(etapeActuelle - 1);
    };

    // Fermer la modale si l'utilisateur clique à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalVisible(false); // Ferme la modale si on clique en dehors
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div>
            {modalVisible ? (
                <div className="modal">
                    <div className="modal-contentX" ref={modalRef}>
                        {etapeActuelle === 1 ? (
                            // Page 1: Choix du type de projet
                            <>
                                <h1>Choisissez le type de projet</h1>
                                <button onClick={() => handleChoixProjet('Création')} className="btn-type">
                                    Création d’un site personnalisé
                                </button>
                                <button onClick={() => handleChoixProjet('Refonte')} className="btn-type" style={{ marginTop: '10px' }}>
                                    Refonte d’un site personnalisé
                                </button>
                            </>
                        ) : etapeActuelle === 2 ? (
                            // Page 2: Sélection des services
                            <>
                                <div className="titre">
                                    <h1>Devis pour un {typeProjet}</h1>
                                </div>
    
                                <div className="Listedesservices">
                                    {servicesDisponibles.map((service) => (
                                        <div
                                            key={service.id}
                                            onClick={() => handleServiceChange(service.id)}
                                            className={`Cardi ${servicesChoisis.includes(service.id) ? 'selected' : ''}`}
                                        >
                                            <h3>{service.label}</h3>
                                            <p>{service.description}</p>
                                            <p>{service.price} €</p>
                                            <div className="tooltip">{service.description}</div>
                                        </div>
                                    ))}
                                </div>
    
                                <div className="buttons-navigation-centrees">
                                    <button onClick={passerEtapePrecedente}>Précédent</button>
                                    <button onClick={passerEtapeSuivante}>Suivant</button>
                                </div>
                            </>
                        ) : etapeActuelle === 3 ? (
                            // Page 3: Résumé et téléchargement PDF
<div>
    <h2>Domaine / Hébergement</h2>
    <p>Quel est votre choix concernant le domaine et l'hébergement ?</p>
    <div className="domaine-hebergement">
        <button
            onClick={() => handleSelectionDomaine('moi')}
            style={{ backgroundColor: choixDomaine === 'moi' ? 'darkorange' : '' }}
        >
            Je m'occupe du domaine et de l'hébergement
        </button>
        <button
            onClick={() => handleSelectionDomaine('aeonix')}
            style={{ backgroundColor: choixDomaine === 'aeonix' ? 'darkorange' : '' }}
        >
            AeoniX s'occupe du domaine et de l'hébergement
        </button>
        <button
            onClick={() => handleSelectionDomaine('migration')}
            style={{ backgroundColor: choixDomaine === 'migration' ? 'darkorange' : '' }}
        >
            Aeonix s'occupe de la migration du site
        </button>
    </div>

    <h2>Maintenance</h2>
    <p>Souhaitez-vous une offre de maintenance pour votre site ?</p>
    <div className="maintenance">
        <button
            onClick={() => handleSelectionMaintenance('offre')}
            style={{ backgroundColor: choixMaintenance === 'offre' ? 'darkorange' : '' }}
        >
            Offre de maintenance incluse dans le devis
        </button>
        <button
            onClick={() => handleSelectionMaintenance('sans')}
            style={{ backgroundColor: choixMaintenance === 'sans' ? 'darkorange' : '' }}
        >
            Je m'occuperai de la maintenance moi-même
        </button>
    </div>

    <h2>Langues disponibles</h2>
    <p>Dans quelles langues souhaitez-vous que votre site soit disponible ?</p>
    <div className="langues">
        <button
            onClick={() => handleSelectionLangues('fr_seul')}
            style={{ backgroundColor: choixLangues === 'fr_seul' ? 'darkorange' : '' }}
        >
            Uniquement en français
        </button>
        <button
            onClick={() => handleSelectionLangues('fr_plus')}
            style={{ backgroundColor: choixLangues === 'fr_plus' ? 'darkorange' : '' }}
        >
            Français et anglais
        </button>
    </div>

    {/* Message d'erreur si une sélection est manquante */}


    <div className="buttons-navigation-centrees">
        <button onClick={passerEtapePrecedente}>Précédent</button>
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
            ) : null}
        </div>
    );
    
};

export default FormulaireDevisSitePersonnalise;






