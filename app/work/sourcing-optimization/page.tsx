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
              <strong>10+</strong>
              <span>warehouses evaluated</span>
            </div>

            <div>
              <strong>~15</strong>
              <span>fulfillment coordinators</span>
            </div>

            <div>
              <strong>~1 hour</strong>
              <span>planning time in early usage</span>
            </div>
          </div>

          <figure className="case-study-visual">
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
            sourcing plans for complex orders. The process could consume much
            of a coordinator&apos;s day while providing limited visibility into
            the cost implications of alternative sourcing decisions.
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

    <h2>Why Manual Sourcing Wasn&apos;t Enough</h2>

    <p>
      Large project orders can require inventory from multiple warehouses before
      being consolidated and shipped to the customer. Preparing that sourcing
      plan meant coordinators had to check item availability across the warehouse
      network, determine which locations could fulfill each requirement, and
      piece together how those movements would affect the overall project.
    </p>

    <p>
      The process was time-intensive and depended heavily on experience and
      judgment. Coordinators often used warehouse proximity and the number of
      locations involved as practical proxies for cost efficiency, but the
      closest sourcing option was not always the least expensive once transfer
      costs and the final shipment to the customer were considered.
    </p>

    <p>
      The real problem was therefore not just inventory visibility. It was the
      lack of a consistent way to compare sourcing scenarios and quantify their
      expected logistics cost before the plan was finalized.
    </p>
  </div>
</section>

      {/* 02 */}
      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">02</p>

          <h2>The Opportunity Was Bigger Than a Report</h2>

         <p>
  The project started with a request for a Power BI sourcing matrix that would
  allow coordinators to enter an order and see inventory availability across
  the warehouse network.
</p>

<p>
  That would improve visibility, but it would still leave the hardest part of
  the workflow with the coordinator: deciding which warehouses should supply
  the order and which staging location would produce the most cost-efficient
  overall plan.
</p>

<div className="case-study-insight">
  <p className="section-label">Decision Reframing</p>

  <h3>
    Given the inventory available across the warehouse network, what sourcing
    and staging configuration provides the most cost-efficient way to fulfill
    the project?
  </h3>

  <p>
    Reframing the problem around that decision changed the solution from a
    reporting layer into an operational decision-support application.
  </p>
</div>
        </div>
      </section>

      {/* 03 */}
      <section className="case-study-section">
        <div className="case-study-container">
          <p className="section-label">03</p>

          <h2>How the Decision Engine Works</h2>

          <p>
  The application turns the sourcing decision into a structured scenario
  evaluation. A coordinator enters a primary order and, when needed, related
  orders that should be fulfilled together. The system consolidates the
  required demand, evaluates inventory availability across the warehouse
  network, and builds sourcing plans for the available staging locations.
</p>

<p>
  For each scenario, the Python engine determines the required source-to-staging
  movements, estimates the cost of those transfers and the final shipment to the
  customer, applies relevant business rules such as internal transfer-truck
  treatment, and ranks the resulting scenarios by total estimated sourcing cost.
</p>

<div className="architecture-strip">
  <span>Project Orders</span>
  <span>Inventory Availability</span>
  <span>Sourcing Scenarios</span>
  <span>Shipping Cost Estimates</span>
  <span>Business Rules</span>
  <span>Scenario Ranking</span>
  <span>Recommended Plan</span>
</div>

<p>
  The result is a recommended sourcing plan built on a consistent cost basis,
  rather than a manual comparison driven primarily by distance and experience.
</p>
        </div>
      </section>

      {/* 04 */}
      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">04</p>

          <h2>Making the Tradeoffs Visible</h2>

          <p>
  The application does not treat the recommendation as a black box.
  Coordinators can select an alternative staging warehouse and immediately
  see how that decision changes the expected cost and operational complexity
  of the plan.
</p>

<p>
  The comparison surfaces the estimated cost difference versus the recommended
  scenario, the number of warehouses involved, inventory availability, transfer
  savings, and the resulting route structure. This gives users the flexibility
  to account for operational constraints while making the cost of that tradeoff
  explicit before the sourcing plan is finalized.
</p>

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

<div className="case-study-insight">
  <p className="section-label">Example Scenario</p>

  <h3>
    A different staging choice increased estimated sourcing cost by 4.4% and
    required two additional warehouses.
  </h3>

  <p>
    The tool preserves coordinator control while providing a clearer basis for
    evaluating when an operational preference is worth the additional cost.
  </p>
</div>
        </div>
      </section>

      {/* 05 */}
      <section className="case-study-section">
        <div className="case-study-container">
          <p className="section-label">05</p>

          <h2>From Recommendation to Execution</h2>

          <p>
  The recommended scenario is not treated as a final answer in isolation.
  The application preserves the alternatives behind it and exposes the
  operational detail needed to understand and execute the selected plan.
</p>

<figure className="case-study-visual">
  <Image
    src="/images/sourcing-optimization/scenario-ranking.png"
    alt="Scenario ranking table comparing staging warehouses by estimated sourcing cost, warehouse usage, transfer cost, and final shipment cost."
    width={1600}
    height={950}
    className="case-study-image"
  />

  <figcaption>
    Each staging scenario is ranked on a consistent estimated-cost basis so the
    recommendation can be compared against the full set of evaluated alternatives.
  </figcaption>
</figure>

<div className="case-study-insight">
  <p className="section-label">Traceable Decision Logic</p>

  <h3>
    The recommendation can be followed from scenario ranking down to the
    warehouse and item movements required to execute it.
  </h3>

  <p>
    Coordinators can inspect which source warehouses feed the staging location,
    the items and quantities involved, and the estimated cost associated with
    each transfer.
  </p>
</div>

<figure className="case-study-visual">
  <Image
    src="/images/sourcing-optimization/transfer-detail.png"
    alt="Item-level sourcing transfer detail showing source and staging warehouses, product identifiers, descriptions, and quantities."
    width={1600}
    height={950}
    className="case-study-image"
  />

  <figcaption>
    Item-level drill-down keeps the sourcing recommendation transparent and
    operationally usable rather than reducing the result to a single warehouse
    selection.
  </figcaption>
</figure>

<p>
  Once a scenario is selected, the application generates a structured Excel
  sourcing plan that fits into the team&apos;s existing downstream workflow.
  The workbook retains the recommended staging strategy, warehouse assignments,
  cost detail, exceptions, and supporting scenario information.
</p>

<figure className="case-study-visual">
  <Image
    src="/images/sourcing-optimization/sourcing-plan-output.png"
    alt="Generated Excel sourcing plan summarizing the recommended staging warehouse, sourcing assignments, cost outputs, and operational details."
    width={1600}
    height={950}
    className="case-study-image"
  />

  <figcaption>
    The selected scenario is translated into a structured operational output,
    closing the gap between analysis and execution.
  </figcaption>
</figure>
        </div>
      </section>

      {/* 06 */}
      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">06</p>

          <h2>Business Impact</h2>

          <p>
  The new workflow significantly reduces the manual effort required to prepare
  sourcing plans. Instead of checking inventory warehouse by warehouse and
  reasoning through alternatives manually, coordinators can generate a
  structured recommendation and focus their time on validating exceptions and
  operational considerations.
</p>

<p>
  In early operational use, sourcing-plan preparation has moved from taking
  much of a coordinator&apos;s day to roughly one hour per project. The tool is
  also creating greater consistency and visibility by giving the team a common
  cost-based framework for comparing sourcing decisions.
</p>

<div className="decision-grid">
  <article className="decision-card">
    <h3>Faster Planning</h3>

    <p>
      Automated inventory evaluation and scenario comparison remove much of the
      repetitive analysis that previously slowed project sourcing.
    </p>
  </article>

  <article className="decision-card">
    <h3>More Consistent Decisions</h3>

    <p>
      Coordinators can evaluate sourcing options against the same cost logic
      instead of relying primarily on individual experience and proximity-based
      heuristics.
    </p>
  </article>

  <article className="decision-card">
    <h3>Greater Cost Visibility</h3>

    <p>
      The application makes transfer costs, final-shipment costs, and the tradeoffs
      between alternative staging scenarios visible before the plan is finalized.
    </p>
  </article>
</div>

<p className="case-study-note">
  <strong>Impact note:</strong> The approximate one-hour planning time reflects
  early operational use and has not been established through a formal time study.
  Financial savings are not yet presented because realized cost impact is still
  being evaluated.
</p>
        </div>
      </section>

      {/* 07 */}
      <section className="case-study-section">
        <div className="case-study-container">
          <p className="section-label">07</p>

          <h2>Implementation</h2>

          <p>
  The solution combines enterprise data preparation with a Python-based
  sourcing engine, an internal shipping-cost API, and a Streamlit application
  used by the project fulfillment team.
</p>

<p>
  Order, inventory, warehouse, and product data are transformed into an
  item-level structure that the engine can use to build sourcing scenarios,
  estimate transfer and final-shipment costs, apply operational business rules,
  and rank the resulting plans. The selected scenario can then be reviewed in
  the application and exported into a structured Excel sourcing plan for
  downstream use.
</p>

<div className="architecture-strip">
  <span>Power BI</span>
  <span>Python</span>
  <span>Shipping API</span>
  <span>Streamlit</span>
  <span>Excel Output</span>
</div>
        </div>
      </section>

      {/* 08 */}
      <section className="case-study-section case-study-muted">
        <div className="case-study-container">
          <p className="section-label">08</p>

          <h2>What the System Enables</h2>

          <p>
  The current engine prioritizes estimated sourcing cost while accounting for
  inventory availability and existing transfer rules.
</p>

<p>
  A future extension could incorporate expected delivery timing and service
  requirements into scenario evaluation, allowing coordinators to balance cost
  efficiency against fulfillment speed when project priorities require it.
</p>
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