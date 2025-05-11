import PageSwiper from '@/components/PageSwiper'
import HomeContent from '@/components/HomeContent'
import AboutContent from '@/components/AboutContent'


const pages = [
  { path: '/', component: <HomeContent />, bgClass: 'bg-green-200' },
  { path: '/about', component: <AboutContent />, bgClass: 'bg-green-200' },
]

export default function Home() {
  return <PageSwiper pages={pages} />
}
