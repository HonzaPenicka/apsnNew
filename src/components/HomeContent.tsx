import AnimatedNumber from "./AnimatedNumber";


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

      <div className="bg-green-700 flex flex-col md:grid md:grid-cols-3">
          <div className="flex flex-col gap-8 px-8 py-12 hover:bg-yellow-600">
            <h2 className="text-3xl font-semibold text-center">
              Rozprodej projektu
            </h2>

            <div>
              Poskytneme Vám naši síť se 100.000 retailových investorů s před schváleným financováním.
            </div>

            <div>
              Strategicky rozdělujeme projekt - po částech nebo jako celek
            </div>

            <div>
              Tvoříme cílenou marketingovou a prodejní strategii
            </div>

            <div>
              Zajišťujeme kompletní právní a administrativní servis
            </div>

          </div>

          <div className="flex flex-col gap-8 px-8 py-12 hover:bg-yellow-600">
            <h2 className="text-3xl font-semibold text-center">
              Předprodej
            </h2>

            <div>
              Přístup k bonitním 100.000 investorům.
            </div>

            <div>
              Transparentní a bezpečný prodejní proces
            </div>

            <div>
              Zajistíme Vám marketingový, právní a
              administrativní outsourcing Našeho realitního
              oddělení.
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Jak to funguje?
              </h3>

              <br />

              <ol className="list-decimal list-inside">
                <li>
                  Exkluzivně představíme váš projekt vybraným
                  investorům
                </li>

                <li>
                  Otestujeme trh a stanovíme optimální cenu
                </li>

                <li>
                  Získáte reálné nabídky bez čekání (z naší
                  interní sítě klientů)
                </li>
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-8 px-8 py-12 hover:bg-yellow-600">
            <h2 className="text-3xl font-semibold text-center">
              Činžovní domy
            </h2>

            <div>
              Každý chce chytře investovat do bytových domů se stabilním výnosem – my víme, jak to proměnit ve skutečnost.
            </div>

            <div>
              Stabilita, dlouhodobá hodnota a příjem.
            </div>

            <div>
              Hledáte bytový dům? Zavolejte nám!
            </div>

            <div>
              Pomůžeme s výběrem, financováním i správou nemovitosti.
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-8 px-8 py-12 bg-yellow-800">
          <h2>
            Zjistěte jaký je tržní potenciál vašeho projektu
          </h2>

          <form className="grid md:grid-cols-2 gap-8" action='https://formspree.io/f/myyrogad' method='POST'>
            <div className="flex flex-col gap-8">
              <h3>
                Nezávazná konzultace
              </h3>
              <p>
                Děkujeme za váš zájem. Zanechte nám kontakt a náš akviziční specialista se Vám brzy ozve. Nebo nám zavolejte rovnou.
              </p>

              <p>
                <a href="tel:+420778403590" className="text-2xl font-bold">+420 778 403 590</a>
              </p>

              <div className="grid grid-cols-2 gap-4">
                <input
                      type='name'
                      name='Jméno'
                      id='form-name'
                      placeholder='Jméno'
                      className='py-3 pl-3 rounded-lg border-2'
                      required
                      maxLength={50}
                  />

                <input
                      type='lastName'
                      name='Přijmení'
                      id='form-lastName'
                      placeholder='Příjmení'
                      className='py-3 pl-3 rounded-lg border-2'
                      required
                      maxLength={50}
                />
              </div>

              <input
										type='phone'
										name='Mobil'
										id='form-phone'
										placeholder='Telefonní číslo'
										className='py-3 pl-3 rounded-lg border-2'
										required
										maxLength={20}
							/>

							<input
										type='email'
										name='E-mail'
										id='form-email'
										placeholder='Email'
										className='py-3 pl-3 rounded-lg border-2'
										required
										maxLength={80}
							/>

							<textarea
										name='Zpráva'
										id='message'
										placeholder='Zpráva...'
										className='py-3 pl-3 rounded-lg border-2'
										required
										rows={5}
							/>

							<button type='submit'>Odeslat</button>

              <AnimatedNumber to={100_000} duration={3000} />
            </div>

            <div className="aspect-square bg-gray-400 text-4xl justify-center items-center flex">

              <p className="uppercase">scan me</p>

            </div>
          </form>
      </div>

      <div className="grid md:grid-cols-2 gap-8 bg-amber-600">
        <div className="flex flex-col justify-between px-8 py-12 gap-4">
          <h2 className="uppercase">Poznejte náš tým</h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="grid gap-1">
              <p className="md:text-xl font-semibold">
                Jirka Krupička
              </p>

              <p>
                SEO, Owner
              </p>
            </div>

            <div className="grid gap-1">
              <p className="md:text-xl font-semibold">
                Jirka Krupička
              </p>

              <p>
                SEO, Owner
              </p>
            </div>

            <div className="grid gap-1">
              <p className="md:text-xl font-semibold">
                Jirka Krupička
              </p>

              <p>
                SEO, Owner
              </p>
            </div>

            <div className="grid gap-1">
              <p className="md:text-xl font-semibold">
                Jirka Krupička
              </p>

              <p>
                SEO, Owner
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 px-8 py-12">
          <div>
            <img src="/pics/skyscraper.jpeg" alt="real estate" className="object-cover aspect-square" />
          </div>

          <div>
            <img src="/pics/skyscraper.jpeg" alt="real estate" className="object-cover aspect-square" />
          </div>

          <div>
            <img src="/pics/skyscraper.jpeg" alt="real estate" className="object-cover aspect-square" />
          </div>

          <div>
            <img src="/pics/skyscraper.jpeg" alt="real estate" className="object-cover aspect-square" />
          </div>
        </div>

      </div>
    </div>
  </>
  )
}