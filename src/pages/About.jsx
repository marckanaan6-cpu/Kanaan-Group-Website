import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import AboutHero from '../components/AboutHero.jsx'
import AboutFamily from '../components/AboutFamily.jsx'
import AboutAtelier from '../components/AboutAtelier.jsx'
import AboutCTA from '../components/AboutCTA.jsx'

export default function About() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutFamily />
        <AboutAtelier />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
