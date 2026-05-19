// Catalogue page — see SECTION components for content.
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import CatalogueHero from '../components/CatalogueHero.jsx'
import CatalogueInside from '../components/CatalogueInside.jsx'
import CatalogueCTA from '../components/CatalogueCTA.jsx'

export default function Catalogue() {
  return (
    <>
      <Header />
      <main>
        <CatalogueHero />
        <CatalogueInside />
        <CatalogueCTA />
      </main>
      <Footer />
    </>
  )
}
