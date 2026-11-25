const ventures = [
  {
    number: "01",
    name: "Sparrow Media Company",
    category: "MEDIA · CREATIVE TECHNOLOGY",
    description:
      "Building an AI-powered creative ecosystem for creators, filmmakers and storytellers — from editing and animation to VFX, CGI and production workflows.",
    status: "IN DEVELOPMENT",
    mark: "S",
    href: "https://sparrowloveedit.com"
  },
  {
    number: "02",
    name: "ANTICOIN Blockchain",
    category: "BLOCKCHAIN · DIGITAL INFRASTRUCTURE",
    description:
      "Developing an independent blockchain initiative focused on proof-of-stake infrastructure, digital ownership and a foundation for decentralised applications.",
    status: "IN DEVELOPMENT",
    mark: "A",
    href: "https://anticoin.network"
  },
  {
    number: "03",
    name: "Austin7GX AI",
    category: "AI · TELECOMMUNICATIONS",
    description:
      "A future-facing venture concept exploring intelligent connectivity, next-generation telecommunications and the possibilities of space-enabled communication.",
    status: "FUTURE VENTURE",
    mark: "7",
    href: "#contact"
  }
];

const principles = [
  ["01", "Think without borders", "We look beyond geography and conventional limits to find opportunities worth building."],
  ["02", "Build with purpose", "We focus on useful technology, thoughtful execution and products designed for lasting impact."],
  ["03", "Create what comes next", "We bring ambitious ideas into the world through experimentation, engineering and persistence."]
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Austingreatleo Group home">
          <span className="brand-symbol">AG</span>
          <span className="brand-name">AUSTINGREATLEO <small>GROUP OF TECHNOLOGIES</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#ventures">Ventures</a>
          <a href="#principles">Our thinking</a>
          <a href="#founder">Founder</a>
        </nav>
        <a className="header-cta" href="#contact">Let’s connect <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow"><span className="pulse-dot" /> INDEPENDENT TECHNOLOGY GROUP</div>
          <h1>Think beyond<br /><span>borders.</span><br />Build beyond limits.</h1>
          <p className="hero-copy">
            We are building a group of technology ventures shaped by bold ideas,
            ambitious engineering and a belief in what the future can become.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#ventures">Explore our ventures <span>↗</span></a>
            <a className="text-link" href="#about">Discover the group <span>↓</span></a>
          </div>
        </div>
        <div className="hero-side-note"><span>01 / 04</span><i /> BUILDING BEYOND BORDERS</div>
        <div className="hero-bottom">
          <span>INDEPENDENT BY NATURE. GLOBAL BY AMBITION.</span>
          <span className="scroll-cue">SCROLL TO EXPLORE <b>↓</b></span>
        </div>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="section-kicker"><span>01</span> / THE GROUP</div>
        <div className="intro-layout">
          <h2>A platform for<br /><em>what’s next.</em></h2>
          <div className="intro-text">
            <p className="lead">Austingreatleo Group of Technologies is an independent technology group bringing ambitious ventures to life across emerging and established fields.</p>
            <p>Our work spans creative technology, blockchain and intelligent connectivity. Each venture has its own mission, while sharing one belief: meaningful progress comes from turning difficult ideas into real products.</p>
            <a className="underlined-link" href="#principles">What drives us <span>↗</span></a>
          </div>
        </div>
        <div className="signal-strip">
          <div><strong>01</strong><span>Independent thinking</span></div>
          <div><strong>∞</strong><span>Room to build</span></div>
          <div><strong>GLOBAL</strong><span>Outlook and ambition</span></div>
        </div>
      </section>

      <section className="ventures-section" id="ventures">
        <div className="section-wrap">
          <div className="section-heading">
            <div><div className="section-kicker"><span>02</span> / OUR VENTURES</div><h2>Different missions.<br /><em>One ambition.</em></h2></div>
            <p>Independent ventures, connected by a shared drive to explore, engineer and build.</p>
          </div>
          <div className="venture-list">
            {ventures.map((venture) => (
              <article className="venture-card" key={venture.number}>
                <div className="venture-index">{venture.number}</div>
                <div className="venture-mark">{venture.mark}</div>
                <div className="venture-info">
                  <div className="venture-category">{venture.category}</div>
                  <h3>{venture.name}</h3>
                  <p>{venture.description}</p>
                  <a href={venture.href} target={venture.href.startsWith("http") ? "_blank" : undefined} rel={venture.href.startsWith("http") ? "noreferrer" : undefined} className="venture-link">Explore venture <span>↗</span></a>
                </div>
                <div className="venture-status"><span />{venture.status}</div>
              </article>
            ))}
          </div>
          <p className="venture-footnote">Our portfolio will evolve as new ideas become ventures.</p>
        </div>
      </section>

      <section className="principles-section section-wrap" id="principles">
        <div className="section-kicker"><span>03</span> / HOW WE THINK</div>
        <div className="principles-heading"><h2>Ambition needs<br /><em>direction.</em></h2><p>Our principles shape the way we explore opportunities, develop technology and build for the long term.</p></div>
        <div className="principle-grid">
          {principles.map(([number, title, description]) => (
            <article className="principle-card" key={number}>
              <span className="principle-number">{number}</span>
              <div className="principle-line" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder-section" id="founder">
        <div className="section-wrap founder-layout">
          <div className="founder-art" aria-hidden="true">
            <div className="founder-ring ring-a" /><div className="founder-ring ring-b" />
            <div className="founder-monogram">AG<span>.</span></div>
            <div className="founder-art-caption">FOUNDER’S OFFICE <span>EST. 2026</span></div>
          </div>
          <div className="founder-copy">
            <div className="section-kicker"><span>04</span> / THE FOUNDER</div>
            <h2>Built on a<br /><em>big vision.</em></h2>
            <p className="lead">Austingreatleo is the founder of Austingreatleo Group of Technologies.</p>
            <p>Driven by curiosity and a determination to build, the founder’s focus is on developing technology ventures with global relevance — starting with ideas, then doing the work to turn them into reality.</p>
            <div className="founder-signature">AUSTINGREATLEO <span>FOUNDER</span></div>
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="section-kicker"><span>05</span> / START A CONVERSATION</div>
        <div className="contact-layout">
          <h2>The future is<br /><em>built together.</em></h2>
          <div className="contact-copy">
            <p>For investment conversations, partnerships, technology collaboration and media enquiries, connect with the group.</p>
            <a className="contact-email" href="mailto:hello@austingreatleo.com">hello@austingreatleo.com <span>↗</span></a>
            <span className="contact-note">Replace this placeholder with your confirmed business email before launch.</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><span className="brand-symbol">AG</span><span className="brand-name">AUSTINGREATLEO <small>GROUP OF TECHNOLOGIES</small></span></a>
        <span>© {new Date().getFullYear()} Austingreatleo Group of Technologies</span>
        <a href="#top" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
