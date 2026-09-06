"use client";

import { useState } from "react";

const walkthroughs = [
  {
    id: "drillthrough",
    label: "Summary + Drill-through",
    title: "Move from portfolio signal to account-level drivers",
    description:
      "Identify accounts needing review, drill into score drivers, inspect supporting detail, and diagnose why an account is unhealthy.",
    videoSrc: "/videos/account-health-drillthrough.mp4",
    poster: "/images/account-health/accountview.png",
  },
  {
    id: "positioning",
    label: "Revenue vs Health",
    title: "Compare revenue volume against account health",
    description:
      "Evaluate whether high-revenue accounts are truly healthy, then compare accounts across revenue, scale, tenure, and margin lenses.",
    videoSrc: "/videos/account-health-positioning.mp4",
    poster: "/images/account-health/AccountPositioning2.png",
  },
  {
    id: "trends",
    label: "Score Trends",
    title: "Track account health movement over time",
    description:
      "Review latest-period scores, monitor score movement, and connect changing trends back to specific accounts.",
    videoSrc: "/videos/account-health-trends.mp4",
    poster: "/images/account-health/trends.png",
  },
  {
    id: "distribution",
    label: "Portfolio Distribution",
    title: "Analyze score distribution across the portfolio",
    description:
      "Compare score distributions, isolate account groups, and focus review on segments where risk or opportunity is concentrated.",
    videoSrc: "/videos/account-health-portfolio-analysis.mp4",
    poster: "/images/account-health/portfolio-analysis.png",
  },
];

export default function ReportWalkthrough() {
  const [activeId, setActiveId] = useState(walkthroughs[0].id);

  const activeWalkthrough =
    walkthroughs.find((walkthrough) => walkthrough.id === activeId) ??
    walkthroughs[0];

  return (
    <div className="report-walkthrough">
      <div className="report-walkthrough-header">
        <p className="section-label">Report Walkthrough</p>
        <h3>Explore the decision workflow</h3>
        <p>
          Use the views below to preview how the report moves from portfolio-level
          signal to account diagnosis, trend analysis, and focused review.
        </p>
      </div>

      <div className="walkthrough-tabs" aria-label="Report walkthrough views">
        {walkthroughs.map((walkthrough) => (
          <button
            key={walkthrough.id}
            type="button"
            className={
              activeWalkthrough.id === walkthrough.id
                ? "walkthrough-tab walkthrough-tab-active"
                : "walkthrough-tab"
            }
            onClick={() => setActiveId(walkthrough.id)}
          >
            {walkthrough.label}
          </button>
        ))}
      </div>

      <div className="walkthrough-active-copy">
        <h4>{activeWalkthrough.title}</h4>
        <p>{activeWalkthrough.description}</p>
      </div>

      <figure className="walkthrough-video-figure">
        <div className="case-study-video-frame">
          <video
            key={activeWalkthrough.videoSrc}
            className="case-study-video"
            controls
            muted
            playsInline
            preload="metadata"
            poster={activeWalkthrough.poster}
            width={1654}
            height={931}
          >
            <source src={activeWalkthrough.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <figcaption className="demo-data-note">
          Demo data note: Customer names, account attributes, classifications, and
          financial values shown in this case study have been fictionalized or
          transformed for public presentation.
        </figcaption>
      </figure>
    </div>
  );
}