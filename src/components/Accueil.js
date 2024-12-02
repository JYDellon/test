import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick"; 
import './Accueil.css';
import Modal from './Modal';  
import FormulaireDevis from './FormulaireDevis';
import siteVitrine from '../assets/images/developpement-front.jpg'
import siteEcommerce from '../assets/images/developpement-back2.jpg'
import sitePersonnalise from '../assets/images/together.jpg'

function Accueil() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Ouvrir la modale
    const ouvrirModal = () => setIsModalOpen(true);

    // Fermer la modale
    const fermerModal = () => setIsModalOpen(false);

    // Paramètres du carrousel
    const settings = {
        dots: true, // Affichage des puces de navigation
        infinite: true, // Boucle infinie
        speed: 500, // Durée de transition
        slidesToShow: 1, // Nombre de slides visibles
        slidesToScroll: 1, // Nombre de slides qui défilent
        arrows: true, // Affichage des flèches de navigation
        autoplay: true, // Activation du défilement automatique
        autoplaySpeed: 5000, // Temps entre chaque transition
        pauseOnHover: true, // Pause sur hover
    };

    return (
        <div>
            <div className="accueil-container">
                <div className="cardm" onClick={() => navigate('/etapesCreationSite')}>
                    <h2>Créer votre site web</h2>
                </div>
            </div>

            {/* Carrousel sous les cartes */}
            <div className="carousel-container">
                <Slider {...settings}>

                    <div className="slide">
                        <div className="slide-content">
                        <img src={siteVitrine} alt="Site Vitrine" className="carousel-image" />
                            <h3>Des sites vitrines professionnels pour votre entreprise.</h3>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-content">
                        <img src={siteEcommerce} alt="Site Ecommerce" className="carousel-image" />
                            <h3>Lancez votre boutique en ligne avec un site e-commerce performant et sécurisé.</h3>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-content">
                        <img src={sitePersonnalise} alt="Site Personnalise" className="carousel-image" />
                            <h3>Créez le site web de vos rêves avec AEONIX.</h3>
                        </div>
                    </div>

                </Slider>
            </div>

            {/* Modale affichant le formulaire de devis */}
            <Modal isOpen={isModalOpen} onClose={fermerModal}>
                <FormulaireDevis onClose={fermerModal} />
            </Modal>
        </div>
    );
}

export default Accueil;
