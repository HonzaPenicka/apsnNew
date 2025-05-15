import { useEffect, useRef } from "react";
import AnimatedNumber from "./AnimatedNumber";
import Footer from "./Footer";

export default function WorkWithUs({ isActive }: { isActive?: boolean }) {
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

  return (
    <div ref={containerRef} className="grid h-full gap-4">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-8 lg:px-16 pt-16 md:pt-24 md:py-12 bg-black/40">
          <h2 data-animate className="text-3xl md:text-4xl font-semibold">
            Proč pracovat s námi?
          </h2>


        <div className="grid gap-2 md:gap-8">
          <div data-animate className="grid grid-cols-2 gap-2 md:gap-8 p-4 md:px-8 md:py-12 bg-white/10">
            {[
              { prefix: "#", number: 1, text: "Realitní skupina ve Wheltonu v letech 2022 - 2025." },
              { number: 18, suffix: "+", text: "Let zkušeností v realitách." },
              { number: 2000, text: "Licencovaných realitních makléřů." },
              { prefix: "$", number: 1000, text: "Průměrná úspora 1 000 USD na každých 100 000 USD pro naše kupující." }
            ].map((item, index) => (
              <div 
                key={index}
                data-animate
                className="grid gap-2 md:gap-4 lg:gap-8"
              >
                <h3 className="text-2xl font-semibold flex">
                  {item.prefix && <p>{item.prefix}</p>}
                  <AnimatedNumber to={item.number} duration={2000} />
                  {item.suffix && <p>{item.suffix}</p>}
                </h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer data-animate />
    </div>
  );
}