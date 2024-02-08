import { useContext, useEffect } from "react";
import User from "./User";
import { axiosAPI } from "../api/Axios";
import { AuthContext } from "../context/AuthContext";
import { FreindsContext } from "../context/FriendContext";

const Chats = () => {
  const { token, updateToken } = useContext(AuthContext);
  const { freinds, updateFreinds } = useContext(FreindsContext);
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
        // updateToken(null)
        console.log(err);
      });
  }, []);

  return (
    <div className="overflow-y-auto h-full">
      {freinds?.map((f, i) => {
        return (
          <User
            key={i}
            name={f.user_name}
            last_message={f.last_message || "Hey"}
            image="/logo/logo-black.svg"
          />
        );
      })}
    </div>
  );
};

export default Chats;
