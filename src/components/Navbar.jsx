import { useContext, useState } from "react";
import Logo from "./Logo";
import { AuthContext } from "../context/AuthContext";

const Navbar = (props) => {
  const { token, updateToken } = useContext(AuthContext);
  const items = [
    { name: "Home", link: "#" },
    { name: "Contact", link: "#" },
    { name: "About", link: "#" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-12 h-16 lg:py-10 bg-sky-500">
      <Logo />
      <div
        className={`absolute top-16 left-0 text-white max-lg:bg-slate-500 w-full flex flex-col gap-4 py-2 text-lg font-semibold items-center lg:static lg:flex-row lg:justify-between lg:mx-10 ${
          open ? "top-[16] " : "top-[-490px]"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
          {items.map((i) => {
            return (
              <li key={i.name} className="hover:text-orange-400">
                <a href={i.link}>{i.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-6">
          {token !== null ? (
            <button
              onClick={() => {
                updateToken(null);
              }}
              className="p-2 text-white font-bold text-lg bg-sky-300 sm:p-1"
            >
              Logout
            </button>
          ) : (
            <>
             <button className="bg-red-600 rounded-full px-2 lg:py-1">
            Login
          </button>

            <button
              onClick={() => {
                updateToken(null);
              }}
              className="bg-orange-400 rounded-lg px-2 py-1"
            >
              Sign up
            </button>
            </>
           
          )}
        </div>
      </div>
      <div
        className="flex items-center justify-center lg:hidden"
        onClick={() => {
          setOpen(!open);
          console.log(open);
        }}
      >
        <i className="fa-solid fa-bars fa-lg"></i>
      </div>
    </div>
  );
};

export default Navbar;
