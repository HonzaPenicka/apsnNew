export default function AboutContent() {
    return (
        <div className="grid md:grid-cols-2 gap-4 items-center bg-black/30 px-4 md:px-8 lg:px-16">
            <div className="px-8 pt-12 aspect-square">
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