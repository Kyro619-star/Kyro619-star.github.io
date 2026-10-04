import { useEffect, useRef, useState } from 'react'
import { MarkerStroke, VinylRough } from './Doodles'

type Item = {
  id: string
  lane: 'biz' | 'dance' | 'songs'
  title: string
  blurb: string
  detail: string
  tag: string
}

const ITEMS: Item[] = [
  {
    id: 'biz-1',
    lane: 'biz',
    title: 'Rights / Royalty Clarity Flow',
    blurb:
      'Music & Web3 coursework: map a real payout confusion into a simpler artist-facing flow.',
    detail:
      // TODO: replace with final case study link / deck when ready
      'Prototype notes for independent artists who want clearer visibility into licensing choices and earnings. Focus: fewer hidden steps, plainer language, actionable next move.',
    tag: 'Music Biz',
  },
  {
    id: 'biz-2',
    lane: 'biz',
    title: 'Platform Notes · Music × Web3',
    blurb:
      'Short profiles and takeaways from music / art platforms — what works, what is hype.',
    detail:
      // TODO: attach real write-ups
      'Comparative sketches on discovery, rights framing, and creator incentives. Built for quick skimming: problem → insight → what I would ship next.',
    tag: 'Music Biz',
  },
  {
    id: 'biz-3',
    lane: 'biz',
    title: 'Creator Licensing Pitch',
    blurb:
      'Helping creators license music clearly so they can publish without legal guesswork.',
    detail:
      'Audience: indie creators on deadline who have hit claims / muted audio before. Promise: clear terms, fast process, credit that sticks.',
    tag: 'Music Biz',
  },
  {
    id: 'dance-1',
    lane: 'dance',
    title: 'Stage / Cypher Cuts',
    blurb:
      'Selected performance moments — energy, musicality, and presence over polish.',
    detail:
      // TODO: embed real clip / event name
      'Placeholder reel slot for live dance work. Direction: short loop that shows musical phrasing and crowd read, not a full showcase dump.',
    tag: 'Dance',
  },
  {
    id: 'dance-2',
    lane: 'dance',
    title: 'Collab Lab',
    blurb:
      'Workshop sessions connecting movement with music-business storytelling.',
    detail:
      'Placeholder for classroom or community sessions where dance becomes a communication tool for artist identity.',
    tag: 'Dance',
  },
  {
    id: 'song-1',
    lane: 'songs',
    title: 'Original Demo · A-side',
    blurb: 'Self-written sketch — hook-first, built to travel.',
    detail:
      // TODO: link streaming / private demo
      'Placeholder for an original track. Intent: one memorable hook + one clear mood so listeners remember the writer, not just the beat.',
    tag: 'Songs',
  },
  {
    id: 'song-2',
    lane: 'songs',
    title: 'Writer Notes',
    blurb: 'Motifs, lines, and production references from the scrapbook.',
    detail:
      'Process artifacts: lyric scraps, melody doodles, and references that show how culture and craft meet before release.',
    tag: 'Songs',
  },
]

const LANES = [
  { id: 'all', label: 'All' },
  { id: 'biz', label: 'Music Business' },
  { id: 'dance', label: 'Dance' },
  { id: 'songs', label: 'Original Songs' },
] as const

export function Portfolio() {
  const [lane, setLane] = useState<(typeof LANES)[number]['id']>('all')
  const [openId, setOpenId] = useState<string | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [listIn, setListIn] = useState(false)

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setListIn(true)
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const visible = ITEMS.filter((item) => lane === 'all' || item.lane === lane)
  const openItem = ITEMS.find((item) => item.id === openId) ?? null

  return (
    <section className="section portfolio" id="work">
      <span className="section-kicker hand-label">02 · Work</span>
      <h2 className="section-title">
        Work that{' '}
        <span className="type-paint pink-wash">sticks</span>
      </h2>
      <p className="section-lead">
        Music Business first, then dance and original songs. Open a line for
        detail — journal entries, not product cards.
      </p>

      <div className="lane-tabs" role="tablist" aria-label="Portfolio lanes">
        {LANES.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={lane === tab.id}
            className={`lane-tab ${lane === tab.id ? 'is-active' : ''}`}
            onClick={() => setLane(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        ref={listRef}
        className={`work-journal ${listIn ? 'is-inview' : ''}`}
      >
        <VinylRough className="journal-deco" />
        {visible.map((item, index) => (
          <article
            key={item.id}
            className={`journal-row lane-${item.lane}`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="work-tag hand-label">{item.tag}</span>
            <div className="journal-main">
              <h3>{item.title}</h3>
              <MarkerStroke
                className="title-underline"
                color={
                  item.lane === 'biz'
                    ? '#ff2d95'
                    : item.lane === 'dance'
                      ? '#1e5eff'
                      : '#8dff3a'
                }
              />
              <p>{item.blurb}</p>
            </div>
            <button
              type="button"
              className="work-open"
              onClick={() => setOpenId(item.id)}
            >
              Read more
            </button>
          </article>
        ))}
      </div>

      {openItem && (
        <div
          className="work-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-modal-title"
        >
          <button
            type="button"
            className="work-modal-backdrop"
            aria-label="Close"
            onClick={() => setOpenId(null)}
          />
          <div className="work-modal-sheet">
            <button
              type="button"
              className="work-modal-close"
              onClick={() => setOpenId(null)}
            >
              ×
            </button>
            <span className="work-tag hand-label">{openItem.tag}</span>
            <h3 id="work-modal-title">{openItem.title}</h3>
            <p>{openItem.detail}</p>
          </div>
        </div>
      )}
    </section>
  )
}
