import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import RegisterLayout from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/LogIn', element: <LogInPage /> },
            { path: '/Register', element: <RegisterLayout /> },
        ],
    },
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}