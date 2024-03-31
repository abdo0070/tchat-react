import { useContext, useEffect } from "react";
import User from "./User";
import { axiosAPI } from "../api/Axios";
import { AuthContext } from "../context/AuthContext";
import { FreindsContext } from "../context/FriendContext";
import { SocketContext } from "./../context/SocketContext";
import NotFreindUser from "./NotFriendUser";

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
        console.log(err);
      });
  }, []);

  return (
    <div className="overflow-y-auto h-full">
      {freinds?.map((f, i) => {
        socket.emit("JoinRoom", `${f.room_id}`);
        return f.is_freind === undefined || f.is_freind === true ? (
          <User
            key={i}
            name={f.user_name}
            room_id={f.room_id}
            last_message={f.last_message || "Hey"}
            image="/logo/logo-black.svg"
          />
        ) : (
          <NotFreindUser
            name={f.user_name}
            image="/logo/logo-black.svg"
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Chats;
