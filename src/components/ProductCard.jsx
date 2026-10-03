import React, { useState } from "react";
import "./ProductCard.css";
import ProductImageSlider from "./ProductImageSlider";
import { showToast } from "../utils/toast";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    showToast(`Added ${quantity}x MSI Optix G241V to cart!`, "🛒");
  };

  const handleBuyNow = () => {
    showToast("Proceeding to checkout with MSI Optix G241V!", "⚡");
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    showToast(
      isWishlisted ? "Removed from wishlist" : "Saved to wishlist!",
      isWishlisted ? "💔" : "❤️"
    );
  };

  return (
    <div className="product-card-modern">
      {/* Top Banner Badges */}
      <div className="product-card-top">
        <div className="badge-group">
          <span className="gaming-badge">ESPORTS SERIES</span>
          <span className="save-badge">SAVE 33%</span>
        </div>
        <button
          type="button"
          className={`wishlist-icon-btn ${isWishlisted ? "active" : ""}`}
          onClick={toggleWishlist}
          aria-label="Wishlist"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isWishlisted ? "#f43f5e" : "none"} stroke={isWishlisted ? "#f43f5e" : "currentColor"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Product Image Slider */}
      <div className="product-card-slider-wrapper">
        <ProductImageSlider />
      </div>

      {/* Details Container */}
      <div className="product-card-info">
        <div className="brand-series-row">
          <span className="brand-title">MSI GAMING</span>
          <span className="stock-pill">In Stock • Fast Delivery</span>
        </div>

        <h3 className="product-title-text">
          Optix G241V E2 24&quot; FHD FreeSync IPS Esports Monitor
        </h3>

        {/* Rating Row */}
        <div className="product-rating-row">
          <div className="star-rating">
            {"★★★★☆"}
            <span className="rating-score">4.7</span>
          </div>
          <span className="review-count">(126 verified reviews)</span>
        </div>

        {/* Feature Highlights Grid */}
        <div className="specs-grid">
          <div className="spec-pill">
            <span className="spec-icon">⚡</span>
            <span>1ms • 75Hz IPS</span>
          </div>
          <div className="spec-pill">
            <span className="spec-icon">🖥️</span>
            <span>1920 × 1080 FHD</span>
          </div>
          <div className="spec-pill">
            <span className="spec-icon">🎮</span>
            <span>AMD FreeSync</span>
          </div>
          <div className="spec-pill">
            <span className="spec-icon">🔌</span>
            <span>HDMI + DP + Audio</span>
          </div>
        </div>

        {/* Price & Quantity Block */}
        <div className="price-qty-row">
          <div className="price-container">
            <span className="price-current">₹10,000</span>
            <span className="price-original">₹15,000</span>
          </div>

          <div className="quantity-stepper">
            <button
              type="button"
              className="qty-btn"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              −
            </button>
            <span className="qty-number">{quantity}</span>
            <button
              type="button"
              className="qty-btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="product-card-buttons">
          <button
            type="button"
            className="modern-cart-btn"
            onClick={handleAddToCart}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span>Add to Cart</span>
          </button>
          <button
            type="button"
            className="modern-buy-btn"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
