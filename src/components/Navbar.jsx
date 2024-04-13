import { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, updateToken , sidebarVisible, updateSidebar } =
    useContext(AuthContext);
  const items = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
  ];
  const toggleSidebar = () => {
    updateSidebar(!sidebarVisible);
  };
  useEffect(() => { 
   },[token]);

  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-2 md:px-12 h-16 lg:py-10 bg-sky-500">
      <div className="flex items-center gap-4">
        {token && (
          <button
            className="sm:hidden bg-gray-800 text-white px-1 py-1 rounded"
            onClick={toggleSidebar}
          >
            <i className="fa-solid fa-list"></i>
          </button>
        )}
        <Logo />
      </div>
      <div
        className={`absolute top-16 left-0 text-white max-lg:bg-slate-500 w-full flex flex-col gap-4 py-2 text-lg font-semibold items-center lg:static lg:flex-row lg:justify-between lg:mx-10 ${
          open ? "top-[16] " : "top-[-490px]"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
          {items.map((i) => {
            return (
              <li key={i.name} className="hover:text-sky-900 cursor-pointer">
                <Link to={i.link}>{i.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-6">
          {token !== null ? (
            <button
              onClick={() => {
                updateToken(null);
                navigate("/home");
              }}
              className="p-2 text-white font-bold text-lg bg-sky-300 sm:p-1"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  updateToken(null);
                  navigate("/login");
                }}
                className="p-2 text-white font-bold text-lg bg-sky-300 sm:p-1"
              >
                Login
              </button>

              <button
                onClick={() => {
                  updateToken(null);
                  navigate("/register");
                }}
                className="p-2 text-white font-bold text-lg bg-sky-300 sm:p-1"
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
