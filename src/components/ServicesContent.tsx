import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

type ContentItem = string | { subheading: string; list: string[] };

const SERVICE_COLUMNS = [
  {
    title: "Rozprodej projektu",
    content: [
      "Poskytneme Vám naši síť se 100.000 retailových investorů s před schváleným financováním.",
      "Strategicky rozdělujeme projekt - po částech nebo jako celek.",
      "Tvoříme cílenou marketingovou a prodejní strategii.",
      "Zajišťujeme kompletní právní a administrativní servis."
    ]
  },
  {
    title: "Předprodej",
    content: [
      "Přístup k bonitním 100.000 investorům.",
      "Transparentní a bezpečný prodejní proces.",
      "Zajistíme Vám marketingový, právní a administrativní outsourcing Našeho realitního oddělení.",
      {
        subheading: "Jak to funguje?",
        list: [
          "Exkluzivně představíme váš projekt vybraným investorům.",
          "Otestujeme trh a stanovíme optimální cenu.",
          "Získáte reálné nabídky bez čekání (z naší interní sítě klientů)."
        ]
      }
    ]
  },
  {
    title: "Činžovní domy",
    content: [
      "Každý chce chytře investovat do bytových domů se stabilním výnosem – my víme, jak to proměnit ve skutečnost.",
      "Stabilita, dlouhodobá hodnota a příjem.",
      "Hledáte bytový dům? Zavolejte nám!",
      "Pomůžeme s výběrem, financováním i správou nemovitosti."
    ]
  }
];

export default function Services({ isActive }: { isActive?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const animationTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  // 1. Detekce mobilního zařízení
  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setIsMobile(isMobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 2. Animace obsahu
  const animateElements = (parent: HTMLElement | null) => {
    if (!parent) return;
    const elements = parent.querySelectorAll<HTMLElement>('[data-animate]');
    elements.forEach((el, index) => {
      el.classList.remove('animate-in');
      void el.offsetWidth; // Reset animace
      animationTimeout.current = setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 150);
    });
  };

  // 3. Reset animací
  const resetAnimations = () => {
    containerRef.current?.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.remove('animate-in');
    });
  };

  // 4. Hlavní efekt pro animace
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const target = isMobile ? swiperRef.current?.el : containerRef.current;
    if (target) animateElements(target);

    return () => {
      if (animationTimeout.current) clearTimeout(animationTimeout.current);
      resetAnimations();
    };
  }, [isActive, isMobile]);

  // 5. Obsluha změny slidu
  const handleSlideChange = (swiper: SwiperType) => {
    const activeSlide = swiper.slides[swiper.activeIndex] as HTMLElement;
    animateElements(activeSlide);
  };

  // 6. Renderování obsahu
  const renderContent = (item: ContentItem, index: number) => {
    if (typeof item === "string") {
      return <div key={index} data-animate>{item}</div>;
    }
    return (
      <div key={index} data-animate>
        <h3 data-animate className="text-2xl font-semibold">
          {item.subheading}
        </h3>
        <ol data-animate className="list-decimal list-inside mt-4">
          {item.list.map((point, i) => (
            <li key={i} data-animate>{point}</li>
          ))}
        </ol>
      </div>
    );
  };

  // 7. Hlavní render
  return (
    <div ref={containerRef} className="bg-black/40 px-4 md:px-8 lg:px-16 h-screen pt-12">
      {isMobile ? (
        <Swiper
          key={String(isMobile)}
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
            setTimeout(() => animateElements(swiper.el), 100);
          }}
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          spaceBetween={16}
          modules={[Navigation, Pagination, Mousewheel]}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination-custom', // Přidáno
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          mousewheel={{
            forceToAxis: true, // Přidáno
          }}
          className="h-full"
          touchStartPreventDefault={false} // Přidáno
        >
          {SERVICE_COLUMNS.map((column, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-8 md:px-8 lg:px-16 pt-4 md:pt-0 md:py-12 hover:bg-[#28456C] h-full">
                <h2 className="text-3xl md:text-4xl font-semibold">{column.title}</h2>
                {column.content.map((item, i) => renderContent(item, i))}
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next-custom"></div>
          <div className="swiper-button-prev-custom"></div>
        </Swiper>
      ) : (
        <div className="grid md:grid-cols-3 gap-4 h-full">
          {SERVICE_COLUMNS.map((column, index) => (
            <div 
              key={index}
              className="flex flex-col gap-8 md:text-xl px-8 md:py-12 hover:bg-[#28456C]"
            >
              <h2 className="text-3xl md:text-4xl font-semibold">{column.title}</h2>
              {column.content.map((item, i) => renderContent(item, i))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}