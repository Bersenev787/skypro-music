import { GlobalStyle } from "./App.styles";
import { AppRoutes } from "./routes";

const App = () => {
  console.log("app");
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  );
};

export default App;
