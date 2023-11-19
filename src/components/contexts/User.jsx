import React, { useContext } from "react";

export const UserContext = React.createContext({});

export const useUserContext = () => {
  const user = useContext(UserContext);

  if (!user) {
    console.error("No user was found");
    return;
  }

  return user;
};
