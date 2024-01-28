import React from "react";
import "./login.css";
import Form from "../components/Form";
import Input from "../components/Input";

const Login = () => {
  return (
    <div className="">
      <div class="bg-black-dark grid grid-cols-2 items-center gap-20 p-5 rounded-2xl">
        <div class="">
          <img src="assets/signup-background.svg" alt="" />
          <img src="assets/teamwork.svg" alt="" class="absolute top-36" />
        </div>
        <div class="max-w-80 grid gap-5">
          <h1 class="text-5xl font-bold text-white">Login</h1>
          <p class="text-dull-white">
            Access to 300+ hours of courses, tutorials and livestreams
          </p>
          <Form>
            <Input
              icon="fa-solid fa-envelope-open"
              type="email"
              placeholder="Email Address"
            />
            <Input
              icon="fa-solid fa-lock"
              type="password"
              placeholder="Password"
            />
          </Form>
          <div class="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
            <p>
              Don't have an account?{" "}
              <a class="text-neon-blue font-semibold cursor-pointer">Sign up</a>
            </p>
            <p>
              Forgot password?{" "}
              <a class="text-neon-blue font-semibold cursor-pointer">
                Reset password
              </a>
            </p>
            <p>
              Don't have a password yet?{" "}
              <a class="text-neon-blue font-semibold cursor-pointer">
                Set password
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;