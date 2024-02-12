import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import { FreindProvidor } from "../context/FriendContext";
import { SocketProvidor } from "./../context/SocketContext";

const Home = () => {
  return (
    <SocketProvidor>
      <FreindProvidor>
        <div className="flex h-[calc(100%-80px)] bg-sky-400">
          <div className="w-1/3">
            <Sidebar />
          </div>
          <div className="w-2/3">
            <Chat />
          </div>
        </div>
      </FreindProvidor>
    </SocketProvidor>
  );
};

export default Home;
