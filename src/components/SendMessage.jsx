import { useContext , useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { FreindsContext } from "./../context/FriendContext";
import { AuthContext } from "../context/AuthContext";

const SendMessage = () => {
  const { socket } = useContext(SocketContext);
  const { curChat } = useContext(FreindsContext);
  const { user } = useContext(AuthContext);
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="flex bg-slate-100 justify-between p-3">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const msgText = messageInput.trim();
          if (msgText === undefined || msgText === null) {
            return;
          }
          socket.emit("message", `${curChat}`, {
            msgText,
            user_id: user.id,
            room_id: curChat,
          });
          setMessageInput("");
        }}
      >
        <input
          className="outline-none bg-transparent w-full text-lg font-bold"
          placeholder="Type..."
          value={messageInput}
          type="text"
          onChange={(e) => {
            setMessageInput(e.target.value);
          }}
        />
        <button className="p-2 w-28 text-white bg-cyan-500 mr-6" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
