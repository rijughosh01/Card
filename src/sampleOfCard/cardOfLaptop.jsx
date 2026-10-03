import React, { useState } from "react";
import "./cardOfLaptop.css";
import { showToast } from "../utils/toast";

export default function ProductDesign2() {
  const [selectedColor, setSelectedColor] = useState("midnight");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const colors = {
    midnight: {
      name: "Midnight",
      hex: "#1e293b",
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/c/o/7/-original-imahayjpsngfg4uf.jpeg?q=70",
    },
    starlight: {
      name: "Starlight",
      hex: "#f1ede2",
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70",
    },
    spacegray: {
      name: "Space Gray",
      hex: "#64748b",
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/b/n/-original-imagfdeq9htghurg.jpeg?q=70",
    },
    silver: {
      name: "Silver",
      hex: "#e2e8f0",
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/y/6/o/-original-imagfdeqz8bchhk7.jpeg?q=70",
    },
  };

  const handleAddToCart = () => {
    showToast(
      `Apple MacBook Air 13" M4 (${colors[selectedColor].name}) added to bag!`,
      "💻"
    );
  };

  return (
    <div className="laptop-card-modern">
      {/* Top Header */}
      <div className="laptop-card-header">
        <div className="apple-logo-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.66-1.06 1.73-.93 2.76 1 .08 2.01-.51 2.63-1.26z" />
          </svg>
          <span>MacBook Air</span>
        </div>
        <button
          type="button"
          className="laptop-fav-btn"
          onClick={() => {
            setIsWishlisted(!isWishlisted);
            showToast(isWishlisted ? "Removed from wishlist" : "Saved to wishlist!", "❤️");
          }}
          aria-label="Wishlist"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? "#f43f5e" : "none"} stroke={isWishlisted ? "#f43f5e" : "currentColor"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="laptop-image-stage">
        <img
          src={colors[selectedColor].img}
          alt={`Apple MacBook Air in ${colors[selectedColor].name}`}
          className="laptop-product-img"
        />
        <div className="m4-chip-tag">
          <span className="m4-badge">M4</span>
          <span>Apple Silicon</span>
        </div>
      </div>

      {/* Details Body */}
      <div className="laptop-details-body">
        <div className="laptop-title-row">
          <div>
            <h3 className="laptop-title">13.6-inch MacBook Air</h3>
            <span className="laptop-subtitle">Supercharged by M4 chip</span>
          </div>
          <div className="laptop-price-tag">
            <span className="cur">$</span>
            <span className="val">1,099</span>
          </div>
        </div>

        <p className="laptop-desc-text">
          Strikingly thin design with up to 18 hours of battery life. Liquid
          Retina display supporting 1 billion colors, 1080p FaceTime HD camera.
        </p>

        {/* Feature Pills */}
        <div className="laptop-specs-row">
          <div className="spec-badge">⚡ 18hr Battery</div>
          <div className="spec-badge">🧠 16GB Unified</div>
          <div className="spec-badge">💾 512GB SSD</div>
          <div className="spec-badge">✨ Liquid Retina</div>
        </div>

        {/* Color Palette Switcher */}
        <div className="laptop-color-picker">
          <span className="color-label">
            FINISH: <strong>{colors[selectedColor].name}</strong>
          </span>
          <div className="laptop-swatches">
            {Object.keys(colors).map((k) => (
              <button
                key={k}
                type="button"
                className={`laptop-swatch ${selectedColor === k ? "active" : ""}`}
                style={{ background: colors[k].hex }}
                onClick={() => setSelectedColor(k)}
                title={colors[k].name}
              />
            ))}
          </div>
        </div>

        {/* Reviews and Curator */}
        <div className="curator-row">
          <div className="curator-info">
            <span className="cur-label">Recognized by</span>
            <span className="cur-name">Charlotte Bennett, Tech Lead</span>
          </div>
          <div className="laptop-review-stars">
            {"★★★★★"} <span>(64 reviews)</span>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="apple-buy-btn"
          onClick={handleAddToCart}
        >
          <span>Add to Bag</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
