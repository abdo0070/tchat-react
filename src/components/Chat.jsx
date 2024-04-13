import { useContext } from "react";
import Header from "./Header";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import { FreindsContext } from "../context/FriendContext";

const Chat = () => {
  const { curChat } = useContext(FreindsContext);
  return (
    <div className="h-full flex flex-col">
      <Header />
      <Messages room_id={curChat} />
        <SendMessage />
    </div>
  );
};

export default Chat;
