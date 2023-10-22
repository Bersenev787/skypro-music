import { Layout } from "../layouts/Layout";
import { Playlist } from "../components/playlist/Playlist";
import { PlaylistTitle } from "../components/playlist-title/PlaylistTitle";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { id } = useParams();
  const titleList = {
    1: "Плейлист дня",
    2: "100 танцевальных хитов",
    3: "Инди заряд",
  };

  return (
    <Layout title={titleList[id]}>
      <PlaylistTitle />
      <Playlist />
    </Layout>
  );
};
