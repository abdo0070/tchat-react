import { useState } from "react";
import User from "./User";

const Chats = () => {
    const [users , setUsers] = useState([
        {
            name : "Omar",
            image : "logo/logo-color.svg",
            last_message : "hi"
        },
        {
            name : "Ahmed",
            image : "logo/logo-black.svg",
            last_message : "where r u pro ?"
        },
        {
            name : "Omar",
            image : "logo/logo-white.svg",
            last_message : "hahaha"
        },
        {
            name : "Omar",
            image : "logo/logo-color.svg",
            last_message : "i'm good what about u ?"
        },
    ]);
  return (
    <div className="flex flex-col">
      {
        users.map( (u,i) => {
            return <>
            <User name={u.name} last_message={u.last_message} image={u.image}/>
            </>
        })
      }
    </div>
  );
};

export default Chats;
