import { createContext, useState } from "react";
import { axiosAPI } from "../api/Axios";

export const FreindsContext = createContext();

export function FreindProvidor({ children }) {
  const [freinds,setFreinds] = useState();
  const [curChat,setCurChat] = useState();
  const [chatName,setChatName] = useState("");
  const updateFreinds = (fl) => {
    setFreinds(fl);
  };
  const updateCurChat = (room_id,cName) => {
    setCurChat(room_id);
    setChatName(cName);
  }
  return (
    <FreindsContext.Provider value={{freinds, curChat,updateCurChat,chatName,setChatName,updateFreinds}}>
      {children}
    </FreindsContext.Provider>
  );
}

