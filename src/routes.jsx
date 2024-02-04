import { Routes, Route } from "react-router";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";
import { useEffect, useState } from "react";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { Layout } from "./layouts/Layout";
import { MainPage } from "./pages/main-page/MainPage";
import { FavoritePage } from "./pages/favorite-page/FavoritePage";

export const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/favorites"
            element={<FavoritePage title="Мои треки" />}
          />
          <Route path="category/:id" element={<MainPage />} />
        </Route>
      </Route>
      <Route
        path="/login"
        element={<AuthPage isLoginMode={true} setUserData={setUser}></AuthPage>}
      ></Route>
      <Route
        path="/register"
        element={<AuthPage isLoginMode={false}></AuthPage>}
      ></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
