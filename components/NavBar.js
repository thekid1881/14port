'use client';

import { useState } from "react";
import Link from "next/link";
import { TbHome } from "react-icons/tb";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav>
            <div className="hidden md:grid grid-cols-2 bg-transparent w-screen px-8 py-5">
                <div className="justify-start mx-10">
                    <Link
                        href="/"
                        className="hover:cursor-pointer hover:text-white text-6xl"
                    >
                        <TbHome />
                    </Link>
                </div>
                <div className="justify-items-end text-end">
                    <nav className="flex space-x-6 gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`${
                                        isActive
                                            ? "text-[#F1E3E0] hover:cursor-pointer text-3xl font-bold p-2"
                                            : "text-black hover:cursor-pointer hover:text-[#F1E3E0] text-3xl font-bold p-2"
                                    } transition-colors`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
            <div className="md:hidden flex items-center justify-between">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="focus:outline-none"
                >
                    {isOpen ? (
                        <svg
                            className="w-8 h-8 m-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6I12 12"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-8 h-8 m-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden mt-2 flex flex-col space-y-2">
                    <Link
                        href="/about"
                        className="block px-2 py-1 hover:bg-[#DE9701] rounded"
                    >
                        About
                    </Link>
                    <Link
                        href="/work"
                        className="block px-2 py-1 hover:bg-[#DE9701] rounded"
                    >
                        Work
                    </Link>
                    <Link
                        href="/contact"
                        className="block px-2 py-1 hover:bg-[#DE9701] rounded"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}