import { FreindProvidor } from "../context/FriendContext";
import Chats from "./Chats";
import Search from "./Search";
import UserInfo from "./UserInfo";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col">
      <UserInfo />
        <Search />
        <Chats />
    </div>
  );
};

export default Sidebar;
