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
    console.log("The Token is : ", token);
    axiosAPI
      .get("/users", {
        headers: {
          Authorization: "Bearer " + token,
        },
        withCredentials: true,
      })
      .then((res) => {
        updateFreinds(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        updateToken(null)
      });
  }, []);

  return (
    <div className="overflow-y-auto h-full">
      {freinds?.map((f, i) => {
        return (
          <>
            <User
              name={f.user_name}
              last_message={f.last_message || ""}
              image="/logo/logo-black.svg"
            />
          </>
        );
      })}
    </div>
  );
};

export default Chats;
