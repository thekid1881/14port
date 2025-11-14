import PageHeader from "@/components/PageHeader";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Work() {
  return (
    <div className="grid grid-rows-[130px_1fr_50px] min-h-screen w-full bg-fixed bg-no-repeat bg-bottom-left items-center justify-center bg-[#006D88] font-sans" style={{ backgroundImage: "url('https://images.unsplash.com/vector-1746187357447-05a427d67847?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293Ym95JTIwaGF0fGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=900')" }}>
      <PageHeader />
      <div className="grid grid-rows-[40px-1fr] w-screen h-full backdrop-blur-2xl">
        <div className="grid grid-cols-2 py-6 w-screen h-full">
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
        <div className="grid grid-cols-[2fr_1fr] rounded-md h-full w-full px-18 justify-items-center text-end">
          <div className="items-center">
            <Carousel />
          </div>
          <div className="align-text-top w-full">
            <Skills />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
