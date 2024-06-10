import * as React from "react"
import Link from "next/link";
const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
    <div className="flex flex-row items-center space-x-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={512}
            height={512}
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="black"
            {...props}
        >
            <path d="M18 6c0-3.309-2.691-6-6-6S6 2.691 6 6a6.009 6.009 0 0 0 5 5.916V24h2V11.916A6.009 6.009 0 0 0 18 6Zm-6 4c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4Z" />
        </svg>
        <Link href="https://www.google.com/maps/place/199+W+Laurel+Dr,+Salinas,+CA+93906/@36.6988695,-121.65396,16z/data=!3m1!4b1!4m6!3m5!1s0x808dff367fd08543:0x7057dbb58a9f2eff!8m2!3d36.6988695!4d-121.65396!16s%2Fg%2F11bw4prt39?entry=ttu" target="_blank" className="hover:underline">199 W Laurel Dr</Link>
    
    </div>
)
export default SvgComponent
