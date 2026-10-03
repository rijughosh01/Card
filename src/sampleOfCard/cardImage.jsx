import React, { useState } from "react";
import "./cardImage.css";
import { showToast } from "../utils/toast";

export default function CardImage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [isFavorited, setIsFavorited] = useState(false);

  const handleOrder = () => {
    showToast(`Boho Oversized T-Shirt (Size ${selectedSize}) added to bag!`, "✨");
  };

  return (
    <div className="boho-card-modern">
      {/* Top Banner */}
      <div className="boho-card-header">
        <span className="boho-trend-tag">LOOKBOOK 2026 // SS</span>
        <button
          type="button"
          className={`boho-fav-btn ${isFavorited ? "active" : ""}`}
          onClick={() => {
            setIsFavorited(!isFavorited);
            showToast(isFavorited ? "Removed from favorites" : "Added to favorites!", "❤️");
          }}
          aria-label="Wishlist"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorited ? "#f43f5e" : "none"} stroke={isFavorited ? "#f43f5e" : "currentColor"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Image Stage */}
      <div className="boho-img-container">
        <img
          src="https://m.media-amazon.com/images/I/71+x0eG5vQL._SY741_.jpg"
          alt="Boho Oversized T-Shirt"
          className="boho-img"
        />
        <div className="boho-style-badge">
          <span>Oversized Drop-Shoulder</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="boho-details">
        <div className="boho-label-row">
          <span className="boho-brand">TQH ATELIER</span>
          <span className="boho-rating">★ 4.8 (89)</span>
        </div>

        <h3 className="boho-title">Boho Floral Longline Tee</h3>

        <p className="boho-desc">
          Crafted from breathable organic slub cotton with distressed floral print
          and relaxed ribbed round neckline.
        </p>

        {/* Feature Tags */}
        <div className="boho-tags-row">
          <span className="boho-tag">🌿 100% Breathable</span>
          <span className="boho-tag">🧺 Pre-washed</span>
          <span className="boho-tag">🧵 Drop Shoulder</span>
        </div>

        {/* Size Selection */}
        <div className="boho-size-selector">
          <span className="b-size-label">SIZE:</span>
          <div className="b-size-btns">
            {["XS", "S", "M", "L", "XL"].map((sz) => (
              <button
                key={sz}
                type="button"
                className={`b-size-btn ${selectedSize === sz ? "active" : ""}`}
                onClick={() => setSelectedSize(sz)}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Action */}
        <div className="boho-footer">
          <div className="boho-price-block">
            <span className="b-price-sub">Price</span>
            <span className="b-price">$38.00</span>
          </div>

          <button
            type="button"
            className="boho-buy-btn"
            onClick={handleOrder}
          >
            <span>Add to Bag</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
