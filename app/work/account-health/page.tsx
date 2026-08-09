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
            <a href="/resume">Resume</a>
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

          <div className="case-study-hero-placeholder">
            Future hero framework visual
          </div>
        </div>
      </section>

      <section className="case-study-section">
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
            Today, it serves as the organization&apos;s standard approach to
            account evaluation, supporting monthly portfolio reviews and
            helping leadership make more informed commercial decisions.
          </p>
        </div>
      </section>

      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">01</p>

          <h2>The Challenge</h2>

          <p>
            Customer accounts were primarily evaluated through revenue and a
            handful of financial metrics. While useful individually, no single
            measure could adequately represent overall account health or
            long-term customer value. A more holistic and standardized approach
            was needed.
          </p>

          <div className="case-study-placeholder">
            Future before vs. after visual
          </div>
        </div>
      </section>

      <section className="case-study-section">
        <div className="case-study-container">
          <p className="section-label">02</p>

          <h2>My Role</h2>

          <p>
            I led the design and implementation of the Account Health Framework
            from concept to adoption. Working closely with operations, finance,
            and executive leadership, I defined the evaluation methodology,
            developed the weighted scoring model, built the Power BI solution,
            and refined the framework through continuous collaboration and
            real-world validation. I continue to build on this foundation
            through additional analysis aimed at supporting predictive account
            evaluation and commercial decision-making.
          </p>
        </div>
      </section>

      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">03</p>

          <h2>The Solution</h2>

          <p>
            Rather than evaluating accounts through independent financial
            metrics, I designed a standardized framework that combines four
            dimensions into a single Account Health Score: Contribution,
            Growth, Cash Flow, and Cost to Serve. Each dimension represents a
            key characteristic of a healthy customer relationship and
            contributes to an overall score through a configurable weighted
            methodology.
          </p>

          <p>
            The framework was intentionally designed to remain flexible. By
            adjusting the weighting of each dimension, the evaluation model can
            evolve alongside changing business priorities without requiring
            structural changes to the solution. This allows leadership to
            emphasize the metrics that matter most at different stages of the
            business.
          </p>

          <div className="case-study-placeholder case-study-placeholder-large">
            Future Account Health framework diagram
          </div>
        </div>
      </section>

      <section className="case-study-section">
        <div className="container">
          <div className="case-study-heading">
            <p className="section-label">04</p>
            <h2>Key Design Decisions</h2>
          </div>

          <div className="decision-grid">
            <article className="decision-card">
              <span>01</span>
              <h3>Evaluate Customer Value Holistically</h3>
              <p>
                Account health should reflect more than revenue alone. The
                framework combines financial performance, growth, payment
                behavior, and operational efficiency into a single standardized
                evaluation.
              </p>
            </article>

            <article className="decision-card">
              <span>02</span>
              <h3>Keep the Framework Adaptable</h3>
              <p>
                Business priorities change over time. The weighted scoring
                model allows leadership to adjust the relative importance of
                each dimension without redesigning the framework.
              </p>
            </article>

            <article className="decision-card">
              <span>03</span>
              <h3>Validate Against Business Reality</h3>
              <p>
                The model was refined through collaboration with operations,
                finance, and executive leadership until the scores consistently
                reflected real-world account performance and commercial
                expectations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">05</p>

          <h2>Business Impact</h2>

          <p>
            The Account Health Framework became the organization&apos;s standard
            methodology for evaluating customer accounts, providing leadership
            with a consistent and transparent view of account quality across
            the portfolio.
          </p>

          <p>
            The framework supports monthly executive portfolio reviews through
            a daily refreshed Power BI solution and is actively used by
            leadership to guide commercial discussions and account strategy. By
            shifting the focus from revenue alone to long-term customer value,
            it has helped identify underperforming partnerships, prioritize
            healthier customer relationships, and establish a common language
            for evaluating account health across the business.
          </p>

          <div className="case-study-placeholder case-study-placeholder-large">
            Future dashboard screenshot / impact visual
          </div>
        </div>
      </section>

      <section className="case-study-section">
        <div className="case-study-container">
          <p className="section-label">06</p>

          <h2>Implementation</h2>

          <p>
            The framework was implemented in Power BI using enterprise data
            from SQL Server, Analysis Services, and existing semantic models.
            Custom DAX measures, automated refresh processes, and ongoing data
            governance ensure the solution remains reliable, performant, and
            trusted for executive decision-making.
          </p>

          <div className="case-study-placeholder">
            Future technical architecture visual
          </div>
        </div>
      </section>

      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">07</p>

          <h2>Looking Ahead</h2>

          <p>
            While the framework already serves as the organization&apos;s
            standard approach to account evaluation, it also creates new
            opportunities for advanced analytics. Future work includes
            analyzing the relationship between account characteristics and
            long-term health, enabling predictive account scoring and
            supporting commercial decisions earlier in the sales process.
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