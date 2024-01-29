import React, { useContext, useState } from "react";
import { AuthContext } from "./../context/AuthContext";

const Login = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // make the auth with the backend and set the user state
    updateUser({
      email,
      password,
    });
    console.log(currentUser);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-gray-200 rounded-xl p-5 max-w-5xl flex justify-between flex-row mx-2 rounded">
        {/* Form */}
        <div className="rounded-2xl flex flex-col items-center gap-5">
          <h2 className="font-bold text-4xl text-center">Login</h2>
          <form
            className="flex flex-col items-center gap-5"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="relative text-black">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Your Email"
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
                placeholder="Enter Your Password"
                className="w-80 bg-white py-2 text-lg px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>
            <input
              value={"Login"}
              type="submit"
              className="w-80 bg-sky-500 text-xl text-center text-white py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg hover:bg-white hover:text-sky-500 hover:border-4 hover:border-sky-500"
            />
          </form>
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

export default Login;
