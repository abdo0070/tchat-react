import {useContext, useEffect } from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import { FreindProvidor } from "../context/FriendContext";
import { SocketProvider } from "../context/SocketContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const { token, sidebarVisible } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if the token is invalid then redirect the user to Guest Layout
    if (token === null || token === undefined) {
      navigate("/login");
    }
  }, [token]);

  return (
    <SocketProvider>
      <FreindProvidor>
        <Navbar />
        <div className="flex h-[calc(100%-80px)] bg-sky-400">
          {/* Conditionally render Sidebar based on sidebarVisible state */}
          <div className={`w-1/4 sm:w-1/4 ${!sidebarVisible ? "hidden" : ""}`}>
            <Sidebar />
          </div>
          <div className={`${sidebarVisible ? "sm:w-3/4" : "w-full"}`}>
            {" "}
            {/* Adjusting width based on sidebar visibility */}
            <Chat />
          </div>
        </div>
      </FreindProvidor>
    </SocketProvider>
  );
};

export default Home;
