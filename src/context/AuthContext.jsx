import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token' || null));
  const [user, setUser] = useState();
  const updateToken = (newToken) => {
    localStorage.setItem('token',newToken);
    setToken(newToken);
    // decode the token
    if (newToken != null) {
      const decoded = jwtDecode(newToken);
      setUser(decoded);
      return;
    }
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user , token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
