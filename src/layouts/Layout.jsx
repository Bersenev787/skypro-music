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
import { useParams } from "react-router-dom";
import { useUserAccessTokenRefreshMutation } from "../services/user.api";
import { useEffect } from "react";

export const Layout = ({ title }) => {
  const location = useLocation();
  const isShowFilter = location.pathname === "/";

  const [refreshToken, {}] = useUserAccessTokenRefreshMutation();

  const { id } = useParams();
  const titleList = {
    1: "Плейлист дня",
    2: "100 танцевальных хитов",
    3: "Инди заряд",
  };

  const token = localStorage.getItem("refreshToken");
  useEffect(() => {
    refreshToken({ refreshToken: token }).then(({ data }) => {
      localStorage.setItem("accessToken", data.access);
    });
  }, [token]);

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
              <Playlist />
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
