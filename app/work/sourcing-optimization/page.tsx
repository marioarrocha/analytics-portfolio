import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sourcing Optimization",
  description:
    "Case study on designing a sourcing decision-support system that evaluates warehouse inventory, staging scenarios, and estimated logistics costs to recommend cost-efficient fulfillment plans.",
};

export default function SourcingOptimizationPage() {
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

      {/* Hero */}
      <section className="case-study-hero">
        <div className="container">
          <a href="/work" className="back-link">
            ← Back to Work
          </a>

          <p className="eyebrow">Case Study</p>

          <h1>Sourcing Optimization</h1>

          <p className="case-study-subtitle">
            Turning a manual multi-warehouse sourcing process into a cost-based
            decision system.
          </p>

          <div className="case-study-metrics">
  <div>
    <strong>15+</strong>
    <span>warehouses evaluated across the sourcing network</span>
  </div>

  <div>
    <strong>8x+</strong>
    <span>faster sourcing-plan preparation in early use</span>
  </div>

  <div>
    <strong>Cost-ranked</strong>
    <span>recommendations based on estimated logistics cost</span>
  </div>
</div>

          <figure className="case-study-visual case-study-visual-hero">
            <Image
              src="/images/sourcing-optimization/recommended-scenario.png"
              alt="Sourcing Optimization application showing the recommended staging scenario, sourcing KPIs, and warehouse transfer routes."
              width={1600}
              height={950}
              className="case-study-image"
              priority
            />

            <figcaption>
              The application combines sourcing cost, warehouse usage,
              availability, and transfer routing into a single recommended plan.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Overview */}
      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">Overview</p>

          <h2>Executive Summary</h2>

          <p>
            Project fulfillment coordinators previously relied on manual
inventory checks and warehouse-by-warehouse comparison to build
sourcing plans for large project orders that required additional
coordination, consolidation, and fulfillment oversight.
</p>

          <p>
            I designed and built a Python-based decision-support application
            that evaluates inventory availability across the warehouse network,
            constructs sourcing and staging scenarios, estimates logistics
            costs, and recommends a cost-efficient fulfillment plan. The
            resulting workflow gives coordinators a faster and more consistent
            basis for sourcing decisions while preserving the ability to review
            alternative scenarios and operationalize the selected plan.
          </p>
        </div>
      </section>

      {/* 01 */}
<section className="case-study-section">
  <div className="case-study-container">
    <p className="section-label">01</p>

<h2>A Sourcing Decision Without a Common Cost Basis</h2>

<p>
  Preparing a sourcing plan required determining where inventory should come from across the warehouse network and where the order should be consolidated before final shipment.
</p>

<div className="case-study-after-cards">
</div>

<div className="decision-grid decision-grid-two">
  <article className="decision-card">
    <h3>Prioritize Proximity</h3>
    <p>
      Favor warehouses closer to the project destination to reduce expected
      travel distance.
    </p>
  </article>

  <article className="decision-card">
    <h3>Prioritize Consolidation</h3>
    <p>
      Source from fewer warehouses to reduce the number of transfers required
      before final shipment.
    </p>
  </article>
</div>

<div className="case-study-after-cards">
  <p>
    The opportunity was to put those alternatives on the same cost basis and
    give coordinators a consistent way to identify the most cost-efficient
    sourcing configuration.
  </p>
</div>
  </div>
</section>

      {/* 02 */}
      <section className="case-study-section">
        <div className="case-study-container">
          <p className="section-label">02</p>

          <h2>How the Decision Engine Works</h2>

          <p>
  The application turns the sourcing decision into a structured scenario
  evaluation. The user enters a primary project order and, when needed,
  related orders that should be fulfilled together. The tool consolidates the
  required demand, evaluates inventory availability across the warehouse
  network, and builds sourcing plans across the available staging locations.
</p>

<p>
  For each scenario, the Python engine determines the required source-to-staging
  movements, taps into an internal shipping-cost calculator API to estimate the
  cost of those transfers and the final shipment to the customer, applies
  relevant business rules, and ranks the resulting scenarios by total estimated
  sourcing cost.
</p>

        </div>
      </section>

      {/* 03 */}
      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">03</p>

          <h2>Comparing Sourcing Scenarios</h2>

          <p>
  The recommended plan remains transparent and reviewable. Users can select
  another staging scenario and immediately compare its estimated cost,
  warehouse requirements, inventory availability, transfer savings, and route
  structure against the recommended option.
</p>

<div className="case-study-insight">
  <p className="section-label">Example Scenario</p>

  <h3>
    One alternative increased estimated sourcing cost by 4.4% and required two
    additional warehouses.
  </h3>

  <p>
    The comparison gives users a clearer basis for deciding whether an
    operational preference justifies the additional cost.
  </p>
</div>

<figure className="case-study-visual">
  <Image
    src="/images/sourcing-optimization/alternative-scenario.png"
    alt="Alternative sourcing scenario showing a higher estimated cost, additional warehouses, transfer savings, and updated routing compared with the recommended staging plan."
    width={1600}
    height={950}
    className="case-study-image"
  />

  <figcaption>
    Selecting an alternative staging warehouse makes the financial and
    operational tradeoffs visible against the recommended plan.
  </figcaption>
</figure>


        </div>
      </section>

      {/* 04 */}
      <section className="case-study-section">
        <div className="case-study-container">
          <p className="section-label">04</p>

          <h2>Operational Output</h2>

          <div className="case-study-output-copy">
  <p>
    Beyond the recommendation itself, the application exposes the warehouse
    movements, item-level detail, quantities, and estimated transfer costs
    behind the selected sourcing plan.
  </p>

  <p>
    The user can also generate an Excel export containing the output at multiple
    levels of detail, making it easier to carry the sourcing plan into the
    team&apos;s downstream operational workflows.
  </p>
</div>

<figure className="case-study-visual">
  <Image
    src="/images/sourcing-optimization/scenario-ranking.png"
    alt="Scenario ranking table comparing staging warehouses by estimated sourcing cost."
    width={1600}
    height={950}
    className="case-study-image"
  />

</figure>

<figure className="case-study-visual">
  <Image
    src="/images/sourcing-optimization/sourcing-plan-output.png"
    alt="Generated Excel sourcing-plan output containing the recommended staging strategy and supporting operational detail."
    width={1600}
    height={950}
    className="case-study-image"
  />

</figure>

        </div>
      </section>

      <section className="case-study-section case-study-muted">
  <div className="container">
    <div className="case-study-heading">
      <p className="section-label">Business Impact</p>

      <h2>A faster, more consistent sourcing workflow</h2>
    </div>

    <div className="decision-grid">
      <article className="decision-card">
        <h3>8x+ Faster</h3>

        <p>
          Early use reduced sourcing-plan preparation from roughly a full
          workday to about one hour per project.
        </p>
      </article>

      <article className="decision-card">
        <h3>More Consistent Decisions</h3>

        <p>
          Sourcing alternatives are evaluated against a common estimated-cost
          framework rather than individual heuristics alone.
        </p>
      </article>

      <article className="decision-card">
        <h3>Greater Cost Visibility</h3>

        <p>
          Users can see how transfer costs, final-shipment costs, and alternative
          staging choices affect the overall sourcing plan.
        </p>
      </article>
    </div>

  </div>
</section>

      {/* 05 */}
      <section className="case-study-section">
        <div className="case-study-container">
          <p className="section-label">05</p>

          <h2>Implementation</h2>

          <p>
  The solution combines enterprise data preparation with a Python-based sourcing engine, an internal shipping-cost API, and a Streamlit application used to evaluate and operationalize sourcing scenarios. AI-assisted development accelerated parts of the Python build while the business logic, workflow design, decision rules, and implementation remained grounded in the sourcing process I designed.
</p>

<p>
  Order, inventory, warehouse, and product data are transformed into an
  item-level structure that the engine can use to build sourcing scenarios,
  estimate transfer and final-shipment costs, apply operational business rules,
  and rank the resulting plans. The selected scenario can then be reviewed in
  the application and exported into a structured Excel sourcing plan for
  downstream use.
</p>

<div className="architecture-strip implementation-strip">
  <span>Power BI</span>
  <span>Python</span>
  <span>Shipping API</span>
  <span>Streamlit</span>
  <span>AI-Assisted Development</span>
  <span>Excel Output</span>
</div>
        </div>
      </section>

      {/* Continue Exploring */}
      <section className="case-study-next">
        <div className="case-study-container">
          <p className="section-label">Continue Exploring</p>

          <h2>More work is on the way.</h2>

          <p>
            Additional case studies focused on profitability and enterprise
            sales reporting are currently being prepared.
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