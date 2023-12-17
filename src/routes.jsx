import { Routes, Route } from "react-router";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { Layout } from "./layouts/Layout";

export const AppRoutes = ({ accessToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken]);

  return (
    <Routes>
      <Route
        path="/"
        element={<ProtectedRoute isAllowed={Boolean(accessToken)} />}
      >
        <Route path="/" element={<Layout title="Треки" />} />
        <Route path="favorites" element={<Layout title="Мои треки" />} />
        <Route path="category/:id" element={<Layout />} />
      </Route>
      <Route
        path="/login"
        element={<AuthPage isLoginMode={true}></AuthPage>}
      ></Route>
      <Route
        path="/register"
        element={<AuthPage isLoginMode={false}></AuthPage>}
      ></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
