import { useContext, useEffect } from "react";
import User from "./User";
import { axiosAPI } from "../api/Axios";
import { AuthContext } from "../context/AuthContext";
import { FreindsContext } from "../context/FriendContext";
import { SocketContext } from "./../context/SocketContext";

const Chats = () => {
  const { token } = useContext(AuthContext);
  const { freinds, updateFreinds } = useContext(FreindsContext);
  const { socket } = useContext(SocketContext);
  useEffect(() => {
    // get freinds from the backend;
    axiosAPI
      .get("/freinds", {
        headers: {
          Authorization: "Bearer " + token,
        },
        withCredentials: true,
      })
      .then((res) => {
        updateFreinds(res.data);
      })
      .catch((err) => {
      });
  }, []);

  return (
    <div className="overflow-y-auto h-full">
      {freinds?.map((chat, i) => {
        socket.emit("JoinRoom", `${chat.id}`);
        return(
          <User
            key={i}
            name={chat.name || chat.user_name}  
            chat_id={chat.id}
            user_id={chat.user_id}
            last_message={chat.last_message || "Hey"}
            image={chat.image}
          />
        )
      })}
    </div>
  );
};

export default Chats;
