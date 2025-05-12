import Link from "next/link";
import { APSNMobile } from "../../public/icon/mobileIcon";
import { BurgerMenu } from "../../public/icon/burgerMenu";
import { useCallback, useState } from "react";

export default function Navbar() {
  const [openMenuServices, setOpenMenuServices] = useState(false);

  const toggleMenuServices = useCallback(() => {
    setOpenMenuServices((state) => !state);
  }, []);

  return (
    <nav className="h-24 mt-4 p-4 flex justify-between items-center bg-white/10 font-medium text-2xl my-4">
      <Link href="/" className="text-xl font-bold">
        <APSNMobile className="w-32" />
      </Link>

      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-yellow-600">
          Domů
        </Link>
        <Link href="/about" className="hover:text-yellow-600">
          O nás
        </Link>
        <Link href="/about" className="hover:text-yellow-600">
          Služby
        </Link>
        <Link href="/contact" className="hover:text-yellow-600">
          Kontakt
        </Link>
      </div>

      <div className="space-x-4 md:hidden justify-center items-center flex">
        <button onClick={toggleMenuServices}>
          <BurgerMenu />
          {openMenuServices && (
            <div className="flex flex-col z-10 space-y-4 absolute top-28 right-4 bg-white/10 shadow-lg py-8 w-2/3 container mx-auto text-right px-4 overflow-y-auto max-h-[calc(100vh-5rem)]">
              {" "}
              <Link href="/" className="hover:text-yellow-600">
                Domů
              </Link>
              <Link href="/about" className="hover:text-yellow-600">
                O nás
              </Link>
              <Link href="/about" className="hover:text-yellow-600">
                Služby
              </Link>
              <Link href="/contact" className="hover:text-yellow-600">
                Kontakt
              </Link>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}
