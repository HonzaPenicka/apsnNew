import Footer from "./Footer";
import FormQr from "./Form&Qr";
import Services from "./Services";
import TeamHighlight from "./TeamMembers";
import WorkWithUs from "./WorkWithUs";


export default function HomeContent() {
  return (
    <>
    <div className="grid container mx-auto gap-4">
      <div className="flex flex-col border gap-8 px-4 py-12 my-24 md:my-48 shadow-2xl bg-opacity-50 opacity-40 bg-pink-400 text-center">
        <h1 className="uppercase text-4xl font-semibold">Konsorcium <br />pro developery</h1>
        <h2 className="uppercase text-2xl font-normal">připojte se a zrychlete svůj prodej</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className=" bg-purple-500 px-8 py-12 aspect-square">
          <div className="flex flex-col gap-16">
            <h2 className="text-3xl font-semibold">Kdo jsme?</h2>

            <p>Díky spolupráci odborníků, silnému kapitálovému zázemí a strategickému přístupu umožňuje APSN efektivněji realizovat Vaše projekty, minimalizovat rizika a urychlit jejich dokončení, což vede k moderním a udržitelným řešením.</p>
          </div>

        </div>

        <div className="bg-amber-700 flex items-center justify-center">
            <img src="/pics/skyscraper.jpeg" alt="real estate" className="aspect-video bg-cover w-full"/>
        </div>
      </div>

      <Services />

      <FormQr />

      <TeamHighlight />

      <WorkWithUs />

      <Footer />

    </div>
  </>
  )
}