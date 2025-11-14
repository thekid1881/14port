import Image from "next/image";
import Link from "next/link";

export default function HomeHeader() {
    return (
        <div className="h-full w-screen justify-end text-end p-5">
            <Link
                href="/about"
                className="text-black hover:cursor-pointer hover:text-[#F1E3E0] text-3xl font-bold p-2 mx-7 rounded-md"
            >
                About
            </Link>
            <Link
                href="/work"
                className="text-black hover:cursor-pointer hover:text-[#F1E3E0] text-3xl font-bold p-2 mx-7 rounded-md"
            >
                Work
            </Link>
            <Link
                href="/contact"
                className="text-black hover:cursor-pointer hover:text-[#F1E3E0] text-3xl font-bold p-2 mx-7 rounded-md"
            >
                Contact
            </Link>
        </div>
    );
}