import React from "react";
import "./StarBorderCard.css";
import { showToast } from "../utils/toast";

export default function StarBorderCard() {
  const handleLaunch = () => {
    showToast("Orbital James Webb Deep Space Telescope link active!", "🔭");
  };

  return (
    <div className="star-border-card-container">
      {/* Animated Orbiting Star Glow Border */}
      <div className="star-border-beam star-beam-top" />
      <div className="star-border-beam star-beam-bottom" />

      {/* Card Inner */}
      <div className="star-card-inner">
        <div className="star-header">
          <div className="star-tag">
            <span className="twinkle-star">✦</span>
            <span>COSMIC HORIZON</span>
          </div>
          <span className="jwst-code">JWST-DEEP-FIELD</span>
        </div>

        {/* Media */}
        <div className="star-img-wrapper">
          <img
            src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80"
            alt="Deep space cosmic nebula and star clusters"
            className="star-img"
          />
          <div className="celestial-badge">
            <span>Aurora Australis &amp; Cosmic Cluster</span>
          </div>
        </div>

        {/* Details */}
        <div className="star-card-details">
          <div className="star-meta-row">
            <span className="star-constellation">CARINA NEBULA NGC 3372</span>
            <span className="star-lightyears">7,500 LY</span>
          </div>

          <h3 className="star-title">Cosmic Stellar Nursery</h3>
          <p className="star-desc">
            Ultra-deep infrared composite exposing young proto-stellar outflows,
            ionized molecular hydrogen walls, and interstellar magnetic filaments.
          </p>

          <div className="star-telemetry">
            <div className="tele-chip">
              <span className="tc-label">FILTER</span>
              <span className="tc-val">F090W / F444W</span>
            </div>
            <div className="tele-chip">
              <span className="tc-label">INTEGRATION</span>
              <span className="tc-val">42.8 HOURS</span>
            </div>
          </div>

          <div className="star-footer">
            <div className="data-pack-block">
              <span className="dp-label">Raw FITS Archive</span>
              <span className="dp-val">Free Access</span>
            </div>
            <button
              type="button"
              className="star-launch-btn"
              onClick={handleLaunch}
            >
              <span>Explore FITS</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
