import { Routes, Route } from "react-router";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { MyPlaylist } from "./pages/MyPlaylist";
import { DayPlaylist } from "./pages/DayPlaylist";
import { HitsPlaylist } from "./pages/HitsPlaylist";
import { IndyPlaylist } from "./pages/IndyPlaylist";
import { NotFoundPage } from "./pages/NotFoundPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/my-playlist" element={<MyPlaylist />} />
      <Route path="/day-playlist" element={<DayPlaylist />} />
      <Route path="/hits-playlist" element={<HitsPlaylist />} />
      <Route path="/indy-playlist" element={<IndyPlaylist />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
