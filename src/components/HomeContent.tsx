import Navbar from "./Navbar";

export default function HomeContent() {
  return (
    <>

    <div className="grid w-screen h-screen gap-4 bg-black/30 px-4 md:px-8 lg:px-16">
    <Navbar />
      <div className="flex flex-col items-center justify-center shadow-2xl text-center">
        <div className="py-12 md:px-36 md:py-24 gap-8 flex flex-col bg-white/20">
          <h1 className="uppercase text-3xl md:text-5xl font-semibold text-white z-10 opacity-100">Konsorcium <br />pro developery</h1>
          <h2 className="uppercase text-lg md:text-2xl font-normal text-white z-10">připojte se a zrychlete svůj prodej</h2>
        </div>
      </div>

      {/*
      <Services />

      <FormQr />

      <TeamHighlight />

      <WorkWithUs />

      <Footer />*/}

    </div>
  </>
  )
}