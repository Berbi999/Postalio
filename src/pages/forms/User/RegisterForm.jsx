import React, { useState } from "react";
import supabase from "../../../utilities/client";
import ErrorWindow from "../../../components/ErrorWindow";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        <ErrorWindow>
          Niepoprawne dane logowania. Spróbuj ponownie.
        </ErrorWindow>;
      } else {
        console.log("Zarejestrowano użytkownika:", user);
        // Tutaj możesz dodać kod do przekierowania użytkownika na inną stronę po udanej rejestracji.
      }
    } catch (error) {
      <ErrorWindow>Niepoprawne dane logowania. Spróbuj ponownie.</ErrorWindow>;
    }
  };

  return (
    <div className=" bg-blue-300/70">
      <h2 className="p-3 bg-blue-300 font-medium">Register</h2>
      <input
        className="p-1 m-3 border-2 border-opacity-30 border-zinc-800  bg-gray-600 text-slate-50	"
        size="40"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        minLength="6"
        className="p-1 m-3 border-2 border-opacity-30 border-zinc-800 bg-gray-600 text-slate-50	"
        size="40"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="p-2 border-2 border-opacity-40 hover:bg-sky-700 rounded-lg border-zinc-800 bg-gray-600 color text-slate-50	"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
