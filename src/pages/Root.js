import HomePage from "./Home";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return <>
        <HomePage /> 
        <Outlet />
    </>;
};