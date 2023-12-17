import { useState } from "react";
import { GlobalStyle } from "./App.styles";
import { UserContext } from "./components/contexts/User";
import { AppRoutes } from "./routes";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const accessToken = localStorage.getItem("token");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <AppRoutes accessToken={accessToken} />
        <GlobalStyle />
      </UserContext.Provider>
    </>
  );
};

export default App;
