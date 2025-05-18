// components/AboutContent.tsx
import { useEffect, useRef } from "react";

export default function AboutContent({ isActive }: { isActive?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isActive) return;

    const elements = container.querySelectorAll('[data-animate]');
    
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 150);
    });

    return () => {
      elements.forEach(el => el.classList.remove('animate-in'));
    };
  }, [isActive]);

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 gap-0 md:gap-16 items-center bg-black/20 px-4 md:px-8 lg:px-16 h-screen">
      <div className="pt-8 aspect-auto md:aspect-square bg-[#28456C]/40 p-4 rounded-xl">
        <div className="flex flex-col gap-8 md:gap-16 md:mt-24 md:mx-12">
          <h2 
            data-animate
            className="text-3xl md:text-4xl font-semibold"
          >
            Kdo jsme?
          </h2>

          <p data-animate className="md:text-xl hidden md:flex text-justify">
            APSN spojuje odborné know-how, silné investice a strategický přístup k modernímu developmentu. Sítí 100 000 předschválených investorů urychlujeme růst projektů bezpečně a efektivně. Nabízíme strategické členění projektů, cílený marketing, právní servis, exkluzivní prezentace investorům, testování trhu, optimální cenotvorbu a rychlé nabídky. Zaměřujeme se na udržitelná řešení s dlouhodobou hodnotou, propojujeme developery a investory v bytové výstavbě. Ať prodáváte nebo hledáte investici – zajistíme konkrétní příležitosti.
          </p>

          <p data-animate className="md:text-xl flex md:hidden text-justify">
            APSN propojuje know-how, investice a strategii v developmentu. S 100 000 předschválených investorů urychlujeme projekty bezpečně a efektivně. Zajišťujeme strategické členění projektů, cílený marketing, právní servis, exkluzivní prezentace investorům, test trhu, optimální cenu a rychlé nabídky. Zaměřujeme se na udržitelné projekty s dlouhodobou hodnotou a propojujeme developery s investory v bytových projektech. Ať prodáváte nebo hledáte – zprostředkujeme příležitosti.
          </p>
        </div>
      </div>

      <div data-animate className="flex items-center justify-center">
        <img
          src="/pics/plan.jpg"
          alt="real estate"
          className="aspect-video bg-cover w-full"
        />
      </div>
    </div>
  );
}