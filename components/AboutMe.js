import Link from "next/link";

export default function AboutMe() {
    return (
        <div className="leading-relaxed max-w-2xl mx-auto text-center justify-self-center text-3xl">
            <span className="text-heading">Hi!</span>I'm Sarah Bill.<br/>
            I've been a web developer<br/>
            for over 10 years<br/>
            with a focus on <span className="text-heading">design</span>,<br/>
            <span className="text-heading">quick turnaround</span>,<br/>
            and <span className="text-heading">delivering value</span>.<br/>
            <Link
                href="/contact"
                className="underline text-5xl text-stroke-1 font-semibold text-[#006D88] leading-loose"
            >
                Shoot me a message
            </Link><br/>
            about your web dev needs!
        </div>
    );
}