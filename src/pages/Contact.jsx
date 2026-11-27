import { useState } from 'react';

function Contact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [envoye, setEnvoye] = useState(false);

  // Simule l'envoi et réinitialise les champs
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnvoye(true);
    setNom('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="page-card">
      <span className="badge">Support</span>
      <h1>Contact</h1>

      <div className="contact-layout">
        <div className="contact-info">
          <p className="lead">
            Une question ou une remarque ? Envoyez-nous un message via le formulaire.
          </p>
          <div className="info-item">
            <h3>Coordonnées</h3>
            <p>Email : contact@monapp-react.edu</p>
            <p>Horaires : Lun – Ven, 8h30 – 17h00</p>
            <p>Localisation : Campus IUS — Web 2</p>
          </div>
        </div>

        <div>
          {envoye && (
            <p className="success-message" role="status">
              Votre message a bien été envoyé. Merci !
            </p>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Nom
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Votre nom"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@exemple.com"
                  required
                />
              </label>
            </div>

            <label>
              Message
              <textarea
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Écrivez votre message..."
                required
              />
            </label>

            <button type="submit" className="btn-primary">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
