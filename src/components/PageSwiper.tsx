import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

type Page = {
  path: string;
  component: React.ReactNode;
  bgClass: string;
};

export default function PageSwiper({ pages }: { pages: Page[] }) {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        direction="vertical"
        pagination={{ clickable: true }}
        mousewheel={true}
        className="h-full"
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
      >
        {pages.map((p) => (
          <SwiperSlide key={p.path} style={{ overflowY: "auto" }}>
            <div className={`flex h-full flex-col ${p.bgClass}`}>
              {p.component}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation arrows */}
      <div className="swiper-button-prev-custom" />
      <div className="swiper-button-next-custom" />
    </div>
  );
}
