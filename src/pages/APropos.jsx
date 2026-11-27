function APropos() {
  return (
    <section className="page-card">
      <h1>À propos</h1>
      <p>
        Cette application a été réalisée dans le cadre du Devoir 2 du cours de Développement Web 2.
      </p>
      <p>
        Elle met en place une barre de navigation fonctionnelle et un routage dynamique avec{' '}
        <strong>React</strong> et <strong>react-router-dom</strong>, incluant la gestion des routes
        inexistantes via une page 404.
      </p>
    </section>
  );
}

export default APropos;
