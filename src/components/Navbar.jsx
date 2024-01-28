import { useState } from "react";

const Navbar = (props) => {
    const [open,setOpen] = useState(false);
  return (
    <div className="flex justify-between px-12 h-16 bg-sky-500">
      <img src="/logo/logo-black.svg" className="w-20 h-20" alt="logo" />
      <div className={`absolute top-[64px] left-0 text-white bg-slate-500 w-full flex flex-col gap-4 py-2 text-lg font-semibold items-center ${open ? 'top-16 ':'top-[-490px]'}` }> 
        <ul className="flex flex-col items-center gap-4">
          <li className="hover:text-orange-400">
            <a href="">Home</a>
          </li>
          <li className="hover:text-orange-400">
            <a href="">Contact</a>
          </li>
          <li className="hover:text-orange-400">
            <a href="">About</a>
          </li>
        </ul>
        <div className="flex flex-col gap-4 items-center">
          <button>Login</button>
          <button className="bg-orange-400 rounded-lg px-2 py-1">Sign Up</button>
        </div>
      </div>
      <div className="flex items-center justify-center" onClick={() => {
        setOpen(!open)
      }}>
        <i className="fa-solid fa-bars fa-lg"></i>
      </div>
    </div>
  );
};

export default Navbar;
