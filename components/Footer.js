import { FaCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex flex-row text-3xl h-full w-screen justify-end text-end pr-12 font-bold">
            <FaCopyright />
            <p className="ml-4">
                2025 Sarah Bill
            </p>
        </div>
    );
}