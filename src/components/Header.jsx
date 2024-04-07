import { useContext } from "react";
import { FreindsContext } from "../context/FriendContext";

const Header = () => {
  const {chatName} = useContext(FreindsContext);
  return (
    <div className="flex items-center gap-2 py-2 px-4 flex-row">
      <div className="w-[50px]">
        <img
          className="object-cover rounded-full"
          src="logo/logo-color.svg"
          alt=""
        />
      </div>
      <div className="text-white font-bold text-lg">
        <span>{chatName}</span>
      </div>
    </div>
  );
};

export default Header;
