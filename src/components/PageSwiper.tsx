import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';

type Page = {
  path: string;
  component: React.ReactNode;
  bgClass: string;
};

export default function PageSwiper({ pages }: { pages: Page[] }) {
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel]}
      direction="vertical"
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      onSwiper={setSwiper}
      className="h-screen"
    >
      {pages.map((p, i) => (
        <SwiperSlide key={p.path} style={{ overflowY: 'auto' }}>
          <div className={`flex h-full flex-col ${p.bgClass}`}>
            {p.component}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
