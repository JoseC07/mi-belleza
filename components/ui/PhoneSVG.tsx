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
            <path d="M22.17 1.82 21.12.91a3.096 3.096 0 0 0-4.38 0c-.03.03-1.88 2.44-1.88 2.44a3.106 3.106 0 0 0 0 4.28l1.16 1.46c-1.46 3.31-3.73 5.59-6.93 6.95l-1.46-1.17a3.086 3.086 0 0 0-4.28 0S.94 16.72.91 16.75C-.3 17.96-.3 19.92.86 21.08l1 1.15c1.15 1.15 2.7 1.78 4.38 1.78C13.88 24.01 24 13.88 24 6.25c0-1.67-.63-3.23-1.83-4.42ZM6.24 22c-1.14 0-2.19-.42-2.91-1.15l-1-1.15a1.1 1.1 0 0 1-.04-1.51s2.39-1.84 2.42-1.87c.41-.41 1.13-.41 1.55 0 .03.03 2.04 1.64 2.04 1.64.28.22.65.28.98.15 4.14-1.58 7.11-4.54 8.82-8.81.13-.33.08-.71-.15-1 0 0-1.61-2.02-1.63-2.04-.43-.43-.43-1.12 0-1.55.03-.03 1.87-2.42 1.87-2.42.43-.39 1.1-.38 1.56.08l1.05.91c.77.77 1.2 1.82 1.2 2.96C22 13.2 12.23 22 6.24 22Z" />
        </svg>
        <Link href="tel:8319755622" className="hover:underline" aria-label="Dial 831 975 5622">831 975 5622</Link>
    </div>
)
export default SvgComponent
