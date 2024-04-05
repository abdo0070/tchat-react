import { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { axiosAPI } from "./../api/Axios";
import { AuthContext } from "../context/AuthContext";
import { SocketContext } from "../context/SocketContext";

const Messages = ({room_id}) => {
  const { token } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const {socket} = useContext(SocketContext);
  useEffect(() => {
    axiosAPI
      .get(`/messages/${1}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
        withCredentials: true,
      })
      .then((res) => {
        setMessages(res?.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [room_id,refresh]);

  const handleNewMessage = () => {
    try {
      socket.on("newMessage", (data) => {
        // Append the message to the chat
        setRefresh(!refresh);
        console.log("New Message Recived ...");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-sky-100 overflow-y-scroll h-full">
      {
       handleNewMessage() 
      }
      {messages.map((m, i) => {
        return <Message key={i} msg={m} />;
      })}
    </div>
  );
};

export default Messages;
