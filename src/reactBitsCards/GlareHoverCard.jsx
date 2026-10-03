import React, { useRef, useState } from "react";
import "./GlareHoverCard.css";
import { showToast } from "../utils/toast";

export default function GlareHoverCard() {
  const cardRef = useRef(null);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const xPct = (x / width) * 100;
    const yPct = (y / height) * 100;

    const rotateY = ((x / width) - 0.5) * 22;
    const rotateX = -((y / height) - 0.5) * 22;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({ x: xPct, y: yPct, opacity: 0.65 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleReserve = () => {
    showToast("Aethelgard Chronograph Reserved for Consultation!", "⌚");
  };

  return (
    <div
      className="glare-card-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="glare-card"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg)`,
        }}
      >
        {/* Holographic Specular Glare */}
        <div
          className="glare-sheet"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`,
          }}
        />

        {/* Top Badges */}
        <div className="glare-header">
          <span className="glare-badge">HAUTE HORLOGERIE</span>
          <span className="glare-edition">PIECE UNIQUE</span>
        </div>

        {/* Unsplash Luxury Image */}
        <div className="glare-media">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
            alt="Handcrafted luxury skeleton chronograph"
            className="glare-img"
          />
          <div className="tourbillon-pill">
            <span>⚙️ 60-Second Flying Tourbillon</span>
          </div>
        </div>

        {/* Content */}
        <div className="glare-body">
          <div className="glare-brand-row">
            <span className="glare-brand">AETHELGARD GENÈVE</span>
            <span className="glare-calibre">CALIBRE AG-88</span>
          </div>

          <h3 className="glare-title">Sovereign Tourbillon</h3>
          <p className="glare-desc">
            Hand-finished grade 5 titanium case with sapphire exhibition dial,
            blued titanium screws, and 72-hour power reserve.
          </p>

          <div className="glare-specs">
            <span className="g-spec">41mm Titanium</span>
            <span className="g-spec">30m Water Res.</span>
            <span className="g-spec">Alligator Strap</span>
          </div>

          {/* Footer & Reserve */}
          <div className="glare-footer">
            <div className="glare-price-block">
              <span className="g-price-sub">Price Upon Request</span>
              <span className="g-price">$48,500</span>
            </div>
            <button
              type="button"
              className="glare-btn"
              onClick={handleReserve}
            >
              <span>Reserve</span>
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
