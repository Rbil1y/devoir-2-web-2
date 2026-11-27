function APropos() {
  return (
    <section className="page-card">
      <span className="badge">Présentation</span>
      <h1>À propos</h1>
      <p className="lead">
        Cette application a été conçue dans le cadre du Devoir 2 de Développement Web 2 afin de
        mettre en pratique le routage dynamique dans une application React.
      </p>

      <div className="two-col">
        <div className="info-item">
          <h3>Objectif pédagogique</h3>
          <p>
            Structurer une interface multi-pages avec une barre de navigation persistante, un état
            actif clair et une prise en charge propre des routes inexistantes.
          </p>
        </div>

        <div className="info-item">
          <h3>Stack technique</h3>
          <ul className="tech-list">
            <li>React 19 pour les composants d&apos;interface</li>
            <li>React Router DOM pour la navigation SPA</li>
            <li>Vite pour le développement et le build rapide</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default APropos;
