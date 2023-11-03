import MenuList from "../components/MenuList";
import LogInForm from "./forms/User/LogInForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <MenuList />
      <div
        className="border-2 border-slate-700 divide-y divide-slate-700 rounded-md p-4 bg-blue-300
      "
      >
        <LogInForm />
      </div>
    </div>
  );
}
