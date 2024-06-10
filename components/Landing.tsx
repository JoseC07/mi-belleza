import React from "react";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="relative">
      <Image
        src="/salonGirl.png"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        quality={100}
        alt="Background image"
      />
      <div className="absolute inset-0 bg-transparent from-stone-800 to-white/5 bg-gradient-to-r"></div>
      <div className="relative max-w-screen-xl h-75vh flex items-center">
        {/* Your content here */}
        <div>
          
        </div>

      </div>
    </div>
  );
}
