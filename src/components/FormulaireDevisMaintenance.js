import React, { useState, useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Devis from './Devis';  // Import the Devis component

import './FormulaireDevisMaintenance.css';

const FormulaireDevisMaintenance = () => {
    const servicesDisponibles = {
        'Maintenance': [
            { id: 'Maintenance mensuelle', label: 'Maintenance mensuelle (inclut mises à jour et support)', price: 150, description: 'Ce service inclut toutes les mises à jour nécessaires et un support continu.' },
            { id: 'Maintenance ponctuelle', label: 'Maintenance ponctuelle (réparation ou intervention)', price: 90, description: 'Ce service consiste en une intervention ponctuelle pour résoudre un problème spécifique.' },
            { id: 'Sécurité', label: 'Audit et mise à jour de la sécurité', price: 120, description: 'Audit approfondi de la sécurité et mise à jour pour protéger votre site.' },
            { id: 'Backup', label: 'Sauvegarde complète du site', price: 50, description: 'Sauvegarde de tout le contenu de votre site pour une protection optimale.' },
            { id: 'Optimisation', label: 'Optimisation des performances du site', price: 100, description: 'Amélioration de la vitesse et de l\'efficacité du site.' },
            { id: 'Support 24/7', label: 'Support technique 24/7', price: 180, description: 'Accès à un support technique disponible 24h/24 et 7j/7.' },
        ],
    };

    const [servicesChoisis, setServicesChoisis] = useState([]);
    const [total, setTotal] = useState(0);
    const [modalVisible, setModalVisible] = useState(true);
    const modalRef = useRef(null);

    // Handle service selection
    const handleServiceChange = (serviceId) => {
        const isSelected = servicesChoisis.includes(serviceId);
        const updatedServices = isSelected
            ? servicesChoisis.filter((id) => id !== serviceId)
            : [...servicesChoisis, serviceId];
        
        setServicesChoisis(updatedServices);
        recalculerTotal(updatedServices);
    };

    // Recalculate the total
    const recalculerTotal = (services) => {
        let totalPrice = 0;
        services.forEach((serviceId) => {
            const service = servicesDisponibles['Maintenance']?.find((s) => s.id === serviceId);
            if (service) totalPrice += service.price;
        });

        setTotal(totalPrice);
    };

    useEffect(() => {
        recalculerTotal(servicesChoisis);
    }, [servicesChoisis]);

    // Generate PDF
    const genererPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text('Devis personnalisé pour Maintenance', 105, 20, { align: 'center' });

        doc.setFontSize(12);
        doc.text('Société : Ma Société', 10, 30);
        doc.text('Adresse : 123 Rue de Paris', 10, 40);
        doc.text('Email : contact@masociete.com', 10, 50);

        const data = [
            ...servicesChoisis.map((serviceId) => {
                const service = servicesDisponibles['Maintenance']?.find((s) => s.id === serviceId);
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
        doc.save('Devis_Maintenance.pdf');
    };

    // Close modal on click outside
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalVisible(false);  // Close modal when clicking outside
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
                                Devis pour Maintenance
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
                                    {servicesDisponibles['Maintenance']
                                        .map((service) => (
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
                                            >
                                                <h4>{service.label}</h4>
                                                <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>
                                                    {service.price} €
                                                </p>
                                                <div className="tooltip">{service.description}</div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Devis /> // Show the Devis component when modal is closed
            )}
        </div>
    );
};

export default FormulaireDevisMaintenance;
