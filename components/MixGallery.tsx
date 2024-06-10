import React from "react";
import Image from "next/image";

export default function MixGallery() {
  return (
    <>
      <div className="py-6 px-6">
        
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                height={300}
                width={300}
                className="block h-full w-full rounded-lg bg-gray-500 object-cover object-center"
                src=""
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                height={300}
                width={300}
                className="block h-full w-full rounded-lg bg-gray-500 object-cover object-center"
                src=""
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                
                height={300}
                width={300}
                className="block h-full w-full rounded-lg bg-gray-500 object-cover object-center"
                src=""
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                height={300}
                width={300}
                className="block h-full w-full rounded-lg bg-gray-500 object-cover object-center"
                src=""
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                height={300}
                width={300}
                className="block h-full w-full rounded-lg bg-gray-500 object-cover object-center"
                src=""
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                height={300}
                width={300}
                className="block h-full w-full rounded-lg bg-gray-500 object-cover object-center"
                src=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
