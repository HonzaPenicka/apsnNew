import Link from "next/link";
import { APSNMobile } from "../../public/icon/mobileIcon";
import { BurgerMenu } from "../../public/icon/burgerMenu";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Navbar({ isActive }: { isActive?: boolean }) {
  const [openMenuServices, setOpenMenuServices] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenuServices = useCallback(() => {
    setOpenMenuServices((state) => !state);
  }, []);

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
    <nav
      ref={containerRef}
      className="h-24 mt-4 p-4 flex justify-between items-center bg-white/10 font-medium text-2xl my-4"
    >
      <Link 
        data-animate
        href="/" 
        className="text-xl font-bold"
      >
        <APSNMobile className="w-32" />
      </Link>

      <div 
        data-animate
        className="space-x-4 md:hidden justify-center items-center flex"
      >
        <button onClick={toggleMenuServices}>
          <BurgerMenu />
          {openMenuServices && (
            <div className="flex flex-col z-10 space-y-4 absolute top-24 right-0.5 bg-white/10 shadow-lg py-4 w-2/3 container mx-auto text-right px-4 overflow-y-auto max-h-[calc(100vh-5rem)]">
              {['Domů', 'O nás', 'Služby', 'Kontakt'].map((item, index) => (
                <Link
                  key={item}
                  data-animate
                  href="/"
                  className="hover:text-yellow-600 focus:hover:text-yellow-600"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}