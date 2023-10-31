import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import RegisterLayout from './pages/RegisterPage';
import LogInLayout from './pages/LogInPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/LogIn', element: <LogInLayout /> },
            { path: '/Register', element: <RegisterLayout /> },
        ],
    },
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}