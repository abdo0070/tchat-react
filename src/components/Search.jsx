import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FreindsContext } from "../context/FriendContext";
import { allFreind, searchForFreind } from "../helpers/Freinds";

const Search = () => {
  const { token } = useContext(AuthContext);
  const { updateFreinds } = useContext(FreindsContext);
  const handleSearch = async (e) => {
    try {
      const data = await searchForFreind(e.target.value,token);
      console.log(data);
      updateFreinds(data || []);
    } catch (error) {
      //onsole.log(error);
    }
  };
  return (
    <div className="border-solid p-2 border-b-2 border-sky-500">
      <input
        className=" placeholder:text-white outline-none text-white text-lg w-full bg-transparent"
        placeholder="Find User"
        type="text"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
