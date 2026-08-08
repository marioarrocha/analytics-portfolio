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
            <a href="/resume">Resume</a>
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

            <a className="button button-secondary" href="/resume">
              View Resume
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">Business Impact</p>

          <div className="impact-grid">
            <div>
              <strong>500+</strong>
              <span>Daily business users supported</span>
            </div>

            <div>
              <strong>$8M+</strong>
              <span>Estimated profitability opportunity identified</span>
            </div>

            <div>
              <strong>Enterprise</strong>
              <span>Decision-support systems</span>
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

            <div className="project-placeholder">
              Project visual placeholder
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">My Approach</p>

          <div className="approach-grid">
            <div>
              <span>01</span>
              <h3>Understand</h3>
              <p>Start with the business problem before considering tools.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Design</h3>
              <p>Translate business questions into analytical frameworks.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Build</h3>
              <p>Develop scalable solutions that fit real operating workflows.</p>
            </div>

            <div>
              <span>04</span>
              <h3>Measure</h3>
              <p>Evaluate success through adoption and business outcomes.</p>
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
          <h2>Interested in my work?</h2>

          <p>
            Explore my experience or connect with me to discuss analytics,
            strategy, and decision-support systems.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="/resume">
              View Resume
            </a>

            <a className="button button-secondary" href="/contact">
              Contact Me
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