import { useEffect, useRef } from "react";

export default function FormQr({ isActive }: { isActive?: boolean }) {
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
    <div ref={containerRef} className="flex flex-col gap-8 px-4 md:px-8 lg:px-16 pt-16 md:pt-24 overflow-y-auto bg-black/20 h-full">
      <h2 
        data-animate
        className="text-3xl md:text-4xl font-semibold"
      >
        Zjistěte jaký je tržní potenciál vašeho projektu
      </h2>

      <form
        data-animate
        className="grid md:grid-cols-2 gap-8 justify-center items-center"
        action="https://formspree.io/f/myyrogad"
        method="POST"
      >
        <div className="flex flex-col gap-4">
          <h3 
            data-animate
            className="text-2xl font-semibold hidden md:flex"
          >
            Nezávazná konzultace
          </h3>
          
          <p data-animate className="hidden md:flex md:text-xl text-justify lg:pr-24">
            Děkujeme za váš zájem. Zanechte nám kontakt a náš akviziční
            specialista se Vám brzy ozve. Nebo nám zavolejte rovnou.
          </p>

          <p data-animate className="hidden md:flex">
            <a 
              href="tel:+420773007171" 
              className="text-2xl md:text-3xl font-bold hover:text-amber-500"
            >
              +420 773 007 171
            </a>
          </p>

          <div className="grid gap-4 md:gap-8 bg-[#28456C]/40 p-4 rounded-xl">
            <div 
              data-animate
              className="grid grid-cols-2 gap-4"
            >
              <input
                data-animate
                type="name"
                name="Jméno"
                id="form-name"
                placeholder="Jméno"
                className="py-2 pl-2 border-2 hover:border-[#28456C] active:border-[#28456C]"
                required
                maxLength={50}
              />

              <input
                data-animate
                type="lastName"
                name="Přijmení"
                id="form-lastName"
                placeholder="Příjmení"
                className="py-2 pl-2 border-2 hover:border-[#28456C] active:border-[#28456C]"
                required
                maxLength={50}
              />
            </div>

            <input
              data-animate
              type="phone"
              name="Mobil"
              id="form-phone"
              placeholder="Telefonní číslo"
              className="py-2 pl-2 border-2 hover:border-[#28456C] active:border-[#28456C]"
              required
              maxLength={20}
            />

            <input
              data-animate
              type="email"
              name="E-mail"
              id="form-email"
              placeholder="Email"
              className="py-2 pl-2 border-2 hover:border-[#28456C] active:border-[#28456C]"
              required
              maxLength={80}
            />

            <textarea
              data-animate
              name="Zpráva"
              id="message"
              placeholder="Zpráva..."
              className="py-2 pl-2 border-2 hover:border-[#28456C] active:border-[#28456C]"
              required
              rows={5}
            />

            <div 
              data-animate
              className="flex justify-center"
            >
              <button 
                type="submit" 
                className="border-2 px-8 py-4 hover:border-[#28456C] hover:font-bold"
              >
                Odeslat
              </button>
            </div>
          </div>
        </div>

        <div 
          data-animate
          className="justify-center items-center hidden md:flex"
        >
          <div 
            data-animate
            className="aspect-square w-1/3 bg-gray-400 text-4xl justify-center items-center flex"
          >
            <img src="/pics/qr.png" className="uppercase" />
          </div>
        </div>
      </form>
    </div>
  );
}