import { useContext } from "react";
import { FreindsContext } from "../context/FriendContext";
import { axiosAPI } from "../api/Axios";
import { AuthContext } from "../context/AuthContext";
import { SocketContext } from "../context/SocketContext";

const User = ({ name, chat_id, user_id, last_message, image }) => {
  const { updateCurChat } = useContext(FreindsContext);
  const { token } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  return (
    <div
      onClick={() => {
        if (chat_id === undefined) {
          console.log("target user id " + user_id);
          axiosAPI
            .post(
              "/chats",
              {
                freind_id: user_id,
              },
              {
                withCredentials: true,
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            )
            .then((res) => {
              socket.emit("JoinRoom", `${res.data.room_id}`);
              updateCurChat(res.data.room_id,name);
            })
            .catch((err) => {});
          return;
        }
        updateCurChat(chat_id,name);
      }}
      className="flex p-2 items-center gap-2 border-solid p-2 border-b-2 border-sky-500 cursor-pointer hover:bg-sky-700"
    >
      <div className="w-[50px]">
        <img className="object-cover rounded-full" src={image} alt="" />
      </div>
      <div className="text-white">
        <h2 className="text-lg font-bold">{name}</h2>
        <span className="text-sm text-slate-100 font-semibold">
          {last_message}
        </span>
      </div>
    </div>
  );
};
export default User;
