import { Facebook } from "../../public/icon/Facebook";
import { Instagram } from "../../public/icon/Instagram";
import { LinkedIn } from "../../public/icon/LinkedIn";

export default function Footer() {
  return (
    <div className="grid md:grid-cols-4 px-8 py-12 bg-white/10 p-4 gap-8">
      <div className="text-2xl font-semibold">Připojte se!</div>

      <div className="grid">
        <p>Hlavní kancelář</p>

        <p>123 Anywhere St.</p>

        <p>Jakékoliv Město, ST 12345</p>
      </div>

      <div className="grid">
        <p>Hlavní kancelář</p>

        <p>123 Anywhere St.</p>

        <p>Jakékoliv Město, ST 12345</p>
      </div>

      <div className="grid grid-cols-3">
        <Facebook />

        <Instagram />

        <LinkedIn />
      </div>
    </div>
  );
}
