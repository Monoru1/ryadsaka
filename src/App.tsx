import { Route, Routes, useLocation } from 'react-router-dom'
import { projects } from './data/projects'
import { LanguageProvider } from './i18n/LanguageContext'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { ProjectCaseStudy } from './pages/ProjectCaseStudy'
import { Services } from './pages/Services'
import { Method } from './pages/Method'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

export default function App() {
  const location = useLocation()
  const isEnglish = location.pathname === '/en' || location.pathname.startsWith('/en/')
  const prefix = isEnglish ? '/en' : ''

  return (
    <LanguageProvider locale={isEnglish ? 'en' : 'fr'}>
      <Routes>
        <Route path={prefix || '/'} element={<Home />} />
        <Route path={`${prefix}/projets`} element={<Projects />} />
        {projects.map((p) => (
          <Route
            key={p.slug}
            path={`${prefix}/projets/${p.slug}`}
            element={<ProjectCaseStudy project={p} />}
          />
        ))}
        <Route path={`${prefix}/services`} element={<Services />} />
        <Route path={`${prefix}/methode`} element={<Method />} />
        <Route path={`${prefix}/a-propos`} element={<About />} />
        <Route path={`${prefix}/contact`} element={<Contact />} />
        <Route path={prefix ? '/en/*' : '*'} element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  )
}
