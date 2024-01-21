import { Routes, Route } from "react-router";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { Layout } from "./layouts/Layout";
import { MainPage } from "./pages/main-page/MainPage";
import { FavoritePage } from "./pages/favorite-page/FavoritePage";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [token, setToken] = useState(accessToken);

  useEffect(() => {
    setToken(accessToken);
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute isAllowed={Boolean(token)} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritePage title="Мои треки" />} />
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
