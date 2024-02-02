import { useContext, useEffect, useState } from "react";
import Login from "../pages/Login";
import { AuthContext } from "../context/AuthContext";
import { axiosAPI } from "../api/Axios";

const Guest = (props) => {
  return (
    <>
      <Login />
    </>
  );
};

export default Guest;
