import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Navigation principale">
        <span className="navbar-brand">Mon Application React</span>
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/a-propos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
