import Header from "@/components/HomeHeader";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr_80px] min-h-screen bg-fixed bg-no-repeat bg-bottom-left items-center justify-center bg-[#006D88] font-sans" style={{ backgroundImage: "url('https://images.unsplash.com/vector-1746187357447-05a427d67847?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293Ym95JTIwaGF0fGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=900')" }}>
      <Header />
      <div className="h-full items-center text-end">
        <h1 className="text-9xl font-bold text-stroke-2 pr-26 pt-60 pb-20 text-[#DE9701]">
          Billy's Web Dev
        </h1>
      </div>
      <Footer />
    </div>
  );
}
