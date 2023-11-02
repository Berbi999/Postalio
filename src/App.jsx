import React, { useState } from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LogInPage';
import HomePage from './pages/Home';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';

export default function App() {
    const   [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
                {!isLoggedIn && <Route path="/register" element={<RegisterPage />} />}
            </Routes>
        </BrowserRouter>
      );
    }