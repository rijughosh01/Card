import React, { useState } from "react";
import "./Badge.css";
import { showToast } from "../utils/toast";

export default function Badge() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState("blue");

  const colorVariants = {
    blue: {
      name: "Sapphire Blue",
      img: "https://m.media-amazon.com/images/I/31QRFxphBAL._SX300_SY300_QL70_FMwebp_.jpg",
      hex: "#2563eb",
    },
    black: {
      name: "Matte Black",
      img: "https://m.media-amazon.com/images/I/51rpbVmi9XL._SX425_.jpg",
      hex: "#1e293b",
    },
    white: {
      name: "Platinum Silver",
      img: "https://m.media-amazon.com/images/I/51bDbj3sUHL._SX425_.jpg",
      hex: "#e2e8f0",
    },
  };

  const currentVariant = colorVariants[selectedColor] || colorVariants.blue;

  const handleAddToCart = () => {
    showToast(
      `Sony WH-CH720N (${currentVariant.name}) added to cart!`,
      "🎧"
    );
  };

  return (
    <div className="sony-headphone-card">
      {/* Top Badge & Heart */}
      <div className="headphone-card-top">
        <div className="anc-badge">
          <span className="anc-icon">〰️</span>
          <span>DUAL NOISE CANCEL</span>
        </div>
        <button
          type="button"
          className={`headphone-fav-btn ${isWishlisted ? "active" : ""}`}
          onClick={() => {
            setIsWishlisted(!isWishlisted);
            showToast(isWishlisted ? "Removed from favorites" : "Added to favorites!", "❤️");
          }}
          aria-label="Favorite"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? "#f43f5e" : "none"} stroke={isWishlisted ? "#f43f5e" : "currentColor"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Headphone Stage */}
      <div className="headphone-stage">
        <img
          src={currentVariant.img}
          alt={`Sony WH-CH720N in ${currentVariant.name}`}
          className="headphone-img"
        />
        <div className="battery-pill">
          <span>🔋 Up to 35 Hrs Playback</span>
        </div>
      </div>

      {/* Details */}
      <div className="headphone-details">
        <div className="headphone-brand-row">
          <span className="brand-name">SONY AUDIO</span>
          <span className="eq-tag">Custom EQ Support</span>
        </div>

        <h3 className="headphone-title">WH-CH720N Wireless ANC</h3>

        <p className="headphone-desc">
          Integrated V1 processor delivers studio-grade noise canceling, ultra-light
          design at just 192g, and multipoint connection.
        </p>

        {/* Color Switcher */}
        <div className="headphone-color-row">
          <span className="color-text">COLOR: <strong>{currentVariant.name}</strong></span>
          <div className="color-dots">
            {Object.keys(colorVariants).map((k) => (
              <button
                key={k}
                type="button"
                className={`color-dot-btn ${selectedColor === k ? "active" : ""}`}
                style={{ background: colorVariants[k].hex }}
                onClick={() => setSelectedColor(k)}
                title={colorVariants[k].name}
              />
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="headphone-footer">
          <div className="headphone-price-block">
            <span className="price-old">$160.00</span>
            <span className="price-now">$110.99</span>
          </div>

          <button
            type="button"
            className="headphone-buy-btn"
            onClick={handleAddToCart}
          >
            <span>Add to Cart</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
