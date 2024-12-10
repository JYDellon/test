import React, { useState } from 'react';
import './APropos.css';

function APropos() {
    const chapitres = [
        "Notre histoire",
        "Notre mission",
        "Nos valeurs",
        "Notre équipe",
        "Ce qui nous distingue",
        "Pourquoi nous choisir ?",
    ];

    const chapitresDetails = [
        "Passionnés par le web design et les nouvelles technologies, nous avons créé cette société pour offrir des solutions web innovantes, modernes et adaptées aux besoins de chaque client",
        "Créer des sites web intuitifs, modernes et performants, tout en proposant un suivi complet allant de la conception à l'hébergement, la maintenance et le suivi après la livraison.",
        "🔹 Innovation : Créer des sites web modernes et performants.🔹 Écoute & Proximité : Comprendre vos besoins pour mieux vous accompagner.🔹 Qualité & Satisfaction : Votre réussite est notre priorité.",
        "Une équipe de professionnels passionnés spécialisée en design, développement, SEO et support pour vous offrir un service complet et adapté",
        "✅ Approche sur mesure.✅ Service clé en main : de la conception au suivi.✅ Expérience utilisateur optimale & expertise technique.",
        "Des solutions adaptées, un suivi personnalisé et une équipe passionnée pour créer votre site web avec qualité et efficacité.",
    ];

    const [chapitreSelectionne, setChapitreSelectionne] = useState(null);

    const toggleChapitre = (index) => {
        setChapitreSelectionne(chapitreSelectionne === index ? null : index);
    };

    return (
        <>
        <div className="intro-textAPropos">
            <p>
              A travers une approche structurée et collaborative, vous serez accompagnés pour garantir un site web qui reflète vos besoins, vos ambitions et l'image de votre entreprise.
            </p>
            <p>
              Découvrez notre processus en 5 étapes simples et efficaces :
            </p>
          </div>
        
        
        <div className="apropos-container">
            {chapitres.map((chapitre, index) => (
                <div
                    key={index}
                    className={`chapitre-toggle-container ${
                        index % 2 === 0 ? 'gauche' : 'droite'
                    }`}
                    style={{
                        animationDelay: `${index * 0.1}s`
                    }}
                >
                    {/* En-tête avec gestion de l'état */}
                    <div
                        className="chapitre-toggle-header"
                        onClick={() => toggleChapitre(index)}
                    >
                        <h3>{chapitre}</h3>
                    </div>

                    {/* Contenu avec état dynamique pour l'animation */}
                    <div
                        className={`chapitre-toggle-details ${
                            chapitreSelectionne === index ? 'show' : 'hide'
                        }`}
                    >
                        <p className="texte">{chapitresDetails[index]}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
    );
}

export default APropos;
