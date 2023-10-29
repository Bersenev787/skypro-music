import { GlobalStyle } from "./App.styles";
import { AppRoutes } from "./routes";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <AppRoutes token={token} />
      <GlobalStyle />
    </>
  );
};

export default App;
