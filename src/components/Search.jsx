import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <div className="border-solid p-2 border-b-2 border-sky-500">
      <form onSubmit={handleSubmit}>
        <input
          className=" placeholder:text-white outline-none w-full bg-transparent"
          placeholder="Find User"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
