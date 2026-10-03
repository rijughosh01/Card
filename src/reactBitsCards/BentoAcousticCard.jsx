import React, { useState, useEffect } from "react";
import "./BentoAcousticCard.css";
import { showToast } from "../utils/toast";

export default function BentoAcousticCard() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeProfile, setActiveProfile] = useState("Spatial 3D");
  const [volume, setVolume] = useState(78);
  const [decibels, setDecibels] = useState(42);

  // Live fluctuating decibel simulation when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setDecibels(Math.floor(40 + Math.random() * 28 * (volume / 100)));
    }, 450);
    return () => clearInterval(interval);
  }, [isPlaying, volume]);

  const profiles = [
    { name: "Spatial 3D", desc: "Dolby Atmos 360°", color: "#6366f1" },
    { name: "Studio Flat", desc: "True Reference 24-bit", color: "#06b6d4" },
    { name: "Deep Bass", desc: "Sub-harmonic +8dB", color: "#ec4899" },
  ];

  const handleOrder = () => {
    showToast(
      `Aura Studio Pro (${activeProfile} preset) added to cart!`,
      "🔊"
    );
  };

  return (
    <div className="bento-acoustic-card">
      {/* Top Bento Header */}
      <div className="bento-top-row">
        <div className="brand-tag">
          <span className="dot-live" />
          <span>AURA ACOUSTICS</span>
        </div>
        <div className="bento-badge">HI-RES AUDIO</div>
      </div>

      {/* Main Title & Sub */}
      <div className="bento-title-block">
        <h3 className="bento-title">Studio Pro Spatial Hub</h3>
        <p className="bento-sub">Beryllium-dome tweeter & dual passive neodymium radiators.</p>
      </div>

      {/* BENTO GRID OF MODULES */}
      <div className="bento-grid">
        {/* Module 1: Live Audio Waveform & Visualizer */}
        <div className="bento-module visualizer-module">
          <div className="module-header">
            <span className="module-label">LIVE FREQUENCY SPECTRUM</span>
            <button
              type="button"
              className={`play-toggle-btn ${isPlaying ? "playing" : ""}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
              <span>{isPlaying ? "LIVE" : "PAUSED"}</span>
            </button>
          </div>

          <div className="audio-bars-container">
            {[45, 80, 60, 95, 70, 85, 100, 75, 90, 65, 80, 50].map((h, i) => (
              <div
                key={i}
                className={`audio-bar ${isPlaying ? "animating" : ""}`}
                style={{
                  "--max-h": `${Math.min(100, (h * volume) / 100)}%`,
                  "--delay": `${i * 0.08}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Module 2: Live Decibels Meter */}
        <div className="bento-module db-module">
          <span className="module-label">SPL OUTPUT</span>
          <div className="db-value">
            <span className="db-number">{isPlaying ? decibels : "--"}</span>
            <span className="db-unit">dB</span>
          </div>
          <div className="db-meter-bar">
            <div
              className="db-meter-fill"
              style={{ width: isPlaying ? `${(decibels / 85) * 100}%` : "0%" }}
            />
          </div>
        </div>

        {/* Module 3: Volume & Gain Slider */}
        <div className="bento-module volume-module">
          <div className="module-header">
            <span className="module-label">GAIN</span>
            <span className="vol-text">{volume}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="volume-slider"
          />
        </div>
      </div>

      {/* Acoustic Tuning Profile Selector */}
      <div className="profiles-section">
        <span className="module-label">SOUND PROFILE:</span>
        <div className="profiles-row">
          {profiles.map((p) => (
            <button
              key={p.name}
              type="button"
              className={`profile-btn ${activeProfile === p.name ? "active" : ""}`}
              onClick={() => setActiveProfile(p.name)}
              style={{ "--p-color": p.color }}
            >
              <span className="p-name">{p.name}</span>
              <span className="p-desc">{p.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Pricing & CTA */}
      <div className="bento-footer">
        <div className="bento-price-block">
          <span className="price-tag-sub">Retail Price</span>
          <span className="bento-price">$499</span>
        </div>
        <button
          type="button"
          className="bento-order-btn"
          onClick={handleOrder}
        >
          <span>Claim Studio Hub</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
