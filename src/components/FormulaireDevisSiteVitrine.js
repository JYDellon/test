import React, { useState, useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Tooltip, OverlayTrigger } from 'react-bootstrap'; // Pour les tooltips
import Devis from './Devis'; // Import du composant Accueil
import './FormulaireDevisSiteVitrine.css';

const FormulaireDevisSiteVitrine = () => {
    // Étape 1 : Choix du type de projet
    const [typeDeProjet, setTypeDeProjet] = useState(null); // null : Pas encore sélectionné, true : Créer un site, false : Refondre un site

    // Étape 2 : Choix des services
    const servicesDisponibles = {
        'Site Vitrine': [
            { id: 'Site Vitrine', label: 'Site vitrine de base (3 à 5 pages)', price: 1000, description: 'Site vitrine de base avec 3 à 5 pages (accueil, services, contact, etc.).' },
            { id: 'pageAccueil', label: 'Page Accueil', price: 0, isDefault: true, description: 'Page d\'accueil de votre site vitrine.' },
            { id: 'pageAPropos', label: 'Page À propos', price: 0, isDefault: true, description: 'Page présentant votre entreprise ou organisation.' },
            { id: 'pageContact', label: 'Page Contact', price: 0, isDefault: true, description: 'Page permettant à vos visiteurs de vous contacter.' },
            { id: 'pageServices', label: 'Page Services', price: 0, isDefault: true, description: 'Page détaillant les services que vous proposez.' },
            { id: 'pageGalerie', label: 'Page Galerie', price: 0, isDefault: false, description: 'Page pour afficher une galerie d\'images ou de projets.' },
        ],
    };

    const [servicesChoisis, setServicesChoisis] = useState(
        servicesDisponibles['Site Vitrine']
            .filter((service) => service.isDefault)
            .map((service) => service.id)
    );

    const [total, setTotal] = useState(0);
    const [modalVisible, setModalVisible] = useState(true);
    const modalRef = useRef(null);

    // Étape 3 : Questions supplémentaires
    const [domaineHébergement, setDomaineHébergement] = useState(null);
    const [maintenance, setMaintenance] = useState(null);
    const [langues, setLangues] = useState(null);

    // Étape actuelle
    const [etapeActuelle, setEtapeActuelle] = useState(1);

    useEffect(() => {
        recalculerTotal(servicesChoisis); // Fonction recalculée toujours dès que servicesChoisis évolue.
    }, [servicesChoisis, typeDeProjet, domaineHébergement, maintenance, langues]);
    

    const recalculerTotal = (services) => {
        let totalPrice = 0;
        
        // Prix de base pour le type de projet
        totalPrice += typeDeProjet ? 1000 : 800; // Création ou Refonte
    
        // Ajouter le prix des pages sélectionnées
        services.forEach((serviceId) => {
            const service = servicesDisponibles['Site Vitrine']?.find((s) => s.id === serviceId);
            if (service) {
                if (service.price > 0) {
                    totalPrice += service.price;
                }
                // Vérifier les cas comme "pageGalerie" marqué comme "Offert" à 0 €
                else if (service.price === 0 && service.id === 'pageGalerie') {
                    console.log("Page Galerie sélectionnée : aucun coût ajouté."); // Pour vérifier
                }
            }
        });
    
        // Ajouter les prix des services supplémentaires en fonction de leur choix
        if (domaineHébergement === 'AeoniX s\'occupe du domaine et de l\'hébergement' ||
            domaineHébergement === 'Je souhaite que AeoniX dépose le nom de domaine et me propose un hébergement') {
            totalPrice += 150;
        } else if (domaineHébergement === "AeoniX s'occupe de la migration du site") {
            totalPrice += 200;
        }
    
        if (maintenance === 'Offre de maintenance incluse') {
            totalPrice += 250;
        }
    
        if (langues === 'Une ou plusieurs autres langues') {
            totalPrice += 300;
        }
    
        setTotal(totalPrice); // Mise à jour du total
    };
    
    
    // const genererPDF = () => {
    //     const doc = new jsPDF();
    //     doc.setFontSize(22);
    //     doc.text('Devis personnalisé', 105, 20, { align: 'center' });
    
    //     doc.setFontSize(12);
    //     doc.text('Société : Ma Société', 10, 30);
    //     doc.text('Adresse : 123 Rue de Paris', 10, 40);
    //     doc.text('Email : contact@masociete.com', 10, 50);
    
    //     // Préparer les données pour la table des services
    //     const data = [
    //         // Ajouter le Type de projet en premier
    //         ['Type de projet', typeDeProjet ? 'Créer un nouveau site vitrine' : 'Refondre un site existant', typeDeProjet ? '1000 €' : '800 €'],
            
    //         // Ajouter les pages sélectionnées
    //         ...servicesChoisis
    //             .map((serviceId) => {
    //                 const service = servicesDisponibles['Site Vitrine']?.find((s) => s.id === serviceId);
    //                 if (service && service.id !== 'Site Vitrine') {
    //                     return [
    //                         service?.label,
    //                         1,
    //                         service?.id === 'pageGalerie' ? 'Offert' : 'Inclus',
    //                         service?.price > 0 ? `${service?.price} €` : '0 €'
    //                     ];
    //                 }
    //                 return null;
    //             })
    //             .filter((service) => service !== null), // On filtre les valeurs null
            
    //         // Ajouter les services de la page 3 (Domaine/Hébergement, Maintenance, Langues)
    //         ['Domaine / Hébergement', domaineHébergement || 'Non précisé', 
    //             domaineHébergement === 'AeoniX s\'occupe du domaine et de l\'hébergement' || 
    //             domaineHébergement === 'Je souhaite que AeoniX dépose le nom de domaine et me propose un hébergement' 
    //             ? '150 €' : 
    //             domaineHébergement === "AeoniX s'occupe de la migration du site" 
    //             ? '200 €' : '0 €'],
    
    //         ['Maintenance', maintenance || 'Non précisé', maintenance === 'Offre de maintenance incluse' ? '250 €' : '0 €'],
    //         ['Langues', langues || 'Non précisé', langues === 'Une ou plusieurs autres langues' ? '300 €' : '0 €'],
    //     ];
    
    //     // Ajouter la table des services avec ajustement de la largeur de la colonne "Prix"
    //     doc.autoTable({
    //         head: [['Service', 'Qté', 'Prix', 'Total']],
    //         body: data,
    //         startY: 60, // Commence la table après l'adresse et les informations de contact
    //         columnStyles: {
    //             2: { cellWidth: 35 }, // Elargir la colonne "Prix" (indice 2)
    //         },
    //     });
    
    //     // Total
    //     doc.text(`Total : ${total} €`, 10, doc.lastAutoTable.finalY + 10);
    //     doc.save('Devis.pdf');
    // };
    
    // Gestion du clic à l'extérieur pour fermer la modale
    
    
    
    // const genererPDF = () => {
    //     const doc = new jsPDF();
    //     doc.setFontSize(22);
    //     doc.text('Devis personnalisé', 105, 20, { align: 'center' });
    
    //     doc.setFontSize(12);
    //     doc.text('Société : Ma Société', 10, 30);
    //     doc.text('Adresse : 123 Rue de Paris', 10, 40);
    //     doc.text('Email : contact@masociete.com', 10, 50);
    
    //     // Préparer les données pour la table des services
    //     const data = [
    //         // Ajouter le Type de projet en premier
    //         ['Type de projet', 'Créer un nouveau site vitrine', typeDeProjet ? 'Créer un nouveau site vitrine' : 'Refondre un site existant', 'Création ou refonte de site web', '1'],
            
    //         // Ajouter les pages sélectionnées
    //         ...servicesChoisis
    //             .map((serviceId) => {
    //                 const service = servicesDisponibles['Site Vitrine']?.find((s) => s.id === serviceId);
    //                 if (service && service.id !== 'Site Vitrine') {
    //                     return [
    //                         service?.label,
    //                         service?.id === 'pageGalerie' ? 'Offert' : 'Inclus',
    //                         service?.price > 0 ? `${service?.price} €` : '0 €',
    //                         service?.description || 'Description non précisée',
    //                         '1'
    //                     ];
    //                 }
    //                 return null;
    //             })
    //             .filter((service) => service !== null), // On filtre les valeurs null
            
    //         // Ajouter les services de la page 3 (Domaine/Hébergement, Maintenance, Langues)
    //         ['Domaine / Hébergement', domaineHébergement || 'Non précisé', 
    //             domaineHébergement === 'AeoniX s\'occupe du domaine et de l\'hébergement' || 
    //             domaineHébergement === 'Je souhaite que AeoniX dépose le nom de domaine et me propose un hébergement' 
    //             ? '150 €' : 
    //             domaineHébergement === "AeoniX s'occupe de la migration du site" 
    //             ? '200 €' : '0 €',
    //             'Service d\'hébergement et de domaine', '1'],
            
    //         ['Maintenance', maintenance || 'Non précisé', maintenance === 'Offre de maintenance incluse' ? '250 €' : '0 €',
    //             'Maintenance du site', '1'],
            
    //         ['Langues', langues || 'Non précisé', langues === 'Une ou plusieurs autres langues' ? '300 €' : '0 €',
    //             'Ajout de langues supplémentaires', '1'],
    //     ];
    
    //     // Ajouter la table des services avec ajustement de la largeur de la colonne "Prix"
    //     doc.autoTable({
    //         head: [['Service', 'Qté', 'Prix', 'Désignation']],
    //         body: data,
    //         startY: 60, // Commence la table après l'adresse et les informations de contact
    //         columnStyles: {
    //             2: { cellWidth: 35 }, // Elargir la colonne "Prix" (indice 2)
    //             3: { cellWidth: 50 }, // Ajuster la largeur de la colonne "Désignation"
    //         },
    //     });
    
    //     // Total
    //     doc.save('Devis.pdf');
    // };
    




    // const genererPDF = () => {
    //     const doc = new jsPDF();
    //     doc.setFontSize(22);
    //     doc.text('Devis personnalisé', 105, 20, { align: 'center' });
    
    //     doc.setFontSize(12);
    //     doc.text('Société : Ma Société', 10, 30);
    //     doc.text('Adresse : 123 Rue de Paris', 10, 40);
    //     doc.text('Email : contact@masociete.com', 10, 50);
    
    //     // Préparer les données pour la table des services
    //     const data = [
    //         // Ajouter le Type de projet en premier
    //         ['Créer un nouveau site vitrine', '1', 'Type de projet', typeDeProjet ? '1000 €' : '800 €'],
            
    //         // Ajouter les pages sélectionnées
    //         ...servicesChoisis
    //             .map((serviceId) => {
    //                 const service = servicesDisponibles['Site Vitrine']?.find((s) => s.id === serviceId);
    //                 if (service && service.id !== 'Site Vitrine') {
    //                     return [
    //                         service?.label,
    //                         '1',
    //                         service?.description || 'Description non précisée',
    //                         service?.price > 0 ? `${service?.price} €` : '0 €'
    //                     ];
    //                 }
    //                 return null;
    //             })
    //             .filter((service) => service !== null), // On filtre les valeurs null
    
    //         // Ajouter les services de la page 3 (Domaine/Hébergement, Maintenance, Langues)
    //         ['Domaine / Hébergement', '1', 'Service d\'hébergement et de domaine', 
    //             domaineHébergement === 'AeoniX s\'occupe du domaine et de l\'hébergement' || 
    //             domaineHébergement === 'Je souhaite que AeoniX dépose le nom de domaine et me propose un hébergement' 
    //             ? '150 €' : 
    //             domaineHébergement === "AeoniX s'occupe de la migration du site" 
    //             ? '200 €' : '0 €'
    //         ],
    
    //         ['Maintenance', '1', 'Maintenance du site', maintenance === 'Offre de maintenance incluse' ? '250 €' : '0 €'],
    
    //         ['Langues', '1', 'Ajout de langues supplémentaires', langues === 'Une ou plusieurs autres langues' ? '300 €' : '0 €'],
    //     ];
    
    //     // Calculer le total du devis
    //     let total = 0;
    //     data.forEach(item => {
    //         const prix = item[3].replace(' €', ''); // Enlever le symbole "€"
    //         total += parseFloat(prix);
    //     });
    
    //     // Ajouter la table des services avec ajustement des colonnes
    //     doc.autoTable({
    //         head: [['Service', 'Qté', 'Désignation', 'Prix']],
    //         body: data,
    //         startY: 60, // Commence la table après l'adresse et les informations de contact
    //         columnStyles: {
    //             1: { cellWidth: 20 }, // La colonne Qté aura une largeur ajustée
    //             2: { cellWidth: 60 }, // La colonne Désignation sera plus large
    //             3: { cellWidth: 35 }, // La colonne Prix sera ajustée
    //         },
    //     });
    
    //     // Ajouter le total du devis
    //     doc.setFontSize(14);
    //     doc.text(`Total : ${total.toFixed(2)} €`, 10, doc.autoTableEndPosY() + 10);
    
    //     // Sauvegarder le PDF
    //     doc.save('Devis.pdf');
    // };
    
    
    







    const genererPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text('Devis personnalisé', 105, 20, { align: 'center' });
    
        doc.setFontSize(12);
        doc.text('Société : Ma Société', 10, 30);
        doc.text('Adresse : 123 Rue de Paris', 10, 40);
        doc.text('Email : contact@masociete.com', 10, 50);
    
        // Préparer les données pour la table des services
        const data = [
            // Ajouter le Type de projet en premier
            ['Créer un nouveau site vitrine', '1', 'Refonte ou création de site', typeDeProjet ? '1000 €' : '800 €'],
            
            // Ajouter les pages sélectionnées
            ...servicesChoisis
                .map((serviceId) => {
                    const service = servicesDisponibles['Site Vitrine']?.find((s) => s.id === serviceId);
                    if (service && service.id !== 'Site Vitrine') {
                        // Vérifier si le service est inclus et afficher "Inclus" dans la colonne Prix si c'est le cas
                        const prix = service?.price > 0 ? `${service?.price} €` : 'Inclus';
                        return [
                            service?.label,
                            '1',
                            service?.description || 'Description non précisée',
                            prix
                        ];
                    }
                    return null;
                })
                .filter((service) => service !== null), // On filtre les valeurs null
    
            // Ajouter les services de la page 3 (Domaine/Hébergement, Maintenance, Langues)
            ['Domaine / Hébergement', '1', 'Service d\'hébergement et de domaine', 
                domaineHébergement === 'AeoniX s\'occupe du domaine et de l\'hébergement' || 
                domaineHébergement === 'Je souhaite que AeoniX dépose le nom de domaine et me propose un hébergement' 
                ? '150 €' : 
                domaineHébergement === "AeoniX s'occupe de la migration du site" 
                ? '200 €' : '0 €'
            ],
    
            ['Maintenance', '1', 'Maintenance du site', maintenance === 'Offre de maintenance incluse' ? '250 €' : '0 €'],
    
            ['Langues', '1', 'Ajout de langues supplémentaires', langues === 'Une ou plusieurs autres langues' ? '300 €' : '0 €'],
        ];
    
        // Calculer le total du devis
        let total = 0;
        data.forEach(item => {
            // Si le prix est "Inclus", on ne l'ajoute pas au total
            const prix = item[3].includes('€') ? item[3].replace(' €', '') : 0;
            total += parseFloat(prix);
        });
    
        // Ajouter la table des services avec ajustement des colonnes
        doc.autoTable({
            head: [['Service', 'Qté', 'Désignation', 'Prix']],
            body: data,
            startY: 60, // Commence la table après l'adresse et les informations de contact
            columnStyles: {
                1: { cellWidth: 20 }, // La colonne Qté aura une largeur ajustée
                2: { cellWidth: 60 }, // La colonne Désignation sera plus large
                3: { cellWidth: 35 }, // La colonne Prix sera ajustée
            },
        });
    
        // Ajouter le total du devis
        doc.setFontSize(14);
        doc.text(`Total : ${total.toFixed(2)} €`, 10, doc.autoTableEndPosY() + 10);
    
        // Sauvegarder le PDF
        doc.save('Devis.pdf');
    };
    



    
    
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Fonction pour passer à l'étape suivante
    const passerEtapeSuivante = () => {
        if (etapeActuelle < 3) {
            setEtapeActuelle(etapeActuelle + 1);
        }
    };

    // Fonction pour revenir à l'étape précédente
    const passerEtapePrecedente = () => {
        if (etapeActuelle > 1) {
            setEtapeActuelle(etapeActuelle - 1);
        }
    };

    // Fonction pour passer au choix des services
    const handleTypeDeProjetChange = (choix) => {
        setTypeDeProjet(choix);
        recalculerTotal(servicesChoisis);  // Recalculer le total immédiatement après le choix du type de projet
        setEtapeActuelle(2); // Passe directement à l'étape 2 après le choix du type de projet
    };
    

    // Fonction de gestion des services choisis
    const handleServiceChange = (serviceId) => {
        const service = servicesDisponibles['Site Vitrine']?.find((s) => s.id === serviceId);
        if (service?.isDefault) return;

        const isSelected = servicesChoisis.includes(serviceId);
        const updatedServices = isSelected
            ? servicesChoisis.filter((id) => id !== serviceId)
            : [...servicesChoisis, serviceId];

        setServicesChoisis(updatedServices);
        recalculerTotal(updatedServices);
    };

    // Fonction pour gérer les réponses aux questions supplémentaires
    const handleDomaineHébergementChange = (choix) => {
        setDomaineHébergement(choix);
    };

    const handleMaintenanceChange = (choix) => {
        setMaintenance(choix);
    };

    const handleLanguesChange = (choix) => {
        setLangues(choix);
    };

    return (
        <div>
            {modalVisible ? (
                <div className="modal">
                    <div className="modal-contentX" ref={modalRef} style={{ textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', position: 'relative' }}>
                        {/* Étape 1 : Choix du type de projet */}
                        {etapeActuelle === 1 ? (
                            <div className="questionnaire">
                                <h2>Création d'un site vitrine</h2>
                                <p>Souhaitez-vous créer un nouveau site vitrine ou refondre un site existant ?</p>
                                <div className="options">
                                    <button
                                        onClick={() => handleTypeDeProjetChange(true)}
                                        className="option-btn"
                                        style={{
                                            backgroundColor: typeDeProjet === true ? 'darkorange' : 'transparent',
                                            color: typeDeProjet === true ? '#fff' : '#000',
                                            background: typeDeProjet === true ? 'darkorange' : 'linear-gradient(to right, #003f5c, #6a9cb8)',
                                        }}
                                    >
                                        Créer un nouveau site vitrine
                                    </button>
                                    <button
                                        onClick={() => handleTypeDeProjetChange(false)}
                                        className="option-btn"
                                        style={{
                                            backgroundColor: typeDeProjet === false ? 'darkorange' : 'transparent',
                                            color: typeDeProjet === false ? '#fff' : '#000',
                                            background: typeDeProjet === false ? 'darkorange' : 'linear-gradient(to right, #003f5c, #6a9cb8)',
                                        }}
                                    >
                                        Refondre un site existant
                                    </button>
                                </div>
                            </div>
                        ) : etapeActuelle === 2 ? (
                            /* Étape 2 : Choix des services */
                            <div className="choix-fonctionnalites">
                                <div className="titre">
                                    <h1>Devis pour un Site Vitrine</h1>
                                </div>
    
                                <div>
                                    <div className="ordre1">
                                        <div>
                                            <h3>Prix Total : {total} €</h3>
                                        </div>
                                    </div>
    
                                    <div className="Listedesservices" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: '10px', marginTop: '60px' }}>
                                        {servicesDisponibles['Site Vitrine']
                                            .filter((service) => service.id !== 'Site Vitrine')
                                            .map((service) => (
                                                <OverlayTrigger key={service.id} placement="top" overlay={<Tooltip id={`tooltip-${service.id}`}>{service.description}</Tooltip>}>
                                                    <div
                                                        className={`Cardi ${servicesChoisis.includes(service.id) ? 'selected' : ''}`}
                                                        onClick={() => handleServiceChange(service.id)}
                                                        style={{
                                                            border: '1px solid #ccc',
                                                            padding: '10px',
                                                            cursor: service.isDefault ? 'not-allowed' : 'pointer',
                                                            backgroundColor: servicesChoisis.includes(service.id) ? 'darkorange' : 'transparent',
                                                            background: servicesChoisis.includes(service.id) ? 'darkorange' : 'linear-gradient(to right, #003f5c, #6a9cb8)',
                                                            position: 'relative',
                                                        }}
                                                    >
                                                        <h4>{service.label}</h4>
                                                        <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>
                                                            {service.id === 'pageGalerie' ? 'Offert' : 'Inclus'}
                                                        </p>
                                                    </div>
                                                </OverlayTrigger>
                                            ))}
                                    </div>
    
                                    {/* Boutons Suivant et Précédent */}
                                    <div className="buttons-navigation">
                                        <button
                                            onClick={passerEtapePrecedente}
                                            disabled={etapeActuelle === 1}
                                            style={{ background: etapeActuelle === 1 ? '#ccc' : 'linear-gradient(to right, #003f5c, #6a9cb8)', color: etapeActuelle === 1 ? '#888' : '#fff' }}
                                        >
                                            Précédent
                                        </button>
                                        <button
                                            onClick={passerEtapeSuivante}
                                            disabled={etapeActuelle === 3}
                                            style={{ background: etapeActuelle === 3 ? '#ccc' : 'linear-gradient(to right, #003f5c, #6a9cb8)', color: etapeActuelle === 3 ? '#888' : '#fff' }}
                                        >
                                            Suivant
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Étape 3 : Questions supplémentaires */
<div className="questionnaire">
    <h2>Domaine / Hébergement</h2>
    <p>Quel est votre choix concernant le domaine et l'hébergement ?</p>
    <div className="options">
        <button
            onClick={() => handleDomaineHébergementChange('Je m\'occupe de déposer le nom de domaine et de prendre un hébergement')}
            style={{
                backgroundColor: domaineHébergement === 'Je m\'occupe de déposer le nom de domaine et de prendre un hébergement' ? 'darkorange' : 'transparent',
                color: domaineHébergement === 'Je m\'occupe de déposer le nom de domaine et de prendre un hébergement' ? '#fff' : '#000',
                background: domaineHébergement === 'Je m\'occupe de déposer le nom de domaine et de prendre un hébergement' ? 'darkorange' : 'linear-gradient(to right, #003f5c, #6a9cb8)',
            }}
        >
            Je m'occupe du domaine et de l'hébergement
        </button>
        <button
            onClick={() => handleDomaineHébergementChange('Je souhaite que AeoniX dépose le nom de domaine et me propose un hébergement')}
            style={{
                backgroundColor: domaineHébergement === 'Je souhaite que AeoniX dépose le nom de domaine et me propose un hébergement' ? 'darkorange' : 'transparent',
                color: domaineHébergement === 'Je souhaite que AeoniX dépose le nom de domaine et me propose un hébergement' ? '#fff' : '#000',
                background: domaineHébergement === 'Je souhaite que AeoniX dépose le nom de domaine et me propose un hébergement' ? 'darkorange' : 'linear-gradient(to right, #003f5c, #6a9cb8)',
            }}
        >
            AeoniX s'occupe du domaine et de l'hébergement
        </button>
        <button
            onClick={() => handleDomaineHébergementChange("AeoniX s'occupe de la migration du site")}
            style={{
                backgroundColor: domaineHébergement === "AeoniX s'occupe de la migration du site" ? 'darkorange' : 'transparent',
                color: domaineHébergement === "AeoniX s'occupe de la migration du site" ? '#fff' : '#000',
                background: domaineHébergement === "AeoniX s'occupe de la migration du site" ? 'darkorange' : 'linear-gradient(to right, #003f5c, #6a9cb8)',
            }}
        >
            AeoniX s'occupe de la migration du site
        </button>
    </div>

    <h2>Maintenance</h2>
    <p>Souhaitez-vous une offre de maintenance pour votre site ?</p>
    <div className="options">
        <button
            onClick={() => handleMaintenanceChange('Offre de maintenance incluse')}
            style={{
                backgroundColor: maintenance === 'Offre de maintenance incluse' ? 'darkorange' : 'transparent',
                color: maintenance === 'Offre de maintenance incluse' ? '#fff' : '#000',
                background: maintenance === 'Offre de maintenance incluse' ? 'darkorange' : 'linear-gradient(to right, #003f5c, #6a9cb8)',
            }}
        >
            Offre de maintenance incluse dans le devis
        </button>
        <button
            onClick={() => handleMaintenanceChange('Je m\'occuperai de la maintenance')}
            style={{
                backgroundColor: maintenance === 'Je m\'occuperai de la maintenance' ? 'darkorange' : 'transparent',
                color: maintenance === 'Je m\'occuperai de la maintenance' ? '#fff' : '#000',
                background: maintenance === 'Je m\'occuperai de la maintenance' ? 'darkorange' : 'linear-gradient(to right, #003f5c, #6a9cb8)',
            }}
        >
            Je m'occuperai de la maintenance moi-même
        </button>
    </div>

    <h2>Langues disponibles</h2>
    <p>Dans quelles langues souhaitez-vous que votre site soit disponible ?</p>
    <div className="options">
        <button
            onClick={() => handleLanguesChange('Uniquement en français')}
            style={{
                backgroundColor: langues === 'Uniquement en français' ? 'darkorange' : 'transparent',
                color: langues === 'Uniquement en français' ? '#fff' : '#000',
                background: langues === 'Uniquement en français' ? 'darkorange' : 'linear-gradient(to right, #003f5c, #6a9cb8)',
            }}
        >
            Uniquement en français
        </button>
        <button
            onClick={() => handleLanguesChange('Une ou plusieurs autres langues')}
            style={{
                backgroundColor: langues === 'Une ou plusieurs autres langues' ? 'darkorange' : 'transparent',
                color: langues === 'Une ou plusieurs autres langues' ? '#fff' : '#000',
                background: langues === 'Une ou plusieurs autres langues' ? 'darkorange' : 'linear-gradient(to right, #003f5c, #6a9cb8)',
            }}
        >
            Une ou plusieurs autres langues en plus du français
        </button>
    </div>

    <div className="buttons-navigation">
        <button
            onClick={passerEtapePrecedente}
            style={{ background: 'linear-gradient(to right, #003f5c, #6a9cb8)', color: '#fff' }}
        >
            Précédent
        </button>

        {/* Bouton de génération du PDF avec validation des sélections */}
        <button
            onClick={genererPDF}
            style={{ background: 'linear-gradient(to right, #003f5c, #6a9cb8)', color: '#fff' }}
            disabled={!domaineHébergement || !maintenance || !langues}  
        >
            Générer le PDF
        </button>
    </div>

    {/* Affichage du message d'erreur si nécessaire */}
    {(domaineHébergement === '' || maintenance === '' || langues === '') && (
        <p style={{ color: 'red' }}>Veuillez sélectionner toutes les options avant de générer le PDF.</p>
    )}
</div>

                        )}
                    </div>
                </div>
            ) : (
                <Devis /> // Montre le composant Accueil lorsque la modale est fermée
            )}
        </div>
    );
    
};

export default FormulaireDevisSiteVitrine;
