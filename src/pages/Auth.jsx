import { Login } from "../components/auth/Login";
import { Registration } from "../components/auth/Registration";
import { AuthLayout } from "../layouts/AuthLayout";
import { useLocation } from "react-router-dom";

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const renderComponent = isLogin ? <Login /> : <Registration />;

  return <AuthLayout>{renderComponent}</AuthLayout>;
};
