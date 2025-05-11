import AnimatedNumber from "./AnimatedNumber";
import Footer from "./Footer";

export default function WorkWithUs() {
    return (
        <div className="grid">
        <div className="gid md:grid-cols-2 gap-8 px-4 py-12 bg-black/30">
            <div className="px-4">
                <h2 className="text-4xl font-semibold">
                    Proč pracovat s námi?
                </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                <div className="grid">

            </div>

        <div className="grid md:grid-cols-2 gap-8 p-4 md:px-8 md:py-12 bg-white/20">
            <div className="grid gap-4">
            <h3 className="text-4xl font-semibold flex">
                <p>
                    #
                </p>
                <AnimatedNumber to={1} duration={2000} />
            </h3>

            <p>
                Realitní skupina ve Wheltonu v letech 2022 - 2025
            </p>
            </div>

            <div className="grid gap-4">
            <h3 className="text-4xl font-semibold flex">
                <AnimatedNumber to={18} duration={2000} />
                <p>
                    +
                </p>
            </h3>

            <p>
                Let zkušeností v realitách
            </p>
            </div>

            <div className="grid gap-4">
            <h3 className="text-4xl font-semibold flex gap-2">
                <AnimatedNumber to={10} duration={2000} />
            </h3>

            <p>
                Licencovaných realitních makléřů
            </p>
            </div>

            <div className="grid gap-4">
            <h3 className="text-4xl font-semibold flex">
                <p>
                    $
                </p>
                <AnimatedNumber to={1000} duration={2000} />
            </h3>

            <p>
                Průměrná úspora 1 000 USD na každých 100 000 USD pro naše kupující
            </p>
            </div>
        </div>

        </div>
        </div>
        <Footer />
        </div>
    )
}