import { Routes, Route } from "react-router";
import { Main } from "./pages/Main";
import { Auth } from "./pages/Auth";
import { Favorites } from "./pages/Favorites";
import { Category } from "./pages/Category";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AppRoutes = ({ token }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute isAllowed={Boolean(token)} />}>
        <Route path="/" element={<Main />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="category/:id" element={<Category />} />
      </Route>

      <Route path="login" element={<Auth />} />
      <Route path="register" element={<Auth />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
