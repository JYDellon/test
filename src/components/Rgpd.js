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
                        <p  className="texte" >{sectionsDetails[index]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Rgpd;
