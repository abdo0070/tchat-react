import React, { useContext, useState } from "react";
import { AuthContext } from "./../context/AuthContext";
import { axiosAPI } from "../api/Axios";
import { Link, useNavigate } from "react-router-dom";
import AvatarSelect from "../components/AvatarSelect";

const avatars = [
  "/logo/logo-black.svg",
  "/logo/logo-color.svg",
  "/logo/logo-no-background.svg",
  "/logo/logo-white.svg",
  // Add more avatar URLs as needed
];

const Register = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const { updateToken } = useContext(AuthContext);
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const handleSelectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
  };
  const handleRegister = async (e) => {
    e.preventDefault()
    // Make POST Request For the Register => navigate to home .
    try {
      const res = await axiosAPI.post(
        "/register",
        { "user_name": userName, email, password , "image" : selectedAvatar },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      const token = res?.data?.token; // the token is global .
      // localStorage.setItem('token', token);
      updateToken(token);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Existing username");
    }

  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-gray-200 rounded-xl p-5 max-w-5xl flex justify-between flex-row mx-2 rounded">
        {/* Form */}
        <div className="rounded-2xl flex flex-col items-center gap-5">
          <h2 className="font-bold text-4xl text-center">Register</h2>
          <form
            className="flex flex-col items-center gap-5"
            action=""
            onSubmit={handleRegister}
          >
            <div className="relative text-black">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
              <i className="fa-solid fa-user"></i>
              </div>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="enter username"
                className="w-80 bg-white py-2 text-lg px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>
            
            <div className="relative text-black">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="enter  email"
                className="w-80 bg-white py-2 text-lg px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>
            <div className="relative text-black">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                <i className="fa-solid fa-lock"></i>
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="enter password"
                className="w-80 bg-white py-2 text-lg px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>

            <div>
            <AvatarSelect avatars={avatars} onSelect={handleSelectAvatar} />
            </div>
            
            <input
              value={"Sign Up"}
              type="submit"
              className="w-80 bg-sky-500 text-xl text-center text-white py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg hover:bg-white hover:text-sky-500 hover:border-4 hover:border-sky-500"
            />
          </form>
          <div className="text-lg font-bold text-blue-600 hover:text-slate-600 cursor-pointer">
            <Link to={"/login"}>Login ?</Link>
          </div>
        </div>
        {/* Image */}
        <div className="w-1/2 rounded-3xl">
          <img
            className="rounded-3xl sm:block hidden"
            src="/logo/logo-black.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
