import { Route, Routes } from 'react-router-dom'
import { projects } from './data/projects'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { ProjectCaseStudy } from './pages/ProjectCaseStudy'
import { Services } from './pages/Services'
import { Method } from './pages/Method'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projets" element={<Projects />} />
      {projects.map((p) => (
        <Route
          key={p.slug}
          path={`/projets/${p.slug}`}
          element={<ProjectCaseStudy project={p} />}
        />
      ))}
      <Route path="/services" element={<Services />} />
      <Route path="/methode" element={<Method />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
