export default function AboutPage() {
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
          <p className="eyebrow">About</p>

          <h1>Business-first analytics with a strategy mindset.</h1>

          <p className="page-intro">
            I&apos;m a senior analytics professional focused on turning complex
            business questions into structured analytical systems that improve
            decisions, operations, and business performance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="section-label">How I Work</p>

          <h2>I start with the business problem, not the tool.</h2>

          <p>
            The work I enjoy most sits at the intersection of analytics,
            operations, profitability, and strategy. I focus on understanding
            how a business operates, defining the right questions and measures,
            and then building analytical solutions that help people make better
            decisions.
          </p>

          <p>
            My projects range from executive decision-support frameworks to
            operational optimization and enterprise reporting. The common thread
            is that the analytics need to create value beyond simply displaying
            information.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container narrow">
          <p className="section-label">Background</p>

          <h2>Analytics, business understanding, and continuous growth.</h2>

          <p>
            My background combines advanced academic training, experience as a
            student-athlete, and progressively senior work in data analytics.
            That combination shaped how I approach complex problems: with
            structure, discipline, curiosity, and a strong focus on measurable
            outcomes.
          </p>

          <p>
            I&apos;m continuing to grow toward roles centered on analytics
            strategy, business intelligence leadership, and data-driven
            operational improvement.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="section-label">Qualifications</p>

          <h2>Professional foundation</h2>

          <div className="qualification-list">
            <div>
              <strong>Analytics</strong>
              <span>
                Business intelligence, decision support, data modeling, KPI
                design, and analytical frameworks
              </span>
            </div>

            <div>
              <strong>Technical</strong>
              <span>Power BI, SQL, DAX, Power Query, semantic modeling</span>
            </div>

            <div>
              <strong>Education</strong>
              <span>
                Graduate-level education with a background shaped by collegiate
                athletics
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container narrow final-cta">
          <h2>Want the full professional background?</h2>

          <p>
            A downloadable resume will be added here once the public version is
            finalized.
          </p>

          <a className="button button-primary" href="/contact">
            Get in Touch
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