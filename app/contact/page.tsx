export default function ContactPage() {
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
          <p className="eyebrow">Contact</p>

          <h1>Let&apos;s connect.</h1>

          <p className="page-intro">
            I&apos;m always interested in thoughtful conversations about
            analytics, business strategy, decision-support systems, and the
            problems organizations are trying to solve with data.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="contact-list">
            <a href="#" className="contact-item">
              <span>Email</span>
              <strong>Add public email later</strong>
            </a>

            <a href="#" className="contact-item">
              <span>LinkedIn</span>
              <strong>Add LinkedIn URL later</strong>
            </a>

            <a
              href="https://github.com/marioarrocha"
              className="contact-item"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>github.com/marioarrocha</strong>
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