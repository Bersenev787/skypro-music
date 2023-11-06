import * as S from "../App.styles";
import { Sidebar } from "../components/sidebar/Sidebar";
import { MainNav } from "../components/main-nav/MainNav";
import { Bar } from "../components/bar/Bar";
import { Footer } from "../components/footer/Footer";
import { Search } from "../components/search/Search";
import { Filter } from "../components/filter/Filter";
import { useLocation } from "react-router-dom";

export const Layout = ({ children, title, trackId }) => {
  const location = useLocation();
  const isShowFilter = location.pathname === "/";
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />
          <S.MainCenterBlock>
            <Search />
            <S.CenterBlockH2>{title}</S.CenterBlockH2>
            {isShowFilter && <Filter />}
            <S.CenterBlockContent>{children}</S.CenterBlockContent>
          </S.MainCenterBlock>
          <Sidebar />
        </S.Main>
        <Bar trackId={trackId} />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
