import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Guest = (props) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Guest;
