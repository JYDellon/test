import './Formulaire.css';
import React, { useState } from 'react';
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
  });
  const [descriptionBesoins, setDescriptionBesoins] = useState('');
  const [prestation, setPrestation] = useState('');
  const [refonteChoisie, setRefonteChoisie] = useState(false);
  const [typeProjetSelectionne, setTypeProjetSelectionne] = useState('');

  const handleSelection = (service) => {
    setPrestation(service);
    setEtape(2);
  };

  const handleSuivant = () => {
    if (etape === 4) {
      envoyerEmail();
    } else if (etape === 2 && prestation === 'hébergement / nom de domaine') {
      setEtape(4);
    } else if (etape === 3.1) {
      setEtape(4);
    } else {
      setEtape(etape + 1);
    }
  };

  const handlePrecedent = () => {
    if (etape === 4 && prestation === 'hébergement / nom de domaine') {
      setEtape(2);
    } else if (etape === 3.1) {
      setEtape(3);
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

  const envoyerEmail = (e) => {
    e.preventDefault();
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

    emailjs
      .send(
        'service_sririnv',
        'template_1nyuelj',
        templateParams,
        'htn7B0VMvIGfY458U'
      )
      .then(
        (result) => {
          console.log('Email envoyé avec succès :', result.text);
          alert('Votre demande a été envoyée avec succès !');
          navigate('/');
        },
        (error) => {
          console.log("Échec de l’envoi de l’e-mail :", error.text);
          alert("Une erreur est survenue lors de l'envoi de votre demande.");
        }
      );
  };



return (

    <div className="formulaire-devisS">
      <h1>Demande de devis</h1>

      {/* Étape 1 */}
      {etape === 1 && (
        <div>
          <p style={{ textAlign: 'center' }} className='mep'>Quelle prestation vous intéresse ?</p>
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

      {/* Étape 2 */}
      {etape === 2 && (
        <div>
          {/* Si la prestation est "hébergement / nom de domaine" */}
          {prestation === 'hébergement / nom de domaine' && (
            <div>
              <h2>Votre demande concerne un besoin en :</h2>
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
                          <label>
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


          {/* Si la prestation est autre que "hébergement / nom de domaine" */}
          {prestation !== 'hébergement / nom de domaine' && (
            <div>
              <h2>Type de projet</h2>
              <div className="type-projet-container">
                <div className="type-projet-option">
                  <label>
                    <input
                      type="radio"
                      name="typeProjet"
                      value="création"
                      checked={typeProjetSelectionne === 'création'}
                      onChange={(e) => {
                        setTypeProjetSelectionne(e.target.value);
                        setRefonteChoisie(false); // Désactive le champ URL si "création" est sélectionné
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
                        setRefonteChoisie(true); // Active le champ URL si "refonte" est sélectionné
                      }}
                    />
                    <span className="label-text">Vous avez déjà un site internet que vous souhaitez refondre entièrement ou améliorer</span>
                  </label>
                </div>
              </div>

              {/* Afficher l'input URL uniquement si refonte est sélectionné */}
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

              {/* Objectifs du projet */}
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
            </div>
          )}


          <div className="boutons-containerR">
            <button onClick={handlePrecedent} className="boutonbtn">Précédent</button>
            <button onClick={handleSuivant} className="boutonbtn">Suivant</button>
          </div>
        </div>
      )}

      {/* Étape 3 */}
      {etape === 3 && (
        <div className="etape3-container">
          {/* Section des fonctionnalités */}
          <fieldset className="fonctionnalites-section">
            <legend>Fonctionnalités</legend>
            <div className="fonctionnalites-options">
              {[
                "Formulaires d'inscription ou demande de devis",
                'Blog (fonctionnalité permettant de publier des articles, des actualités)',
                'Espace privé ou privilégié accessible par identification (accès client/membre)',
                'Prise de rendez-vous',
                'Réservation (évènement, hébergement, table, voiture, ...)',
                'Gestion de fichiers (rendre disponible des fichiers en téléchargement)',
                'Carte dynamique type Google Maps pour afficher diverses localisations relatives à votre activité (magasins, points de retrait, salles...)'
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

          {/* Section du graphisme */}
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

          {/* Boutons de navigation */}
          <div className="boutons-containerR">
            <button onClick={handlePrecedent} className="boutonbtn">Précédent</button>
            <button onClick={() => setEtape(3.1)} className="boutonbtn">Suivant</button>
          </div>
        </div>
      )}


      {/* Étape 3.1 */}
      {etape === 3.1 && (
        <div className="etape3_1-container">
          {/* Section des besoins */}
          <fieldset className="besoins-section">
            <legend>Votre demande concerne un besoin en :</legend>
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
                      <label>
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

          {/* Boutons de navigation */}
          <div className="boutons-containerR">
            <button onClick={handlePrecedent} className="boutonbtn">Précédent</button>
            <button onClick={handleSuivant} className="boutonbtn">Suivant</button>
          </div>
        </div>
      )}


      {etape === 4 && (
        <div className="etape4-container">
          <h2>Vos coordonnées</h2>
          <div className="coordonnees-container">
            <div className="input-group">
              <label className="label1">Nom :</label>
              <input 
                type="text" 
                value={nom} 
                onChange={(e) => setNom(e.target.value)} 
                className="input1" 
              />
            </div>

            <div className="input-group">
              <label className="label1">Nom de l'entreprise :</label>
              <input 
                type="text" 
                value={nomEntreprise} 
                onChange={(e) => setNomEntreprise(e.target.value)} 
                className="input1" 
              />
            </div>

            <div className="input-group">
              <label className="label1">Email :</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="input1" 
              />
            </div>

            <div className="input-group">
              <label className="label1">Téléphone :</label>
              <input 
                type="tel" 
                value={telephone} 
                onChange={(e) => setTelephone(e.target.value)} 
                className="input1" 
              />
            </div>
          </div>

          <div className="boutons-containerR">
            <button onClick={handlePrecedent} className="boutonbtn">Précédent</button>
            <button onClick={envoyerEmail} className="boutonbtn">Envoyer</button>
          </div>
        </div>
      )}

    </div>
);






};

export default Formulaire;










