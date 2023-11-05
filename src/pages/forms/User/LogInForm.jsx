import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorWindow from "../../../components/ErrorWindow";
import supabase from "../../../utilities/client";
const LogInForm = () => {
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
    </div>
  );
};

export default LogInForm;
