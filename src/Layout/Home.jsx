import { useContext, useEffect } from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import { FreindProvidor } from "../context/FriendContext";
import { SocketProvider } from "../context/SocketContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    // if the token is InVaild then redirect the user to Guest Layout .
    if (token === null || token === undefined) {
      // Check the token
      navigate("/login");
    }
  }, [token]);
  return (
    <SocketProvider>
      <FreindProvidor>
        <Navbar />
        <div className="flex h-[calc(100%-80px)] bg-sky-400">
          <div className="w-1/3">
            <Sidebar />
          </div>
          <div className="w-2/3">
            <Chat />
          </div>
        </div>
      </FreindProvidor>
    </SocketProvider>
  );
};

export default Home;
