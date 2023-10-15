import { Playlist } from "../components/playlist/Playlist";
import { PlaylistTitle } from "../components/playlist-title/PlaylistTitle";
import { Layout } from "../layouts/Layout";

export const Main = () => {
  const title = "Треки";
  return (
    <Layout title={title}>
      <PlaylistTitle />
      <Playlist />
    </Layout>
  );
};
