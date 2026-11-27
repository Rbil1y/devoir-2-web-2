import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  // Applique la classe active sur le lien correspondant à la route courante
  const getLinkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Navigation principale">
        <Link to="/" className="navbar-brand">
          <span className="brand-dot" aria-hidden="true" />
          MonApp React
        </Link>
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end className={getLinkClass}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/a-propos" className={getLinkClass}>
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
