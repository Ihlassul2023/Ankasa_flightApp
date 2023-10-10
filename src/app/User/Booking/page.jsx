"use client";
import Footer from "@/components/Footer";
import MyProfile from "@/components/MyProfile";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import plane3 from "../../../assets/img/plane3.png";
import btnDown from "../../../assets/img/btnDown.png";
import Image from "next/image";
import PrivateRoute from "@/components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import { useRouter } from "next/navigation";

const MyBookmark = () => {
  const [myBooking, setMyBooking] = useState(null);
  const router = useRouter();
  useEffect(() => {
    getDataBooking();
  }, []);
  const getDataBooking = async () => {
    try {
      const result = await axios.get("https://easy-lime-seal-toga.cyclic.app/booking/tickets", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setMyBooking(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PrivateRoute>
      <div className="flex min-h-screen flex-col">
        <nav className="flex-none">
          <Navbar />
        </nav>
        <main className="flex-grow flex flex-col items-center md:flex-row md:items-start pt-32 p-8 gap-4 bg-bgSelectTicket2 ">
          <MyProfile />
          <div className="flex flex-col gap-4 w-hAuth md:w-3/4">
            <div className=" bg-white rounded-lg p-4 flex flex-col gap-5">
              <p className=" text-buttonSign text-sm">MY BOOKING</p>
              <div className="flex justify-between">
                <p className=" text-lg font-semibold">My Booking</p>
                <p className=" text-buttonSign">Order History</p>
              </div>
            </div>
            {myBooking == null ? (
              <div className=" ml-32 pt-64">
                <MoonLoader
                  color="rgba(35, 149, 255, 1)"
                  cssOverride={{
                    "margin: 0 auto": "",
                  }}
                  size={50}
                />
              </div>
            ) : (
              <>
                {myBooking.result.map((booking) => (
                  <div className=" bg-white rounded-lg p-4 flex flex-col gap-4">
                    <p>Monday, 20 July ‘20 - 12:33</p>
                    <div className="flex gap-4 items-center">
                      <p className=" text-lg font-semibold">{booking.ticket.from.location.split(",")[0]}</p>
                      <Image src={plane3} />
                      <p className=" text-lg font-semibold">{booking.ticket.to.location.split(",")[0]}</p>
                    </div>
                    <p className=" text-sm text-textColor pb-4 border-b-2 border-textColor">
                      {booking.ticket.airline.name}, {booking.code}
                    </p>
                    <div className="flex items-baseline md:items-center justify-between w-full">
                      <div className="flex flex-col md:flex-row gap-2 items-center md:gap-8">
                        <p className=" text-sm text-textColor font-semibold">Status</p>
                        {booking.status.name == "Pending" ? (
                          <button
                            onClick={() => {
                              router.push(`/ProcessPayment/${booking.code}`);
                            }}
                            className=" bg-buttonWaiting p-1 md:p-2 text-sm md:text-base font-semibold rounded-lg text-white"
                          >
                            Waiting for payment
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              router.push(`/SuccessPayment/${booking.code}`);
                            }}
                            className=" bg-buttonSuccess p-2 text-sm md:text-base font-semibold rounded-lg text-white"
                          >
                            Eticket issued
                          </button>
                        )}
                      </div>
                      <div className="flex items-center gap-1 md:gap-4">
                        <p className=" text-buttonSign text-sm md:text-base">View Details</p>
                        <Image src={btnDown} alt="btnDown" />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {/* <div className=" bg-white rounded-lg p-4 flex flex-col gap-4">
              <p>Monday, 20 July ‘20 - 12:33</p>
              <div className="flex gap-4 items-center">
                <p className=" text-lg font-semibold">IDN</p>
                <Image src={plane3} />
                <p className=" text-lg font-semibold">JPN</p>
              </div>
              <p className=" text-sm text-textColor pb-4 border-b-2 border-textColor">Garuda Indonesia, AB-221</p>
              <div className="flex items-baseline md:items-center justify-between w-full">
                <div className="flex flex-col md:flex-row gap-2 items-center md:gap-8">
                  <p className=" text-sm text-textColor font-semibold">Status</p>
                  <button className=" bg-buttonSuccess p-2 text-sm md:text-base font-semibold rounded-lg text-white">Eticket issued</button>
                </div>
                <div className="flex items-center gap-1 md:gap-4">
                  <p className=" text-buttonSign text-sm md:text-base">View Details</p>
                  <Image src={btnDown} alt="btnDown" />
                </div>
              </div>
            </div> */}
          </div>
        </main>
        <footer className="flex-none">
          <Footer />
        </footer>
      </div>
      <ToastContainer />
    </PrivateRoute>
  );
};

export default MyBookmark;
