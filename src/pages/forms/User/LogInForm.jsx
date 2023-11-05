import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import ErrorWindow from "../../../components/ErrorWindow";

const LogInForm = () => {
  const supabaseUrl = "https://tbxxyivkeefkzzwvsqkx.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRieHh5aXZrZWVma3p6d3ZzcWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMzYyMzcsImV4cCI6MjAxNDYxMjIzN30.BJT-pJjZrjKzowzsIFSOMTF2VhI7YLj7nsMRxV1W1G8";
  const supabase = createClient(supabaseUrl, supabaseKey);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) {
        setErrorMessage("Incorrect registration details. Try again");
      } else {
        console.log("Zalogowano użytkownika:", user);
        navigate("/");
      }
    } catch (error) {
      setErrorMessage("Error occuered. Try again.");
    }
  };
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const session = supabase.auth.session();
  //   setUser(session?.user);
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (event, session) => {
  //       switch (event) {
  //         case "SIGNED_IN":
  //           setUser(session?.user);
  //           break;
  //         case "SIGNED_OUT":
  //           setUser(null);
  //           break;
  //         default:
  //       }
  //     }
  //   );
  // });
  return (
    <div className="bg-blue-300/70">
      <h2 className="p-3 bg-blue-300/70">LogIn</h2>
      <input
        required
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
        className="p-1 m-3 border-2 border-opacity-30 border-zinc-800 bg-gray-600 text-slate-50"
        size="40"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        required
        className="p-1 m-3 border-2 border-opacity-30 border-zinc-800 bg-gray-600 text-slate-50"
        size="40"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="p-2 border-2 border-opacity-40 hover:bg-sky-700 rounded-lg border-zinc-800 bg-gray-600 text-slate-50"
        onClick={handleLogin}
      >
        LogIn
      </button>
      {errorMessage && <ErrorWindow>{errorMessage}</ErrorWindow>}{" "}
      {/* Wyświetl komunikat o błędzie, jeśli istnieje */}
    </div>
  );
};

export default LogInForm;
