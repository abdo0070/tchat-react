import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();
const ENDPOINT = "http://localhost:9000"; //

export function SocketProvidor({ children }) {
  const [socket, setSocket] = useState();
  useEffect(() => {
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}
