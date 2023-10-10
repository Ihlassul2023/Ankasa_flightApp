"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import bigPlane from "../../../assets/img/bigPlane.png";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import makeSure from "../../../assets/img/makeSure.png";
import check from "../../../assets/img/check.png";
import plane3 from "../../../assets/img/plane3.png";
import down from "../../../assets/img/btnDown.png";
import Switch from "react-switch";
import Select from "react-select";
import Link from "next/link";
import PrivateRoute from "@/components/PrivateRoute";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

const SelectTicket = () => {
  const [phone, setPhone] = useState("");
  const { code } = useParams();
  const router = useRouter();
  const [samePassenger, setSamePassenger] = useState(false);
  const [dataUser, setDataUser] = useState("");
  const [country, setCountry] = useState([
    { value: "Australia", label: "Australia" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Malaysia", label: "Malaysia" },
  ]);
  const title = [
    { value: "Mr", label: "Mr" },
    { value: "Mrs", label: "Mrs" },
  ];
  const [getTitle, setGetTitle] = useState("");
  const [getCountry, setGetCountry] = useState("");
  const [dataFlight, setDataFlight] = useState(null);
  useEffect(() => {
    getDataFlight();
  }, []);
  const getDataFlight = async () => {
    try {
      const result = await axios.get(`https://easy-lime-seal-toga.cyclic.app/airlines/flight/${code}`);
      setDataFlight(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleSubmit = async () => {
    try {
      const data = {
        title1: getTitle,
        fullname1: dataUser,
        nationality1: getCountry,
      };
      console.log(data);
      const result = await axios.post(`https://easy-lime-seal-toga.cyclic.app/booking/tickets/${code}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      toast.success(result.data.message);
      router.push(`/ProcessPayment/${result.data.data.code}`);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <PrivateRoute>
      <div className="min-h-screen flex flex-col">
        <nav className=" flex-none">
          <Navbar />
        </nav>
        <main className=" relative bg-bgSelectTicket2 flex-grow pt-32">
          {dataFlight != null && (
            <>
              <section className="bg-bgSelectTicket bg-cover h-60 overflow-hidden rounded-b-3xl bg-no-repeat md:h-56 items-center md:pl-12 md:pr-28 flex flex-col md:flex-row justify-between border">
                <p className="text-white hidden md:flex text-xl font-bold z-10">Contact Person Details</p>
                <div className="flex gap-8">
                  <p className="text-white hidden md:flex text-xl font-bold">Flight Details</p>
                  <p className="text-white hidden md:flex text-base font-bold">View Details</p>
                </div>
                <Image className="absolute left-0 top-40 " src={bigPlane} alt="plane" />
              </section>
              <section className="absolute left-4  gap-6 w-hAuth md:left-auto top-56 md:w-full md:p-12 flex flex-col md:flex-row justify-between">
                <div className=" md:w-wSection bg-white rounded-lg p-4 h-1/2">
                  <p className="flex md:hidden text-xl font-bold">Contact Person Details</p>
                  <form className="w-full">
                    <div className="flex flex-col border-b-2 gap-1">
                      <label className=" text-sm text-textColor" htmlFor="name">
                        Full Name
                      </label>
                      <input type="text" />
                    </div>
                    <div className="flex flex-col border-b-2 mt-4 mb-4 gap-1">
                      <label className=" text-sm text-textColor" htmlFor="email">
                        Email
                      </label>
                      <input type="email" />
                    </div>
                    <div className="flex flex-col  w-full  gap-1 mb-4">
                      <label className=" text-sm text-textColor" htmlFor="name">
                        Phone Number
                      </label>
                      <PhoneInput country={"id"} value={phone} onChange={(phone) => setPhone(phone)} />
                    </div>
                    <Image src={makeSure} alt="warning" />
                  </form>
                </div>
                <div className=" w-80 bg-white rounded-lg flex flex-col gap-3 p-4 h-1/2">
                  <p className="flex md:hidden text-base font-bold">Flight Details</p>
                  <div className="flex gap-4">
                    <img style={{ width: "100px", height: "50px" }} src={dataFlight.photo} alt="garuda" />
                    <p className=" text-base font-semibold">{dataFlight.name}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className=" font-semibold text-base">{dataFlight.from.location.split(",")[0]}</p>
                    </div>
                    <Image src={plane3} alt="plane" />
                    <div>
                      <p className=" font-semibold text-base">{dataFlight.to.location.split(",")[0]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-textColor">Sunday, 15 August 2020</p>
                    <div className=" w-1 h-1 bg-textColor rounded-full"></div>
                    <p className="text-sm text-textColor">
                      {new Date(dataFlight.takeoff).toLocaleTimeString().slice(0, -2)} - {new Date(dataFlight.landing).toLocaleTimeString().slice(0, -2)}
                    </p>
                  </div>
                  <div className="pb-4 border-b">
                    <div className=" flex items-center gap-2 mb-3">
                      <Image src={check} alt="check" />
                      <p className=" text-base text-buttonSign">Refundable</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <Image src={check} alt="check" />
                      <p className=" text-base text-buttonSign">Can reschedule</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold">Total Payment</p>
                    <div className=" items-center flex gap-2">
                      <p className=" text-lg text-buttonSign">$ 145,00</p>
                      <Image src={down} alt="btnDown" />
                    </div>
                  </div>
                </div>
              </section>
              <section className=" pt-findTicket  items-center md:items-start md:pt-56 flex  md:p-12 flex-col">
                <p className=" text-lg font-semibold">Passenger Details</p>
                <div className="w-hAuth md:w-wSection  rounded-lg p-8 bg-white">
                  <div className=" p-2 items-center flex bg-bgPassenger justify-between rounded-lg mb-4">
                    <p className=" text-textColor text-xs md:text-base">Passenger : 1 Adult</p>
                    <div className="flex gap-2 items-center">
                      <p className=" text-textColor text-xs md:text-base">Same as contact person</p>
                      <Switch onChange={(e) => setSamePassenger(e)} checked={samePassenger} />
                    </div>
                  </div>
                  <form>
                    <div className="flex flex-col gap-1">
                      <label className=" text-sm text-textColor" htmlFor="name">
                        Title
                      </label>
                      <Select className="basic-single" classNamePrefix="select" onChange={(e) => setGetTitle(e.value)} defaultValue={title[0]} name="title" options={title} />
                    </div>
                    <div className="flex flex-col border-b-2 mt-4 mb-4 gap-1">
                      <label className=" text-sm text-textColor" htmlFor="fullName">
                        Full Name
                      </label>
                      <input type="text" value={dataUser} onChange={(e) => setDataUser(e.target.value)} />
                    </div>
                    <div className="flex flex-col  gap-1 mb-4">
                      <label className=" text-sm text-textColor" htmlFor="name">
                        Nationality
                      </label>
                      <Select className="basic-single" classNamePrefix="select" onChange={(e) => setGetCountry(e.value)} defaultValue={country[1]} name="country" options={country} />
                    </div>
                  </form>
                </div>
                <p className="mt-4 text-lg font-semibold">Passenger Details</p>
                <div className="w-hAuth md:w-wSection rounded-lg mb-4 p-8 bg-white ">
                  <div className="flex items-center pb-4 border-b-2 mb-4 justify-between">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" />
                      <p className=" font-semibold">Travel Insurance</p>
                    </div>
                    <p className=" text-buttonSign">
                      $2,00 <span className=" text-textColor">/pax</span>
                    </p>
                  </div>
                  <p>Get travel compensation up to $ 10.000,00</p>
                </div>
                <div className=" text-center w-wSection mt-4 mb-8">
                  <button type="submit" onClick={handleSubmit} className=" bg-buttonSign p-4 text-center text-white font-semibold rounded-lg">
                    Proceed to Payment
                  </button>
                </div>
              </section>
            </>
          )}
        </main>
        <footer className=" flex-none">
          <Footer />
        </footer>
      </div>
      <ToastContainer />
    </PrivateRoute>
  );
};

export default SelectTicket;
