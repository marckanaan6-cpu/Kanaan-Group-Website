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
          address="Antelias Bikfaya main road, Michel Kanaan Building"
          hours="7:00 AM – 5:30 PM"
          phones={[
            { label: 'Mobile', value: '+961 3 807 020', href: 'tel:+9613807020' },
            { label: 'Tel', value: '+961 4 407 198 ext. 0', href: 'tel:+9614407198,0' },
          ]}
          mapHref="https://maps.app.goo.gl/uTPEwp8RbzsiaTFM6"
          bg="beige"
        />

        <LocationsDetail
          number="02"
          name="Mazraat Yachouh"
          description="Workshop, production, and showroom support — supplying ongoing projects and trade customers."
          address="Industrial City, Mazraat Yachouh"
          hours="8:00 AM – 4:00 PM"
          phones={[
            { label: 'Mobile', value: '+961 3 302 205', href: 'tel:+9613302205' },
            { label: 'Tel', value: '+961 4 924 982', href: 'tel:+9614924982' },
          ]}
          mapHref="https://maps.app.goo.gl/fnp2MsarTnJPoL8X8"
          bg="ivory"
        />

        <LocationsCTA />
      </main>
      <Footer />
    </>
  )
}
