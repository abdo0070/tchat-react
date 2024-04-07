import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import { FreindsContext } from "../context/FriendContext";
import { SocketContext } from "../context/SocketContext";

const Chat = () => {
  const { curChat } = useContext(FreindsContext);
  useEffect(() => {
  }, []);

 
  return (
    <div className="h-full flex flex-col">
      <Header />
      <Messages room_id={curChat} />
      <SendMessage />
    </div>
  );
};

export default Chat;
