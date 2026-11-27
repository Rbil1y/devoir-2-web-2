import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        {/* Routage côté client sans rechargement */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© 2026 MonApp React — Devoir 2 Développement Web 2</p>
      </footer>
    </div>
  );
}

export default App;
