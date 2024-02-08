import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState();
  const updateToken = (token) => {
    setToken(token);
    // decode the token
    if (token != null) {
      const decoded = jwtDecode(token);
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
