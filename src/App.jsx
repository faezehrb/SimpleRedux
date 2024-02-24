import { useSelector } from "react-redux";
import "./App.css";
import { ConfirmForm } from "./ConfirmForm";
import { LoginForm } from "./LoginForm";

export function App() {
  const loggingIn = useSelector((state) => state.loginForm.loggingIn);

  return loggingIn ? <LoginForm /> : <ConfirmForm />;
}
