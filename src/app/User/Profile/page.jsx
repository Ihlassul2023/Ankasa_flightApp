"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MyProfile from "@/components/MyProfile";
import PrivateRoute from "@/components/PrivateRoute";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  
  return (
    <PrivateRoute>
      <div className="flex min-h-screen flex-col">
        <nav className="flex-none">
          <Navbar />
        </nav>
        <main className="flex-grow flex flex-col items-center md:flex-row pt-32 p-8 gap-4 bg-bgSelectTicket2 ">
          <MyProfile />
          <div className=" bg-white rounded-lg p-4 w-hAuth md:w-3/4">
            <div className="mb-8">
              <p className=" text-buttonSign ">PROFILE</p>
              <p className=" font-semibold text-lg ">Profile</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col w-full gap-4">
                <p className=" font-semibold">Contact</p>
                <form>
                  <div className="flex flex-col gap-1 mb-4 pb-2 border-b-2">
                    <label className=" text-sm text-textColor">Email</label>
                    <input type="text" />
                  </div>
                  <div className="flex flex-col gap-1 mb-4 pb-2 border-b-2">
                    <label className=" text-sm text-textColor">Phone Number</label>
                    <input type="text" />
                  </div>
                </form>
              </div>
              <div className="flex flex-col w-full gap-4">
                <p className=" font-semibold">Biodata</p>
                <form>
                  <div className="flex flex-col gap-1 mb-4 pb-2 border-b-2">
                    <label className=" text-sm text-textColor">Fullname</label>
                    <input type="text" />
                  </div>
                  <div className="flex flex-col gap-1 mb-4 pb-2 border-b-2">
                    <label className=" text-sm text-textColor">City</label>
                    <input type="text" />
                  </div>
                  <div className="flex flex-col gap-1 mb-4 pb-2 border-b-2">
                    <label className=" text-sm text-textColor">Address</label>
                    <input type="text" />
                  </div>
                  <div className="flex flex-col gap-1 mb-4 pb-2 border-b-2">
                    <label className=" text-sm text-textColor">Post Code</label>
                    <input type="text" />
                  </div>
                </form>
                <div className="w-full flex justify-end">
                  <button className=" bg-buttonSign p-4 w-full md:w-1/2 text-white font-semibold rounded-lg">Save</button>
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

export default Profile;
