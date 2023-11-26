import * as S from "../App.styles";
import { Sidebar } from "../components/sidebar/Sidebar";
import { MainNav } from "../components/main-nav/MainNav";
import { Bar } from "../components/bar/Bar";
import { Footer } from "../components/footer/Footer";
import { Search } from "../components/search/Search";
import { Filter } from "../components/filter/Filter";
import { useLocation } from "react-router-dom";
import { Playlist } from "../components/playlist/Playlist";
import { PlaylistTitle } from "../components/playlist-title/PlaylistTitle";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Layout = ({ children, title }) => {
  const [trackId, setTrackId] = useState(null);
  const playMusic = (id) => {
    setTrackId(id);
  };
  const location = useLocation();
  const isShowFilter = location.pathname === "/";

  const { id } = useParams();
  const titleList = {
    1: "Плейлист дня",
    2: "100 танцевальных хитов",
    3: "Инди заряд",
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />
          <S.MainCenterBlock>
            <Search />
            <S.CenterBlockH2>{id ? titleList[id] : title}</S.CenterBlockH2>
            {isShowFilter && <Filter />}
            <S.CenterBlockContent>
              <PlaylistTitle />
              <Playlist playMusic={playMusic} />
            </S.CenterBlockContent>
          </S.MainCenterBlock>
          <Sidebar />
        </S.Main>
        <Bar />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
