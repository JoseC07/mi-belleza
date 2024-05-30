import Image from "next/image";
import Link from "next/link";
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
export default function Home() {
  return (
    <>
      <main
        className="p-20 pt-24"
        style={{
          backgroundImage: "url('/white.jpg')",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">
          <div className="p-2 rounded-lg lg:col-span-2">
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

            <div className="flex flex-row mt-8 max-w-md lg:max-w-lg gap-4 text-center">
              <a
                href="/services"
                className="block w-full rounded border-2 border-red-800 px-4 py-3 text-sm font-medium text-black shadow hover:bg-stone-50 focus:outline-none focus:ring ring-blue-100 sm:w-auto"
              >
                Service Menu
              </a>
              <a
                href="/services"
                className="block w-full rounded border-2 border-red-800 px-8 py-3 text-sm font-medium text-black shadow hover:bg-stone-50 focus:outline-none focus:ring ring-blue-100 sm:w-auto"
              >
                Book Now
              </a>
            </div>

            <p className="mt-8  max-w-lg text-zinc-500 sm:text-x underline underline-offset-4">
              Hours
            </p>
            <div className="mt-4  max-w-lg text-zinc-500 sm:text-xl">
              <div className="mt-2 grid grid-cols-2 gap-4">
                <p>Monday - Saturday</p>
                <p>9:00 AM - 7:00 PM</p>
                <p>Sunday</p>
                <p>10:00 AM - 2:00 PM</p>
              </div>
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
                className="rounded-bl-3xl rounded-tr-3xl shadow-2xl hover:shadow-inner hover:shadow-2xl"
              />
            </Link>
          </div>
        </div>

        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </main>
    </>
  );
}
