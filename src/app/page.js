"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import img1 from "../assets/img/section1-1.png";
import img2 from "../assets/img/section1-2.png";
import img3 from "../assets/img/section1-3.png";
import card1 from "../assets/img/card1 (2).png";
import card2 from "../assets/img/card2.png";
import cardRight from "../assets/img/cardRight (1).png";
import paris from "../assets/img/paris.png";
import bali from "../assets/img/bali.png";
import agra from "../assets/img/agra.png";
import sydney from "../assets/img/sydney.png";
import singapore from "../assets/img/singapore.png";
import pagination from "../assets/img/pagination.png";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex-none ">
        <Navbar />
      </nav>
      <main className="grow   pt-32">
        <section>
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className=" flex flex-col md:pl-32">
              <p className=" text-3xl md:text-6xl">
                Find your <span className=" text-buttonSign">Flight</span>
              </p>
              <p className="text-lg text-textColor">and explore the world with us</p>
            </div>
            <div>
              <Image src={img1} alt="img1" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex-1 md:w-2/4">
              <Image src={img2} alt="img2" />
            </div>
            <div className="flex-1 hidden md:flex items-end justify-center">
              <Image src={img3} alt="img3" />
            </div>
          </div>
        </section>
        <section className="p-8 mt-8 mb-8">
          <div>
            <p className="text-buttonSign">TRENDING</p>
            <div className="flex justify-between">
              <p className="text-lg font-bold">Trending destinations</p>
              <p className="text-buttonSign">View all</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-2 justify-between mt-4">
            <Image src={card1} alt="card" />
            <Image src={card2} alt="card" />
            <Image src={card1} alt="card" />
            <Image src={card2} alt="card" />
            <Image className=" pl-8 md:pl-0" src={cardRight} alt="card" />
          </div>
        </section>
        <section className="p-8 mt-8 mb-8">
          <div className=" flex flex-col justify-center bg-buttonSign gap-10 bg-no-repeat  rounded-lg md:bg-section3 md:h-section3 border md:bg-cover">
            <div className=" pt-4 flex flex-col justify-center items-center w-full">
              <p className=" text-white text-lg font-medium">TOP 10</p>
              <p className=" text-white text-2xl">Top 10 destinations</p>
            </div>
            <div className="flex p-2 flex-wrap justify-evenly">
              <Image src={paris} alt="paris" />
              <Image src={bali} alt="bali" />
              <Image src={singapore} alt="singapore" />
              <Image src={agra} alt="agra" />
              <Image src={sydney} alt="sydney" />
            </div>
            <div className=" flex w-full justify-center">
              <Image src={pagination} alt="pagination" />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex-none ">
        <Footer />
      </footer>
    </div>
  );
}
