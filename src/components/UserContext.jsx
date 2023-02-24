import React, { createContext, useState, useContext } from "react";

/**
 * Context provider for User
 */
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const state = {
    user,
    setUser,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserProvider;
