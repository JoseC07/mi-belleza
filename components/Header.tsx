"use client";
import SalonLogo from "@/public/Salon1x.png";
import NavMenu from "@/components/NavMenu";
import InstagramSVG from "@/components/ui/InstagramSVG";
import PhoneSVG from "@/components/ui/PhoneSVG";
import MapPin from "@/components/ui/MapPinSVG";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image"; // Import the correct module for the Image component

import React from "react";
import Link from "next/link";

const pjs = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});


export default function Header() {
  const [percent, setPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop; //length value of scroll from top (0 being no scroll from top, 1 being fully scrolled away from top)
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    //scrollHeight - full length of document
    console.log("Scroll Top:", scrollTop);
    console.log("Scroll Height:", scrollHeight);
    //clientHeight - current visible height of client
    const scrolled = scrollTop / scrollHeight;

    setPercent(scrolled * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="mt-2 bg-stone-100/45 rounded-b-xlg rounded-t-sm backdrop-blur-md shadow-md fixed top-0 left-0 right-0 mr-2 ml-2 z-10">
      <div
        className="fixed inset-x-0 top-0 z-50 h-0.5 rounded-tl rounded-tr bg-gradient-to-r from-transparent from-2% via-lightbrown-400 to-black"
        style={{ width: `${percent}%` }}
      ></div>

      <div className="flex justify-between h-20">
        <div className="flex items-center justify-center ml-3">
          <ul className={`${pjs.className} items-center text-sm text-black`}>
            <li>
              <MapPin className = "size-3"></MapPin>
            </li>
            <li>
              <PhoneSVG className = "size-3"></PhoneSVG>
            </li>
            <li>
              <InstagramSVG className = "size-3"></InstagramSVG>
            </li>
          </ul>
        </div>
        

        <div className="absolute left-1/2 top-[-5px] transform -translate-x-1/2 z-60">
          <a className="cursor-pointer">
            <h3 className="text-2xl font-medium text-blue-500">
              <Image
                src={SalonLogo}
                alt="Mi Belleza Salon Logo"
                width={200}
                height={250}
              />
            </h3>
          </a>
        </div>

        <NavMenu></NavMenu>


      </div>
    </nav>
  );
}
