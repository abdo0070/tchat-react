import Guest from "./Layout/Guest";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./Layout/Home";
import Navbar from "./components/Navbar";

function App() {
  const { token, updateToken } = useContext(AuthContext);
  return (
    <div className="h-screen">
      <Navbar />
      {token === null ? <Guest /> : <Home />}
    </div>
  );
}

export default App;
