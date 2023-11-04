import React, { useState } from "react";
import supabase from "../../../utilities/client";
import ErrorWindow from "../../../components/ErrorWindow";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setErrorMessage("Incorrect registration details. Try again.");
      } else {
        // Pomyślnie zarejestrowano użytkownika, teraz przesyłamy dane do tabeli
        const { data, insertError } = await supabase.from("Users").insert([
          {
            email: email,
            password: password,
          },
        ]);

        if (insertError) {
          console.error(
            "Błąd podczas dodawania użytkownika do tabeli:",
            insertError
          );
        } else {
          console.log("Zarejestrowano użytkownika:", user);
          navigate("/");
        }
      }
    } catch (error) {
      setErrorMessage("Error occurred. Try again.");
    }
  };

  return (
    <div className="bg-blue-300/70">
      <h2 className="p-3 bg-blue-300 font-medium">Register</h2>
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
        minLength="6"
        className="p-1 m-3 border-2 border-opacity-30 border-zinc-800 bg-gray-600 text-slate-50"
        size="40"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="p-2 border-2 border-opacity-40 hover:bg-sky-700 rounded-lg border-zinc-800 bg-gray-600 color text-slate-50"
        onClick={handleRegister}
      >
        Register
      </button>
      {errorMessage && <ErrorWindow>{errorMessage}</ErrorWindow>}{" "}
      {/* Wyświetl komunikat o błędzie, jeśli istnieje */}
    </div>
  );
};

export default RegisterForm;
