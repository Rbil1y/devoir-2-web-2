import { useState } from 'react';

function Contact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnvoye(true);
    setNom('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="page-card">
      <h1>Contact</h1>
      <p>Pour toute question, vous pouvez remplir le formulaire ci-dessous.</p>

      {envoye && (
        <p className="success-message" role="status">
          Votre message a bien été envoyé. Merci !
        </p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
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
            placeholder="votre.email@exemple.com"
            required
          />
        </label>

        <label>
          Message
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre message..."
            required
          />
        </label>

        <button type="submit" className="btn-primary">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
