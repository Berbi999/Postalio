import RegisterForm from "./forms/User/RegisterForm";
import MenuList from "../components/MenuList";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <MenuList />
      <div
        className="border-2 border-slate-700 divide-y divide-slate-700 rounded-md p-4 bg-blue-300
      "
      >
        <RegisterForm />
      </div>
    </div>
  );
}
