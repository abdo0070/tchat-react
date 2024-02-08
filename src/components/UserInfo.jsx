import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const UserInfo = () => {
  const {user} = useContext(AuthContext);

  return (
    <div className="flex items-center p-2 bg-sky-600 justify-between">
      <div className="flex items-center gap-2">
        <div className="w-[50px]">
          <img
            className="object-cover rounded-full"
            src="logo/logo-color.svg"
            alt=""
          />
        </div>
        <div className="text-white font-bold text-lg">
          <span>{user?.user_name}</span>
        </div>
      </div>

      <div className="p-2 text-white font-bold text-lg bg-sky-300">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default UserInfo;
