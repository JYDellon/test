import React, { useState } from 'react';
import './FormulaireDevis.css';
import FormulaireDevisSiteVitrine from './FormulaireDevisSiteVitrine';
import FormulaireDevisECommerce from './FormulaireDevisECommerce';
import FormulaireDevisSitePersonnalise from './FormulaireDevisSitePersonnalise';
import FormulaireDevisSEO from './FormulaireDevisSEO';
import FormulaireDevisHébergement from './FormulaireDevisHébergement';
import FormulaireDevisMaintenance from './FormulaireDevisMaintenance';

const FormulaireDevis = () => {
    const [servicesChoisis, setServicesChoisis] = useState([]);
    const [total, setTotal] = useState(0);
    const [typeDeSite, setTypeDeSite] = useState('');
    const [etape, setEtape] = useState(1);

    const [formulaireVisible, setFormulaireVisible] = useState({
        vitrine: false,
        eCommerce: false,
        sitePersonnalise: false,
        seo: false,
        hebergement: false,
        maintenance: false,
    });

    const servicesDisponibles = {
        // Définir vos services disponibles ici
    };

    const handleTypeDeSiteChange = (siteType) => {
        if (typeDeSite === siteType) {
            setTypeDeSite('');
            setServicesChoisis([]);
            setTotal(0);
            setFormulaireVisible({ 
                vitrine: false, 
                eCommerce: false, 
                sitePersonnalise: false, 
                seo: false,
                hebergement: false, 
                maintenance: false 
            });
        } else {
            setTypeDeSite(siteType);

            const defaultServices = servicesDisponibles[siteType]
                ?.filter((service) => service.isDefault)
                .map((service) => service.id) || [];

            const typeDeSiteService = servicesDisponibles[siteType]?.find((s) => s.id === siteType);
            const totalInitial = typeDeSiteService?.price || 0;

            const updatedServices = [siteType, ...defaultServices];
            setServicesChoisis(updatedServices);

            const totalAvecDefauts = defaultServices.reduce((acc, serviceId) => {
                const service = servicesDisponibles[siteType]?.find((s) => s.id === serviceId);
                return acc + (service?.price || 0);
            }, totalInitial);

            setTotal(totalAvecDefauts);

            setFormulaireVisible({
                vitrine: siteType === "Site Vitrine",
                eCommerce: siteType === "Site E-commerce",
                sitePersonnalise: siteType === "Site Personnalise",
                seo: siteType === "Référencement et SEO",
                hebergement: siteType === "Hébergement sécurisé",
                maintenance: siteType === "Gestion et maintenance",
            });
        }
    };

    return (
        <div className="formulaire-container">
            {etape === 1 && (
                <>
                    <h1>DEVIS</h1>
                    <h2>Choisissez un type de devus que vous voulez visualiser</h2>
                    <div className='truc4'>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }} className="truc2">
                            {['Site Vitrine', 'Site E-commerce', 'Site Personnalise', 'Référencement et SEO', 'Hébergement sécurisé', 'Gestion et maintenance'].map((type) => (
                                <div
                                    key={type}
                                    className={`card-type ${type === typeDeSite ? 'selected' : ''}`}
                                    onClick={() => handleTypeDeSiteChange(type)}
                                >
                                    <h4>{type}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {formulaireVisible.vitrine && <FormulaireDevisSiteVitrine />}
            {formulaireVisible.eCommerce && <FormulaireDevisECommerce />}
            {formulaireVisible.sitePersonnalise && <FormulaireDevisSitePersonnalise />}
            {formulaireVisible.seo && <FormulaireDevisSEO />}
            {formulaireVisible.hebergement && <FormulaireDevisHébergement />}
            {formulaireVisible.maintenance && <FormulaireDevisMaintenance />}
        </div>
    );
};



export default FormulaireDevis;
