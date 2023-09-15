import React from "react";
import store from "../assets/img/store.png";
import logo from "../assets/img/logo.png";
import Image from "next/image";
import followUs from "../assets/img/followUs.png";
import jakarta from "../assets/img/jakarta.png";

const Footer = () => {
  return (
    <div className=" flex gap-4 flex-wrap justify-between h-96 p-12 md:p-8">
      <div className="flex flex-col justify-between">
        <div>
          <Image src={logo} alt="logo" />
          <p className=" text-textFooter mt-4 mb-4">Find your Flight and explore the </p>
          <p className=" text-textFooter">world with us. We will take care of the rest</p>
        </div>
        <p className=" text-textFooter">© Ankasa. All Rights Reserved.</p>
      </div>
      <div>
        <p className=" font-semibold mb-4">Feature</p>
        <div className=" flex flex-col gap-2 text-textFooter">
          <p>Find Ticket</p>
          <p>My Booking</p>
          <p>Chat</p>
          <p>Notification</p>
        </div>
      </div>
      <div>
        <p className=" font-semibold mb-8">Download Angkasa app</p>
        <Image src={store} />
      </div>
      <div className=" flex gap-4 flex-col justify-between">
        <Image src={followUs} alt="image" />
        <Image src={jakarta} alt="image" />
      </div>
    </div>
  );
};

export default Footer;
