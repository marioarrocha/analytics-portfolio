import type { Metadata } from "next";
import ReportWalkthrough from "./ReportWalkthrough";

export const metadata: Metadata = {
  title: "Account Health Framework",
  description:
    "Case study on designing a weighted account health framework combining contribution, growth, cash flow, and cost to serve to support better commercial decisions.",
};

export default function AccountHealthPage() {
  return (
    <main className="account-health-page">
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
  A multi-factor scoring framework designed to evaluate customer value, risk, and commercial prioritization beyond revenue alone.
</p>

<p className="case-study-hero-support">
  Built to help leaders assess account health across a client portfolio and create a more
  consistent way to prioritize retention, expansion, operational review, and commercial follow-up.
</p>

          <div className="decision-flow">
  <div className="decision-flow-step">
    <span className="decision-flow-label">01</span>
    <h3>Account Data</h3>
    <p>Revenue, margin, payment, operational, and account attributes.</p>
  </div>

  <div className="decision-flow-arrow">→</div>

  <div className="decision-flow-step decision-flow-step-wide">
    <span className="decision-flow-label">02</span>
    <h3>Health Dimensions</h3>
    <div className="dimension-mini-grid">
      <span>Contribution</span>
      <span>Growth</span>
      <span>Cash Flow</span>
      <span>Cost-to-Serve</span>
    </div>
  </div>

  <div className="decision-flow-arrow">→</div>

  <div className="decision-flow-step">
    <span className="decision-flow-label">03</span>
    <h3>Weighted Score</h3>
    <p>Configurable model aligned to business priorities.</p>
  </div>

  <div className="decision-flow-arrow">→</div>

  <div className="decision-flow-step">
    <span className="decision-flow-label">04</span>
    <h3>Account Segment</h3>
    <p>Strong, stable, weak, or critical classification.</p>
  </div>

  <div className="decision-flow-arrow">→</div>

  <div className="decision-flow-step decision-flow-action">
    <span className="decision-flow-label">05</span>
    <h3>Commercial Action</h3>
    <p>Prioritize retention, growth, review, or intervention.</p>
  </div>
</div>
        </div>
      </section>

      <section className="case-study-section executive-summary-section" id="overview">
  <div className="container">
    <div className="case-study-heading">
      <p className="section-label">Overview</p>
      <h2>Executive Summary</h2>
    </div>

    <div className="summary-card-grid">
  <div className="summary-card">
    <h3>What changed</h3>
    <p>
      Built a repeatable account evaluation framework that combines financial, growth,
      cash-flow, and operational signals into one portfolio review lens.
    </p>
  </div>

  <div className="summary-card">
    <h3>My role</h3>
    <p>
      Owned the methodology, scoring logic, Power BI build, and stakeholder validation
      from concept through implementation.
    </p>
  </div>

  <div className="summary-card">
    <h3>Business use</h3>
    <p>
      Designed to help teams identify which accounts may need retention focus, expansion
      review, cost-to-serve analysis, or deeper diagnosis.
    </p>
  </div>
</div>
  </div>
</section>

      <section className="case-study-section case-study">
        <div className="case-study-container">
          <p className="section-label">01</p>

<h2>Why Revenue Wasn&apos;t Enough</h2>

          <p>
  Revenue is often the clearest signal of account size, but it can hide whether a relationship is
  profitable, expanding, healthy from a cash-flow standpoint, or efficient to serve.
</p>


        </div>

<div className="before-after-grid">
  <div className="before-after-column">
    <div className="before-after-header">Before</div>

    <div className="before-after-item">
      Revenue and financial metrics were reviewed separately.
    </div>

    <div className="before-after-item">
      Large accounts could appear healthy despite hidden quality or service risks.
    </div>

    <div className="before-after-item">
      Account reviews depended on fragmented interpretation.
    </div>

    <div className="before-after-item">
      Prioritization required manual judgment across disconnected measures.
    </div>
  </div>

  <div className="before-after-column after">
    <div className="before-after-header">After</div>

    <div className="before-after-item">
      Account health is evaluated across contribution, growth, cash flow, and cost-to-serve.
    </div>

    <div className="before-after-item">
      The score separates revenue volume from long-term account quality.
    </div>

    <div className="before-after-item">
      Accounts can be ranked, segmented, and compared systematically.
    </div>

    <div className="before-after-item">
      Review conversations become more consistent, focused, and decision-oriented.
    </div>
  </div>
</div>

      </section>


      <section className="case-study-section case-study-muted">
  <div className="case-study-container">
    <p className="section-label">02</p>

    <h2>The Decision Framework</h2>

    <p>
  The framework translates four account health dimensions — contribution, growth, cash flow,
  and cost-to-serve — into a configurable weighted score that separates revenue volume from
  long-term account quality.
</p>

<p>
  The model can be adjusted as business priorities change, while the methodology remains grounded
  in known account behavior, stakeholder expectations, and practical portfolio review needs.
</p>
  </div>

  <ReportWalkthrough />

  <div className="screenshot-callout-grid">
    <div className="screenshot-callout">
      <h4>Configurable weighting</h4>
      <p>
        Leadership can adjust the relative importance of contribution, growth, cash flow,
        and cost-to-serve as priorities change.
      </p>
    </div>

    <div className="screenshot-callout">
      <h4>Portfolio segmentation</h4>
      <p>
        Accounts are grouped into strong, stable, weak, and critical categories to support
        review prioritization.
      </p>
    </div>

    <div className="screenshot-callout">
      <h4>Account-level ranking</h4>
      <p>
        The table allows teams to identify which accounts need deeper review instead of relying
        on aggregate trends alone.
      </p>
    </div>

    <div className="screenshot-callout">
      <h4>Trend context</h4>
      <p>
        Historical score movement shows whether portfolio health is improving, stable, or
        deteriorating over time.
      </p>
    </div>
  </div>
</section>

      <section className="case-study-section">
  <div className="case-study-container">
    <p className="section-label">03</p>

    <h2>Technical Implementation</h2>

    <p>
      The framework was implemented in Power BI using structured source data from SQL Server,
      Analysis Services, and existing semantic models. Custom DAX measures, automated refresh
      logic, and governed definitions supported a repeatable account-health review experience.
    </p>

    <p>
      The work combined commercial problem framing, scoring-model design, executive data
      storytelling, and analytics product thinking — not just dashboard development.
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

      <section className="case-study-next">
        <div className="case-study-container">
          <p className="section-eyebrow">Continue Exploring</p>
<h2>More analytics strategy work</h2>
<p>
  Explore additional case studies focused on operational decision support, sourcing optimization,
  profitability, and enterprise reporting.
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