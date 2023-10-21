import { Routes, Route } from "react-router";
import { Main } from "./pages/Main";
import { Auth } from "./pages/Auth";
import { MyPlaylist } from "./pages/MyPlaylist";
import { DayPlaylist } from "./pages/DayPlaylist";
import { HitsPlaylist } from "./pages/HitsPlaylist";
import { IndyPlaylist } from "./pages/IndyPlaylist";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProtectedRoute } from "./components/protected-route";

export const AppRoutes = () => {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute token={token} />}>
        <Route path="/" element={<Main />} />
      </Route>
      <Route path="my-playlist" element={<MyPlaylist />} />
      <Route path="day-playlist" element={<DayPlaylist />} />
      <Route path="hits-playlist" element={<HitsPlaylist />} />
      <Route path="indy-playlist" element={<IndyPlaylist />} />
      <Route path="login" element={<Auth />} />
      <Route path="registration" element={<Auth />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
