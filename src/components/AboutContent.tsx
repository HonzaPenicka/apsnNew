export default function AboutContent() {
    return (
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
    )
  }