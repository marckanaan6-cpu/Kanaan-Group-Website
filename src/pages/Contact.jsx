import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ContactHero from '../components/ContactHero.jsx'
import ContactInfo from '../components/ContactInfo.jsx'

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}
