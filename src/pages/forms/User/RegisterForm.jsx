import React, { useState } from 'react';
import supabase from '../../../utilities/client';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error('Błąd rejestracji:', error.message);
      } else {
        console.log('Zarejestrowano użytkownika:', user);
        // Tutaj możesz dodać kod do przekierowania użytkownika na inną stronę po udanej rejestracji.
      }
    } catch (error) {
      console.error('Błąd rejestracji:', error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Zarejestruj</button>
    </div>
  );
};

export default RegisterForm;