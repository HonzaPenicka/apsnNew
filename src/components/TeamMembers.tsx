import { useState } from 'react';

export default function TeamHighlight() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTextHover = (index: number | null) => setActiveIndex(index);
  const handleImageHover = (index: number | null) => setActiveIndex(index);

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-black/30 h-screen">
      <div className="flex flex-col justify-between px-8 pt-12 gap-8">
        <h2 className="uppercase opacity-100 text-4xl">
          Poznejte náš tým
        </h2>

        <div className="grid grid-cols-2 gap-8 md:pb-12">
          {['Jirka Krupička', 'Sandra Nguyen', 'Daniela Hořáková', 'Gabriel Radovský'].map((name, index) => (
            <div
              key={index}
              className={`grid gap-1 transition-opacity bg-white/20 ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`}
              onMouseEnter={() => handleTextHover(index)}
              onMouseLeave={() => handleTextHover(null)}
            >
              <p className="md:text-xl font-semibold">{name}</p>
              <p>SEO, Owner</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 px-8 pb-12 md:py-12">
        {[0, 1, 2, 3].map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={() => handleImageHover(null)}
            className=""
          >
            <img
              src="/pics/skyscraper.jpeg"
              alt="real estate"
              className={`aspect-square transition-opacity ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
