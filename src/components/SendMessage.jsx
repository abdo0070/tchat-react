import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { FreindsContext } from "./../context/FriendContext";
import { AuthContext } from "../context/AuthContext";
import { MessageContext } from "../context/MessageContext";

const SendMessage = () => {
  const { socket } = useContext(SocketContext);
  const { curChat } = useContext(FreindsContext);
  const { user } = useContext(AuthContext);
  const { messageInput, updateMessageInput, sent , updateSent } = useContext(MessageContext);
  useEffect(() => {}, [sent]);

  return (
    <div className="flex bg-slate-100 justify-between p-3">
      <input
        className="outline-none bg-transparent w-full text-lg font-bold"
        placeholder="Type..."
        value={messageInput}
        type="text"
        onChange={(e) => {
          updateMessageInput(e.target.value);
        }}
      />
      <button
        className="p-2 w-28 text-white bg-cyan-500 mr-6"
        onClick={() => {
          const msgText = messageInput.trim();
          if (msgText === undefined || msgText === null) {
            return;
          }
          socket.emit("message", `${curChat}`, {
            msgText,
            user_id: user.id,
            room_id: curChat,
          });
          updateMessageInput("");
          updateSent();
        }}
      >
        SEND
      </button>
    </div>
  );
};

export default SendMessage;
