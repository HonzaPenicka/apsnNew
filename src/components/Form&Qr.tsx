export default function FormQr() {
    return (
        <div className="flex flex-col gap-8 px-8 py-12 bg-yellow-800">
        <h2>
        Zjistěte jaký je tržní potenciál vašeho projektu
        </h2>

        <form className="grid md:grid-cols-2 gap-8" action='https://formspree.io/f/myyrogad' method='POST'>
        <div className="flex flex-col gap-8">
            <h3>
            Nezávazná konzultace
            </h3>
            <p>
            Děkujeme za váš zájem. Zanechte nám kontakt a náš akviziční specialista se Vám brzy ozve. Nebo nám zavolejte rovnou.
            </p>

            <p>
            <a href="tel:+420778403590" className="text-2xl font-bold">+420 778 403 590</a>
            </p>

            <div className="grid grid-cols-2 gap-4">
            <input
                    type='name'
                    name='Jméno'
                    id='form-name'
                    placeholder='Jméno'
                    className='py-3 pl-3 rounded-lg border-2'
                    required
                    maxLength={50}
                />

            <input
                    type='lastName'
                    name='Přijmení'
                    id='form-lastName'
                    placeholder='Příjmení'
                    className='py-3 pl-3 rounded-lg border-2'
                    required
                    maxLength={50}
            />
            </div>

            <input
                                    type='phone'
                                    name='Mobil'
                                    id='form-phone'
                                    placeholder='Telefonní číslo'
                                    className='py-3 pl-3 rounded-lg border-2'
                                    required
                                    maxLength={20}
                        />

                        <input
                                    type='email'
                                    name='E-mail'
                                    id='form-email'
                                    placeholder='Email'
                                    className='py-3 pl-3 rounded-lg border-2'
                                    required
                                    maxLength={80}
                        />

                        <textarea
                                    name='Zpráva'
                                    id='message'
                                    placeholder='Zpráva...'
                                    className='py-3 pl-3 rounded-lg border-2'
                                    required
                                    rows={5}
                        />

                        <div className="flex justify-center">
            <button type='submit' className="border px-8 py-4 hover:font-bold">
                Odeslat
            </button>
            </div>
        </div>

        <div className="aspect-square bg-gray-400 text-4xl justify-center items-center flex">

            <p className="uppercase">scan me</p>

        </div>
        </form>
        </div>
    )
}