import { createContext, useState } from "react";

export const FreindsContext = createContext();

export function FreindProvidor({ children }) {
  const [freinds,setFreinds] = useState();
  const [curChat,setCurChat] = useState();
  const updateFreinds = (fl) => {
    setFreinds(fl);
  };
  const updateCurChat = (room_id) => {
    setCurChat(room_id);
  }
  return (
    <FreindsContext.Provider value={{freinds, curChat,updateCurChat,updateFreinds}}>
      {children}
    </FreindsContext.Provider>
  );
}

