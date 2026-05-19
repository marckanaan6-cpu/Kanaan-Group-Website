import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import LocationsHero from '../components/LocationsHero.jsx'
import LocationsDetail from '../components/LocationsDetail.jsx'
import LocationsCTA from '../components/LocationsCTA.jsx'

export default function Locations() {
  return (
    <>
      <Header />
      <main>
        <LocationsHero />

        <LocationsDetail
          number="01"
          name="Antelias"
          description="Woodwork, custom interiors, accessories, and professional supplies — the main Kanaan Group showroom and workshop."
          mapHref="https://www.google.com/maps/search/?api=1&query=Kanaan+Group+Antelias"
          bg="beige"
        />

        <LocationsDetail
          number="02"
          name="Mazraat Yachouh"
          description="Workshop, production, and showroom support — supplying ongoing projects and trade customers."
          mapHref="https://www.google.com/maps/search/?api=1&query=Kanaan+Group+Mazraat+Yachouh"
          bg="ivory"
        />

        <LocationsCTA />
      </main>
      <Footer />
    </>
  )
}
