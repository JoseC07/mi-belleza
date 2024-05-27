"use client";
import SalonLogo from "@/public/Salon.png";
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

type NavItem = {
  name: string;
  path: string;
};

const navigation: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/contact" },
  { name: "Our Story", path: "/story" },
];

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
    <nav className="mt-2 bg-white/80 rounded-b-xlg rounded-t-sm backdrop-blur-md shadow-md fixed top-0 left-0 right-0 mr-2 ml-2 z-10">
      <div
        className="fixed inset-x-0 top-0 z-50 h-0.5 rounded-tl rounded-tr bg-gradient-to-r from-transparent from-2% via-stone-300 to-lightbrown opacity-60"
        style={{ width: `${percent}%` }}
      ></div>

      <div className="flex justify-between h-20">
        <div className="flex items-center justify-center ml-3">
          <ul className={`${pjs.className} items-center text-sm text-zinc-500`}>
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
        

        <div className="absolute left-1/2 top-[-3px] transform -translate-x-1/2 z-60">
          <a className="cursor-pointer">
            <h3 className="text-2xl font-medium text-blue-500">
              <Image
                src={SalonLogo}
                alt="Mi Belleza Salon Logo"
                width={225}
                height={250}
              />
            </h3>
          </a>
        </div>

        <div className="flex items-center justify-center flex-row space-x-4 items-center mr-12">
          {navigation.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`${pjs.className} text-sm text-zinc-500 hover:text-lightbrown cursor-pointer transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>


      </div>
    </nav>
  );
}
