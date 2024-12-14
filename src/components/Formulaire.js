
import './Formulaire.css';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Formulaire = () => {
  const [etape, setEtape] = useState(1);
  const [typeDeProjet, setTypeDeProjet] = useState('');
  const [urlSite, setUrlSite] = useState('');
  const [urlSiteRefonte, setUrlSiteRefonte] = useState('');
  const [objectifs, setObjectifs] = useState('');
  const [fonctionnalites, setFonctionnalites] = useState([]);
  const [graphisme, setGraphisme] = useState('');
  const [nom, setNom] = useState('');
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const navigate = useNavigate();
  const [besoinsHébergement, setBesoinsHébergement] = useState({
    hebergement: false,
    seo: false,
    vitesse: false,
    nomDomaine: false,
    migration: false,
  });  const [etape3Sub, setEtape3Sub] = useState(1); // Nouveau état pour gérer la sous-étape
const [prenom, setPrenom] = useState('');

  const [descriptionBesoins, setDescriptionBesoins] = useState('');
  const [prestation, setPrestation] = useState('');
  const [refonteChoisie, setRefonteChoisie] = useState(false);
  const [typeProjetSelectionne, setTypeProjetSelectionne] = useState('');
  const [progression, setProgression] = useState(0); // Nouvelle state pour la barre de progression

  const handleSelection = (service) => {
    setPrestation(service);
    setEtape(2);
  };


  useEffect(() => {
    const calcProgression = () => {
      let progress = 0;
  
      // Mise à jour de la progression selon l'étape et la sous-étape
      if (etape === 1) {
        progress = 20;
      } else if (etape === 2) {
        progress = 40;
      } else if (etape === 3) {
        // Progression des sous-étapes de l'étape 3
        if (etape3Sub === 1) {
          progress = 60; // Première sous-étape
        } else if (etape3Sub === 2) {
          progress = 80; // Deuxième sous-étape
        }
      } else if (etape === 4) {
        progress = 100;
      }
  
      setProgression(progress);
    };
  
    calcProgression(); // Calculer la progression à chaque changement d'étape ou de sous-étape
  }, [etape, etape3Sub]);
  
  const validateNomPrenom = (value) => {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ \-]+$/.test(value); // Lettres, espaces, tirets autorisés
  };

  const validateTelephone = (value) => {
    return /^\d{10}$/.test(value); // Exactement 10 chiffres
  };

  const handleNomChange = (e) => {
    const value = e.target.value;
    if (validateNomPrenom(value)) {
      setNom(value);
    }
  };

  const handlePrenomChange = (e) => {
    const value = e.target.value;
    if (validateNomPrenom(value)) {
      setPrenom(value);
    }
  };

  const handleTelephoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Supprimer tout caractère non numérique
    setTelephone(value);
  };

  const formatTelephone = () => {
    if (validateTelephone(telephone)) {
      const formatted = telephone.replace(/(\d{2})(?=\d)/g, '$1-'); // Ajouter un tiret tous les deux chiffres
      setTelephone(formatted);
    } else {
      alert("Le numéro de téléphone doit contenir exactement 10 chiffres.");
    }
  };

  // const handleSuivant = (e) => {
  //   if (etape === 2) {
  //     if (!typeProjetSelectionne) {
  //       alert("Veuillez choisir un type de projet avant de continuer.");
  //       return;
  //     }
  //     if (
  //       typeProjetSelectionne === "refonte" &&
  //       (!urlSiteRefonte.trim() || !objectifs.trim())
  //     ) {
  //       alert(
  //         "Pour une refonte, veuillez remplir l'URL du site à refondre et vos objectifs avant de continuer."
  //       );
  //       return;
  //     }
  //   }
  
  //   if (etape === 3) {
  //     if (etape3Sub === 2 && !graphisme) {
  //       alert("Veuillez sélectionner une option de graphisme avant de continuer.");
  //       return;
  //     }
  //     if (etape3Sub < 2) {
  //       setEtape3Sub(etape3Sub + 1); // Passer à la sous-étape suivante
  //     } else {
  //       setEtape(etape + 1); // Passer à l'étape suivante
  //     }
  //   } else if (etape === 4) {
  //     envoyerEmail(e); // Passer l'événement à envoyerEmail
  //   } else {
  //     setEtape(etape + 1);
  //   }
  // };
  
  const handleSuivant = (e) => {
    if (etape === 2) {
      if (!typeProjetSelectionne) {
        alert("Veuillez choisir un type de projet avant de continuer.");
        return;
      }
      if (
        typeProjetSelectionne === "refonte" &&
        (!urlSiteRefonte.trim() || !objectifs.trim())
      ) {
        alert(
          "Pour une refonte, veuillez remplir l'URL du site à refondre et vos objectifs avant de continuer."
        );
        return;
      }
    }
  
    if (etape === 3) {
      if (etape3Sub === 2 && !graphisme) {
        alert("Veuillez sélectionner une option de graphisme avant de continuer.");
        return;
      }
      if (etape3Sub < 2) {
        setEtape3Sub(etape3Sub + 1); // Passer à la sous-étape suivante
      } else {
        setEtape(etape + 1); // Passer à l'étape suivante
      }
    } else if (etape === 4) {
      // Validation des champs "Vos coordonnées"
      if (!nom.trim() || !prenom.trim()) {
        alert("Veuillez remplir votre nom et prénom avant de continuer.");
        return;
      }
      if (!email.trim() || !validateEmail(email)) {
        alert("Veuillez saisir un email valide avant de continuer.");
        return;
      }
      if (!telephone.trim() || !validatePhoneNumber(telephone)) {
        alert("Veuillez saisir un numéro de téléphone valide avant de continuer.");
        return;
      }
  
      envoyerEmail(e); // Passer l'événement à envoyerEmail
    } else {
      setEtape(etape + 1);
    }
  };
  
  // Fonction de validation de l'email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  // Fonction de validation du téléphone
  const validatePhoneNumber = (telephone) => {
    const phoneRegex = /^(\+?\d{1,2}[-\s]?)?(\(?\d{1,3}\)?[-\s]?)?[\d\s-]{7,15}$/;
    return phoneRegex.test(telephone);
  };
  


  
  const handlePrecedent = () => {
    if (etape === 3) {
      if (etape3Sub > 1) {
        setEtape3Sub(etape3Sub - 1); // Revenir à la sous-étape précédente
      } else {
        setEtape(etape - 1); // Revenir à l'étape précédente
      }
    } else {
      setEtape(etape - 1);
    }
  };
  


  const handleFonctionnaliteChange = (fonctionnalite) => {
    setFonctionnalites((prev) =>
      prev.includes(fonctionnalite)
        ? prev.filter((item) => item !== fonctionnalite)
        : [...prev, fonctionnalite]
    );
  };

  const handleBesoinsChange = (e) => {
    const { name, checked } = e.target;
    setBesoinsHébergement((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const envoyerEmail = async (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
  
    const templateParams = {
      nom,
      email,
      telephone,
      nomEntreprise,
      prestation,
      descriptionBesoins,
      objectifs,
      urlSite: prestation === 'hébergement / nom de domaine' && urlSite.trim() !== '' ? urlSite : '-',
      fonctionnalites: fonctionnalites.join(', '),
      graphisme,
      typeProjet: typeProjetSelectionne === 'création' ? `Création d'un site ${prestation}` : `Refonte d'un site ${prestation}`,
      urlSiteRefonte: refonteChoisie ? urlSiteRefonte : '-',
      besoinsHebergement: Object.entries(besoinsHébergement)
        .filter(([_, checked]) => checked)
        .map(([key]) => key)
        .join(', ') || 'Aucun besoin spécifique',
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/devis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateParams),
      });
  
      if (response.ok) {
        alert('Votre demande a été envoyée avec succès !');
        navigate('/'); // Rediriger après envoi
      } else {
        alert("Une erreur est survenue lors de l'envoi de votre demande.");
      }
    } catch (error) {
      alert("Une erreur est survenue lors de l'envoi de votre demande.");
    }
  };
  
  return (
    <>
      <div className="modal">
        <header className="entete-formulaire">
          <h1>Demande de devis</h1>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progression}%` }}></div>
          </div>
        </header>

        <div className="contenu-modal">
          <div className="formulaire-devisS">
            {etape === 1 && (
              <div>
                <p style={{ textAlign: 'center' }} className="mep">Quelle prestation vous intéresse ?</p>
                <div className="cards-container">
                  {['site vitrine', 'site e-commerce', 'site personnalisé', 'hébergement / nom de domaine'].map((service) => (
                    <div
                      key={service}
                      className={`card ${prestation === service ? 'selected' : ''}`}
                      onClick={() => handleSelection(service)}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {etape === 2 && (
              <div>
                {prestation === 'hébergement / nom de domaine' && (
                  <div>
                    <h1>Vos besoin :</h1>
                    <fieldset className="besoins-section">
                      <legend>Besoins spécifiques</legend>
                      <div className="conteneur-besoins">
                        <div className="colonne-gauche">
                          <div className="besoins-container">
                            {[
                              { name: "hebergement", label: "Hébergement" },
                              { name: "seo", label: "Référencement naturel (SEO)" },
                              { name: "vitesse", label: "Amélioration de la vitesse de chargement de mes pages" },
                              { name: "nomDomaine", label: "Nom de domaine" },
                              { name: "migration", label: "Migration d'hébergement" }
                            ].map(({ name, label }) => (
                              <div key={name} className="besoin-option">
                                <label className="ecart">
                                  <input
                                    type="checkbox"
                                    name={name}
                                    checked={besoinsHébergement[name]}
                                    onChange={handleBesoinsChange}
                                  />
                                  <span className="label-text">{label}</span>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="colonne-droite">
                          <div className="url-container">
                            <label htmlFor="urlSite">Quelle est l'URL de votre site si vous en avez un ?</label>
                            <textarea
                              id="urlSite"
                              value={urlSite}
                              onChange={(e) => setUrlSite(e.target.value)}
                              className="tailleTextarea"
                            />
                          </div>

                          <div className="description-container">
                            <label htmlFor="descriptionBesoins">Description détaillée de votre besoin :</label>
                            <textarea
                              id="descriptionBesoins"
                              value={descriptionBesoins}
                              onChange={(e) => setDescriptionBesoins(e.target.value)}
                              className="tailleTextarea"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                )}

                {prestation !== 'hébergement / nom de domaine' && (
                  <div>
                    <div className="type-projet-container">
                    <fieldset className="type-projet-section">
                      <legend>Type de projet</legend>
                          <div className="type-projet-option">
                            <label>
                              <input
                                type="radio"
                                name="typeProjet"
                                value="création"
                                checked={typeProjetSelectionne === 'création'}
                                onChange={(e) => {
                                  setTypeProjetSelectionne(e.target.value);
                                  setRefonteChoisie(false);
                                }}
                              />
                              <span className="label-text">Création d'un {prestation}</span>
                            </label>
                          </div>
                          <div className="type-projet-option">
                            <label>
                              <input
                                type="radio"
                                name="typeProjet"
                                value="refonte"
                                checked={typeProjetSelectionne === 'refonte'}
                                onChange={(e) => {
                                  setTypeProjetSelectionne(e.target.value);
                                  setRefonteChoisie(true);
                                }}
                              />
                              <span className="label-text">Vous avez déjà un site internet que vous souhaitez refondre</span>
                            </label>
                          </div>


                    {refonteChoisie && (
                      <div className="url-refonte-container">
                        <label htmlFor="urlSiteRefonte">Veuillez saisir l'URL du site à refondre :</label>
                        <textarea
                          id="urlSiteRefonte"
                          value={urlSiteRefonte}
                          onChange={(e) => setUrlSiteRefonte(e.target.value)}
                          className="tailleTextarea"
                        />
                      </div>
                    )}


                    <div className="objectifs-container">
                      <label htmlFor="objectifs">Vos objectifs :</label>
                      <textarea
                        id="objectifs"
                        value={objectifs}
                        onChange={(e) => setObjectifs(e.target.value)}
                        required
                        className="tailleTextarea2"
                      />
                    </div>
                    </fieldset>    
                    </div>
                  </div>
                )}
              </div>
            )}

            {etape === 3 && (
              <div className="etape3-container">
                {etape3Sub === 1 && (
                  <div className="fonctionnalites-container">
                    <fieldset className="fonctionnalites-section">
                      <legend>Fonctionnalités</legend>
                      <div className="fonctionnalites-options">
                        {[
                          "Formulaires d'inscription,demande de devis",
                          'Blog ',
                          'Espace privé ou privilégié (accès client/membre)',
                          'Prise de rendez-vous',
                          'Réservation',
                          'Gestion de fichiers (téléchargement)',
                          'Carte dynamique type Google Maps (localisations )'
                        ].map((fonctionnalite) => (
                          <div key={fonctionnalite} className="fonctionnalite-option">
                            <label>
                              <input
                                type="checkbox"
                                value={fonctionnalite}
                                checked={fonctionnalites.includes(fonctionnalite)}
                                onChange={() => handleFonctionnaliteChange(fonctionnalite)}
                              />
                              <span className="label-text">{fonctionnalite}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>

                  </div>
                )}

                {etape3Sub === 2 && (
                  <div className="graphisme-container">
                    <fieldset className="graphisme-section">
                      <legend>Le graphisme</legend>
                      <div className="graphisme-options">
                        {[
                          "Je n'ai aucun élément",
                          'Je veux faire créer mon logo et ma charte graphique',
                          'Je fournis des instructions détaillées pour le graphisme (charte graphique, zoning, maquettes...)'
                        ].map((option) => (
                          <div key={option} className="graphisme-option">
                            <label>
                              <input
                                type="radio"
                                name="graphisme"
                                value={option}
                                checked={graphisme === option}
                                onChange={(e) => setGraphisme(e.target.value)}
                              />
                              <span className="label-text">{option}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                )}
              </div>
            )}

            {etape === 4 && (
              
                  <div className="etape4-container">
                  <fieldset className="coordonees-section">
                  <legend>Vos coordonnées</legend>
                    <div className="coordonnees-container">
                      {/* Ligne 1 : Nom et Prénom */}
                      <div className="input-row">
                        <div className="input-group">
                          <label className="label1">Nom :</label>
                          <input
                            type="text"
                            value={nom}
                            onChange={handleNomChange}
                            className="input1"
                          />
                        </div>
                        <div className="input-group">
                          <label className="label1">Prénom :</label>
                          <input
                            type="text"
                            value={prenom}
                            onChange={handlePrenomChange}
                            className="input1"
                          />
                        </div>
                      </div>
                      
                      {/* Ligne 2 : Entreprise */}
                      <div className="input-row">
                        <div className="input-group">
                          <label className="label2">Entreprise (facultatif) :</label>
                          <input
                            type="text"
                            value={nomEntreprise}
                            onChange={(e) => setNomEntreprise(e.target.value)}
                            className="input2"
                          />
                        </div>
                      </div>
                      
                      {/* Ligne 3 : Email et Téléphone */}
                      <div className="input-row">
                        <div className="input-group">
                          <label className="label3">Email :</label>
                          <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="input3"
                          />
                        </div>
                        <div className="input-group">
                          <label className="label4">Téléphone :</label>
                          <input
                            type="text"
                            value={telephone}
                            onChange={handleTelephoneChange}
                            onBlur={formatTelephone} // Formatage après la saisie
                            className="input4"
                          />
                        </div>
                      </div>
                    </div>
                    </fieldset>
                  </div> 
            )}
                


          </div>
          {etape > 1 && (
  <div className="footerFormulaire">
    <button onClick={handlePrecedent}>Précédent</button>
    <button onClick={handleSuivant}>{etape === 4 ? 'Envoyer' : 'Suivant'}</button>
  </div>
)}

        </div>
        
      </div>
    </>
  );
};

export default Formulaire;
