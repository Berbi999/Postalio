import React from "react";
import { Link } from 'react-router-dom'

export default function MenuList() {
    return (
        <div>
            <p><Link to="/">Home</Link></p>
            <p className="color-dark_blue font-size-16px"><Link to="/register">Register</Link></p>
            <p className="color-dark_blue font-size-16px"><Link to="/login">LogIn</Link></p>
        </div>
    )
}