import { createContext, useState } from "react";

export const MessageContext = createContext();

const MessageProvidor = ({ children }) => {
  const [messageInput, setMessageInput] = useState("");
  const [sent, setSent] = useState(false);
  const updateMessageInput = (msgText) => {
    setMessageInput(msgText);
  };
  const updateSent = () => {
    setSent(!sent);
  }
  return (
    <MessageContext.Provider
      value={{messageInput, updateMessageInput , sent , updateSent}}
    >
        {children}
    </MessageContext.Provider>
  );
};

export default MessageProvidor;
