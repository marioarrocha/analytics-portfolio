import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Mario Arrocha's background in analytics, economics, business, and data-driven decision support.",
};

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
  I&apos;m an analytics professional focused on turning complex business
  questions into structured analytical systems that improve decisions,
  operations, and business performance.
</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="section-label">What I Focus On</p>

<h2>Analytics at the intersection of business, operations, and strategy.</h2>

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

    <p>
      Originally from Madrid, Spain, I moved to the United States to pursue
      both my academic and athletic career as an NCAA Division I soccer
      student-athlete. That experience shaped how I approach my work today:
      with discipline, teamwork, commitment, and the ability to perform under
      pressure.
    </p>

    <p>
      Since then, I&apos;ve built my career in data analytics, with a growing
      focus on the intersection of analytics, business strategy, and
      operational decision-making.
    </p>
  </div>
</section>

      <section className="section">
  <div className="container narrow">
    <p className="section-label">Expertise &amp; Education</p>

    <div className="qualification-list">
      <div>
        <strong>Analytics</strong>
        <span>
          Business intelligence, decision support, data modeling, KPI design,
          profitability analysis, and analytical frameworks
        </span>
      </div>

      <div>
        <strong>Technical</strong>
        <span>
          Power BI, SQL, DAX, Power Query, semantic modeling, and data
          visualization
        </span>
      </div>

      <div>
        <strong>Master&apos;s</strong>
        <span>
          Economics — Econometrics and Quantitative Economics, Data Analytics
          focus | Georgia State University
        </span>
      </div>

      <div>
        <strong>Bachelor&apos;s</strong>
        <span>
          B.S. Business Administration — Management &amp; Marketing (Double
          Major), Magna Cum Laude | University of South Carolina Upstate
        </span>
      </div>
    </div>
  </div>
</section>

      <section className="section section-muted">
  <div className="container narrow final-cta">
    <h2>Interested in discussing my work or connecting?</h2>

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