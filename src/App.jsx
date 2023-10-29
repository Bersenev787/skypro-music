import { GlobalStyle } from "./App.styles";
import { AppRoutes } from "./routes";

const App = () => {
  const token = localStorage.getItem("token");
  console.log("App token", token);

  return (
    <>
      <AppRoutes token={token} />
      <GlobalStyle />
    </>
  );
};

export default App;
