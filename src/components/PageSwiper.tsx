import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';

type Page = {
  path: string;
  component: React.ReactNode;
  bgClass: string;
};

export default function PageSwiper({ pages }: { pages: Page[] }) {
  const router = useRouter();
  const [swiper, setSwiper] = useState<any>(null);
  const locked = useRef(false);

  useEffect(() => {
    if (!swiper || locked.current) return;
    
    const index = pages.findIndex(p => p.path === router.pathname);
    if (index !== -1 && swiper.activeIndex !== index) {
      locked.current = true;
      swiper.slideTo(index, 0, false);
      setTimeout(() => (locked.current = false), 0);
    }
  }, [router.pathname, swiper]);

  const onSlideChange = (s: any) => {
    const target = pages[s.activeIndex].path;
    if (!locked.current && router.pathname !== target) {
      locked.current = true;
      router.push(target, undefined, { shallow: true }).finally(() => {
        setTimeout(() => (locked.current = false), 0);
      });
    }
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel]}
      direction="vertical"
      onSwiper={setSwiper} 
      onSlideChange={onSlideChange}
      className='h-full'
      pagination={{ clickable: true }}
      style={{ height: '100vh' }}
    >
      {pages.map((p, i) => (
        <SwiperSlide key={i} style={{ overflowY: 'auto' }}>
          <div className={`flex px-4 h-full container mx-auto ${p.bgClass}`}>
            {p.component}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}