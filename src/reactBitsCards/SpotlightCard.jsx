import React, { useRef, useState } from "react";
import "./SpotlightCard.css";
import { showToast } from "../utils/toast";

export default function SpotlightCard() {
  const cardRef = useRef(null);
  const [selectedMem, setSelectedMem] = useState("256GB");
  const [isHovered, setIsHovered] = useState(false);

  const memoryOptions = [
    { size: "128GB", price: "$2,499", bw: "1.2 TB/s" },
    { size: "256GB", price: "$3,899", bw: "2.4 TB/s" },
    { size: "512GB", price: "$5,999", bw: "4.8 TB/s" },
  ];

  const currentOption = memoryOptions.find((m) => m.size === selectedMem);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleAddToCart = () => {
    showToast(`Quantum-X Neural Core (${selectedMem}) added to cart!`, "⚡");
  };

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${isHovered ? "active" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Spotlight Glow Layer */}
      <div className="spotlight-glow" />

      {/* Card Header & Chip Badge */}
      <div className="spotlight-header">
        <div className="chip-badge">
          <span className="live-dot" />
          <span>NEURAL ARCHITECTURE 5.0</span>
        </div>
        <span className="gen-tag">GEN-VI</span>
      </div>

      {/* Chip Visualizer & Schematic */}
      <div className="chip-schematic-wrapper">
        <div className="chip-core">
          <div className="chip-inner-die">
            <svg viewBox="0 0 100 100" className="chip-circuit-svg">
              <rect x="25" y="25" width="50" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
              <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M50 10 L50 25 M50 75 L50 90 M10 50 L25 50 M75 50 L90 50" stroke="currentColor" strokeWidth="2" />
              <path d="M22 22 L32 32 M78 22 L68 32 M22 78 L32 68 M78 78 L68 68" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="chip-core-text">QX-900</span>
          </div>
          <div className="circuit-lines" />
        </div>
      </div>

      {/* Product Titles */}
      <div className="spotlight-content">
        <div className="card-category">ENTERPRISE COMPUTE MODULE</div>
        <h3 className="spotlight-title">Quantum-X Neural Accelerator</h3>
        <p className="spotlight-description">
          Ultra-dense 128-core tensor engine with direct photonic interconnects
          and dynamic cryogenic thermal throttle.
        </p>

        {/* Live Telemetry Matrix */}
        <div className="telemetry-grid">
          <div className="telemetry-item">
            <span className="telemetry-label">INFERENCE SPEED</span>
            <span className="telemetry-val">1,420 TFLOPS</span>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-label">BANDWIDTH</span>
            <span className="telemetry-val">{currentOption.bw}</span>
          </div>
        </div>

        {/* Configurator */}
        <div className="config-section">
          <span className="config-label">SELECT UNIFIED HBM3e:</span>
          <div className="memory-pills">
            {memoryOptions.map((opt) => (
              <button
                key={opt.size}
                type="button"
                className={`mem-pill ${selectedMem === opt.size ? "active" : ""}`}
                onClick={() => setSelectedMem(opt.size)}
              >
                {opt.size}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="spotlight-footer">
          <div className="price-block">
            <span className="price-sub">Configured Total</span>
            <span className="spotlight-price">{currentOption.price}</span>
          </div>
          <button
            type="button"
            className="spotlight-cta-btn"
            onClick={handleAddToCart}
          >
            <span>Deploy Core</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
