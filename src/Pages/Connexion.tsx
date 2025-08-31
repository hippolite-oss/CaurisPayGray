import './Connexion.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

interface ConnexionProps {
  onLogin?: (token: string) => void;
}

   
const Connexion: React.FC<ConnexionProps> = ({ onLogin }) => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.1.92:5001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        onLogin?.(data.token); // appelle que si défini
        console.log("Connexion réussie");
        navigate('/inscription');
      } else {
        setError(data.message || "Erreur d'authentification");
      }
    } catch (err) {
      console.error('Erreur réseau:', err); 
      setError('Erreur réseau');
    }

  };
  return (
    <div className='connexion-container'>
      <div className='connexion-header'>
        <h1 className='connexion-title'>CaurisPay</h1>
        <p className='connexion-subtitle'>Connectez-vous à votre compte</p>
      </div>

      <form className='connexion-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type="email"
            value={email}
            placeholder="Email ou numéro de mobile"
            className='form-input'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type="password"
            placeholder="Mot de passe"
            className='form-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}

            required
          />
        </div>

        <div className='form-options'>
          <Link to='#' className='forgot-password'>
            Mot de passe oublié ?
          </Link>
        </div>

        <button type='submit' className='submit-btn'>
          Se connecter
        </button>
        {error && <div style={{ color: 'red', backgroundColor:'#fad1d1ff', padding:'0.5em', width:'100%', borderRadius:'0.2em' }}>{error}</div>}

      </form>

      <div className='separator'>
        <span className='separator-text'>ou</span>
      </div>

      <div className='create-account'>
        <Link to='/Inscription' className='create-account-btn'>
          Créer un nouveau compte
        </Link>
      </div>
    </div>
  );
}

export default Connexion;