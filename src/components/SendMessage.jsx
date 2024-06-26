import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { FreindsContext } from "./../context/FriendContext";
import { AuthContext } from "../context/AuthContext";

const SendMessage = () => {
  const { socket } = useContext(SocketContext);
  const { curChat } = useContext(FreindsContext);
  const { user } = useContext(AuthContext);
  const [messageInput, setMessageInput] = useState("");

  return (
    <div>
      <form
        className="flex bg-slate-100 justify-between p-3"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const msgText = messageInput.trim();
          if (msgText === undefined || msgText === null || msgText === "") {
            return;
          }
          socket.emit("message", `${curChat}`, {
            message: messageInput,
            user_id: user.id,
            room_id: curChat,
          });
          setMessageInput("");
          document.getElementById('myInput').value = '';
        }}
      >
        <input
          className="outline-none bg-transparent w-full text-lg font-bold"
          placeholder="Type..."
          type="text"
          onChange={(e) => {
            setMessageInput(e.target.value);
          }}
          id="myInput"
        />
        <button className="p-2 w-28 text-white bg-cyan-500 mr-6" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
