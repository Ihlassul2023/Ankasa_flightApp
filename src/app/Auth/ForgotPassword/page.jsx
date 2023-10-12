"use client";
import React from "react";
import imgLeft from "../../../assets/img/img-auth.png";
import logoAuth from "../../../assets/img/logo.png";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://easy-lime-seal-toga.cyclic.app/auth/forgot_password", { email, fe_url: "https://ankasa-flight-app-ycrk.vercel.app/Auth/NPass" });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
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
              <h1 className="font-bold text-2xl mb-4">Forget Password</h1>
              <form onSubmit={handleSubmit} className="mb-4">
                <input className=" w-full border-b-2 p-4" value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text" />
                <button className="w-full bg-buttonSign p-4 text-white rounded-lg hover:shadow-buttonShadow mt-4 mb-4">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ForgotPassword;
