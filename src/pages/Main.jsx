import { Playlist } from "../components/playlist/Playlist";
import { PlaylistTitle } from "../components/playlist-title/PlaylistTitle";
import { Layout } from "../layouts/Layout";
import { useState } from "react";

export const Main = () => {
  const title = "Треки";
  const [trackId, setTrackId] = useState(null);

  const playMusic = (id) => {
    setTrackId(id);
  };

  return (
    <Layout title={title} trackId={trackId}>
      <PlaylistTitle />
      <Playlist playMusic={playMusic} />
    </Layout>
  );
};
