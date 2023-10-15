import * as S from "./App.styles";
import { Bar } from "./components/bar/Bar";
import { Filter } from "./components/filter/Filter";
import { Footer } from "./components/footer/Footer";
import { MainNav } from "./components/main-nav/MainNav";
import { PlaylistTitle } from "./components/playlist-title/PlaylistTitle";
import { Playlist } from "./components/playlist/Playlist";
import { Search } from "./components/search/Search";
import { Sidebar } from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <>
      <S.GlobalStyle></S.GlobalStyle>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav />
            <S.MainCenterBlock>
              <Search />
              <S.CenterBlockH2>Треки</S.CenterBlockH2>
              <Filter />
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
    </>
  );
};

export default App;
