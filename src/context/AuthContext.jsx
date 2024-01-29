import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState();
  const updateUser = (user) => {
    setcurrentUser(user);
  };
  return (
    <AuthContext.Provider value={{currentUser,updateUser}}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;