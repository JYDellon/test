import React, { useState, useEffect, useRef } from 'react';
import articlesData from '../articles.json'; // Importer ton fichier JSON des articles
import './Recherche.css';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Importer les icônes FontAwesome

const Recherche = () => {
  const [query, setQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Fonction pour filtrer les articles
  const handleSearch = (query) => {
    setQuery(query);

    // Filtrer les articles par titre ou contenu (insensible à la casse)
    const results = articlesData.filter(
      (article) =>
        article.titre.toLowerCase().includes(query.toLowerCase()) ||
        article.contenu.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredArticles(results);

    // Fermer la modale si la recherche est vide
    setIsModalOpen(query.trim() !== '' && results.length > 0);
  };

  // Fermer la modale si on clique à l'extérieur
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="recherche-container">
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <input
          type="text"
          placeholder="Rechercher un service..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
        {query && (
          <FaTimes
            className="clear-icon"
            onClick={() => handleSearch('')}
          />
        )}
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>

      {/* Afficher les résultats de recherche */}
      {isModalOpen && (
        <div className="search-results" ref={modalRef}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div key={article.id} className="search-result-item">
                <h3>{article.titre}</h3>
                <p>{article.contenu.slice(0, 100)}...</p>
              </div>
            ))
          ) : (
            <p className="no-result">Aucun résultat trouvé</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Recherche;
