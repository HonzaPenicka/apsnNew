export default function Services() {
  return (
    <div className="bg-black/40 px-4 md:px-8 lg:px-16 h-screen">
      <div className="grid md:grid-cols-3 gap-4 overflow-y-auto">
        <div className="flex flex-col gap-8 px-8 py-12 hover:bg-yellow-600/50">
          <h2 className="text-3xl font-semibold">Rozprodej projektu</h2>
          <div>
            Poskytneme Vám naši síť se 100.000 retailových investorů s před
            schváleným financováním.
          </div>
          <div>
            Strategicky rozdělujeme projekt - po částech nebo jako celek
          </div>
          <div>Tvoříme cílenou marketingovou a prodejní strategii</div>
          <div>Zajišťujeme kompletní právní a administrativní servis</div>
        </div>

        <div className="flex flex-col gap-8 px-8 py-12 hover:bg-yellow-600/50">
          <h2 className="text-3xl font-semibold">Předprodej</h2>
          <div>Přístup k bonitním 100.000 investorům.</div>
          <div>Transparentní a bezpečný prodejní proces</div>
          <div>
            Zajistíme Vám marketingový, právní a administrativní outsourcing
            Našeho realitního oddělení.
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Jak to funguje?</h3>
            <ol className="list-decimal list-inside mt-4">
              <li>Exkluzivně představíme váš projekt vybraným investorům</li>
              <li>Otestujeme trh a stanovíme optimální cenu</li>
              <li>
                Získáte reálné nabídky bez čekání (z naší interní sítě klientů)
              </li>
            </ol>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-8 py-12 hover:bg-yellow-600/50">
          <h2 className="text-3xl font-semibold">Činžovní domy</h2>
          <div>
            Každý chce chytře investovat do bytových domů se stabilním výnosem –
            my víme, jak to proměnit ve skutečnost.
          </div>
          <div>Stabilita, dlouhodobá hodnota a příjem.</div>
          <div>Hledáte bytový dům? Zavolejte nám!</div>
          <div>Pomůžeme s výběrem, financováním i správou nemovitosti.</div>
        </div>
      </div>
    </div>
  );
}
