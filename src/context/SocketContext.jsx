import React, { createContext, useEffect, useState } from "react";
import {io} from "socket.io-client";

// Create a context for the socket
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("https://tchat-api.onrender.com");
    setSocket(newSocket);
  }, []);
  return (
    <SocketContext.Provider value={{socket}}>
        {children}
    </SocketContext.Provider>
  );
};
