import React, { useState } from "react";
import "./AnotherCard.css";
import { showToast } from "../utils/toast";

const AnotherCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const unitPrice = 12.0;

  const handleAddToCart = () => {
    showToast(
      `Added ${quantity}x Belgian Raspberry Waffle to your table order!`,
      "🧇"
    );
  };

  return (
    <div className="waffle-card-modern">
      {/* Top badges */}
      <div className="waffle-card-top">
        <div className="waffle-badge-group">
          <span className="bakery-badge">CHEF'S SPECIAL</span>
          <span className="cal-badge">320 kcal</span>
        </div>
        <button
          type="button"
          className={`waffle-fav-btn ${isSaved ? "active" : ""}`}
          onClick={() => {
            setIsSaved(!isSaved);
            showToast(isSaved ? "Removed from favorites" : "Saved to favorites!", "❤️");
          }}
          aria-label="Favorite"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isSaved ? "#f43f5e" : "none"} stroke={isSaved ? "#f43f5e" : "currentColor"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Image Stage */}
      <div className="waffle-img-container">
        <img
          src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80"
          alt="Belgian Raspberry Waffle with organic berries and cream"
          className="waffle-img"
        />
        <div className="waffle-fresh-pill">
          <span>Fresh Made-to-Order</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="waffle-details">
        <div className="waffle-header-row">
          <div>
            <h3 className="waffle-title">Wild Raspberry Waffle</h3>
            <span className="waffle-subtitle">Artisan Brussels Recipe</span>
          </div>
          <span className="waffle-single-price">${unitPrice.toFixed(2)}</span>
        </div>

        <p className="waffle-desc">
          Fluffy golden waffle crowned with wild mountain raspberries, Madagascar
          vanilla whipped butter, coconut flakes, and pure organic maple syrup.
        </p>

        {/* Dietary Pills */}
        <div className="waffle-dietary-row">
          <span className="w-pill">🍓 Fresh Berries</span>
          <span className="w-pill">🌱 Vegetarian</span>
          <span className="w-pill">🍯 Pure Maple</span>
        </div>

        {/* Quantity and Order Footer */}
        <div className="waffle-footer">
          <div className="waffle-stepper">
            <button
              type="button"
              className="w-step-btn"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              −
            </button>
            <span className="w-step-val">{quantity}</span>
            <button
              type="button"
              className="w-step-btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="waffle-order-btn"
            onClick={handleAddToCart}
          >
            <span>Order (${(unitPrice * quantity).toFixed(2)})</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnotherCard;
