import React from "react";
import { Link } from 'react-router-dom'

export default function MenuList() {
    return (
        <div>
            <li>
                <p className="color-dark_blue font-size-16px"><Link to="/RegisterPage">Register</Link></p>
                <p className="color-dark_blue font-size-16px"><Link to="/LoginPage">LogIn</Link></p>
            </li>
        </div>
    )
}