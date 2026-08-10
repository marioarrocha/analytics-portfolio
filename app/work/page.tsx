import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected analytics projects focused on decision support, profitability, operations, and strategic business decision-making.",
};

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
  Adopted as the organization&apos;s framework for executive account
  evaluation and portfolio decision-making.
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
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <p className="section-label">More Work</p>

          <div className="coming-soon-grid">
            <div className="coming-soon-card">
  <p className="section-label">Case Study</p>

  <h3>Sourcing Optimization</h3>

  <p>
    A cost-based decision-support system for faster, more efficient project
    sourcing.
  </p>

  <a href="/work/sourcing-optimization" className="text-link">
    View Case Study →
  </a>
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