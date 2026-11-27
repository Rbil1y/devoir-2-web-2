function Accueil() {
  return (
    <section className="page-card">
      <h1>Accueil</h1>
      <p>
        Bienvenue sur notre application React. Cette application illustre la navigation côté client
        avec <strong>react-router-dom</strong> sans rechargement de page.
      </p>
      <p>
        Utilisez la barre de navigation ci-dessus pour accéder aux pages <strong>Accueil</strong>,{' '}
        <strong>À propos</strong> et <strong>Contact</strong>.
      </p>
    </section>
  );
}

export default Accueil;
