import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import { FreindsContext } from "../context/FriendContext";
import MessageProvidor from "../context/MessageContext";

const Chat = () => {
  const { curChat } = useContext(FreindsContext);
  return (
    <div className="h-full flex flex-col">
      <Header />
      <Messages room_id={curChat} />
      <MessageProvidor>
        <SendMessage />
      </MessageProvidor>
    </div>
  );
};

export default Chat;
