import React, { useRef, useState } from "react";
import "./Tilt3DCard.css";
import { showToast } from "../utils/toast";

export default function Tilt3DCard() {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  });
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: "50%", y: "50%" });
  const [activeColor, setActiveColor] = useState("cyan");
  const [selectedSize, setSelectedSize] = useState("10");

  const colorways = {
    cyan: {
      name: "Cyber Cyan",
      primary: "#06b6d4",
      secondary: "#0284c7",
      glow: "rgba(6, 182, 212, 0.4)",
    },
    crimson: {
      name: "Neon Crimson",
      primary: "#f43f5e",
      secondary: "#be123c",
      glow: "rgba(244, 63, 94, 0.4)",
    },
    volt: {
      name: "Electric Volt",
      primary: "#eab308",
      secondary: "#ca8a04",
      glow: "rgba(234, 179, 8, 0.4)",
    },
  };

  const currentColor = colorways[activeColor];

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-15 to 15 degrees)
    const rotateY = ((mouseX / width) - 0.5) * 26;
    const rotateX = -((mouseY / height) - 0.5) * 26;

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.08s ease-out",
    });

    setGlareStyle({
      opacity: 0.7,
      x: `${(mouseX / width) * 100}%`,
      y: `${(mouseY / height) * 100}%`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    });
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleAddToCart = () => {
    showToast(
      `Nike Air Vapor Cyber (${currentColor.name} • US ${selectedSize}) added to bag!`,
      "👟"
    );
  };

  return (
    <div
      className="tilt-card-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="tilt-card"
        style={{
          ...transformStyle,
          "--accent-color": currentColor.primary,
          "--accent-glow": currentColor.glow,
        }}
      >
        {/* Specular Glare Overlay */}
        <div
          className="tilt-glare"
          style={{
            opacity: glareStyle.opacity,
            background: `radial-gradient(circle at ${glareStyle.x} ${glareStyle.y}, rgba(255, 255, 255, 0.35) 0%, transparent 65%)`,
          }}
        />

        {/* Ambient Glow Backdrop Layer */}
        <div className="tilt-ambient-glow" />

        {/* Header Tags (Parallax Level 1) */}
        <div className="tilt-header">
          <span className="tilt-brand">NIKE // LAB</span>
          <span className="tilt-badge">3D TILT EFFECT</span>
        </div>

        {/* Sneaker Visual Container with Parallax Level 3 (Floats out 60px) */}
        <div className="sneaker-stage">
          <div className="sneaker-aura" />
          <div className="floating-sneaker">
            <svg
              viewBox="0 0 400 240"
              className="sneaker-svg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`grad-${activeColor}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={currentColor.primary} />
                  <stop offset="100%" stopColor={currentColor.secondary} />
                </linearGradient>
                <filter id="sneaker-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="18" stdDeviation="12" floodColor="rgba(0,0,0,0.5)" />
                </filter>
              </defs>

              {/* Sole Air Cushions */}
              <g filter="url(#sneaker-shadow)">
                <path
                  d="M60 170 C90 170, 110 185, 150 185 C190 185, 230 175, 280 180 C320 184, 350 165, 360 145 C350 175, 320 195, 270 195 C220 195, 180 200, 130 200 C80 200, 50 185, 60 170 Z"
                  fill={`url(#grad-${activeColor})`}
                  opacity="0.9"
                />
                {/* Air Pods */}
                <ellipse cx="100" cy="186" rx="18" ry="6" fill="#fff" opacity="0.4" />
                <ellipse cx="160" cy="190" rx="24" ry="7" fill="#fff" opacity="0.4" />
                <ellipse cx="230" cy="188" rx="28" ry="7" fill="#fff" opacity="0.4" />
                <ellipse cx="300" cy="184" rx="20" ry="6" fill="#fff" opacity="0.4" />
              </g>

              {/* Upper Body */}
              <path
                d="M70 165 C85 130, 120 110, 170 100 C205 92, 230 70, 255 55 C270 45, 285 50, 290 65 C295 80, 275 110, 310 115 C340 120, 360 135, 355 150 C330 170, 290 165, 250 165 C200 165, 140 175, 70 165 Z"
                fill="#161e2e"
                stroke={currentColor.primary}
                strokeWidth="2.5"
              />

              {/* Flyknit Accent Lines */}
              <path
                d="M110 150 Q160 120 220 125"
                stroke={currentColor.primary}
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M130 160 Q180 135 240 140"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 3"
                opacity="0.6"
              />

              {/* Iconic Cyber Swoosh */}
              <path
                d="M150 145 C190 140, 240 110, 300 75 C270 105, 220 145, 170 155 C155 158, 145 152, 150 145 Z"
                fill={`url(#grad-${activeColor})`}
                filter="drop-shadow(0 0 10px var(--accent-color))"
              />

              {/* Lacing System */}
              <line x1="220" y1="90" x2="235" y2="105" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="235" y1="80" x2="252" y2="95" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="250" y1="70" x2="270" y2="85" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Floating Tag (Parallax Level 4) */}
          <div className="floating-price-tag">
            <span className="tag-currency">$</span>
            <span className="tag-amt">240</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="tilt-details">
          <div className="title-row">
            <h3 className="sneaker-title">Air VaporMax 2026</h3>
            <span className="sneaker-sub">Cyberpunk Edition</span>
          </div>

          <p className="sneaker-desc">
            Ultra-responsive dual vapor pods with aerodynamic carbon fiber shanks
            and breathable holographic mesh.
          </p>

          {/* Colorway & Size Pickers */}
          <div className="selectors-row">
            <div className="color-selector">
              <span className="selector-title">COLORWAY:</span>
              <div className="swatch-list">
                {Object.keys(colorways).map((key) => (
                  <button
                    key={key}
                    type="button"
                    className={`color-swatch ${activeColor === key ? "active" : ""}`}
                    style={{ background: colorways[key].primary }}
                    onClick={() => setActiveColor(key)}
                    title={colorways[key].name}
                  />
                ))}
              </div>
            </div>

            <div className="size-selector">
              <span className="selector-title">SIZE (US):</span>
              <div className="size-pills">
                {["8", "9", "10", "11"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size-pill ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <button
            type="button"
            className="tilt-action-btn"
            onClick={handleAddToCart}
          >
            <span>Add to Bag</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
