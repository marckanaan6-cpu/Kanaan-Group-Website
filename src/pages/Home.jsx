import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Heritage from '../components/Heritage.jsx'
import SiteIndex from '../components/SiteIndex.jsx'
import TwoWorlds from '../components/TwoWorlds.jsx'
import Capacity from '../components/Capacity.jsx'
import WorkshopCapability from '../components/WorkshopCapability.jsx'
import SelectedWork from '../components/SelectedWork.jsx'
import MaterialsKaindl from '../components/MaterialsKaindl.jsx'
import AccessoriesKolity from '../components/AccessoriesKolity.jsx'
import Locations from '../components/Locations.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import Footer from '../components/Footer.jsx'

/*
  "The Reveal" homepage.
  Order: Hero → 01 Heritage → Explore index → 02 Two Worlds → 03 Capacity →
  04 The Workshop → 05 Selected Work → 06 Materials → 07 Accessories →
  08 Locations → Closing CTA.
  ("Selected Work" pulls six picks from the Projects page so the company's
  built output shows on the homepage right after the workshop section.)
*/
export default function Home() {
  return (
    <>
      <Header overHero />
      <main>
        <Hero />
        <Heritage />
        <SiteIndex />
        <TwoWorlds />
        <Capacity />
        <WorkshopCapability />
        <SelectedWork />
        <MaterialsKaindl />
        <AccessoriesKolity />
        <Locations />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
