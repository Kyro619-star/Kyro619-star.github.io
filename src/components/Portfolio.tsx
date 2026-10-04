import { useState, type CSSProperties } from 'react'

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
    blurb: 'Music & Web3 coursework: map a real payout confusion into a simpler artist-facing flow.',
    detail:
      // TODO: replace with final case study link / deck when ready
      'Prototype notes for independent artists who want clearer visibility into licensing choices and earnings. Focus: fewer hidden steps, plainer language, actionable next move.',
    tag: 'MUSIC BIZ',
  },
  {
    id: 'biz-2',
    lane: 'biz',
    title: 'Platform Notes · Music × Web3',
    blurb: 'Short profiles and takeaways from music / art platforms — what works, what is hype.',
    detail:
      // TODO: attach real write-ups
      'Comparative sketches on discovery, rights framing, and creator incentives. Built for quick HR skimming: problem → insight → what I would ship next.',
    tag: 'MUSIC BIZ',
  },
  {
    id: 'biz-3',
    lane: 'biz',
    title: 'Creator Licensing Pitch',
    blurb: 'Helping creators license music clearly so they can publish without legal guesswork.',
    detail:
      'Audience: indie creators on deadline who have hit claims / muted audio before. Promise: clear terms, fast process, credit that sticks.',
    tag: 'MUSIC BIZ',
  },
  {
    id: 'dance-1',
    lane: 'dance',
    title: 'Stage / Cypher Cuts',
    blurb: 'Selected performance moments — energy, musicality, and presence over polish.',
    detail:
      // TODO: embed real clip / event name
      'Placeholder reel slot for live dance work. Direction: short loop that shows musical phrasing and crowd read, not a full showcase dump.',
    tag: 'DANCE',
  },
  {
    id: 'dance-2',
    lane: 'dance',
    title: 'Collab Lab',
    blurb: 'Workshop / collab sessions connecting movement with music-business storytelling.',
    detail:
      'Placeholder for classroom or community sessions where dance becomes a communication tool for artist identity.',
    tag: 'DANCE',
  },
  {
    id: 'song-1',
    lane: 'songs',
    title: 'Original Demo · A-side',
    blurb: 'Self-written sketch — hook-first, bilingual friendly, built to travel.',
    detail:
      // TODO: link streaming / private demo
      'Placeholder for an original track. Intent: one memorable hook + one clear mood so listeners remember the writer, not just the beat.',
    tag: 'SONGS',
  },
  {
    id: 'song-2',
    lane: 'songs',
    title: 'Writer Notes / 词曲手帐',
    blurb: 'Scrapbook of motifs, bilingual lines, and production references.',
    detail:
      'Process artifacts: lyric scraps, melody doodles, and references that show how culture and craft meet before release.',
    tag: 'SONGS',
  },
]

const LANES = [
  { id: 'all', label: 'All', color: 'yellow' },
  { id: 'biz', label: 'Music Business', color: 'pink' },
  { id: 'dance', label: 'Dance', color: 'blue' },
  { id: 'songs', label: 'Original Songs', color: 'lime' },
] as const

export function Portfolio() {
  const [lane, setLane] = useState<(typeof LANES)[number]['id']>('all')
  const [openId, setOpenId] = useState<string | null>(null)

  const visible = ITEMS.filter((item) => lane === 'all' || item.lane === lane)
  const openItem = ITEMS.find((item) => item.id === openId) ?? null

  return (
    <section className="section portfolio" id="work">
      <span className="section-kicker">02 · Portfolio / 作品</span>
      <h2 className="section-title">
        Work that <span className="mark-pink">sticks</span>
      </h2>
      <p className="section-lead">
        Three lanes for a fast skim: Music Business projects first, then dance and
        original songs. Click a sticker for detail.
      </p>

      <div className="lane-tabs" role="tablist" aria-label="Portfolio lanes">
        {LANES.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={lane === tab.id}
            className={`lane-tab ${tab.color} ${lane === tab.id ? 'is-active' : ''}`}
            onClick={() => setLane(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="work-board">
        {visible.map((item, index) => (
          <article
            key={item.id}
            className={`work-sticker lane-${item.lane}`}
            style={{ '--tilt': `${(index % 3) - 1}deg` } as CSSProperties}
          >
            <span className="work-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.blurb}</p>
            <button
              type="button"
              className="work-open"
              onClick={() => setOpenId(item.id)}
            >
              Open note →
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
            <span className="work-tag">{openItem.tag}</span>
            <h3 id="work-modal-title">{openItem.title}</h3>
            <p>{openItem.detail}</p>
          </div>
        </div>
      )}
    </section>
  )
}
