import { Routes, Route } from "react-router";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { MyPlaylist } from "./pages/MyPlaylist";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/my-playlist" element={<MyPlaylist />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
