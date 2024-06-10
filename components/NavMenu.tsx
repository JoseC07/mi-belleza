import { useState } from "react";
import Link from "next/link";
import MenuBarsSVG from "./ui/MenuBarsSVG";
import { Plus_Jakarta_Sans } from "next/font/google";

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
  { name: "Services", path: "/services" },
  { name: "Shop", path: "/shop" },
  { name: "Book", path: "/book" },
];
export default function NavMenu() {
  return (
    <>
      {/* Container for NavMenu*/}
      <div className="flex flex-row space-x-4 items-center mr-12 md:hidden">
        <button>
          <MenuBarsSVG className="size-10 sm:hidden text-red-900"></MenuBarsSVG>
        </button>
</div>
        <div className="hidden md:flex flex-row space-x-4 items-center mr-12">
        {navigation.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`${pjs.className} text-sm text-black hover:text-red-800 cursor-pointer transition-colors duration-300 `}
          >
            {item.name}
          </Link>
        ))}
      </div>
      
    </>
  );
}
