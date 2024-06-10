import Intro from "@/components/Intro";
import Landing from "@/components/Landing";
import MixGallery from "@/components/MixGallery";
export default function Home() {
  return (
    <>
      <Landing></Landing>
      <section
        style={{
          backgroundImage: "url('/white.jpg')",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Intro></Intro>
        <div className="pt-8 px-8 flex justify-center space-x-4 pb-8">
          <div className="rounded inner-shadow w-2/6 sm:1/4 flex flex-col justify-between">
            <ul className="list-inside text-center text-sm m-3">
              <li className="font-bold text-red-800 underline">Men:</li>
              <li>Haircut</li>
              <li>Beard Trim</li>
              <li></li>
            </ul>
            <a href="your-link" className="text-center text-red-800 hover:underline text-xs mb-2">Services &rarr;</a>
          </div>
          <div className="rounded inner-shadow w-2/6 sm:1/4 flex flex-col justify-between">
            <ul className="list-inside text-center text-sm m-3">
              <li className="font-bold text-red-800 underline">Women:</li>
              <li>Haircut</li>
              <li>Hair Extensions</li>
              <li>Balayage</li>
              <li>Color</li>
              <li>Highlights</li>
            </ul>
            <a href="your-link" className="text-center text-red-800 hover:underline text-xs mb-2">Services &rarr;</a>
          </div>
          <div className="rounded inner-shadow w-2/6 sm:1/4 flex flex-col justify-between">
            <ul className="list-inside text-center text-sm m-3">
              <li className="font-bold text-red-800 underline">Services:</li>
              <li>Wax</li>
              <li>Makeup</li>
              <li>Facial</li>
              <li>Perm</li>
            </ul>
            <a href="your-link" className="text-center text-red-800 hover:underline text-xs mb-2">Services &rarr;</a>
          </div>
        </div>
      </section>
    </>
  );
}
