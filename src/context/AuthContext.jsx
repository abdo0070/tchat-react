import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    // decode the token
    if (newToken !== null) {
      console.log(newToken);
      const decoded = jwtDecode(newToken);
      localStorage.setItem("user", decoded);
      setUser(decoded);
      return;
    }
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };
  const updateSidebar = (flag) => {
    setSidebarVisible(flag);
  };
  const refresh = () => {
    if (!validateToken(token)) {
      updateToken(null);
    } else {
      const storedToken = localStorage.getItem("token");
      updateToken(storedToken || null);
    }
  };

  const validateToken = (t) => {
    try {
      const decoded = jwtDecode(t);
      if (t && decoded.exp < Date.UTC() - decoded.iat) {
        // Valid Token
        return true;
      } else {
        // Refresh The Token
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        refresh,
        token,
        updateToken,
        updateSidebar,
        sidebarVisible,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
