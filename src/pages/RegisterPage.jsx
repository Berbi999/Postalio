import RegisterForm from "./forms/User/RegisterForm";
import MenuList from "../components/MenuList";

export default function RegisterPage() {
  return (
    <div className="border-2 border-slate-700 divide-y divide-slate-700">
      <MenuList />
      <RegisterForm />
    </div>
  );
}
