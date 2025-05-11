import AboutContent from "./AboutContent";
import Footer from "./Footer";
import FormQr from "./Form&Qr";
import Services from "./Services";
import TeamHighlight from "./TeamMembers";
import WorkWithUs from "./WorkWithUs";


export default function HomeContent() {
  return (
    <>
    <div className="grid container mx-auto gap-4">
      <div className="flex flex-col items-center justify-center shadow-2xl text-center">
        <div className="px-4 py-12 md:px-36 md:py-24 gap-8 flex flex-col bg-white/20">
          <h1 className="uppercase text-3xl md:text-5xl font-semibold text-white z-10 opacity-100">Konsorcium <br />pro developery</h1>
          <h2 className="uppercase text-lg md:text-2xl font-normal text-white z-10">připojte se a zrychlete svůj prodej</h2>
        </div>
      </div>

      {/*<AboutContent />

      <Services />

      <FormQr />

      <TeamHighlight />

      <WorkWithUs />

      <Footer />*/}

    </div>
  </>
  )
}