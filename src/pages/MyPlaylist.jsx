import { Layout } from "../layouts/Layout";
import { Playlist } from "../components/playlist/Playlist";
import { PlaylistTitle } from "../components/playlist-title/PlaylistTitle";

export const MyPlaylist = () => {
  const title = "Мои треки";
  return (
    <Layout title={title}>
      <PlaylistTitle />
      <Playlist />
    </Layout>
  );
};
