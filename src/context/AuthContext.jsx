import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const updateToken = (newToken) => {
    if (newToken === null) {
      logout();
      return;
    }
    const decoded = jwtDecode(newToken);
    localStorage.setItem("token", newToken);
    setToken(newToken);
    localStorage.setItem("user", decoded);
    setUser(decoded);
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
      if (t && decoded.exp * 1000 > new Date().getTime()) {
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

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
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
