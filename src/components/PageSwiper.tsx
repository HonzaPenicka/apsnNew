// PageSwiper.tsx
import { useState } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

type Page = {
  path: string;
  component: React.ReactElement<{ isActive?: boolean }>;
  bgClass: string;
};

// PageSwiper.tsx
export default function PageSwiper({ pages }: { pages: Page[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-screen">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Navigation, Pagination, Mousewheel]}
        direction="vertical"
        pagination={{ clickable: true }}
        mousewheel={true}
        className="h-full"
        // Nové nastavení pro mobilní touch events
        touchStartPreventDefault={false}
        allowTouchMove={true}
        preventInteractionOnTransition={false}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        // Přidejte tyto CSS vlastnosti
        style={{
          touchAction: 'pan-y',
          userSelect: 'text'
        }}
      >
        {pages.map((page, index) => (
          <SwiperSlide 
            key={page.path} 
            style={{ 
              overflowY: "auto",
              // Povolení interakce s obsahem
              touchAction: 'manipulation',
              userSelect: 'auto'
            }}
          >
            <div className={`flex h-full flex-col ${page.bgClass}`}>
              {React.cloneElement(page.component, {
                isActive: activeIndex === index
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev-custom" />
      <div className="swiper-button-next-custom" />
    </div>
  );
}