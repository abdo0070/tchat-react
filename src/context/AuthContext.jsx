import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const updateToken = (user) => {
    setToken(user);
  };
  return (
    <AuthContext.Provider value={{token,updateToken}}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;