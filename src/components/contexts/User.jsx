import React, { useContext } from "react";

export const UserContext = React.createContext({});

export const useUserContext = () => {
  const user = useContext(UserContext);

  console.log("useContext", user);

  if (!user) {
    console.error("No user was found");
    return;
  }

  return user;
};
