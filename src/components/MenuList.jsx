import React from "react";
import { Link } from "react-router-dom";

export default function MenuList() {
  return (
    <div className="divide-y divide-slate-800 border-2 border-opacity-40 border-slate-800 w-20 drop-shadow-xl m-4 fixed top-0 right-0">
      <p className="text-center hover:font-medium hover:drop-shadow-xl">
        <Link to="/">Home</Link>
      </p>
      <p className="text-center hover:font-medium hover:drop-shadow-xl">
        <Link to="/register">Register</Link>
      </p>
      <p className="text-center hover:font-medium hover:drop-shadow-xl">
        <Link to="/login">LogIn</Link>
      </p>
    </div>
  );
}
