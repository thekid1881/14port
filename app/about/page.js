import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import AboutMe from "@/components/AboutMe";

export default function About() {
  return (
    <div className="grid grid-rows-[1fr_4fr] min-h-screen bg-fixed bg-no-repeat bg-bottom-left items-center justify-center bg-[#006D88] font-sans" style={{ backgroundImage: "url('https://images.unsplash.com/vector-1746187357447-05a427d67847?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293Ym95JTIwaGF0fGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=900')" }}>
      <PageHeader />
      <div className="grid grid-cols-[2fr_1fr] backdrop-blur-2xl rounded-md h-full items-center justify-items-center">
        <AboutMe />
        <div className="justify-self-center text-center text-white">
          <Image
            src="/sarahgoat.png"
            alt="unicorn"
            height={550}
            width={350}
          />
        </div>
      </div>
    </div>
  );
}
