import { useContext, useEffect, useState } from "react";
import Login from "../pages/Login";
import { AuthContext } from "../context/AuthContext";
import { axiosAPI } from "../api/Axios";

const Guest = (props) => {
  const { token, updateToken } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosAPI
      .get("/users", {
        headers: {
          Authorization: "Bearer " + token
        },
        withCredentials: true,
      }).catch((err) => {
        console.log(err);
      })
      .then((res) => {
        setUsers(res?.data)
      });
  }, [token]);

  console.log(token);
  return (
    <>
      <Login />
    </>
  );
};

export default Guest;
