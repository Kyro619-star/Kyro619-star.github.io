import { useCallback, useState } from 'react'
import { Bio } from './components/Bio'
import { Contact } from './components/Contact'
import { DiaryLoader } from './components/DiaryLoader'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { SiteNav } from './components/SiteNav'
import { SvgDefs } from './components/SvgDefs'
import './styles/site.css'

export default function App() {
  const [ready, setReady] = useState(false)
  const finishIntro = useCallback(() => setReady(true), [])

  return (
    <div className={`site-shell ${ready ? '' : 'is-locked'}`}>
      <SvgDefs />
      {!ready && <DiaryLoader onDone={finishIntro} />}

      <div className={`site-main ${ready ? 'is-in' : ''}`}>
        <SiteNav />
        <main>
          <Hero />
          <Bio />
          <Portfolio />
          <Contact />
        </main>
        <footer className="site-footer">
          <p>Kyro Zhao · Berklee Music Business · a diary, not a brochure</p>
        </footer>
      </div>
    </div>
  )
}
