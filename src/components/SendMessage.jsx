import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { FreindsContext } from "./../context/FriendContext";
import { AuthContext } from "../context/AuthContext";

const SendMessage = () => {
  const { socket } = useContext(SocketContext);
  const { curChat } = useContext(FreindsContext);
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState();
  const [sent, setSent] = useState(false);
  useEffect(() => {
    setSent(!sent)
  },[]);

  return (
    <div className="flex bg-slate-100 justify-between p-3">
      <input
        className="outline-none bg-transparent w-full text-lg font-bold"
        placeholder="Type..."
        type="text"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        className="p-2 w-28 text-white bg-cyan-500 mr-6"
        onClick={() => {
          socket.emit("message",`${curChat}`,{
            message,
            user_id: user.id,
            room_id: curChat,
          });
          setSent(!sent)
        }}
      >
        SEND
      </button>
    </div>
  );
};

export default SendMessage;
