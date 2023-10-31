import { Outlet } from "react-router-dom";
import MenuList from "../components/MenuList";
import LogInForm from "./forms/User/LogInForm";

export default function LogInLayout() {
    return <>
        <MenuList />
        <LogInForm /> 
        <Outlet />
    </>;
};