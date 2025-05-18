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
          <a href="https://www.linkedin.com/in/apsn-sro-03789a366/" target="_blank">
            <Facebook />
          </a>

          <a href="https://www.instagram.com/apsn_sro?igsh=eG1yOHo5N2EwZG43" target="_blank">
            <Instagram />
          </a>

          <a href="" target="_blank">
            <LinkedIn />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-8 md:hidden">
        <a href="https://maps.app.goo.gl/b9wT5goGJGfipXzW9" target="_blank" data-animate className="grid md:hidden">
            <p className="font-bold text-lg md:text-xl">
              Adresa
            </p>
            <p className="hover:text-amber-500 hover:font-bold">Bulharská 996/20</p>
            <p className="hover:text-amber-500 hover:font-bold">101 00 Praha</p>
        </a>

        <div data-animate className="grid">
          <p className="font-bold text-lg md:text-xl">
            Kontakt
          </p>
          
          <a className="hover:font-bold hover:text-amber-500" href="tel:+420773007171">+420 773 007 171</a>

          <a className="hover:font-bold hover:text-amber-500" href="mailto:Krupicka.jiri@apsn.cz">Krupicka.jiri@apsn.cz</a>
        </div>
      </div>

      <a href="https://maps.app.goo.gl/b9wT5goGJGfipXzW9" target="_blank" data-animate className="hidden md:grid">
          <p className="font-bold text-lg md:text-xl">
            Adresa
          </p>
          <p className="hover:text-amber-500 hover:font-bold">Bulharská 996/20</p>
          <p className="hover:text-amber-500 hover:font-bold">101 00 Praha</p>
      </a>

      <div data-animate className="hidden md:grid">
          <p className="font-bold text-lg md:text-xl">
            Kontakt
          </p>
          <a className="hover:font-bold hover:text-amber-500" href="tel:+420773007171">+420 773 007 171</a>

          <a className="hover:font-bold hover:text-amber-500" href="mailto:Krupicka.jiri@apsn.cz">Krupicka.jiri@apsn.cz</a>
      </div>

      <div data-animate className="hidden md:grid md:grid-cols-3">
          <a href="https://www.linkedin.com/in/apsn-sro-03789a366/" target="_blank">
            <Facebook />
          </a>

          <a href="https://www.instagram.com/apsn_sro?igsh=eG1yOHo5N2EwZG43" target="_blank">
            <Instagram />
          </a>

          <a href="" target="_blank">
            <LinkedIn />
          </a>
      </div>
    </div>
  );
}