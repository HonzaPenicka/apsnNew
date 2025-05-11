import Link from 'next/link'
import { APSNMobile } from '../../public/icon/mobileIcon'
import { BurgerMenu } from '../../public/icon/burgerMenu'
import { useCallback, useState } from 'react';

export default function Navbar() {

  const [openMenuServices, setOpenMenuServices] = useState(false);

	const toggleMenuServices = useCallback(() => {
		setOpenMenuServices((state) => !state);
	}, []);
  
  return (
    <nav className="shadow-md py-4 px-4 lg:mx-4 flex justify-between items-center my-4 bg-blue-500 font-medium text-2xl">
      <Link href="/" className="text-xl font-bold">
        <APSNMobile className="w-32"/>
      </Link>

      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-yellow-600">Domů</Link>
        <Link href="/about" className="hover:text-yellow-600">O nás</Link>
        <Link href="/about" className="hover:text-yellow-600">Služby</Link>
        <Link href="/contact" className="hover:text-yellow-600">Kontakt</Link>
      </div>

      <div className="space-x-4 md:hidden justify-center items-center flex">
        <button onClick={toggleMenuServices}>
          <BurgerMenu />
          {openMenuServices && (
                <div className="flex flex-col z-10 space-y-4 absolute top-20 right-4 bg-green-400 shadow-lg rounded-lg py-8 w-2/3 container mx-auto text-right px-4 overflow-y-auto max-h-[calc(100vh-5rem)]">                  <Link href="/" className="hover:text-yellow-600">Domů</Link>
                  <Link href="/about" className="hover:text-yellow-600">O nás</Link>
                  <Link href="/about" className="hover:text-yellow-600">Služby</Link>
                  <Link href="/contact" className="hover:text-yellow-600">Kontakt</Link>
                </div>
          )}
        </button>

      </div>
    </nav>
  )
}
