"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import transfer from "../../assets/img/transfer2.png";
import Image from "next/image";
import plane2 from "../../assets/img/plane2.png";
import bigPlane from "../../assets/img/bigPlane.png";
import transfer2 from "../../assets/img/transfer3.png";
import garuda from "../../assets/img/garuda.png";
import plane3 from "../../assets/img/plane3.png";
import koper from "../../assets/img/koper.png";
import food from "../../assets/img/food.png";
import wifi from "../../assets/img/wifi.png";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const SelectTicket = () => {
  const [value, setValue] = useState([145, 300]);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex-none w-screen">
        <Navbar />
      </nav>
      <main className="grow relative bg-bgSelectTicket2 w-screen pt-32">
        <section className="bg-bgSelectTicket bg-cover overflow-hidden rounded-b-3xl bg-no-repeat h-56 items-center pl-32 pr-8 flex justify-between ">
          <div className="flex items-center z-10 gap-4">
            <div>
              <Image src={plane2} alt="plane" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className=" text-white">From</p>
                <p className=" text-white">To</p>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <p className=" text-white text-2xl font-bold">Medan(IDN)</p>
                <Image src={transfer} alt="transfer" />
                <p className=" text-white text-2xl font-bold">Tokyo(JPN)</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-white">Monday,20 July 20</p>
                <div className=" w-2 h-2 rounded-full bg-white"></div>
                <p className="text-white">6 Passenger</p>
                <div className=" w-2 h-2 rounded-full bg-white"></div>
                <p className="text-white">Economy</p>
              </div>
            </div>
          </div>
          <p className="text-white text-xl font-bold">Change Search</p>
          <Image className="absolute left-0 top-40 " src={bigPlane} alt="plane" />
        </section>
        <section className="flex w-full mt-8 p-8">
          <div className="flex-none w-80">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Filter</p>
              <p className=" text-buttonSign">Reset</p>
            </div>
            <div className="w-full p-4">
              <div className="w-full bg-white rounded-lg p-3">
                <div className="mb-4 border-textColor border-b-2 pb-3">
                  <p className=" font-semibold">Transit</p>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label htmlFor="direct">Direct</label>
                    <input type="checkbox" name="direct" id="direct" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label htmlFor="transit">Transit</label>
                    <input type="checkbox" name="transit" id="transit" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label htmlFor="transit2">Transit 2+</label>
                    <input type="checkbox" name="transit2" id="transit2" />
                  </div>
                </div>
                <div className="mb-4 border-textColor border-b-2 pb-3">
                  <p className=" font-semibold">Facilities</p>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label htmlFor="lugage">Lugage</label>
                    <input type="checkbox" name="lugage" id="lugage" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label htmlFor="inFlight">In-Flight Meal</label>
                    <input type="checkbox" name="inFlight" id="inFlight" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label htmlFor="wiFi">Wi-fi</label>
                    <input type="checkbox" name="wiFi" id="wiFi" />
                  </div>
                </div>
                <div className="mb-4 border-textColor border-b-2 pb-3">
                  <p className=" font-semibold">Departure Time</p>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label>00:00-06:00 </label>
                    <input type="checkbox" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label>06:00-12:00</label>
                    <input type="checkbox" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label>12:00-18:00</label>
                    <input type="checkbox" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label>18:00-24:00</label>
                    <input type="checkbox" />
                  </div>
                </div>
                <div className="mb-4 border-textColor border-b-2 pb-3">
                  <p className=" font-semibold">Time Arrived</p>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label>00:00-06:00 </label>
                    <input type="checkbox" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label>06:00-12:00</label>
                    <input type="checkbox" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label>12:00-18:00</label>
                    <input type="checkbox" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label>18:00-24:00</label>
                    <input type="checkbox" />
                  </div>
                </div>
                <div className="mb-4 border-textColor border-b-2 pb-3">
                  <p className=" font-semibold">Airlines</p>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label>Garuda Indonesia </label>
                    <input type="checkbox" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label>Air Asia</label>
                    <input type="checkbox" />
                  </div>
                  <div className="flex justify-between gap-4 mb-2 mt-2">
                    <label>Lion Air</label>
                    <input type="checkbox" />
                  </div>
                </div>
                <div className="mb-4 pb-3">
                  <p className=" font-semibold">Ticket Price</p>
                  <div className="flex justify-between mb-4 mt-4">
                    <p className=" text-textColor">Lowest</p>
                    <p className=" text-textColor">Highest</p>
                  </div>
                  <RangeSlider min={145} max={300} value={value} onInput={setValue} />
                  <div className="flex justify-between mt-4">
                    <p className=" text-buttonSign">$145,55</p>
                    <p className=" text-buttonSign">$300,55</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grow">
            <div className="flex pl-4 justify-between">
              <p className=" font-bold text-xl">
                Select Ticket <span className=" text-textColor text-base">(6 flight found)</span>
              </p>
              <div className="flex items-center gap-4">
                <p className="font-bold">Sort By</p>
                <Image src={transfer2} alt="transfer" />
              </div>
            </div>
            <div className="p-4">
              <div className=" bg-white rounded-lg mb-4 p-4 w-full">
                <div className="flex items-center">
                  <Image src={garuda} alt="garuda" />
                  <p className="text-textColor">Garuda Indonesia</p>
                </div>
                <div className="flex gap-16 mt-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className=" text-lg">IDN</p>
                      <p className=" text-sm">12:33</p>
                    </div>
                    <Image src={plane3} />
                    <div>
                      <p className=" text-lg">JPN</p>
                      <p className=" text-sm">15:21</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-textColor">3 hours 11 minutes</p>
                    <p className="text-textColor text-center">(1 transit)</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image src={koper} alt="koper" />
                    <Image src={food} alt="food" />
                    <Image src={wifi} alt="wifi" />
                  </div>
                  <div className="flex items-center">
                    <p className=" text-buttonSign">
                      $214,00 <span className=" text-textColor">/pax</span>
                    </p>
                  </div>
                  <div>
                    <button className=" bg-buttonSign text-white p-4 rounded-lg">Select</button>
                  </div>
                </div>
                <div>
                  <p className=" text-buttonSign">View Details</p>
                </div>
              </div>
              <div className=" bg-white rounded-lg mb-4 p-4 w-full">
                <div className="flex items-center">
                  <Image src={garuda} alt="garuda" />
                  <p className="text-textColor">Garuda Indonesia</p>
                </div>
                <div className="flex gap-16 mt-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className=" text-lg">IDN</p>
                      <p className=" text-sm">12:33</p>
                    </div>
                    <Image src={plane3} />
                    <div>
                      <p className=" text-lg">JPN</p>
                      <p className=" text-sm">15:21</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-textColor">3 hours 11 minutes</p>
                    <p className="text-textColor text-center">(1 transit)</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image src={koper} alt="koper" />
                    <Image src={food} alt="food" />
                    <Image src={wifi} alt="wifi" />
                  </div>
                  <div className="flex items-center">
                    <p className=" text-buttonSign">
                      $214,00 <span className=" text-textColor">/pax</span>
                    </p>
                  </div>
                  <div>
                    <button className=" bg-buttonSign text-white p-4 rounded-lg">Select</button>
                  </div>
                </div>
                <div>
                  <p className=" text-buttonSign">View Details</p>
                </div>
              </div>
              <div className=" bg-white rounded-lg mb-4 p-4 w-full">
                <div className="flex items-center">
                  <Image src={garuda} alt="garuda" />
                  <p className="text-textColor">Garuda Indonesia</p>
                </div>
                <div className="flex gap-16 mt-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className=" text-lg">IDN</p>
                      <p className=" text-sm">12:33</p>
                    </div>
                    <Image src={plane3} />
                    <div>
                      <p className=" text-lg">JPN</p>
                      <p className=" text-sm">15:21</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-textColor">3 hours 11 minutes</p>
                    <p className="text-textColor text-center">(1 transit)</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image src={koper} alt="koper" />
                    <Image src={food} alt="food" />
                    <Image src={wifi} alt="wifi" />
                  </div>
                  <div className="flex items-center">
                    <p className=" text-buttonSign">
                      $214,00 <span className=" text-textColor">/pax</span>
                    </p>
                  </div>
                  <div>
                    <button className=" bg-buttonSign text-white p-4 rounded-lg">Select</button>
                  </div>
                </div>
                <div>
                  <p className=" text-buttonSign">View Details</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex-none ">
        <Footer />
      </footer>
    </div>
  );
};

export default SelectTicket;
