// Catalogue page — see SECTION components for content.
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import CatalogueHero from '../components/CatalogueHero.jsx'
import CatalogueLibrary from '../components/CatalogueLibrary.jsx'
import CatalogueCTA from '../components/CatalogueCTA.jsx'

export default function Catalogue() {
  return (
    <>
      <Header />
      <main>
        <CatalogueHero />
        <CatalogueLibrary />
        <CatalogueCTA />
      </main>
      <Footer />
    </>
  )
}
