import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div class="flex h-[calc(100%-80px)] bg-sky-400">
      <div class="w-1/3">
        <Sidebar />
      </div>
      <div class="w-2/3">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
