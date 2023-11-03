import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const LogInForm = () => {
  const supabaseUrl = "https://tbxxyivkeefkzzwvsqkx.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRieHh5aXZrZWVma3p6d3ZzcWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMzYyMzcsImV4cCI6MjAxNDYxMjIzN30.BJT-pJjZrjKzowzsIFSOMTF2VhI7YLj7nsMRxV1W1G8";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) {
        console.error("Błąd logowania:", error.message);
      } else {
        console.log("Zalogowano użytkownika:", user);
        // Tutaj możesz dodać kod do przekierowania użytkownika na inną stronę po udanym logowaniu.
      }
    } catch (error) {
      console.error("Błąd logowania:", error.message);
    }
  };

  return (
    <div>
      <h2 className="p-3">LogIn</h2>
      <input
        className="p-1 m-3 border-2 border-opacity-30 border-zinc-800"
        size="40"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="p-1 m-3 border-2 border-opacity-30 border-zinc-800"
        size="40"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="p-2 border-2 border-opacity-40 hover:bg-sky-700 rounded-lg border-zinc-800"
        onClick={handleLogin}
      >
        LogIn
      </button>
    </div>
  );
};

export default LogInForm;
