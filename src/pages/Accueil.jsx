import { Link } from 'react-router-dom';

function Accueil() {
  return (
    <section className="page-card">
      <span className="badge">React • React Router</span>
      <h1>Bienvenue sur MonApp React</h1>
      <p className="lead">
        Une application web moderne illustrant la navigation fluide côté client avec{' '}
        <strong>react-router-dom</strong>, sans aucun rechargement de page.
      </p>

      <div className="actions">
        <Link to="/a-propos" className="btn-primary">
          En savoir plus
        </Link>
        <Link to="/contact" className="btn-secondary">
          Nous contacter
        </Link>
      </div>

      <div className="info-grid">
        <article className="info-item">
          <h3>Navigation instantanée</h3>
          <p>Transitions immédiates entre les pages grâce aux liens React Router.</p>
        </article>
        <article className="info-item">
          <h3>État actif visible</h3>
          <p>La barre de navigation indique clairement la page actuellement consultée.</p>
        </article>
        <article className="info-item">
          <h3>Gestion des erreurs 404</h3>
          <p>Toute adresse inconnue redirige vers une page 404 dédiée.</p>
        </article>
      </div>
    </section>
  );
}

export default Accueil;
