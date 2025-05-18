import { useEffect, useRef } from "react";
import Navbar from "./Navbar";

export default function Partners({ isActive }: { isActive?: boolean }) {
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
    <div ref={containerRef} className="flex flex-col w-screen h-screen bg-black/20 px-4 md:px-8 lg:px-16 pt-16 gap-8 md:gap-48">
        <h1 data-animate className="text-3xl md:4xl font-semibold">Spolupracující instituce</h1>
        <div className="grid md:flex gap-8 md:gap-16 justify-center items-center md:py-24 bg-[#28456C]/40 p-4 rounded-xl">
            <a data-animate href="https://www.apollongroup.cz" target="_blank" className="grid grid-rows-[auto_1fr] items-start gap-4 h-full">
                <h2 className="text-xl md:text-2xl font-semibold hover:text-amber-500 self-start">
                    Apollon Group
                </h2>
                <img src="/pics/apollon.jpg" alt="apollon" className="w-40 h-auto self-end" />
            </a>
            <a data-animate href="https://www.lavom.cz" target="_blank" className="grid grid-rows-[auto_1fr] items-start gap-4 h-full">
                <h2 className="text-xl md:text-2xl font-semibold hover:text-amber-500 self-start">
                    Lavom holding
                </h2>
                <img src="/pics/lavom.png" alt="lavom" className="w-40 h-auto self-end" />
            </a>
        </div>
    </div>
  );
}