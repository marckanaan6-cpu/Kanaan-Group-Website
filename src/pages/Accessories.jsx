import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import AccessoriesHero from '../components/AccessoriesHero.jsx'
import AccessoriesCategories from '../components/AccessoriesCategories.jsx'
import AccessoriesCTA from '../components/AccessoriesCTA.jsx'

export default function Accessories() {
  return (
    <>
      <Header />
      <main>
        <AccessoriesHero />
        <AccessoriesCategories />
        <AccessoriesCTA />
      </main>
      <Footer />
    </>
  )
}
