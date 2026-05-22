import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Heritage from '../components/Heritage.jsx'
import TwoWorlds from '../components/TwoWorlds.jsx'
import WorkshopCapability from '../components/WorkshopCapability.jsx'
import MaterialsKaindl from '../components/MaterialsKaindl.jsx'
import AccessoriesKolity from '../components/AccessoriesKolity.jsx'
import Locations from '../components/Locations.jsx'
import Capacity from '../components/Capacity.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import Footer from '../components/Footer.jsx'

/*
  "The Reveal" homepage.
  Order: Hero → 01 Heritage → 02 Two Worlds → 03 The Workshop → 04 Materials →
  05 Accessories → 06 Locations → 07 Capacity → Closing CTA.
  (InsideTheWorkshop.jsx and Atelier.jsx were merged into WorkshopCapability and
  are no longer rendered.)
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
        <AccessoriesKolity />
        <Locations />
        <Capacity />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
