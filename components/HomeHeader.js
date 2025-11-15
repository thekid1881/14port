import Link from "next/link";

export default function HomeHeader() {
    return (
        <div className="h-full w-screen justify-end text-end -indent-8 flex items-center">
            <Link
                href="/about"
                className="text-menu"
            >
                About
            </Link>
            <Link
                href="/work"
                className="text-menu"
            >
                Work
            </Link>
            <Link
                href="/contact"
                className="text-menu"
            >
                Contact
            </Link>
        </div>
    );
}