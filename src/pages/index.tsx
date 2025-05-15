import PageSwiper from "@/components/PageSwiper";
import HomeContent from "@/components/HomeContent";
import AboutContent from "@/components/AboutContent";
import Services from "@/components/ServicesContent";
import FormQr from "@/components/Form&Qr";
import TeamHighlight from "@/components/TeamMembers";
import WorkWithUs from "@/components/WorkWithUs";
import Partners from "@/components/Partners";

const pages = [
  {
    path: "/",
    component: <HomeContent />,
    bgClass: "bg-[url('/pics/skyscraper2.jpg')] bg-cover bg-top",
  },
  {
    path: "/about",
    component: <AboutContent />,
    bgClass: "bg-[url('/pics/stripes.jpg')] bg-cover bg-top",
  },
  {
    path: "/services",
    component: <Services />,
    bgClass: "bg-[url('/pics/worms.jpg')] bg-cover bg-top",
  },
  {
    path: "/contact",
    component: <FormQr />,
    bgClass: "bg-[url('/pics/modern.jpg')] bg-cover bg-top",
  },
  {
    path: "/team",
    component: <TeamHighlight />,
    bgClass: "bg-[url('/pics/cup.jpg')] bg-cover bg-top",
  },
  {
    path: "/partners",
    component: <Partners />,
    bgClass: "bg-[url('/pics/hands.jpg')] bg-cover bg-top",
  },
  {
    path: "/workWithUs",
    component: <WorkWithUs />,
    bgClass: "bg-[url('/pics/black.jpg')] bg-cover bg-top",
  },
];

export default function Home() {
  return <PageSwiper pages={pages} />;
}
