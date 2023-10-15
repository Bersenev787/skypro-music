import * as S from "../App.styles";
import { Sidebar } from "../components/sidebar/Sidebar";
import { MainNav } from "../components/main-nav/MainNav";
import { Bar } from "../components/bar/Bar";
import { Footer } from "../components/footer/Footer";
import { Search } from "../components/search/Search";
import { Filter } from "../components/filter/Filter";

export const Layout = ({ children, title }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />
          <S.MainCenterBlock>
            <Search />
            <S.CenterBlockH2>{title}</S.CenterBlockH2>
            <Filter />
            <S.CenterBlockContent>{children}</S.CenterBlockContent>
          </S.MainCenterBlock>
          <Sidebar />
        </S.Main>
        <Bar />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
