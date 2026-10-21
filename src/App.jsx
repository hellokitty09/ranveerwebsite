import { useEffect, useState } from 'react'
import './index.css'

const repos = [
  { name: 'bags', language: 'TypeScript', type: 'RECENT REPOSITORY', description: 'A TypeScript project in active development.', visual: 'bags', number: '01' },
  { name: 'Randhir', language: 'HTML', type: 'Product', description: 'Tour management, thoughtfully brought online.', visual: 'randhir', number: '02' },
  { name: 'arc-one-', language: '—', type: 'RECENT REPOSITORY', description: 'A recently updated public repository.', visual: 'arc', number: '03' },
  { name: 'solver', language: 'Python', type: 'PYTHON PROJECT', description: 'A Python project from the open repository collection.', visual: 'solver', number: '04' },
  { name: 'forecast-trust-layer', language: 'TypeScript', type: 'AI · DATA', description: 'A TypeScript project exploring forecasts and trust.', visual: 'forecast', number: '05' },
  { name: 'sih-2026', language: 'Python', type: 'HACKATHON', description: 'A repository connected to the 2026 Smart India Hackathon.', visual: 'sih', number: '06' },
  { name: 'maha-gr-align', language: 'Python', type: 'AI · Public good', description: 'RAG-powered legal chat over Maharashtra Government Resolutions.', visual: 'maha', number: '07' },
  { name: 'synthcity-protocol', language: 'TypeScript', type: 'AI · Web3', description: 'An autonomous AI prediction protocol on Base Sepolia.', visual: 'synth', number: '08' },
  { name: 'boooks', language: 'JavaScript', type: 'Product', description: 'An editorial journal and social reading companion.', visual: 'books', number: '09' },
]

const featured = [
  { name: 'SynthCity', href: 'synthcity-protocol', kind: 'AI · WEB3', copy: 'An autonomous prediction protocol, built for Base Sepolia.', art: 'synth' },
  { name: 'Maha GR Alignment', href: 'maha-gr-align', kind: 'AI · PUBLIC GOOD', copy: 'A RAG-powered way to ask questions across Maharashtra Government Resolutions.', art: 'maha' },
  { name: 'Boooks', href: 'boooks', kind: 'PRODUCT · READING', copy: 'An editorial journal for a more social reading life.', art: 'books' },
  { name: 'Forecast Trust Layer', href: 'forecast-trust-layer', kind: 'AI · DATA', copy: 'Exploring how to make forecasts more transparent and trustworthy.', art: 'forecast' },
]

const themeChoices = [
  { value: 'light', mark: '◻', label: 'LIGHT' },
  { value: 'jungle', mark: '♧', label: 'JUNGLE' },
  { value: 'moon', mark: '◐', label: 'MOON' },
]

function ThemePicker({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="theme-picker">
      <button className="theme-trigger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Choose a color theme">
        <span className="theme-glyph">✳</span><span>THEME</span><span className="theme-caret">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="theme-menu" role="group" aria-label="Color themes">
        {themeChoices.map(choice => <button key={choice.value} className={theme === choice.value ? 'selected' : ''} onClick={() => { setTheme(choice.value); setOpen(false) }}>
          <span>{choice.mark}</span>{choice.label}{theme === choice.value && <b>✓</b>}
        </button>)}
      </div>}
    </div>
  )
}

function ProjectArt({ type, small = false }) {
  return <div className={`project-art art-${type}${small ? ' art-small' : ''}`} aria-hidden="true">
    <div className="art-grain" />
    {type === 'synth' && <><div className="synth-orbit orbit-one" /><div className="synth-orbit orbit-two" /><div className="synth-core">S</div><span className="art-caption">PREDICTION / PROTOCOL</span></>}
    {type === 'maha' && <><div className="doc-stack"><i /><i /><i /></div><div className="maha-seal">म</div><span className="art-caption">GOVERNMENT RESOLUTIONS</span></>}
    {type === 'books' && <><div className="book-cover"><span>BOOOKS</span><b>A life<br/>in pages.</b><small>READ · KEEP · SHARE</small></div><span className="art-caption">A SOCIAL READING JOURNAL</span></>}
    {type === 'forecast' && <><div className="forecast-sun" /><div className="forecast-line line-a" /><div className="forecast-line line-b" /><div className="forecast-line line-c" /><span className="art-caption">SIGNAL / CONFIDENCE</span></>}
    {type === 'bags' && <><div className="bag-shape"><i /></div><span className="art-caption">OBJECTS FOR EVERY DAY</span></>}
    {type === 'randhir' && <><div className="road-line" /><div className="trip-card"><small>YOUR NEXT TRIP</small><b>Somewhere<br/>worth going.</b><span>↗</span></div><span className="art-caption">TOUR MANAGEMENT</span></>}
    {type === 'arc' && <><div className="arc-mark">a.</div><div className="arc-ring" /><span className="art-caption">IDEAS IN MOTION</span></>}
    {type === 'solver' && <><div className="solver-grid"><b>∑</b><b>↗</b><b>∴</b><b>+</b></div><span className="art-caption">TOOLS THAT THINK</span></>}
    {type === 'sih' && <><div className="sih-shape">26</div><span className="art-caption">BUILDING FOR WHAT'S NEXT</span></>}
  </div>
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('ranveer-theme') || 'light')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('ranveer-theme', theme)
  }, [theme])

  return <div className="site-shell">
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label="Ranveer Maske, home">RM<span>✳</span></a>
      <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
        <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a>
        <a href="#repositories" onClick={() => setMenuOpen(false)}>OPEN SOURCE</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
      </nav>
      <div className="nav-end"><ThemePicker theme={theme} setTheme={setTheme} /><a className="availability" href="https://github.com/hellokitty09"><span /> ON GITHUB</a></div>
      <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'CLOSE ×' : 'MENU +'}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-topline"><span>RANVEER MASKE — SOFTWARE DEVELOPER</span><span>BUILDING WITH CURIOSITY, SHIPPING WITH INTENT</span></div>
        <div className="hero-content">
          <div className="hero-title-wrap">
            <p className="eyebrow">SOFTWARE DEVELOPER · OPEN SOURCE</p>
            <h1><span className="title-line">CODE</span><span className="title-line title-indent">INTO</span><span className="title-line title-outline">REALITY<span className="asterisk">✳</span></span></h1>
            <div className="hero-summary"><span className="arrow-down">↘</span><p>I’m Ranveer. I build curious things at the crossroads of <em>AI, web3, and the everyday.</em></p></div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-frame"><img src="https://avatars.githubusercontent.com/u/183717166?v=4" alt="Ranveer Maske's GitHub profile avatar" /><span className="portrait-stamp">HELLO,<br/>I’M HERE.</span></div>
            <div className="portrait-note"><span>✳</span><span>MAKE SOMETHING<br/>THAT MATTERS</span><span>↗</span></div>
          </div>
        </div>
        <div className="hero-bottom"><a href="#about"><span className="scroll-mark">↓</span> SCROLL TO EXPLORE</a><span>INDEPENDENTLY BUILT · 2026</span></div>
        <div className="hero-word-run" aria-hidden="true"><div>THINK · MAKE · ITERATE · THINK · MAKE · ITERATE ·&nbsp;</div></div>
      </section>

      <section className="about-section" id="about">
        <div className="section-label"><span>01 — ABOUT</span><h2>A little<br/><em>about me.</em></h2></div>
        <div className="about-copy">
          <p className="about-lead">I am Ranveer — a builder and lifelong tinkerer with a soft spot for <em>big ideas and good interfaces.</em></p>
          <p className="about-body">My GitHub is where I try things out: AI tools for public information, protocols for prediction, reading products, and whatever interesting problem finds me next. Each project starts with a question and grows one commit at a time.</p>
          <div className="about-meta"><span>WHAT I’M INTO</span><div><b>ARTIFICIAL INTELLIGENCE</b><b>OPEN SOURCE</b><b>WEB3</b><b>PRODUCT ENGINEERING</b></div></div>
          <a className="text-link" href="https://github.com/hellokitty09?tab=repositories">GET TO KNOW MY GITHUB <span>↗</span></a>
        </div>
      </section>

      <div className="type-marquee" aria-label="Building products at the crossroads of AI, software, and web3"><div>BUILDING PRODUCTS AT THE CROSSROADS OF AI <span>✳</span> SOFTWARE <span>✳</span> WEB3 <span>✳</span>&nbsp;</div><div aria-hidden="true">BUILDING PRODUCTS AT THE CROSSROADS OF AI <span>✳</span> SOFTWARE <span>✳</span> WEB3 <span>✳</span>&nbsp;</div></div>

      <section className="featured-section" id="projects">
        <div className="featured-heading"><div><span className="section-kicker">02 — SELECTED PROJECTS</span><h2>Made to<br/><em>work things out.</em></h2></div><p>Small experiments, useful tools, and ambitious ideas.<br/>A few things I’ve been building lately.</p></div>
        <div className="featured-grid">
          {featured.map((project, i) => <a className={`featured-card featured-${project.art}`} href={`https://github.com/hellokitty09/${project.href}`} target="_blank" rel="noreferrer" key={project.href}>
            <div className="featured-image"><ProjectArt type={project.art} /><span className="project-number">0{i + 1}</span><span className="open-arrow">↗</span></div>
            <div className="featured-info"><div><span className="project-kind">{project.kind}</span><h3>{project.name}</h3><p>{project.copy}</p></div><span className="repo-arrow">↗</span></div>
          </a>)}
        </div>
      </section>

      <div className="bold-marquee" aria-hidden="true"><div>KEEP BUILDING <span>✳</span> STAY CURIOUS <span>✳</span> KEEP BUILDING <span>✳</span> STAY CURIOUS <span>✳</span>&nbsp;</div></div>

      <section className="repositories-section" id="repositories">
        <div className="repo-heading"><div><span className="section-kicker">03 — THE OPEN WORK</span><h2>There’s more<br/><em>where that came from.</em></h2></div><a className="repo-count" href="https://github.com/hellokitty09?tab=repositories"><strong>29</strong><span>PUBLIC REPOSITORIES<br/>ON GITHUB ↗</span></a></div>
        <div className="repo-list">
          {repos.map(repo => <a className="repo-row" href={`https://github.com/hellokitty09/${repo.name}`} target="_blank" rel="noreferrer" key={repo.name}>
            <span className="repo-index">{repo.number}</span><div className="repo-thumb"><ProjectArt type={repo.visual} small /></div><div className="repo-main"><span className="repo-type">{repo.type}</span><h3>{repo.name}</h3><p>{repo.description}</p></div><span className="repo-language">{repo.language !== '—' && <i className={`language-dot lang-${repo.language.toLowerCase().replace(/[^a-z]/g, '')}`} />}{repo.language}</span><span className="repo-chevron">↗</span>
          </a>)}
        </div>
        <a className="all-repos" href="https://github.com/hellokitty09?tab=repositories" target="_blank" rel="noreferrer"><span>VIEW ALL 29 REPOSITORIES</span><b>↗</b></a>
      </section>

      <section className="closing-section" id="contact">
        <div className="closing-top"><span>GOOD IDEAS START SOMEWHERE.</span><span>HAVE ONE IN MIND?</span></div>
        <h2>Let’s make<br/><em>something real.</em></h2>
        <a className="closing-button" href="https://github.com/hellokitty09" target="_blank" rel="noreferrer"><span>FIND ME ON GITHUB</span><b>↗</b></a>
        <div className="closing-doodle" aria-hidden="true">✳</div>
      </section>
    </main>

    <footer className="footer">
      <a className="footer-mark" href="#home">RM<span>✳</span></a><div className="footer-note">MADE WITH CURIOSITY<br/>AND A LOT OF COFFEE.</div><div className="footer-links"><a href="https://github.com/hellokitty09" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://github.com/hellokitty09?tab=repositories" target="_blank" rel="noreferrer">REPOSITORIES ↗</a></div><div className="copyright">© 2026 RANVEER MASKE<br/>ALL RIGHTS RESERVED.</div>
    </footer>
  </div>
}

export default App
