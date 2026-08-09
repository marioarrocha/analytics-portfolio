export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <a href="/" className="brand">
            Mario Arrocha
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="/">Home</a>
            <a href="/work">Work</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <p className="eyebrow">Analytics · Strategy · Decision Support</p>

          <h1>
            Designing analytical systems that improve business decisions.
          </h1>

          <p className="hero-copy">
            I design decision-support frameworks and enterprise analytics
            solutions that help organizations improve operations, uncover
            opportunities, and make better business decisions.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="/work">
              Explore My Work
            </a>

<a className="button button-secondary" href="/about">
  About Me
</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">Business Impact</p>

          <div className="impact-grid">
  <div>
    <strong>50+ reports</strong>
    <span>
      Governed and supported reporting used by 200+ business users across
      multiple teams and workflows
    </span>
  </div>

  <div>
    <strong>$8M+ opportunity</strong>
    <span>
      Identified estimated annual profitability improvement opportunities
      through packaging and product-level analysis
    </span>
  </div>

  <div>
    <strong>8x+ faster</strong>
    <span>
      Reduced sourcing-plan preparation from roughly one project per day to
      more than one per hour through automated decision support
    </span>
  </div>
</div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <p className="section-label">Featured Work</p>

          <div className="featured-project">
            <div className="project-copy">
              <h2>Account Health Framework</h2>

              <p>
                A standardized framework for evaluating customer value beyond
                revenue through contribution, growth, cash flow, and cost to
                serve.
              </p>

              <a href="/work/account-health" className="text-link">
                View Case Study →
              </a>
            </div>

            <div className="project-image">
  <img
    src="/images/account-health/portfolio-summary.png"
    alt="Account Health Framework portfolio dashboard showing health scores, account segmentation, trends, and portfolio performance"
  />
</div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container narrow">
          <p className="section-label">About</p>

          <h2>Business-first analytics with strong technical execution.</h2>

          <p>
            I&apos;m an analytics professional focused on building systems that
            help organizations understand performance, improve operations, and
            make better decisions.
          </p>

          <a href="/about" className="text-link">
            More About Me →
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container narrow final-cta">
          <h2>Interested in discussing my work?</h2>

<div className="hero-actions">
  <a className="button button-primary" href="/about">
    About Me
  </a>

  <a className="button button-secondary" href="/contact">
    Get in Touch
  </a>
</div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-content">
          <span>Mario Arrocha</span>
          <span>Analytics Portfolio</span>
        </div>
      </footer>
    </main>
  );
}