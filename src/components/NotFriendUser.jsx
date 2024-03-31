import { useContext } from "react";
import { FreindsContext } from "../context/FriendContext";
import { axiosAPI } from "../api/Axios";
import { AuthContext } from "../context/AuthContext";

const NotFreindUser = ({ name, room_id, last_message, image }) => {
  const { curChat, updateCurChat } = useContext(FreindsContext);
  const { token } = useContext(AuthContext);
  const handleAddFreind = () => {
    
  }
  return (
    <div className="flex p-2 items-center justify-between gap-2 border-solid p-2 border-b-2 border-sky-500 hover:bg-sky-700">
      <div className="flex items-center">
        <div className="w-[50px]">
          <img className="object-cover rounded-full" src={image} alt="" />
        </div>
        <div className="text-white">
          <h2 className="text-lg font-bold ml-2">{name}</h2>
        </div>
      </div>
      <div>
        <button onClick={handleAddFreind} className="p-2 bg-sky-800 font-normal font-bold">Add Freind</button>
      </div>
    </div>
  );
};
export default NotFreindUser;
