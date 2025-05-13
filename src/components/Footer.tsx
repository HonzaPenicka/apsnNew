import { useEffect, useRef } from "react";
import { Facebook } from "../../public/icon/Facebook";
import { Instagram } from "../../public/icon/Instagram";
import { LinkedIn } from "../../public/icon/LinkedIn";

export default function Footer({ isActive }: { isActive?: boolean }) {
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
    <div ref={containerRef} className="grid md:grid-cols-4 px-4 md:px-8 lg:px-16 py-12 bg-white/10 p-4 gap-4 md:gap-8">
      <div data-animate className="text-2xl font-semibold">
        Připojte se!
      </div>

      <div data-animate className="grid">
        <p>Hlavní kancelář</p>
        <p>123 Anywhere St.</p>
        <p>Jakékoliv Město, ST 12345</p>
      </div>

      <div data-animate className="grid">
        <p>Hlavní kancelář</p>
        <p>123 Anywhere St.</p>
        <p>Jakékoliv Město, ST 12345</p>
      </div>

      <div data-animate className="grid grid-cols-3">
        <Facebook />
        <Instagram />
        <LinkedIn />
      </div>
    </div>
  );
}