import React, { useState, useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Devis from './Devis'; // Import du composant Devis

import './FormulaireDevisSEO.css';  // Assure-toi de changer ou d'ajuster le nom du fichier CSS si nécessaire

const FormulaireDevisSEO = () => {
    // Services SEO à proposer
    const servicesDisponibles = {
        'Référencement SEO': [
            { id: 'AuditSEO', label: 'Audit SEO complet', price: 600, description: 'Un audit complet pour analyser et optimiser votre référencement.' },
            { id: 'OptimisationOnPage', label: 'Optimisation On-Page (mots-clés, balises HTML)', price: 500, description: 'Optimisation des éléments de votre site web pour le SEO.' },
            { id: 'SuiviMotsCles', label: 'Suivi des mots-clés', price: 400, description: 'Suivi et analyse des positions des mots-clés dans les moteurs de recherche.' },
            { id: 'SEOContent', label: 'Optimisation du contenu SEO', price: 700, description: 'Optimisation de vos contenus pour améliorer le SEO.' },
            { id: 'Backlinking', label: 'Stratégie de backlinks', price: 800, description: 'Création de backlinks de qualité pour améliorer l\'autorité de votre site.' },
            { id: 'SEOAnalyse', label: 'Analyse de la concurrence et rapports', price: 350, description: 'Analyse de la concurrence et rapports détaillés sur les performances SEO.' },
        ],
    };

    const [servicesChoisis, setServicesChoisis] = useState([]);
    const [total, setTotal] = useState(0);
    const [modalVisible, setModalVisible] = useState(true);
    const [tooltip, setTooltip] = useState('');
    const modalRef = useRef(null);

    const handleServiceChange = (serviceId) => {
        const isSelected = servicesChoisis.includes(serviceId);
        const updatedServices = isSelected
            ? servicesChoisis.filter((id) => id !== serviceId)
            : [...servicesChoisis, serviceId];
        
        setServicesChoisis(updatedServices);
        recalculerTotal(updatedServices);
    };

    const recalculerTotal = (services) => {
        let totalPrice = 0;
        services.forEach((serviceId) => {
            const service = servicesDisponibles['Référencement SEO']?.find((s) => s.id === serviceId);
            if (service) totalPrice += service.price;
        });

        setTotal(totalPrice);
    };

    useEffect(() => {
        recalculerTotal(servicesChoisis);
    }, [servicesChoisis]);

    const genererPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text('Devis personnalisé - Référencement SEO', 105, 20, { align: 'center' });

        doc.setFontSize(12);
        doc.text('Société : Ma Société', 10, 30);
        doc.text('Adresse : 123 Rue de Paris', 10, 40);
        doc.text('Email : contact@masociete.com', 10, 50);

        const data = [
            ...servicesChoisis.map((serviceId) => {
                const service = servicesDisponibles['Référencement SEO']?.find((s) => s.id === serviceId);
                return [
                    service?.label,
                    1,
                    `${service?.price} €`,
                ];
            }),
        ];

        doc.autoTable({
            head: [['Service', 'Qté', 'Prix']],
            body: data,
            startY: 60,
        });

        doc.text(`Total : ${total} €`, 10, doc.lastAutoTable.finalY + 10);
        doc.save('Devis_Referencement_SEO.pdf');
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalVisible(false);  // Ferme la modal et affiche le composant Devis
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            {modalVisible ? (
                <div className="modal">
                    <div className="modal-contentX" ref={modalRef} style={{ textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', position: 'relative' }}>
                        <div className="titre">
                            <h1 style={{ margin: '0', position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                                Devis pour Référencement SEO
                            </h1>
                        </div>

                        <div>
                            <div className="ordre1">
                                <div>
                                    <h3 style={{ marginTop: '20px' }}>Prix Total : {total} €</h3>
                                </div>
                                <button onClick={genererPDF} className="PDF">
                                    Télécharger le PDF
                                </button>
                            </div>

                            <div>
                                <div
                                    className="Listedesservices"
                                    style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: '10px', marginTop: '60px' }}
                                >
                                    {servicesDisponibles['Référencement SEO'].map((service) => (
                                        <div
                                            key={service.id}
                                            className={`Cardi ${servicesChoisis.includes(service.id) ? 'selected' : ''}`}
                                            onClick={() => handleServiceChange(service.id)}
                                            style={{
                                                border: '1px solid #ccc',
                                                padding: '10px',
                                                cursor: 'pointer',
                                                backgroundColor: servicesChoisis.includes(service.id) ? 'darkorange' : '#fff',
                                                position: 'relative',
                                            }}
                                            onMouseEnter={() => setTooltip(service.description)}
                                            onMouseLeave={() => setTooltip('')}
                                        >
                                            <h4>{service.label}</h4>
                                            <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>
                                                {service.price} €
                                            </p>
                                            {tooltip && (
                                                <div className="tooltip">
                                                    {tooltip}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Devis /> // Affiche le composant Devis quand la modal est fermée
            )}
        </div>
    );
};

export default FormulaireDevisSEO;
