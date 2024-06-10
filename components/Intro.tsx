import Image from "next/image";
import Link from "next/link";
import Service from "@/components/Service"

import { Plus_Jakarta_Sans } from "next/font/google";
const pjs = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

const pjsB = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});
//home page
//A p
export default function Intro() {
  return (
    <>
    
        <div className="px-6 py-6 sm:px-18 sm:py-8 lg:px-12 lg:py-10 grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">
        
          <div className="shadow bg-gray-100 opacity-80 p-3 md:p-12 rounded-lg lg:col-span-2">
            <h1
              className={`${pjs.className} text-3xl font-extrabold sm:text-5xl`}
            >
              Welcome
              <strong
                className={`${pjs.className} block font-light text-red-800`}
              >
                {" "}
                Book or Walk in{" "}
              </strong>
            </h1>
            
            <p className="mt-8 text-red-800 max-w-lg text-black sm:text-x underline underline-offset-4">
              Open Hours:
            </p>
            <div className="mt-4  max-w-lg text-black sm:text-xl">
              <div className="mt-2 grid grid-cols-2 gap-4">
                <p>Monday - Saturday</p>
                <p>9:00 AM - 7:00 PM</p>
                <p>Sunday</p>
                <p>10:00 AM - 2:00 PM</p>
              </div>
            </div>
            <div className="flex flex-row mt-8 max-w-md lg:max-w-lg gap-4">
              {/* <a
                href="/services"
                className="w-[40%] py-2 px-1 text-center rounded border-2 border-red-800 text-sm font-medium text-black shadow hover:text-red-800 hover:bg-stone-200 focus:outline-none focus:ring ring-blue-200"
              >
                Services
              </a> */}
              <a
                href="/book"
                className="w-[60%] py-2 text-center rounded border-2 border-red-800  text-sm font-medium text-black shadow hover:text-red-800 hover:bg-stone-200 focus:outline-none focus:ring ring-blue-200 "
              >
                Request an Appointment
              </a>
            </div>

          </div>
          <div className="lg:col-span-3">
            <Link href="/services">
              <Image
                alt=""
                src="/wash.jpg"
                layout="responsive" // Add layout prop
                width={300}
                height={300}
                className="rounded-bl-3xl rounded-tr-3xl hover:shadow-inner hover:shadow-2xl opacity-90"
              />
            </Link>
            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong className="font-medium">Mi Belleza Salon</strong>

              <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-red-700"></span>

              <p className="mt-0.5 sm:mt-0">We Pride Ourselves in Great Services</p>
            </div>
          </div>
        </div>
      
    
    </>
  );
}
