import React, { useState, useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Devis from './Devis';  // Import du composant Devis pour l'afficher lorsque la modale est fermée

import './FormulaireDevisHébergement.css';

const FormulaireDevisHébergement = () => {
    const servicesDisponibles = {
        'Hébergement Sécurisé': [
            { id: 'Hébergement de base', label: 'Hébergement de base avec SSL (1 an)', price: 120, description: 'Hébergement simple avec certificat SSL inclus pour une année.' },
            { id: 'Hébergement premium', label: 'Hébergement premium avec SSL et protection DDoS', price: 250, description: 'Hébergement avec protection DDoS avancée et certificat SSL.' },
            { id: 'Sauvegarde quotidienne', label: 'Sauvegarde quotidienne', price: 50, description: 'Sauvegarde automatique de votre site tous les jours.' },
            { id: 'Support 24/7', label: 'Support 24/7', price: 80, description: 'Support technique disponible à toute heure, tous les jours.' },
            { id: 'Protection contre attaques', label: 'Protection contre attaques DDoS', price: 100, description: 'Protection avancée contre les attaques par déni de service.' },
            { id: 'Certificat SSL', label: 'Certificat SSL annuel', price: 60, description: 'Certificat SSL pour sécuriser les communications sur votre site.' },
        ],
    };

    const [servicesChoisis, setServicesChoisis] = useState([]);
    const [total, setTotal] = useState(0);
    const [modalVisible, setModalVisible] = useState(true);
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
            const service = servicesDisponibles['Hébergement Sécurisé']?.find((s) => s.id === serviceId);
            if (service) {
                totalPrice += service.price;
            }
        });

        setTotal(totalPrice);
    };

    useEffect(() => {
        recalculerTotal(servicesChoisis);
    }, [servicesChoisis]);

    const genererPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text('Devis personnalisé pour Hébergement Sécurisé', 105, 20, { align: 'center' });

        doc.setFontSize(12);
        doc.text('Société : Ma Société', 10, 30);
        doc.text('Adresse : 123 Rue de Paris', 10, 40);
        doc.text('Email : contact@masociete.com', 10, 50);

        const data = [
            ...servicesChoisis.map((serviceId) => {
                const service = servicesDisponibles['Hébergement Sécurisé']?.find((s) => s.id === serviceId);
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
        doc.save('Devis_Hébergement_Sécurisé.pdf');
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

    return (
        <div>
            {modalVisible ? (
                <div className="modal">
                    <div className="modal-contentX" ref={modalRef} style={{ textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', position: 'relative' }}>
                        {/* Titre centré en haut */}
                        <div className="titre">
                            <h1 style={{ margin: '0', position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                                Devis pour Hébergement Sécurisé
                            </h1>
                        </div>

                        <div>
                            <div className="ordre1">
                                <div>
                                    {/* Affichage du total */}
                                    <h3 style={{ marginTop: '20px' }}>Prix Total : {total} €</h3>
                                </div>
                                {/* Bouton centré en bas */}
                                <button onClick={genererPDF} className="PDF">
                                    Télécharger le PDF
                                </button>
                            </div>

                            <div>
                                {/* Liste des services */}
                                <div
                                    className="Listedesservices"
                                    style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: '10px', marginTop: '60px' }}
                                >
                                    {servicesDisponibles['Hébergement Sécurisé']
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
                                                    position: 'relative'  // Pour positionner l'infobulle correctement
                                                }}
                                            >
                                                <h4>{service.label}</h4>
                                                {/* Affiche le prix centré */}
                                                <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>
                                                    {service.price} €
                                                </p>
                                                {/* Infobulle personnalisée */}
                                                <div className="tooltip">{service.description}</div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Devis /> // Affiche le composant Devis lorsque la modale est fermée
            )}
        </div>
    );
};

export default FormulaireDevisHébergement;
