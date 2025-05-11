import PageSwiper from '@/components/PageSwiper'
import HomeContent from '@/components/HomeContent'
import AboutContent from '@/components/AboutContent'
import Services from '@/components/ServicesContent'
import FormQr from '@/components/Form&Qr'
import TeamHighlight from '@/components/TeamMembers'
import WorkWithUs from '@/components/WorkWithUs'

const pages = [
  { path: '/', component: <HomeContent />, bgClass: "bg-[url('/pics/skyscraper.jpeg')] bg-cover bg-top"},
  { path: '/about', component: <AboutContent />,  bgClass: "bg-[url('/pics/skyscraper.jpeg')] bg-cover bg-top"},
  { path: '/services', component: <Services />,  bgClass: "bg-[url('/pics/skyscraper.jpeg')] bg-cover bg-top"},
  { path: '/contact', component: <FormQr />,  bgClass: "bg-[url('/pics/skyscraper.jpeg')] bg-cover bg-top"},
  { path: '/team', component: <TeamHighlight />,  bgClass: "bg-[url('/pics/skyscraper.jpeg')] bg-cover bg-top"},
  { path: '/workWithUs', component: <WorkWithUs />,  bgClass: "bg-[url('/pics/skyscraper.jpeg')] bg-cover bg-top"},
]

export default function Home() {
  return <PageSwiper pages={pages} />
}
