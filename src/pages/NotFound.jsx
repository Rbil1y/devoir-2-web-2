import { Link, useLocation } from 'react-router-dom';

function NotFound() {
  const { pathname } = useLocation();

  return (
    <section className="page-card not-found">
      <p className="error-code">404</p>
      <h1>Page introuvable</h1>
      <p className="lead">
        L&apos;adresse <code className="path-chip">{pathname}</code> ne correspond à aucune page de
        l&apos;application.
      </p>
      <Link to="/" className="btn-primary">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}

export default NotFound;
