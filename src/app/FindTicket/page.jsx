"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import transfer from "../../assets/img/transfer2.png";
import Image from "next/image";
import plane2 from "../../assets/img/plane2.png";
import bigPlane from "../../assets/img/bigPlane.png";
import transfer2 from "../../assets/img/transfer3.png";
import plane3 from "../../assets/img/plane3.png";
import baggage from "../../assets/img/koper.png";
import meal from "../../assets/img/food.png";
import wifi from "../../assets/img/wifi.png";
import btnDown from "../../assets/img/btnDown.png";
import btnUp from "../../assets/img/btnUp.png";
import RangeSlider from "react-range-slider-input";
import menu from "../../assets/img/hamburger.png";
import close from "../../assets/img/close.png";
import "react-range-slider-input/dist/style.css";
import PrivateRoute from "@/components/PrivateRoute";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import { useRouter } from "next/navigation";

const SelectTicket = () => {
  const router = useRouter();
  const [value, setValue] = useState([145, 300]);
  const image = {
    baggage,
    wifi,
    meal,
  };
  const [airlineId, setAirlineId] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [dropDown, setDropDown] = useState({
    transit: false,
    facilities: false,
    departure: false,
    arrived: false,
    airlines: false,
    price: false,
    showFilter: false,
  });
  const [dataFlight, setDataFlight] = useState(null);
  const [dataAirlines, setDataAirlines] = useState(null);
  useEffect(() => {
    getDataFlight();
    getDataAirlines();
  }, [airlineId, facilities, value]);
  const getDataFlight = async () => {
    try {
      const result = await axios.get(
        `https://easy-lime-seal-toga.cyclic.app/airlines/flight?facilities=${facilities.join("").split("").join(",")}&airlineId=${airlineId.join("").split("").join(",")}&minPrice=${value[0]}&maxPrice=${value[1]}`
      );
      setDataFlight(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const getDataAirlines = async () => {
    try {
      const result = await axios.get("https://easy-lime-seal-toga.cyclic.app/airlines/flight-all");
      setDataAirlines(result.data.data.airlines);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <PrivateRoute>
      <div className="min-h-screen flex flex-col">
        <nav className="flex-none ">
          <Navbar />
        </nav>
        <main className="grow relative bg-bgSelectTicket2  pt-32">
          <section className="bg-bgSelectTicket bg-cover h-60 overflow-hidden rounded-b-3xl bg-no-repeat md:h-56 items-center p:8 md:pl-32 md:pr-8 flex flex-col md:flex-row justify-between ">
            <div className="flex flex-col md:flex-row md:items-center z-10 gap-4">
              <div>
                <Image className="hidden md:flex" src={plane2} alt="plane" />
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
            <div className={dropDown.showFilter ? " absolute left-10 p-4 md:p-0 bg-white  md:flex-none md:static w-80" : " absolute left-rNavbar  md:flex-none md:static w-80"}>
              <Image className="flex md:hidden" onClick={() => setDropDown({ ...dropDown, showFilter: !dropDown.showFilter })} src={close} alt="close" />
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Filter</p>
                <p
                  className=" text-buttonSign cursor-pointer"
                  onClick={() => {
                    setAirlineId("");
                    setFacilities([]);
                    setValue([145, 300]);
                  }}
                >
                  Reset
                </p>
              </div>
              <div className="w-full p-4">
                <div className="w-full bg-white rounded-lg p-3">
                  <div className="mb-4 border-textColor border-b-2 pb-3">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">Transit</p>
                      {dropDown.transit ? (
                        <Image className=" cursor-pointer" src={btnUp} alt="up" onClick={() => setDropDown({ ...dropDown, transit: false })} />
                      ) : (
                        <Image className=" cursor-pointer" src={btnDown} alt="down" onClick={() => setDropDown({ ...dropDown, transit: true })} />
                      )}
                    </div>
                    <div className={dropDown.transit ? "flex flex-col" : "hidden"}>
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
                  </div>
                  <div className="mb-4 border-textColor border-b-2 pb-3">
                    <div className="flex justify-between items-center">
                      <p className=" font-semibold">Facilities</p>
                      {dropDown.facilities ? (
                        <Image className=" cursor-pointer" src={btnUp} alt="up" onClick={() => setDropDown({ ...dropDown, facilities: false })} />
                      ) : (
                        <Image className=" cursor-pointer" src={btnDown} alt="down" onClick={() => setDropDown({ ...dropDown, facilities: true })} />
                      )}
                    </div>
                    <div className={dropDown.facilities ? "flex flex-col" : "hidden"}>
                      <div className="flex justify-between gap-4 mb-2 mt-2">
                        <label htmlFor="lugage">Lugage</label>
                        <input
                          type="checkbox"
                          name="lugage"
                          id="lugage"
                          value="1"
                          onChange={(e) => {
                            let array = airlineId.filter((val) => val != "");
                            if (e.target.checked) {
                              array.push(e.target.value);
                              setFacilities(array);
                            } else {
                              array[array.findIndex((val) => val == e.target.value)] = "";
                              setFacilities(array);
                            }
                          }}
                        />
                      </div>
                      <div className="flex justify-between gap-4 mb-2 mt-2">
                        <label htmlFor="inFlight">In-Flight Meal</label>
                        <input
                          type="checkbox"
                          name="inFlight"
                          id="inFlight"
                          value="2"
                          onChange={(e) => {
                            let array = airlineId.filter((val) => val != "");
                            if (e.target.checked) {
                              array.push(e.target.value);
                              setFacilities(array);
                            } else {
                              array[array.findIndex((val) => val == e.target.value)] = "";
                              setFacilities(array);
                            }
                          }}
                        />
                      </div>
                      <div className="flex justify-between gap-4 mb-2 mt-2">
                        <label htmlFor="wiFi">Wi-fi</label>
                        <input
                          type="checkbox"
                          name="wiFi"
                          id="wiFi"
                          value="3"
                          onChange={(e) => {
                            let array = airlineId.filter((val) => val != "");
                            if (e.target.checked) {
                              array.push(e.target.value);
                              setFacilities(array);
                            } else {
                              array[array.findIndex((val) => val == e.target.value)] = "";
                              setFacilities(array);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 border-textColor border-b-2 pb-3">
                    <div className="flex justify-between items-center">
                      <p className=" font-semibold">Departure Time</p>
                      {dropDown.departure ? (
                        <Image className=" cursor-pointer" src={btnUp} alt="up" onClick={() => setDropDown({ ...dropDown, departure: false })} />
                      ) : (
                        <Image className=" cursor-pointer" src={btnDown} alt="down" onClick={() => setDropDown({ ...dropDown, departure: true })} />
                      )}
                    </div>
                    <div className={dropDown.departure ? "flex flex-col" : "hidden"}>
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
                  </div>
                  <div className="mb-4 border-textColor border-b-2 pb-3">
                    <div className="flex justify-between items-center">
                      <p className=" font-semibold">Time Arrived</p>
                      {dropDown.arrived ? (
                        <Image className=" cursor-pointer" src={btnUp} alt="up" onClick={() => setDropDown({ ...dropDown, arrived: false })} />
                      ) : (
                        <Image className=" cursor-pointer" src={btnDown} alt="down" onClick={() => setDropDown({ ...dropDown, arrived: true })} />
                      )}
                    </div>
                    <div className={dropDown.arrived ? "flex flex-col" : "hidden"}>
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
                  </div>
                  <div className="mb-4 border-textColor border-b-2 pb-3">
                    <div className="flex justify-between items-center">
                      <p className=" font-semibold">Airlines</p>
                      {dropDown.airlines ? (
                        <Image className=" cursor-pointer" src={btnUp} alt="up" onClick={() => setDropDown({ ...dropDown, airlines: false })} />
                      ) : (
                        <Image className=" cursor-pointer" src={btnDown} alt="down" onClick={() => setDropDown({ ...dropDown, airlines: true })} />
                      )}
                    </div>
                    <div className={dropDown.airlines ? "flex flex-col" : "hidden"}>
                      {dataAirlines != null &&
                        dataAirlines.map((airlines, index) => (
                          <div key={index} className="flex justify-between gap-4 mb-2 mt-2">
                            <label>{airlines.name}</label>
                            <input
                              type="checkbox"
                              value={airlines.id}
                              onChange={(e) => {
                                let array = airlineId.filter((val) => val != "");
                                if (e.target.checked) {
                                  array.push(e.target.value);
                                  setAirlineId(array);
                                } else {
                                  array[array.findIndex((val) => val == e.target.value)] = "";
                                  setAirlineId(array);
                                }
                              }}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="mb-4 pb-3">
                    <div className="flex justify-between items-center">
                      <p className=" font-semibold">Ticket Price</p>
                      {dropDown.price ? (
                        <Image className=" cursor-pointer" src={btnUp} alt="up" onClick={() => setDropDown({ ...dropDown, price: false })} />
                      ) : (
                        <Image className=" cursor-pointer" src={btnDown} alt="down" onClick={() => setDropDown({ ...dropDown, price: true })} />
                      )}
                    </div>
                    <div className={dropDown.price ? "flex flex-col" : "hidden"}>
                      <div className="flex justify-between mb-4 mt-4">
                        <p className=" text-textColor">Lowest</p>
                        <p className=" text-textColor">Highest</p>
                      </div>
                      <RangeSlider min={145} max={300} value={value} onInput={setValue} />
                      <div className="flex justify-between mt-4">
                        <p className=" text-buttonSign">${value[0]},55</p>
                        <p className=" text-buttonSign">${value[1]},55</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="flex pl-4 justify-between">
                <p className="font-bold text-xl">
                  <Image className="flex md:hidden" onClick={() => setDropDown({ ...dropDown, showFilter: !dropDown.showFilter })} src={menu} alt="menu" />
                  Select Ticket <span className=" text-textColor text-base">({dataFlight != null && dataFlight.length} flight found)</span>
                </p>
                <div className="flex items-center gap-4">
                  <p className="font-bold">Sort By</p>
                  <Image src={transfer2} alt="transfer" />
                </div>
              </div>
              <div className="p-4 flex flex-col items-center  h-section3 overflow-y-scroll">
                {dataFlight == null ? (
                  <div className=" pt-64">
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
                    {dataFlight.map((flight) => (
                      <div className=" bg-white rounded-lg mb-4 p-4 w-full">
                        <div className="flex items-center gap-2">
                          <img style={{ width: "100px", height: "50px" }} src={flight.photo} alt="garuda" />
                          <p className="text-textColor">{flight.name}</p>
                        </div>
                        <div className="flex flex-col items-center gap-4  md:flex-row md:gap-16 mt-4 mb-4">
                          <div className="flex items-center gap-4">
                            <div>
                              <p className=" text-lg">{flight.from.location.split(",")[0]}</p>
                              <p className=" text-sm">{new Date(flight.takeoff).toLocaleTimeString().slice(0, -2)}</p>
                            </div>
                            <Image src={plane3} alt="plane" />
                            <div>
                              <p className=" text-lg">{flight.to.location.split(",")[0]}</p>
                              <p className=" text-sm">{new Date(flight.landing).toLocaleTimeString().slice(0, -2)}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-textColor">{flight.interval_time}</p>
                            <p className="text-textColor text-center">({flight.transit} transit)</p>
                          </div>
                          <div className="flex gap-3 items-center">
                            {flight.facilities.map((facil) => (
                              <Image src={image[facil]} alt="facilities" />
                            ))}
                          </div>
                          <div className="flex items-center">
                            <p className=" text-buttonSign">
                              ${flight.price},00 <span className=" text-textColor">/pax</span>
                            </p>
                          </div>
                          <button onClick={() => router.push(`/SelectTicket/${flight.code}`)} className=" bg-buttonSign text-center w-full md:w-auto text-white p-4 rounded-lg">
                            Select
                          </button>
                        </div>
                        <div>
                          <p className=" text-buttonSign">View Details</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </section>
        </main>
        <footer className="flex-none ">
          <Footer />
        </footer>
      </div>
      <ToastContainer />
    </PrivateRoute>
  );
};

export default SelectTicket;
