"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import menuOption from "../../../assets/img/iconOption.png";
import barcode from "../../../assets/img/barcode.png";
import Image from "next/image";
import garuda from "../../../assets/img/garuda.png";
import plane3 from "../../../assets/img/plane3.png";
import barcodeRespon from "../../../assets/img/barcodeResponsive.png";
import PrivateRoute from "@/components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import { useParams, useRouter } from "next/navigation";
import Barcode from "react-barcode";
import axios from "axios";

const SuccessPayment = () => {
  const { code } = useParams();
  const [dataTicket, setDataTicket] = useState(null);
  useEffect(() => {
    getDataTicket();
  }, []);
  const getDataTicket = async () => {
    try {
      const result = await axios.get(`https://easy-lime-seal-toga.cyclic.app/booking/tickets/${code}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setDataTicket(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PrivateRoute>
      <div className=" flex flex-col">
        <nav className="flex-none">
          <Navbar />
        </nav>
        <main className=" flex-grow min-h-screen flex items-center justify-center pb-40 md:p-48 pt-56 bg-buttonSign">
          <div className="w-hAuth md:w-3/4 bg-white rounded-lg items-center justify-center p-4 md:p-8 flex flex-col">
            <div className="flex justify-between items-center mb-8 w-4/5">
              <p className="text-lg font-semibold">Booking Pass</p>
              <Image src={menuOption} alt="option" />
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between md:border items-center  md:p-8 rounded-lg w-4/5 gap-4">
              <div className="w-3/4">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <img src={dataTicket?.result.ticket.airline.photo} style={{ width: "100px", height: "50px" }} alt="garuda" />
                  <div className="flex gap-6 items-center">
                    <p className=" font-bold text-lg">{dataTicket?.result.ticket.from.location.split(",")[0]}</p>
                    <Image src={plane3} alt="plane" />
                    <p className=" font-bold text-lg">{dataTicket?.result.ticket.to.location.split(",")[0]}</p>
                  </div>
                </div>
                <div>
                  <div className="flex w-full justify-between mb-4">
                    <div>
                      <p className=" text-sm text-textColor">Code</p>
                      <p className=" font-semibold text-textColor">AB-221</p>
                    </div>
                    <div>
                      <p className=" text-sm text-textColor">Class</p>
                      <p className=" font-semibold text-textColor">Economy</p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className=" text-sm text-textColor">Terminal</p>
                      <p className=" font-semibold text-textColor">A</p>
                    </div>
                    <div className=" pr-10">
                      <p className=" text-sm text-textColor">Gate</p>
                      <p className=" font-semibold text-textColor">221</p>
                    </div>
                  </div>
                  <div>
                    <p className=" text-sm text-textColor">Departure</p>
                    <p className=" font-semibold text-textColor">Monday, 20 July ‘20 - 12:33</p>
                  </div>
                </div>
              </div>
              <div className="md:rotate-90 md:ml-8 mt-8">
                <Barcode value={code} width={0.5} fontSize={10} />;
                {/* <Image className="hidden md:flex" src={barcode} alt="barcode" />
                <Image className="md:hidden flex" src={barcodeRespon} alt="barcode" /> */}
              </div>
            </div>
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

export default SuccessPayment;
