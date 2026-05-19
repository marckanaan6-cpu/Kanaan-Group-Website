import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Heritage from '../components/Heritage.jsx'
import TwoWorlds from '../components/TwoWorlds.jsx'
import InsideTheWorkshop from '../components/InsideTheWorkshop.jsx'
import MaterialsKaindl from '../components/MaterialsKaindl.jsx'
import Atelier from '../components/Atelier.jsx'
import Locations from '../components/Locations.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Header overHero />
      <main>
        <Hero />
        <Heritage />
        <TwoWorlds />
        <InsideTheWorkshop />
        <MaterialsKaindl />
        <Atelier />
        <Locations />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
