// import React, { useState, useEffect } from 'react';
// import './Contact.css'; // Importation du fichier CSS

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faMapMarkerAlt, faArrowUp, faClock } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Ajout des icônes

// function Contact() {
//     const [showScrollToTop, setShowScrollToTop] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const position = window.scrollY;
//             setShowScrollToTop(position > 300);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//     const handleMailClick = () => {
//         window.location.href = `mailto:example@mail.com?subject=Demande de contact`;
//     };

//     const handlePhoneClick = () => {
//         window.location.href = `tel:+1230612345678`;
//     };

//     const handleMapClick = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 const { latitude, longitude } = position.coords;
//                 const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15`;
//                 window.open(googleMapsUrl, '_blank');
//             }, (error) => {
//                 console.log(error);
//                 alert("Impossible d'obtenir votre localisation.");
//             });
//         } else {
//             alert("La géolocalisation n'est pas supportée par ce navigateur.");
//         }
//     };

//     return (
//         <div className="contact-container">
//             {showScrollToTop && (
//                 <div className="scroll-to-top" onClick={scrollToTop}>
//                     <FontAwesomeIcon icon={faArrowUp} />
//                 </div>
//             )}

//             <div className="contact-layout">
//                 {/* Partie gauche */}
//                 <div className="left-section">
//                     <div className="upper-card">
//                         <div className="availability-card">
//                             <h3>Disponibilité</h3>
//                             <FontAwesomeIcon icon={faClock} className="availability-icon" />
//                             <div className="availability-details">
//                                 <div className="days">
//                                     <div className="availability-item"><span>Lundi</span></div>
//                                     <div className="availability-item"><span>Mardi</span></div>
//                                     <div className="availability-item"><span>Mercredi</span></div>
//                                     <div className="availability-item"><span>Jeudi</span></div>
//                                     <div className="availability-item"><span>Vendredi</span></div>
//                                 </div>
//                                 <div className="hours">
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="lower-card">
//                         <div className="cardContact2" onClick={handlePhoneClick}>
//                             <h3 className="titreTelephone">Téléphone</h3>
//                             <FontAwesomeIcon icon={faPhone} className="icon" />
//                             <p className="numTelephone">06 12 34 56 78</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Partie centrale */}
//                 <div className="center-section">
//                     <div className="cardContact" onClick={handleMapClick}>
//                         <h3 className="titreAdresse">Adresse</h3>
//                         <div><FontAwesomeIcon icon={faMapMarkerAlt} className="icon2" /></div>
//                         <h4 className="positionnementDeLAdresse">57, rue Pasteur - 59350 Saint-Zndré-Lez-Lille</h4>
//                         <div>
//                         <iframe
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5058.516014730583!2d3.0529218769455255!3d50.65946997163289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32a606e33a929%3A0x2ac6497882aa0b95!2s57%20Rue%20Pasteur%2C%2059350%20Saint-Andr%C3%A9-lez-Lille!5e0!3m2!1sfr!2sfr!4v1731661799409!5m2!1sfr!2sfr"
//                             width="400"
//                             height="300"
//                             style={{ border: 0 }}
//                             allowFullScreen=""
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"
//                         ></iframe>
//                         </div>
                        

//                     </div>
//                 </div>

//                 {/* Partie droite */}
//                 <div className="right-section">
//                     <div className="cardContact1" onClick={handleMailClick}>
//                         <h3 className="titreMail">Mail</h3>
//                         <FontAwesomeIcon icon={faEnvelope} className="icon" />
//                         <p>example@mail.com</p>
//                     </div>

//                     <div className="FormulaireDeContact">

//                         <div className="FormulaireDeContacBis">
//                             <h3 className="titreReseaux">Formulaire De Contact</h3>
//                         </div>

//                     </div>
//                     <div className="social-cardContact">
//                         <div className="social-icons">
//                             <h3 className="titreReseaux">Suivez-nous</h3>
//                             <div className="reseaux">
//                                 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                                     <FontAwesomeIcon icon={faTwitter} className="social-icon" />
//                                 </a>
//                                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                                     <FontAwesomeIcon icon={faFacebook} className="social-icon" />
//                                 </a>
//                                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                                     <FontAwesomeIcon icon={faInstagram} className="social-icon" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 <div>
                
                
//             </div>
//             {/* <div className='formulaireContact'>
//                     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe-jT8CqzUQIIWsw9b12eU7GyVox7JkVGfeFQ4PX9Aps95YPw/viewform?embedded=true" 
//                     frameborder="0" marginheight="0" marginwidth="0" className='formulaireContact'>Chargement…</iframe>
//                 </div> */}
//             </div>

//         </div>
//     );
// }

// export default Contact;











// import React, { useState, useEffect } from 'react';
// import './Contact.css'; // Importation du fichier CSS

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faMapMarkerAlt, faArrowUp, faClock } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Ajout des icônes

// function Contact() {
//     const [showScrollToTop, setShowScrollToTop] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false); // État pour la modale

//     useEffect(() => {
//         const handleScroll = () => {
//             const position = window.scrollY;
//             setShowScrollToTop(position > 300);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//     const handleMailClick = () => {
//         window.location.href = `mailto:example@mail.com?subject=Demande de contact`;
//     };

//     const handlePhoneClick = () => {
//         window.location.href = `tel:+1230612345678`;
//     };

//     const handleMapClick = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 const { latitude, longitude } = position.coords;
//                 const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15`;
//                 window.open(googleMapsUrl, '_blank');
//             }, (error) => {
//                 console.log(error);
//                 alert("Impossible d'obtenir votre localisation.");
//             });
//         } else {
//             alert("La géolocalisation n'est pas supportée par ce navigateur.");
//         }
//     };

//     const openModal = () => {
//         setIsModalOpen(true); // Ouvre la modale
//     };

//     const closeModal = () => {
//         setIsModalOpen(false); // Ferme la modale
//     };

//     return (
//         <div className="contact-container">
//             {showScrollToTop && (
//                 <div className="scroll-to-top" onClick={scrollToTop}>
//                     <FontAwesomeIcon icon={faArrowUp} />
//                 </div>
//             )}

//             <div className="contact-layout">
//                 {/* Partie gauche */}
//                 <div className="left-section">
//                     <div className="upper-card">
//                         <div className="availability-card">
//                             <h3>Disponibilité</h3>
//                             <FontAwesomeIcon icon={faClock} className="availability-icon" />
//                             <div className="availability-details">
//                                 <div className="days">
//                                     <div className="availability-item"><span>Lundi</span></div>
//                                     <div className="availability-item"><span>Mardi</span></div>
//                                     <div className="availability-item"><span>Mercredi</span></div>
//                                     <div className="availability-item"><span>Jeudi</span></div>
//                                     <div className="availability-item"><span>Vendredi</span></div>
//                                 </div>
//                                 <div className="hours">
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="lower-card">
//                         <div className="cardContact2" onClick={handlePhoneClick}>
//                             <h3 className="titreTelephone">Téléphone</h3>
//                             <FontAwesomeIcon icon={faPhone} className="icon" />
//                             <p className="numTelephone">06 12 34 56 78</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Partie centrale */}
//                 <div className="center-section">
//                     <div className="cardContact" onClick={handleMapClick}>
//                         <h3 className="titreAdresse">Adresse</h3>
//                         <div><FontAwesomeIcon icon={faMapMarkerAlt} className="icon2" /></div>
//                         <h4 className="positionnementDeLAdresse">57, rue Pasteur - 59350 Saint-Zndré-Lez-Lille</h4>
//                         <div>
//                         <iframe
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5058.516014730583!2d3.0529218769455255!3d50.65946997163289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32a606e33a929%3A0x2ac6497882aa0b95!2s57%20Rue%20Pasteur%2C%2059350%20Saint-Andr%C3%A9-lez-Lille!5e0!3m2!1sfr!2sfr!4v1731661799409!5m2!1sfr!2sfr"
//                             width="400"
//                             height="300"
//                             style={{ border: 0 }}
//                             allowFullScreen=""
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"
//                         ></iframe>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Partie droite */}
//                 <div className="right-section">
//                     <div className="cardContact1" onClick={handleMailClick}>
//                         <h3 className="titreMail">Mail</h3>
//                         <FontAwesomeIcon icon={faEnvelope} className="icon" />
//                         <p>example@mail.com</p>
//                     </div>

//                     <div className="FormulaireDeContact" onClick={openModal}>
//                         <div className="FormulaireDeContacBis">
//                             <h3 className="titreReseaux">Formulaire De Contact</h3>
//                         </div>
//                     </div>

//                     {/* Modale */}
//                     {isModalOpen && (
//                         <div className="modal">
//                             <div className="modal-content">
//                                 <span className="close" onClick={closeModal}>&times;</span>
//                                 <iframe
//                                     src="https://docs.google.com/forms/d/e/1FAIpQLSe-jT8CqzUQIIWsw9b12eU7GyVox7JkVGfeFQ4PX9Aps95YPw/viewform?embedded=true"
//                                     frameBorder="0"
//                                     marginHeight="0"
//                                     marginWidth="0"
//                                     className="formulaireContact"
//                                 >
//                                     Chargement…
//                                 </iframe>
//                             </div>
//                         </div>
//                     )}

//                     <div className="social-cardContact">
//                         <div className="social-icons">
//                             <h3 className="titreReseaux">Suivez-nous</h3>
//                             <div className="reseaux">
//                                 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                                     <FontAwesomeIcon icon={faTwitter} className="social-icon" />
//                                 </a>
//                                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                                     <FontAwesomeIcon icon={faFacebook} className="social-icon" />
//                                 </a>
//                                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                                     <FontAwesomeIcon icon={faInstagram} className="social-icon" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Contact;












// import React, { useState, useEffect } from 'react';
// import './Contact.css'; // Importation du fichier CSS
// import FormulaireContact from './FormulaireContact'; // Ajout de l'import

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faMapMarkerAlt, faArrowUp, faClock } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Ajout des icônes

// function Contact() {
//     const [showScrollToTop, setShowScrollToTop] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false); // État pour la modale

//     useEffect(() => {
//         const handleScroll = () => {
//             const position = window.scrollY;
//             setShowScrollToTop(position > 300);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//     const handleMailClick = () => {
//         window.location.href = `mailto:example@mail.com?subject=Demande de contact`;
//     };

//     const handlePhoneClick = () => {
//         window.location.href = `tel:+1230612345678`;
//     };

//     const handleMapClick = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 const { latitude, longitude } = position.coords;
//                 const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15`;
//                 window.open(googleMapsUrl, '_blank');
//             }, (error) => {
//                 console.log(error);
//                 alert("Impossible d'obtenir votre localisation.");
//             });
//         } else {
//             alert("La géolocalisation n'est pas supportée par ce navigateur.");
//         }
//     };

//     const openModal = () => {
//         setIsModalOpen(true); // Ouvre la modale
//     };

//     const closeModal = () => {
//         setIsModalOpen(false); // Ferme la modale
//     };

//     // Fonction pour fermer la modale si le clic se fait en dehors de la modale
//     const handleModalClick = (e) => {
//         if (e.target.classList.contains("modal")) {
//             closeModal();
//         }
//     };

//     return (
//         <div className="contact-container">
//             {showScrollToTop && (
//                 <div className="scroll-to-top" onClick={scrollToTop}>
//                     <FontAwesomeIcon icon={faArrowUp} />
//                 </div>
//             )}

//             <div className="contact-layout">
//                 {/* Partie gauche */}
//                 <div className="left-section">
//                     <div className="upper-card">
//                         <div className="availability-card">
//                             <h3>Disponibilité</h3>
//                             <FontAwesomeIcon icon={faClock} className="availability-icon" />
//                             <div className="availability-details">
//                                 <div className="days">
//                                     <div className="availability-item"><span>Lundi</span></div>
//                                     <div className="availability-item"><span>Mardi</span></div>
//                                     <div className="availability-item"><span>Mercredi</span></div>
//                                     <div className="availability-item"><span>Jeudi</span></div>
//                                     <div className="availability-item"><span>Vendredi</span></div>
//                                 </div>
//                                 <div className="hours">
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                     <div className="availability-item"><span>8:00 - 17:00</span></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="lower-card">
//                         <div className="cardContact2" onClick={handlePhoneClick}>
//                             <h3 className="titreTelephone">Téléphone</h3>
//                             <FontAwesomeIcon icon={faPhone} className="icon" />
//                             <p className="numTelephone">06 12 34 56 78</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Partie centrale */}
//                 <div className="center-section">
//                     <div className="cardContact" onClick={handleMapClick}>
//                         <h3 className="titreAdresse">Adresse</h3>
//                         <div><FontAwesomeIcon icon={faMapMarkerAlt} className="icon2" /></div>
//                         <h4 className="positionnementDeLAdresse">57, rue Pasteur - 59350 Saint-Zndré-Lez-Lille</h4>
//                         <div>
//                         <iframe
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5058.516014730583!2d3.0529218769455255!3d50.65946997163289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32a606e33a929%3A0x2ac6497882aa0b95!2s57%20Rue%20Pasteur%2C%2059350%20Saint-Andr%C3%A9-lez-Lille!5e0!3m2!1sfr!2sfr!4v1731661799409!5m2!1sfr!2sfr"
//                             width="400"
//                             height="300"
//                             style={{ border: 0 }}
//                             allowFullScreen=""
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"
//                         ></iframe>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Partie droite */}
//                 <div className="right-section">
//                     <div className="cardContact1" onClick={handleMailClick}>
//                         <h3 className="titreMail">Mail</h3>
//                         <FontAwesomeIcon icon={faEnvelope} className="icon" />
//                         <p>example@mail.com</p>
//                     </div>

// {/* Card pour ouvrir le formulaire */}
// <div className="FormulaireDeContact" onClick={openModal}>
//           <div className="FormulaireDeContacBis">
//             <h3 className="titreReseaux">Formulaire De Contact</h3>
//           </div>
//         </div>

//                     {/* Modale */}
//                     {/* {isModalOpen && (
//                         <div className="modal" onClick={handleModalClick}>
//                             <div className="modal-content">
//                                 <span className="close" onClick={closeModal}>&times;</span>
//                                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKNy6q2qkmZhbx38dm7HcnE8q5diBC8lrwvosF_HPDYVV-dw/viewform?embedded=true" 
//                                    className = 'formulaireContact'
//                                 frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
                                
//                             </div>
//                         </div>
//                     )} */}

// {isModalOpen && (
//           <div className="modal" onClick={closeModal}>
//             <div className="modal-content">
//               <span className="close" onClick={() => setIsModalOpen(false)}>
//                 &times;
//               </span>
//               <h2>Contactez-nous</h2>
//               <FormulaireContact /> {/* Affiche le formulaire de contact */}
//             </div>
//           </div>
//         )}

//                     <div className="social-cardContact">
//                         <div className="social-icons">
//                             <h3 className="titreReseaux">Suivez-nous</h3>
//                             <div className="reseaux">
//                                 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                                     <FontAwesomeIcon icon={faTwitter} className="social-icon" />
//                                 </a>
//                                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                                     <FontAwesomeIcon icon={faFacebook} className="social-icon" />
//                                 </a>
//                                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                                     <FontAwesomeIcon icon={faInstagram} className="social-icon" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Contact;











import { TextField, Button } from '@mui/material';

import React, { useState, useEffect } from 'react';
import './Contact.css'; // Importation du fichier CSS
import FormulaireContact from './FormulaireContact'; // Import du composant formulaire
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faArrowUp, faClock } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Ajout des icônes

function Contact() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // État pour la modale

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setShowScrollToTop(position > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleMailClick = () => {
        window.location.href = `mailto:example@mail.com?subject=Demande de contact`;
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:+1230612345678`;
    };

    const handleMapClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15`;
                window.open(googleMapsUrl, '_blank');
            }, (error) => {
                console.log(error);
                alert("Impossible d'obtenir votre localisation.");
            });
        } else {
            alert("La géolocalisation n'est pas supportée par ce navigateur.");
        }
    };

    const openModal = () => {
        setIsModalOpen(true); // Ouvre la modale
    };

    const closeModal = () => {
        setIsModalOpen(false); // Ferme la modale
    };

    // Fonction pour fermer la modale si le clic se fait en dehors de la modale
    const handleModalClick = (e) => {
        if (e.target.classList.contains("modal")) {
            closeModal();
        }
    };

    return (
        <div className="contact-container">
            {showScrollToTop && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            )}

            <div className="contact-layout">
                {/* Partie gauche */}
                <div className="left-section">
                    <div className="upper-card">
                        <div className="availability-card">
                            <h3>Disponibilité</h3>
                            <FontAwesomeIcon icon={faClock} className="availability-icon" />
                            <div className="availability-details">
                                <div className="days">
                                    <div className="availability-item"><span>Lundi</span></div>
                                    <div className="availability-item"><span>Mardi</span></div>
                                    <div className="availability-item"><span>Mercredi</span></div>
                                    <div className="availability-item"><span>Jeudi</span></div>
                                    <div className="availability-item"><span>Vendredi</span></div>
                                </div>
                                <div className="hours">
                                    <div className="availability-item"><span>8:00 - 17:00</span></div>
                                    <div className="availability-item"><span>8:00 - 17:00</span></div>
                                    <div className="availability-item"><span>8:00 - 17:00</span></div>
                                    <div className="availability-item"><span>8:00 - 17:00</span></div>
                                    <div className="availability-item"><span>8:00 - 17:00</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lower-card">
                        <div className="cardContact2" onClick={handlePhoneClick}>
                            <h3 className="titreTelephone">Téléphone</h3>
                            <FontAwesomeIcon icon={faPhone} className="icon" />
                            <p className="numTelephone">06 12 34 56 78</p>
                        </div>
                    </div>
                </div>

                {/* Partie centrale */}
                <div className="center-section">
                    <div className="cardContact" onClick={handleMapClick}>
                        <h3 className="titreAdresse">Adresse</h3>
                        <div><FontAwesomeIcon icon={faMapMarkerAlt} className="icon2" /></div>
                        <h4 className="positionnementDeLAdresse">57, rue Pasteur - 59350 Saint-André-Lez-Lille</h4>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5058.516014730583!2d3.0529218769455255!3d50.65946997163289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32a606e33a929%3A0x2ac6497882aa0b95!2s57%20Rue%20Pasteur%2C%2059350%20Saint-Andr%C3%A9-lez-Lille!5e0!3m2!1sfr!2sfr!4v1731661799409!5m2!1sfr!2sfr"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Partie droite */}
                <div className="right-section">
                    <div className="cardContact1" onClick={handleMailClick}>
                        <h3 className="titreMail">Mail</h3>
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <p>example@mail.com</p>
                    </div>

                    {/* Card pour ouvrir le formulaire */}
                    <div className="FormulaireDeContact" onClick={openModal}>
                        <div className="FormulaireDeContacBis">
                            <h3 className="titreReseaux">Formulaire De Contact</h3>
                        </div>
                    </div>

                    {/* Modale */}
                    {isModalOpen && (
                        <div className="modal" onClick={handleModalClick}>
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <h2>Contactez-nous</h2>
                                <FormulaireContact /> {/* Formulaire ici */}
                            </div>
                        </div>
                    )}

                    <div className="social-cardContact">
                        <h3 className="titreReseaux">Suivez-nous</h3>
                        <div className="reseaux">
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
