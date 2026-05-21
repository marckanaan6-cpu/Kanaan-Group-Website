import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Heritage from '../components/Heritage.jsx'
import TwoWorlds from '../components/TwoWorlds.jsx'
import WorkshopCapability from '../components/WorkshopCapability.jsx'
import MaterialsKaindl from '../components/MaterialsKaindl.jsx'
import Locations from '../components/Locations.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import Footer from '../components/Footer.jsx'

/*
  "The Reveal" homepage — staged build.
  Stage 1: merged the former InsideTheWorkshop + Atelier sections into the
  single WorkshopCapability chapter (03). InsideTheWorkshop.jsx and Atelier.jsx
  are kept in the repo but no longer rendered here. Materials (04) and the
  Locations directory (05) stay in place until later stages add the
  Accessories·Kolity and Capacity & Two Branches sections.
*/
export default function Home() {
  return (
    <>
      <Header overHero />
      <main>
        <Hero />
        <Heritage />
        <TwoWorlds />
        <WorkshopCapability />
        <MaterialsKaindl />
        <Locations />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
