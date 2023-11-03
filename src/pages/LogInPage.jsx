import MenuList from "../components/MenuList";
import LogInForm from "./forms/User/LogInForm";

export default function LoginPage() {
  return (
    <div className="border-2 border-slate-700 divide-y divide-slate-700">
      <LogInForm />
      <MenuList />
    </div>
  );
}
