import { useState, useEffect, useRef } from "react";

export default function TeamHighlight({ isActive }: { isActive?: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isActive) return;

    const elements = container.querySelectorAll<HTMLElement>('[data-animate]');
    
    elements.forEach((el, index) => {
      el.classList.remove('animate-in');
      void el.offsetWidth;
      
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 150);
    });

    return () => {
      elements.forEach(el => el.classList.remove('animate-in'));
    };
  }, [isActive]);

  const handleTextHover = (index: number | null) => setActiveIndex(index);
  const handleImageHover = (index: number | null) => setActiveIndex(index);

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 gap-4 md:gap-8 bg-black/40 h-screen pt-4 md:pt-12">
      <div className="flex flex-col justify-between px-4 md:px-8 lg:px-16 pt-12 gap-4">
        <h2 
          data-animate
          className="uppercase text-3xl md:text-4xl font-semibold"
        >
          Poznejte náš tým
        </h2>

        <div className="grid grid-cols-2 gap-2 md:gap-4 md:pb-12">
          {[
            "Jirka Krupička",
            "Sandra Nguyen",
            "Daniela Hořáková",
            "Gabriel Radovský",
          ].map((name, index) => (
            <div
              key={index}
              data-animate
              className={`grid md:gap-1 transition-opacity bg-white/10 animate-in p-2 md:p-4 hover:bg-[#28456C] ${
                activeIndex === index ? "!opacity-100" : "opacity-50"
              }`}
              onMouseEnter={() => handleTextHover(index)}
              onMouseLeave={() => handleTextHover(null)}
            >
              <p className="md:text-xl font-semibold">{name}</p>
              <p>CEO</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-4 px-4 md:px-8 lg:px-16 pb-12 md:py-12"> {/* Zmenšen gap a odstraněn padding-x */}
        {[0, 1, 2, 3].map((_, index) => (
          <div
            key={index}
            data-animate
            className="relative w-full overflow-hidden aspect-square" // Přidáno pro ořez
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={() => handleImageHover(null)}
          >
            <img
              src="/pics/cropped.jpeg"
              alt="real estate"
              className={`w-full object-cover transition-opacity ${
                activeIndex === index ? "!opacity-100" : "opacity-50"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}