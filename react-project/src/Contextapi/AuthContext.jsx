import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const login = (token) => {
    setIsAuth(true);
    setToken(token);
  };

  const logout = () => {
    setIsAuth(false);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
