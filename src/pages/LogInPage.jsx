import { Outlet } from "react-router-dom";
import LogInForm from "./forms/User/LogInForm";

export default function LogInPage() {
    return <>
        <LogInForm /> 
        <Outlet />
    </>;
};