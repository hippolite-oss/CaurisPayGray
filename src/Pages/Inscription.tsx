// src/Pages/Inscription.tsx
import { Link } from 'react-router-dom';
import '../assets/Inscription.css';

const Inscription = () => {

  return (
    <div className="container-form">
      <h1>Cauris Pay</h1>
      <p>Inscrivez-vous des maintenant et profitez de nos se rvivices.</p>
      
      <form>
        <input type="text" name="nom" placeholder="Nom" required />
        <input type="text" name="prenom" placeholder="Prénom" required />

        <div className="inline-inputs">
          <input type="date" name="date" placeholder="Date de naissance" required />
          <input type="text" name="nationalite" placeholder="Nationalité" required />
        </div>

        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="motdepasse" placeholder="Mot de passe" required />
        <input type="password" name="confirmeMotdepasse" placeholder="Confirmez le mot de passe" required />
        <button type="submit">S’inscrire</button>
      </form>

      <h4>J'ai déjà un compte</h4>
      <Link to="/">Se connecter</Link>
    </div>
  );
};

export default Inscription;
