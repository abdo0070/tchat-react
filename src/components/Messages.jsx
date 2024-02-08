import { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { axiosAPI } from "./../api/Axios";
import { AuthContext } from "../context/AuthContext";

const Messages = () => {
  const { token } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // get freinds from the backend;
    const room_id = 1;
    axiosAPI
      .get(`/messages/${room_id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
        withCredentials: true,
      })
      .then((res) => {
        setMessages(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-sky-100 overflow-y-scroll h-full">
      {messages.map((m, i) => {
        return <Message msg={m} />;
      })}
    </div>
  );
};

export default Messages;
