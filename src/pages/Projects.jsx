import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ProjectsHero from '../components/ProjectsHero.jsx'
import ProjectsCategories from '../components/ProjectsCategories.jsx'
import ProjectsRecent from '../components/ProjectsRecent.jsx'
import ProjectsProcess from '../components/ProjectsProcess.jsx'
import ProjectsCTA from '../components/ProjectsCTA.jsx'

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsCategories />
        <ProjectsRecent />
        <ProjectsProcess />
        <ProjectsCTA />
      </main>
      <Footer />
    </>
  )
}
