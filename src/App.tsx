import { useCallback, useState } from 'react'
import { Bio } from './components/Bio'
import { Companion } from './components/Companion'
import { Contact } from './components/Contact'
import { DiaryLoader } from './components/DiaryLoader'
import { FlowerField } from './components/FlowerField'
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
      <FlowerField />
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
          <p>Kyro Zhao · Berklee Music Business · handmade, not chrome</p>
        </footer>
      </div>

      <Companion visible={ready} />
    </div>
  )
}
