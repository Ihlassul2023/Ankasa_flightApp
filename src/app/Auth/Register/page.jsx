"use client";
import React, { useEffect, useState } from "react";
import imgLeft from "../../../assets/img/img-auth.png";
import seePassword from "../../../assets/img/see-pass.png";
import hide from "../../../assets/img/hide.png";
import logoAuth from "../../../assets/img/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Register = () => {
  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://easy-lime-seal-toga.cyclic.app/users/register", {
      method: "POST",
      body: JSON.stringify({
        ...dataUser,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(router.push("/Auth/Login"))
      .catch((e) => console.log(e));
  };
  const [seekPassword, setSeePassword] = useState(false);
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen ">
      <div className="w-full h-80 md:w-2/4 md:h-screen">
        <Image className="w-full h-full" src={imgLeft} alt="image" />
      </div>
      <div className="flex justify-center items-center w-full min-h-screen md:w-2/4">
        <div className="w-4/5 md:w-3/4 md:h-hAuth">
          <Image src={logoAuth} alt="logo" />
          <div className="w-full flex flex-col justify-center mt-12">
            <h1 className="font-bold text-2xl mb-4">Register</h1>
            <form onSubmit={handleSubmit} className="border-b-2 mb-4">
              <input className=" w-full border-b-2 p-4" placeholder="Full Name" name="name" value={dataUser.name} onChange={(e) => handleInput(e)} type="text" />
              <input className=" w-full border-b-2 p-4 mt-2 mb-2" placeholder="Email" name="email" value={dataUser.email} onChange={(e) => handleInput(e)} type="email" />
              <div className="relative">
                <input className="w-full border-b-2 p-4" placeholder="Password" name="password" value={dataUser.password} onChange={(e) => handleInput(e)} type={seekPassword ? "text" : "password"} />
                {seekPassword ? (
                  <Image className="absolute right-0 top-topPassword cursor-pointer" src={seePassword} onClick={() => setSeePassword(!seekPassword)} alt="password" />
                ) : (
                  <Image className="absolute right-0 top-topPassword cursor-pointer" style={{ width: "25px", height: "25px" }} src={hide} onClick={() => setSeePassword(!seekPassword)} alt="password" />
                )}
              </div>
              <button className="w-full  bg-buttonSign p-4 text-white rounded-lg hover:shadow-buttonShadow mt-4">Sign Up</button>
              <div className=" mb-4 mt-2">
                <input className="mr-2" type="checkbox" id="check" />
                <label className=" text-textColor" htmlFor="check">
                  Accept terms and condition
                </label>
              </div>
            </form>
            <p className=" text-center text-textColor">Already have an account?</p>
            <Link href="/Auth/Login" className="w-full text-center border-buttonSign border p-4 text-buttonSign rounded-lg hover:shadow-buttonShadow mt-4">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
