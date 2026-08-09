import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Account Health Framework",
  description:
    "Case study on designing a weighted account health framework combining contribution, growth, cash flow, and cost to serve to support better commercial decisions.",
};

export default function AccountHealthPage() {
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

      <section className="case-study-hero">
        <div className="container">
          <a href="/work" className="back-link">
            ← Back to Work
          </a>

          <p className="eyebrow">Case Study</p>

          <h1>Account Health Framework</h1>

          <p className="case-study-subtitle">
            A standardized decision-support framework for evaluating customer
            value beyond revenue.
          </p>

          <div className="framework-diagram">
  <div className="framework-grid">
    <div>Contribution</div>
    <div>Growth</div>
    <div>Cash Flow</div>
    <div>Cost to Serve</div>
  </div>

  <div className="framework-arrow">↓</div>

  <div className="framework-score">Account Health Score</div>

  <div className="framework-arrow">↓</div>

  <div className="framework-outcome">Commercial Decision Support</div>
</div>
        </div>
      </section>

      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">Overview</p>

          <h2>Executive Summary</h2>

          <p>
            The Account Health Framework established a standardized way to
            evaluate customer accounts across a large commercial portfolio
            using a weighted evaluation framework based on contribution,
            growth, cash flow, and cost to serve. These dimensions were
            identified as the key factors that best represent long-term account
            health, moving the business beyond evaluating customers primarily
            through revenue.
          </p>

          <p>
            I led the initiative from concept through implementation, designing
            the evaluation methodology, developing the scoring model, building
            the Power BI solution, and collaborating with operations, finance,
            and executive leadership to validate and adopt the framework.
            Today, it supports monthly portfolio reviews and helps leadership make
more informed commercial decisions.
          </p>
        </div>
      </section>

      <section className="case-study-section case-study">
        <div className="case-study-container">
          <p className="section-label">01</p>

<h2>Why Revenue Wasn&apos;t Enough</h2>

          <p>
            Customer accounts were primarily evaluated through revenue and a
            handful of financial metrics. While useful individually, no single
            measure could adequately represent overall account health or
            long-term customer value. A more holistic and standardized approach
            was needed.
          </p>


        </div>
      </section>


      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">02</p>

          <h2>The Solution</h2>

          <p>
  I built the Account Health Score around four dimensions: Contribution,
  Growth, Cash Flow, and Cost to Serve. Each dimension captures a different
  characteristic of customer value and contributes to the overall score
  through a configurable weighting model.
</p>

          <p>
            The framework was intentionally designed to remain flexible. By
            adjusting the weighting of each dimension, the evaluation model can
            evolve alongside changing business priorities without requiring
            structural changes to the solution. This allows leadership to
            emphasize the metrics that matter most at different stages of the
            business.
          </p>

          <figure className="case-study-visual">
  <Image
    src="/images/account-health/portfolio-summary.png"
    alt="Portfolio Health summary dashboard showing account health scoring, component weights, account-level scores, trends, and health score distribution."
    width={1654}
    height={931}
    className="case-study-image"
  />

<p className="case-study-note">
  <strong>Demo data note:</strong> All customer names, account attributes,
  classifications, and financial values shown in this case study have been
  sanitized or transformed for public presentation. The demo uses a reduced
  sample of 100 fictionalized accounts and does not represent actual
  customers or business activity.
</p>

  <figcaption>
    The portfolio summary combines configurable component weighting, account-level
    scores, portfolio classifications, and historical trends into a single
    decision-support view.
  </figcaption>
</figure>
        </div>
      </section>

      <section className="case-study-section">
        <div className="container">
          <div className="case-study-heading">
            <p className="section-label">03</p>
            <h2>Design Principles</h2>
          </div>

          <div className="decision-grid">
            <article className="decision-card">
              <h3>Holistic by Design</h3>

<p>
  Contribution, growth, cash flow, and cost to serve provide a broader view
  of customer value than any single metric.
</p>
            </article>

            <article className="decision-card">
              <h3>Built to Adapt</h3>

<p>
  Configurable weighting allows business priorities to change without
  rebuilding the evaluation model.
</p>
            </article>

            <article className="decision-card">
              <h3>Grounded in Business Reality</h3>

<p>
  The scoring methodology was iteratively validated against known account
  performance and stakeholder expectations.
</p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">04</p>

          <h2>Business Impact</h2>

          <p>
  The framework supports monthly executive portfolio reviews through a
  daily refreshed Power BI solution.
</p>

<p>
  By shifting the focus from revenue alone to long-term customer value, it
  helps identify underperforming partnerships, prioritize healthier customer
  relationships, and establish a shared language for evaluating account
  health across the business.
</p>

          <figure className="case-study-visual">
  <Image
    src="/images/account-health/AccountPositioning2.png"
    alt="Account positioning analysis comparing health score and revenue across the customer portfolio."
    width={1654}
    height={931}
    className="case-study-image"
  />

  <figcaption>
    Comparing account health with revenue helped leadership distinguish
    high-volume customers from genuinely healthy and strategically valuable
    relationships.
  </figcaption>
</figure>

<div className="case-study-insight">
  <p className="section-label">From Portfolio Signal to Driver Analysis</p>

  <h3>Move from a portfolio-level signal to the drivers behind it.</h3>

  <p>
  The drill-through workflow allows users to move from a portfolio-level
  signal into the underlying drivers of an account&apos;s score. In the
  sanitized demo below, a fictional account with meaningful revenue scores
  poorly overall because weak contribution and cost-to-serve performance
  outweigh stronger cash-flow performance.
</p>
</div>

<figure className="case-study-visual">
  <Image
    src="/images/account-health/accountview.png"
    alt="Account-level diagnostic view showing contribution, growth, cash flow, and cost-to-serve scores for an unhealthy customer account."
    width={1654}
    height={931}
    className="case-study-image"
  />

  <figcaption>
    The drill-through experience moved the analysis from identifying an
    unhealthy account to understanding why it was unhealthy across contribution,
    growth, cash flow, and cost to serve.
  </figcaption>
</figure>
        </div>
      </section>

      <section className="case-study-section">
        <div className="case-study-container">
          <p className="section-label">05</p>

          <h2>Implementation</h2>

          <p>
            The framework was implemented in Power BI using enterprise data
            from SQL Server, Analysis Services, and existing semantic models.
            Custom DAX measures, automated refresh processes, and ongoing data
            governance ensure the solution remains reliable, performant, and
            trusted for executive decision-making.
          </p>

          <div className="architecture-strip">
  <span>SQL Server</span>
  <span>Analysis Services</span>
  <span>Semantic Models</span>
  <span>Power BI</span>
  <span>Executive Decision Support</span>
</div>
        </div>
      </section>

      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">06</p>

          <h2>What the Framework Enables</h2>

          <p>
  Beyond current portfolio evaluation, the Account Health Score creates a
  consistent foundation for deeper analysis. Historical scores can be used
  to study which customer characteristics are most associated with
  long-term account health and, over time, support predictive analysis
  earlier in the commercial process.
</p>
        </div>
      </section>

      <section className="case-study-next">
        <div className="case-study-container">
          <p className="section-label">Continue Exploring</p>

          <h2>More work is on the way.</h2>

          <p>
            Additional case studies focused on sourcing optimization,
            profitability, and enterprise sales reporting are currently being
            prepared.
          </p>

          <a href="/work" className="button button-secondary">
            Back to Work
          </a>
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