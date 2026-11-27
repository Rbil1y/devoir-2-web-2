import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="page-card not-found">
      <p className="error-code">404</p>
      <h1>Page introuvable</h1>
      <p>La page que vous recherchez n&apos;existe pas ou a été déplacée.</p>
      <Link to="/" className="btn-primary">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}

export default NotFound;
