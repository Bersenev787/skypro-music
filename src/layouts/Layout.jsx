import * as S from "../App.styles";
import { Sidebar } from "../components/sidebar/Sidebar";
import { MainNav } from "../components/main-nav/MainNav";
import { Bar } from "../components/bar/Bar";
import { Footer } from "../components/footer/Footer";
import { Search } from "../components/search/Search";
import { Filter } from "../components/filter/Filter";
import { Outlet, useLocation } from "react-router-dom";
import { PlaylistTitle } from "../components/playlist-title/PlaylistTitle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Layout = () => {
  const location = useLocation();
  const isShowFilter = location.pathname === "/";
  const [title, setTitle] = useState("");

  const { id } = useParams();
  const titleList = {
    1: "Плейлист дня",
    2: "100 танцевальных хитов",
    3: "Инди заряд",
  };

  useEffect(() => {
    if (location.pathname === "/favorites") {
      setTitle("Мои треки");
    }

    if (location.pathname === "/") {
      setTitle("Треки");
    }
  }, [title, location.pathname]);

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
              <Outlet />
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
