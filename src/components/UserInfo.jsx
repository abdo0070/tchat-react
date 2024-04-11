import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const UserInfo = () => {
  const { user} = useContext(AuthContext);
  // Function to toggle sidebar visibility
  
  return (
    <div className="flex items-center p-2 bg-sky-600 gap-4">
      <div className="flex items-center gap-2">
        <div className="w-[50px]">
          <img
            className="object-cover rounded-full"
            src="logo/logo-color.svg"
            alt=""
          />
        </div>
        <div className="text-xs text-white font-bold lg:text-lg">
          <span>{user?.user_name}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
