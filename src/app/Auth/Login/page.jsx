"use client";
import React, { useState } from "react";
import imgLeft from "../../../assets/img/img-auth.png";
import seePassword from "../../../assets/img/see-pass.png";
import logoAuth from "../../../assets/img/logo.png";
import Image from "next/image";
import hide from "../../../assets/img/hide.png";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Login = () => {
  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("https://easy-lime-seal-toga.cyclic.app/auth/login", dataUser);
      console.log(result.data.data);
      localStorage.setItem("token", result.data.data.access_token);
      toast.success(result.data.message);
      router.push("/");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  const handleForgotPassword = () => {
    router.push("/Auth/ForgotPassword");
  };
  const [seekPassword, setSeePassword] = useState(false);
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen w-screen ">
        <div className="w-full h-80 md:w-2/4 md:h-screen">
          <Image className="w-full h-full" src={imgLeft} alt="image" />
        </div>
        <div className="flex justify-center items-center w-full min-h-screen md:w-2/4">
          <div className="w-4/5 md:w-3/4 md:h-hAuth">
            <Image src={logoAuth} alt="logo" />
            <div className="w-full flex flex-col justify-center mt-12">
              <h1 className="font-bold text-2xl mb-4">Login</h1>
              <form onSubmit={handleSubmit} className="border-b-2 mb-4">
                <input className=" w-full border-b-2 p-4" value={dataUser.email} name="email" onChange={(e) => handleInput(e)} placeholder="Email" type="text" />
                <div className="relative">
                  <input className="w-full border-b-2 p-4" placeholder="Password" value={dataUser.password} name="password" onChange={(e) => handleInput(e)} type={seekPassword ? "text" : "password"} />
                  {seekPassword ? (
                    <Image className="absolute right-0 top-topPassword cursor-pointer" src={seePassword} onClick={() => setSeePassword(!seekPassword)} alt="password" />
                  ) : (
                    <Image className="absolute right-0 top-topPassword cursor-pointer" style={{ width: "25px", height: "25px" }} src={hide} onClick={() => setSeePassword(!seekPassword)} alt="password" />
                  )}
                </div>
                <button className="w-full bg-buttonSign p-4 text-white rounded-lg hover:shadow-buttonShadow mt-4 mb-4">Sign In</button>
              </form>
              <p className="text-center">Did you forgot your password?</p>
              <p onClick={handleForgotPassword} className="text-center text-buttonSign cursor-pointer">
                Tap here for reset
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
