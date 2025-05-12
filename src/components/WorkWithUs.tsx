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
    <div ref={containerRef} className="grid h-full">
      <div className="grid md:grid-cols-2 gap-8 px-4 py-12 bg-black/40">
        <div className="px-4">
          <h2 data-animate className="text-4xl font-semibold">
            Proč pracovat s námi?
          </h2>
        </div>

        <div className="grid gap-8">
          <div data-animate className="grid grid-cols-2 gap-8 p-4 md:px-8 md:py-12 bg-white/10">
            {[
              { prefix: "#", number: 1, text: "Realitní skupina ve Wheltonu v letech 2022 - 2025" },
              { number: 18, suffix: "+", text: "Let zkušeností v realitách" },
              { number: 10, text: "Licencovaných realitních makléřů" },
              { prefix: "$", number: 1000, text: "Průměrná úspora 1 000 USD na každých 100 000 USD pro naše kupující" }
            ].map((item, index) => (
              <div 
                key={index}
                data-animate
                className="grid gap-4"
              >
                <h3 className="text-4xl font-semibold flex gap-2">
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