import { useEffect, useRef } from "react";
import Navbar from "./Navbar";

export default function HomeContent({ isActive }: { isActive?: boolean }) {
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
    <div ref={containerRef} className="grid w-screen h-screen gap-4 bg-black/40 px-4 md:px-8 lg:px-16">
      <Navbar />
      <div className="flex flex-col items-center justify-center shadow-2xl text-center">
        <div className="py-12 md:px-36 md:py-24 gap-8 flex flex-col bg-white/10 p-4">
          <h1 
            data-animate
            className="uppercase text-3xl md:text-5xl font-semibold text-white z-10"
          >
            Konsorcium <br />
            pro developery
          </h1>
          <h2 
            data-animate
            className="uppercase text-lg md:text-2xl font-normal text-white z-10"
          >
            připojte se a zrychlete svůj prodej
          </h2>
        </div>
      </div>
    </div>
  );
}