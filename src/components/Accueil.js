import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import './Accueil.css';
import siteVitrine from '../assets/images/developpement-front.jpg';
import siteEcommerce from '../assets/images/siteVitrine.jpg';
import sitePersonnalise from '../assets/images/together.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';



function Accueil() {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };
    
    return (
        <div className='centrage'>
            <div className="accueil-container">
                <div className="cardm" onClick={() => navigate('/etapesCreationSite')}>
                    <h2>Créer votre site web</h2>
                </div>

                <div className=" cardmDevis" onClick={() => navigate('/devis')}>
                    <h2>DEMANDE</h2><h2> DE </h2><h2> DEVIS</h2><h2>GRATUIT</h2>   
                </div>
            </div>

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
                            <h3>Créez le site web de vos rêves avec AeoniX.</h3>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* Section des icônes des réseaux sociaux sous le carousel */}


        </div>
    );
}

export default Accueil;
