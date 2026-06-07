import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ProjectsHero from '../components/ProjectsHero.jsx'
import ProjectsCategories from '../components/ProjectsCategories.jsx'
import FireRatedDoors from '../components/FireRatedDoors.jsx'
import ProjectsGallery from '../components/ProjectsGallery.jsx'
import ProjectsProcess from '../components/ProjectsProcess.jsx'
import ProjectsCTA from '../components/ProjectsCTA.jsx'

/*
  Projects page sections:
    Hero  →  01 What we build (Categories — names only)
          →  02 Specialty (Fire-rated doors)
          →  03 Project gallery (filterable)
          →  04 How we work (Process)  →  CTA

  ProjectsRecent.jsx still exists in the codebase but is intentionally NOT
  rendered here — the full gallery now covers selected/curated work, so a
  separate "Recent" lead read as duplicative.
*/
export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsCategories />
        <FireRatedDoors />
        <ProjectsGallery />
        <ProjectsProcess />
        <ProjectsCTA />
      </main>
      <Footer />
    </>
  )
}
