import { useState } from "react";
import { GlobalStyle } from "./App.styles";
import { UserContext } from "./components/contexts/User";
import { AppRoutes } from "./routes";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <AppRoutes user={user} setUser={setUser} />
        <GlobalStyle />
      </UserContext.Provider>
    </>
  );
};

export default App;
