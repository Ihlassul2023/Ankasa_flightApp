"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import paypal from "../../../assets/img/paypal.png";
import card from "../../../assets/img/card.png";
import visa from "../../../assets/img/visa.png";
import stripe from "../../../assets/img/stripe.png";
import Image from "next/image";
import cvv from "../../../assets/img/cvv.png";
import calendar from "../../../assets/img/calendar.png";
import lock from "../../../assets/img/lock.png";
import clock from "../../../assets/img/clock.png";
import PrivateRoute from "@/components/PrivateRoute";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const ProcessPayment = () => {
  const { cReq } = useParams();
  const router = useRouter();
  const updateStatusPayment = async () => {
    try {
      const result = await axios.put(`https://easy-lime-seal-toga.cyclic.app/booking/status/${cReq}`, { statusId: "2" });
      toast.success(result.data.message);
      router.push(`/SuccessPayment/${cReq}`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <PrivateRoute>
      <div className=" flex flex-col">
        <nav className="flex-none">
          <Navbar />
        </nav>
        <main className=" flex-grow min-h-screen flex items-center justify-center pb-40 bg-buttonSign pt-56">
          <div className=" w-hAuth bg-white items-center justify-center flex">
            <div className=" w-hAuth flex flex-col md:flex-row gap-8 p-6">
              <div className="w-full">
                <p>Payment Method</p>
                <div className="bg-bgSelectTicket2 p-3 mb-8">
                  <div className="flex justify-between mb-4">
                    <p className=" font-semibold">Paypal</p>
                    <Image src={paypal} alt="paypal" />
                  </div>
                  <div className="flex justify-between">
                    <p className=" font-semibold">Credit Card</p>
                    <div className="flex gap-1 items-center">
                      <Image src={card} alt="card" />
                      <Image src={visa} alt="visa" />
                      <Image src={stripe} alt="stripe" />
                      <Image src={card} alt="card" />
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <label className=" text-sm text-textColor">Card Number</label>
                  <div className="relative">
                    <input className="w-full border p-3 pl-10 rounded-md" placeholder="0000 0000 0000 0000" type="text" />
                    <Image className="top-3 left-2 absolute" src={cvv} alt="card" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <div>
                    <label className=" text-sm text-textColor">Expiry Date</label>
                    <div className="relative">
                      <input className="w-full border p-3 pl-10 rounded-md" type="text" placeholder="MM/YY" />
                      <Image className="top-3 left-2 absolute" src={calendar} alt="calendar" />
                    </div>
                  </div>
                  <div>
                    <label className=" text-sm text-textColor">CVC/CVV</label>
                    <div className="relative">
                      <input className="w-full border p-3 pl-10 rounded-md" type="text" placeholder="000" />
                      <Image className="top-3 left-2 absolute" src={lock} alt="lock" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full">
                <p>Summary</p>
                <div className="flex justify-between mb-8 pb-4 border-b-2">
                  <div>
                    <p>Pro(Billed Monthly)</p>
                    <p className=" text-sm text-buttonSign underline">Save 20% with annual billing</p>
                  </div>
                  <p className=" text-lg text-right">
                    $9.99 <span className="text-sm"> /month</span>
                  </p>
                </div>
                <div className="flex justify-between mb-8 pb-4 border-b-2">
                  <div className="flex flex-col gap-2">
                    <p>Refferal Bonusses</p>
                    <div className="flex gap-1 items-center">
                      <p>Vat</p>
                      <Image src={clock} alt="clock" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>-$2.00</p>
                    <p>-20%</p>
                  </div>
                </div>
                <div className="flex justify-between mb-6">
                  <div className="flex flex-col gap-2">
                    <p>Today you pay(Us Dollars)</p>
                    <p>After 30 days $9.59 </p>
                  </div>
                  <p>$0</p>
                </div>
                <div>
                  <button onClick={updateStatusPayment} className=" w-full p-4 bg-buttonSign text-white rounded-lg">
                    Try it free for 30 days{" "}
                  </button>
                  <p className=" text-buttonSign underline text-center">Have a promo code ?</p>
                </div>
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

export default ProcessPayment;
