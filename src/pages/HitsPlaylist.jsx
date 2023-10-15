import { Layout } from "../layouts/Layout";
import { Playlist } from "../components/playlist/Playlist";
import { PlaylistTitle } from "../components/playlist-title/PlaylistTitle";

export const HitsPlaylist = () => {
  const title = "100 танцевальных хитов";
  return (
    <Layout title={title}>
      <PlaylistTitle />
      <Playlist />
    </Layout>
  );
};
