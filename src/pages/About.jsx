// AboutPage.js
import React from "react";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  const profileImage = "/logo/logo-black.svg";
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <img
            src={profileImage}
            alt="Abdalla Mmdouh"
            className="w-40 h-40 rounded-full mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">Abdalla Mmdouh</h1>
            <p className="text-lg text-gray-600">Passionate Developer</p>
            <p className="text-sm text-gray-500">
              Software Engineer | Web Developer
            </p>
          </div>
        </div>
        <p className="text-lg mb-8">
          Welcome !My name is abdalla I am a passionate software engineer and
          web developer with a keen interest in creating innovative solutions.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Contact Me</h2>
          <p className="text-lg">
            Feel free to reach out to me via email at{" "}
            <a
              href="mailto:abdallammdouh6@gmail.com"
              className="text-blue-500 hover:underline"
            >
              abdallammdouh6@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Created By</h2>
          <p className="text-lg">This Website was created by Abdalla Mmdouh.</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
