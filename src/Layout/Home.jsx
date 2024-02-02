import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex h-[calc(100%-80px)] bg-sky-400">
      <div className="w-1/3">
        <Sidebar />
      </div>
      <div className="w-2/3">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
