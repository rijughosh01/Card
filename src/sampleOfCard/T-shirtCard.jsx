import React, { useState } from "react";
import "./T-shirtCard.css";
import { showToast } from "../utils/toast";

export default function TShirtCard({
  image = "https://m.media-amazon.com/images/I/51bd0fRg5TL._SY741_.jpg",
  name = "Remera Premium Tee",
  color = "Sky Blue",
  price = "$45.99",
}) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    showToast(`Added ${name} (${color} • Size ${selectedSize}) to bag!`, "👕");
  };

  const handleBuyNow = () => {
    showToast(`Purchased ${name}!`, "⚡");
  };

  return (
    <div className="card-tshirt-modern">
      {/* Top badges */}
      <div className="tshirt-top-bar">
        <span className="cotton-badge">100% ORGANIC COTTON</span>
        <button
          type="button"
          className={`tshirt-fav-btn ${isWishlisted ? "active" : ""}`}
          onClick={() => {
            setIsWishlisted(!isWishlisted);
            showToast(isWishlisted ? "Removed from wishlist" : "Added to wishlist!", "❤️");
          }}
          aria-label="Wishlist"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={isWishlisted ? "#f43f5e" : "none"} stroke={isWishlisted ? "#f43f5e" : "currentColor"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Image Stage */}
      <div className="tshirt-img-stage">
        <img src={image} alt={name} className="tshirt-image" />
      </div>

      {/* Details */}
      <div className="tshirt-details">
        <div className="tshirt-heading-row">
          <div>
            <h4 className="tshirt-title">{name}</h4>
            <span className="tshirt-color-label">{color}</span>
          </div>
          <span className="tshirt-price">{price}</span>
        </div>

        {/* Size Selection */}
        <div className="size-selector-row">
          <span className="size-label">SIZE:</span>
          <div className="size-btns">
            {["S", "M", "L", "XL"].map((s) => (
              <button
                key={s}
                type="button"
                className={`size-btn-pill ${selectedSize === s ? "active" : ""}`}
                onClick={() => setSelectedSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Card Actions */}
        <div className="tshirt-actions-row">
          <button
            type="button"
            className="tshirt-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Bag
          </button>
          <button
            type="button"
            className="tshirt-buy-btn"
            onClick={handleBuyNow}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
