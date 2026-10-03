import React, { useState, useEffect, useRef } from "react";
import "./ElectricBorderCard.css";
import { showToast } from "../utils/toast";

export default function ElectricBorderCard() {
  const [seed, setSeed] = useState(1);
  const [intensity, setIntensity] = useState("high");
  const animRef = useRef(null);

  // Animate the electric turbulence seed
  useEffect(() => {
    let frame = 0;
    const animate = () => {
      frame++;
      if (frame % 3 === 0) {
        setSeed((prev) => (prev % 100) + 1);
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const handleShock = () => {
    showToast("⚡ High-voltage electric surge deployed!", "⚡");
  };

  return (
    <div className={`electric-card-container intensity-${intensity}`}>
      {/* Dynamic SVG Filter for Electric Lightning Arcs */}
      <svg className="electric-svg-filter" aria-hidden="true">
        <defs>
          <filter id="electric-noise" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.065 0.095"
              numOctaves="4"
              seed={seed}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="9"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
          </filter>
        </defs>
      </svg>

      {/* The Electric Lightning Frame */}
      <div className="electric-border-frame" />
      <div className="electric-border-glow" />

      {/* Card Content */}
      <div className="electric-card-inner">
        <div className="electric-top-row">
          <span className="electric-featured-tag">FEATURED</span>
          <div className="intensity-controls">
            <span className="volts-label">INTENSITY:</span>
            {["low", "high"].map((lvl) => (
              <button
                key={lvl}
                type="button"
                className={`lvl-pill ${intensity === lvl ? "active" : ""}`}
                onClick={() => setIntensity(lvl)}
              >
                {lvl.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Hero image with electric overlay */}
        <div className="electric-img-box">
          <img
            src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=700&q=80"
            alt="Neon cyber skyline with electric energy"
            className="electric-img"
          />
          <div className="electric-voltage-badge">
            <span className="electric-bolt">⚡</span>
            <span>100,000 VOLTS</span>
          </div>
        </div>

        <div className="electric-content-body">
          <h3 className="electric-card-title">Electric Card</h3>
          <p className="electric-card-desc">
            An electric border for shocking your users, the right way. Built with
            jittery displacement physics and high-voltage ambient luminescence.
          </p>

          <div className="electric-card-footer">
            <div className="electric-status-pills">
              <span className="status-pill live-pill">
                <span className="pulse-dot" /> Live
              </span>
              <span className="status-pill version-pill">v1.0</span>
            </div>

            <button
              type="button"
              className="shock-action-btn"
              onClick={handleShock}
            >
              <span>Discharge</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
