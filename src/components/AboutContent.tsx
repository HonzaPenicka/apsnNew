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
    <div ref={containerRef} className="grid md:grid-cols-2 gap-4 items-center bg-black/40 px-4 md:px-8 lg:px-16 h-screen">
      <div className="pt-12 aspect-square">
        <div className="flex flex-col gap-16">
          <h2 
            data-animate
            className="text-3xl font-semibold"
          >
            Kdo jsme?
          </h2>

          <p data-animate>
            Díky spolupráci odborníků, silnému kapitálovému zázemí a
            strategickému přístupu umožňuje APSN efektivněji realizovat Vaše
            projekty, minimalizovat rizika a urychlit jejich dokončení, což vede
            k moderním a udržitelným řešením.
          </p>
        </div>
      </div>

      <div data-animate className="flex items-center justify-center">
        <img
          src="/pics/skyscraper.jpeg"
          alt="real estate"
          className="aspect-video bg-cover w-full"
        />
      </div>
    </div>
  );
}