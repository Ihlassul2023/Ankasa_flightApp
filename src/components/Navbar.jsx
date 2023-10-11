"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import search from "../assets/img/search.png";
import btnBack from "../assets/img/btnback (4).png";
import transfer from "../assets/img/transfer 1.png";
import plane from "../assets/img/plane.png";
import round from "../assets/img/round.png";
import goFind from "../assets/img/goFind.png";
import hamburger from "../assets/img/hamburger.png";
import close from "../assets/img/close.png";
import email from "../assets/img/message.png";
import profile from "../assets/img/profilPicture.png";
import notif from "../assets/img/btnNotifications.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [showFindTicket, setShowFindTicket] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="flex h-28 justify-around items-center bg-white fixed z-50 top-0 right-0 left-0">
        <Image className=" cursor-pointer" onClick={() => router.push("/")} src={logo} alt="logo" />
        <Image className="flex md:hidden" src={hamburger} onClick={() => setShowNavbar(!showNavbar)} alt="menu" />
        <div
          className={
            showNavbar
              ? "flex right-0 gap-4 flex-col w-hAuth p-4 top-0 absolute h-screen md:w-auto md:static md:p-0 md:h-full md:flex-row  bg-buttonSign md:bg-white md:justify-around md:gap-8 items-start md:items-center"
              : "flex right-rNavbar gap-4 flex-col w-hAuth p-4 top-0 absolute h-screen md:w-auto md:static md:p-0 md:h-full md:flex-row  bg-buttonSign md:bg-white md:justify-around md:gap-8 items-start md:items-center"
          }
        >
          <Image className="flex md:hidden" onClick={() => setShowNavbar(!showNavbar)} src={close} alt="close" />
          <div className="relative">
            <Image className="absolute top-4 left-1 " src={search} alt="search" />
            <input className=" p-4 pl-pl bg-bgInput border-0 rounded-lg" type="text" placeholder="Where you want to go?" />
          </div>
          <div className="flex relative flex-col md:flex-row gap-4 items-center">
            <p className="hover:font-bold hover:border-b-2  hover:border-buttonSign cursor-pointer" onClick={() => setShowFindTicket(!showFindTicket)}>
              Find Ticket
            </p>
            <Link href="/User/Booking" className="hover:font-bold hover:border-b-2  hover:border-buttonSign cursor-pointer">
              My Booking
            </Link>
          </div>
          {typeof window !== "undefined" && localStorage.getItem("token") ? (
            <div className="flex p-4 rounded-lg bg-white md:flex-row items-center gap-4  justify-between">
              <Image src={email} alt="email" />
              <Image src={notif} alt="notif" />
              <Image className=" cursor-pointer" onClick={() => router.push("/User/Profile")} src={profile} alt="profile" />
            </div>
          ) : (
            <Link href="/Auth/Register" className="p-4 text-textColor text-center bg-white border-2 border-buttonSign md:text-white md:border-0 md:bg-buttonSign rounded-lg w-52">
              Sign Up
            </Link>
          )}
        </div>
        {showFindTicket && (
          <div className="findTicket bg-white top-32 left-12 md:left-2/4 md:top-24 absolute shadow-[0px_10px_15px_3px_#00000024] w-80 h-findTicket p-4 rounded-lg">
            <div>
              <div className="flex justify-between">
                <p>Hey,</p>
                <Image className="cursor-pointer" src={close} alt="close" onClick={() => setShowFindTicket(!showFindTicket)} />
              </div>
              <p className="text-xl">Where you want to go?</p>
              <div className="flex justify-between items-center mt-2">
                <p className=" text-buttonSign cursor-pointer">Recently Searched</p>
                <Image className="" src={btnBack} alt="back" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className=" w-full rounded-lg shadow-[0px_3px_7px_0px_#00000024] flex items-center justify-between p-2">
                <div className="flex flex-col">
                  <label className=" text-sm">from</label>
                  <label className=" text-lg font-bold ">Medan</label>
                  <label className=" text-sm">Indonesia</label>
                </div>
                <Image className=" cursor-pointer" src={transfer} alt="transfer" />
                <div className="flex flex-col">
                  <label className=" text-sm">To</label>
                  <label className=" text-lg font-bold ">Tokyo</label>
                  <label className=" text-sm">Japan</label>
                </div>
              </div>
              <div className="flex gap-2 mt-4 justify-between">
                <button className=" gap-1 w-2/4 flex rounded-lg p-2 bg-buttonSign text-white items-center justify-center">
                  <Image src={plane} alt="plane" />
                  One way
                </button>
                <button className=" gap-1 w-2/4 flex rounded-lg p-2 bg-slate-300 text-black items-center justify-center">
                  <Image src={round} alt="plane" />
                  Round trip
                </button>
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-sm">Departure</label>
                <div className="relative">
                  <input className=" p-2 rounded-lg border border-slate-300 w-full" type="text" />
                  <Image className=" absolute right-2 top-topPassword" src={btnBack} alt="back" />
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <label className=" text-sm">How Many Person?</label>
                <div className="flex justify-between gap-1">
                  <div className="relative">
                    <input className=" p-2 rounded-lg border border-slate-300 w-full" type="text" />
                    <Image className=" absolute right-2 top-topPassword" src={btnBack} alt="back" />
                  </div>
                  <div className="relative">
                    <input className=" p-2 rounded-lg border border-slate-300 w-full" type="text" />
                    <Image className=" absolute right-2 top-topPassword" src={btnBack} alt="back" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <label className=" text-sm">which class do you want?</label>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <input type="radio" name="economy" id="economy" />
                    <label className=" text-sm" htmlFor="economy">
                      Economy
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="radio" name="business" id="business" />
                    <label className=" text-sm" htmlFor="business">
                      Business
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="radio" name="firstClass" id="firstClass" />
                    <label className=" text-sm" htmlFor="firstClass">
                      First Class
                    </label>
                  </div>
                </div>
              </div>
              <Link href="/FindTicket" className="flex items-center mt-2 justify-around p-2 rounded-lg bg-buttonSign w-full text-white">
                SEARCH FLIGHT
                <Image src={goFind} alt="gofind" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
