import Carousel from "@/components/Carousel/Carousel";
import Skills from "@/components/Skills";
import NavBar from "@/components/NavBar";

export default function Work() {
  return (
    <div className="grid grid-rows-[1fr_4fr] min-h-screen bg-fixed bg-no-repeat bg-bottom-left items-center justify-center bg-[#006D88] font-sans" style={{ backgroundImage: "url('https://images.unsplash.com/vector-1746187357447-05a427d67847?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293Ym95JTIwaGF0fGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=900')" }}>
      <NavBar />
      <div className="grid grid-rows-[1fr_5fr] w-screen h-full backdrop-blur-2xl">
        <div className="grid grid-cols-[2fr_1fr] items-center w-screen h-full px-4">
          <div>
            <p className="text-5xl font-bold text-yellow-400 text-center text-stroke-1">
              Services
            </p>
          </div>
          <div>
            <p className="text-5xl font-bold text-yellow-400 text-center text-stroke-1">
              Skills
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_1fr] rounded-md h-full w-full justify-items-center text-end px-4">
          <div className="items-center">
            <Carousel />
          </div>
          <div className="align-text-top w-full">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
