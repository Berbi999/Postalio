import { Outlet } from "react-router-dom";
import RegisterForm from "./forms/User/RegisterForm";
import MenuList from "../components/MenuList";

export default function RegisterLayout() {
    return <>
        <MenuList></MenuList>
        <RegisterForm /> 
        <Outlet />
    </>;
};