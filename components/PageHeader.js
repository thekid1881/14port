'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbHome } from "react-icons/tb";

export default function PageHeader() {
    const pathname = usePathname();

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="grid grid-cols-2 w-screen px-8 py-5">
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
    );
}