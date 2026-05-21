import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import AccessoriesHero from '../components/AccessoriesHero.jsx'
import KolityPartner from '../components/KolityPartner.jsx'
import AccessoryFamilies from '../components/AccessoryFamilies.jsx'
import AccessoriesCTA from '../components/AccessoriesCTA.jsx'
import { ACCESSORY_FAMILIES } from '../data/accessoriesSupplies.js'

/*
  ACCESSORIES — the full Kanaan accessories & supplies world.

  Order:
    Hero            broad Kanaan supplier identity (no Kolity, no green)
    01  Kolity      the strong distributor partner moment (green confined here)
    02  Handles     Kanaan's own range — warm
    03  Tools       Kanaan's own range — warm
    04  Machines    Kanaan's own range — warm
    CTA             Kanaan-focused, warm

  Backgrounds alternate ivory ↔ beige; KolityPartner is its own beige band.
  The three warm sections pass accent="warm" (bronze hover, stone rules) so they
  never read as Kolity-branded. Each shows its grid without a duplicate family
  eyebrow — the section heading already names the group.
*/
const [HANDLES, TOOLS, MACHINES] = ACCESSORY_FAMILIES

export default function Accessories() {
  return (
    <>
      <Header />
      <main>
        <AccessoriesHero />

        <KolityPartner />

        <AccessoryFamilies
          id="accessories-handles"
          bg="ivory"
          number="02"
          label="HANDLES & FINISHING"
          title="The details you touch."
          deck="Door, closet, and cabinet handles, in a range of finishes."
          families={[{ family: '', items: HANDLES.items }]}
          accent="warm"
        />

        <AccessoryFamilies
          id="accessories-tools"
          bg="beige"
          number="03"
          label="TOOLS & SUPPLIES"
          title="What the workshop runs on."
          deck="Measuring tapes, screwdrivers, and everyday professional supplies."
          families={[{ family: '', items: TOOLS.items }]}
          accent="warm"
        />

        <AccessoryFamilies
          id="accessories-machines"
          bg="ivory"
          number="04"
          label="MACHINES & EQUIPMENT"
          title="Equipment for the work."
          deck="Accessory and workshop-supply machines."
          families={[{ family: '', items: MACHINES.items }]}
          accent="warm"
        />

        <AccessoriesCTA />
      </main>
      <Footer />
    </>
  )
}
