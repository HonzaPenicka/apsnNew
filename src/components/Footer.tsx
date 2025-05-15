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
    <div ref={containerRef} className="grid md:grid-cols-4 px-4 md:px-8 lg:px-16 md:py-12 bg-white/10 p-4 md:gap-8">
      <div data-animate className="text-2xl font-semibold hidden md:block">
        Připojte se!
      </div>

      <div className="grid grid-cols-2 md:hidden">
        <div data-animate className="text-2xl md:text-4xl font-semibold">
          Připojte se!
        </div>

        <div data-animate className="flex gap-4">
          <Facebook />
          <Instagram />
          <LinkedIn />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-8 md:hidden">
        <div data-animate className="grid">
          <p className="font-bold text-lg md:text-xl">
            Adresa
          </p>
          <p>123 Anywhere St.</p>
          <p>Praha, 110 00</p>
        </div>

        <div data-animate className="grid">
          <p className="font-bold text-lg md:text-xl">
            Kontakt
          </p>
          
          <a href="tel:+420123456789">+420 123 456 789</a>

          <a href="mailto:hello@tohlejeemail.com">hello@tohlejeemail.com</a>
        </div>
      </div>

      <div data-animate className="hidden md:grid">
          <p className="font-bold text-lg md:text-xl">
            Adresa
          </p>
          <p>123 Anywhere St.</p>
          <p>Praha, 110 00</p>
      </div>

      <div data-animate className="hidden md:grid">
          <p className="font-bold text-lg md:text-xl">
            Kontakt
          </p>
          <p>+420 123 456 789</p>
          <p>hello@tohlejeemail.com</p>
      </div>

      <div data-animate className="hidden md:grid md:grid-cols-3">
        <Facebook />
        <Instagram />
        <LinkedIn />
      </div>
    </div>
  );
}