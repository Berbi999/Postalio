import React, { useState } from 'react';
// import { createClient } from '@supabase/supabase-js';

const LogInForm = () => {
//   // const supabaseUrl = 'YOUR_SUPABASE_URL';
//   // const supabaseKey = 'YOUR_SUPABASE_API_KEY';
//   const supabase = createClient(supabaseUrl, supabaseKey);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
  //   try {
  //     // const { user, session, error } = await supabase.auth.signIn({
  //       // email,
  //       // password,
  //     // });

  //     if (error) {
  //       console.error('Błąd logowania:', error.message);
  //     } else {
  //       console.log('Zalogowano użytkownika:', user);
  //       // Tutaj możesz dodać kod do przekierowania użytkownika na inną stronę po udanym logowaniu.
  //     }
  //   } catch (error) {
  //     console.error('Błąd logowania:', error.message);
  //   }
  };

  return (
    <div>
      <h2>LogIn</h2>
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
      <button onClick={handleLogin}>Zaloguj</button>
    </div>
  );
};

export default LogInForm;