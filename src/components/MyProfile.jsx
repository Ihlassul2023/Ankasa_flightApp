import React from "react";
import profil from "../assets/img/profilPictureMain.png";
import logout from "../assets/img/logout.png";
import settings from "../assets/img/settings.png";
import myReview from "../assets/img/review.png";
import user from "../assets/img/userProfile.png";
import location from "../assets/img/location.png";
import backProfil from "../assets/img/btnback (4).png";
import backProfil2 from "../assets/img/btnbackProfil.png";
import backLogout from "../assets/img/btnLogout.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const router = useRouter();
  return (
    <div className=" w-hAuth  md:w-60 p-4 flex flex-col gap-8 rounded-lg bg-white">
      <div className=" flex flex-col justify-center items-center w-full h-full gap-4">
        <Image className=" w-28 h-28" src={profil} alt="profil" />
        <button className=" p-3 border-buttonSign border-2 rounded-lg font-semibold text-buttonSign w-3/4">Select Photo</button>
        <p className=" text-lg font-semibold">Mike Kowalski</p>
        <div className="flex gap-2 items-center">
          <Image src={location} alt="location" />
          <p className=" text-sm text-textColor">Medan,Indonesia</p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-full h-full gap-4">
        <div className="flex justify-between items-center w-full">
          <p className=" font-semibold ">Cards</p>
          <p className=" font-semibold text-buttonSign">+ Add</p>
        </div>
        <div className=" bg-buttonSign p-4 w-full rounded-lg text-white">
          <p className="font-semibold">4441 1235 5512 5551</p>
          <div className="flex justify-between">
            <p>X Card</p>
            <p>$ 1,440.2</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={user} alt="user" />
            <p className=" font-semibold">Profil</p>
          </div>
          <Image src={backProfil} alt="back" />
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={myReview} alt="myreview" />
            <p className=" font-semibold">My Review</p>
          </div>
          <Image src={backProfil2} alt="back" />
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={settings} alt="user" />
            <p className=" font-semibold">Settings</p>
          </div>
          <Image src={backProfil2} alt="back" />
        </div>
        <div className="flex w-full items-center justify-between">
          <div
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/Auth/Login");
            }}
            className="flex items-center gap-4 cursor-pointer"
          >
            <Image src={logout} alt="logout" />
            <p className=" font-semibold">Logout</p>
          </div>
          <Image
            className=" cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/Auth/Register");
            }}
            src={backLogout}
            alt="logout"
          />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
