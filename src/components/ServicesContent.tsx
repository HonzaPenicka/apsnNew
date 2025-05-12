import { useEffect, useRef } from "react";

export default function Services({ isActive }: { isActive?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isActive) return;

    const elements = container.querySelectorAll<HTMLElement>('[data-animate]');
    
    elements.forEach((el, index) => {
      el.classList.remove('animate-in');
      void el.offsetWidth; // Reset animace
      
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 150);
    });

    return () => {
      elements.forEach(el => el.classList.remove('animate-in'));
    };
  }, [isActive]);

  return (
    <div ref={containerRef} className="bg-black/40 px-4 md:px-8 lg:px-16 h-screen">
      <div className="grid md:grid-cols-3 gap-4 overflow-y-auto h-full">
        {/* První sloupec */}
        <div 
          data-animate
          className="flex flex-col gap-8 px-8 py-12 hover:bg-yellow-600/50"
        >
          <h2 data-animate className="text-3xl font-semibold">
            Rozprodej projektu
          </h2>
          <div data-animate>
            Poskytneme Vám naši síť se 100.000 retailových investorů s před
            schváleným financováním.
          </div>
          <div data-animate>
            Strategicky rozdělujeme projekt - po částech nebo jako celek
          </div>
          <div data-animate>Tvoříme cílenou marketingovou a prodejní strategii</div>
          <div data-animate>Zajišťujeme kompletní právní a administrativní servis</div>
        </div>

        {/* Druhý sloupec */}
        <div 
          data-animate
          className="flex flex-col gap-8 px-8 py-12 hover:bg-yellow-600/50"
        >
          <h2 data-animate className="text-3xl font-semibold">
            Předprodej
          </h2>
          <div data-animate>Přístup k bonitním 100.000 investorům.</div>
          <div data-animate>Transparentní a bezpečný prodejní proces</div>
          <div data-animate>
            Zajistíme Vám marketingový, právní a administrativní outsourcing
            Našeho realitního oddělení.
          </div>
          <div data-animate>
            <h3 data-animate className="text-2xl font-semibold">
              Jak to funguje?
            </h3>
            <ol data-animate className="list-decimal list-inside mt-4">
              <li data-animate>Exkluzivně představíme váš projekt vybraným investorům</li>
              <li data-animate>Otestujeme trh a stanovíme optimální cenu</li>
              <li data-animate>
                Získáte reálné nabídky bez čekání (z naší interní sítě klientů)
              </li>
            </ol>
          </div>
        </div>

        {/* Třetí sloupec */}
        <div 
          data-animate
          className="flex flex-col gap-8 px-8 py-12 hover:bg-yellow-600/50"
        >
          <h2 data-animate className="text-3xl font-semibold">
            Činžovní domy
          </h2>
          <div data-animate>
            Každý chce chytře investovat do bytových domů se stabilním výnosem –
            my víme, jak to proměnit ve skutečnost.
          </div>
          <div data-animate>Stabilita, dlouhodobá hodnota a příjem.</div>
          <div data-animate>Hledáte bytový dům? Zavolejte nám!</div>
          <div data-animate>Pomůžeme s výběrem, financováním i správou nemovitosti.</div>
        </div>
      </div>
    </div>
  );
}