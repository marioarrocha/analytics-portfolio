export default function WorkPage() {
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

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Selected Work</p>

          <h1>Analytics designed around business decisions.</h1>

          <p className="page-intro">
            A collection of analytical frameworks and decision-support systems
            built to improve operations, profitability, and strategic
            decision-making.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="work-card work-card-featured">
            <div className="work-card-copy">
              <p className="section-label">Featured Case Study</p>

              <h2>Account Health Framework</h2>

              <p>
                A standardized framework for evaluating customer value beyond
                revenue through contribution, growth, cash flow, and cost to
                serve.
              </p>

              <p className="work-outcome">
                Established a common methodology for account evaluation and
                executive portfolio decision-making.
              </p>

              <a href="/work/account-health" className="text-link">
                View Case Study →
              </a>
            </div>

            <div className="project-placeholder">
              Account Health visual placeholder
            </div>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <p className="section-label">More Work</p>

          <div className="coming-soon-grid">
            <div className="coming-soon-card">
              <h3>Sourcing Optimization Framework</h3>
              <p>
                Decision support for faster, more cost-effective fulfillment
                planning.
              </p>
              <span>Case study in development</span>
            </div>

            <div className="coming-soon-card">
              <h3>Profitability Opportunity Framework</h3>
              <p>
                Identifying operational opportunities to improve product-level
                profitability.
              </p>
              <span>Case study in development</span>
            </div>

            <div className="coming-soon-card">
              <h3>Enterprise Sales Reporting</h3>
              <p>
                Business-critical reporting supporting commercial performance
                and operational visibility.
              </p>
              <span>Case study in development</span>
            </div>
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