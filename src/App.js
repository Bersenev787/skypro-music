import "./App.css";
import Bar from "./components/bar/Bar";
import Filter from "./components/filter/Filter";
import Footer from "./components/footer/Footer";
import MainNav from "./components/main-nav/MainNav";
import PlaylistTitle from "./components/playlist-title/PlaylistTitle";
import Playlist from "./components/playlist/Playlist";
import Search from "./components/search/Search";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter className="centerblock__filter" />
            <div className="centerblock__content">
              <PlaylistTitle className="content__title" />
              <Playlist className="content__playlist" />
            </div>
          </div>
          <Sidebar className="main__sidebar" />
        </main>
        <Bar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
