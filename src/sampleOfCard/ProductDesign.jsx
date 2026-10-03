import React, { useState } from "react";
import "./ProductDesign.css";
import { showToast } from "../utils/toast";

export default function ProductDesign() {
  const [selectedFinish, setSelectedFinish] = useState("terracotta");
  const [isSaved, setIsSaved] = useState(false);

  const finishes = {
    terracotta: {
      name: "Terracotta Raw",
      hex: "#c2410c",
      img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=700&q=80",
    },
    sand: {
      name: "Dune Sand",
      hex: "#d97706",
      img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=700&q=80",
    },
    slate: {
      name: "Nordic Slate",
      hex: "#475569",
      img: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=700&q=80",
    },
  };

  const current = finishes[selectedFinish] || finishes.terracotta;

  const handleOrder = () => {
    showToast(`Harvest Ceramic Vase (${current.name}) ordered!`, "🏺");
  };

  return (
    <div className="vase-card-modern">
      {/* Visual Image Section */}
      <div className="vase-img-container">
        <img
          src={current.img}
          alt={`Harvest Vase in ${current.name}`}
          className="vase-img"
        />
        <div className="artisan-badge">
          <span>HANDCRAFTED STONEWARE</span>
        </div>
        <button
          type="button"
          className={`vase-fav-btn ${isSaved ? "active" : ""}`}
          onClick={() => {
            setIsSaved(!isSaved);
            showToast(isSaved ? "Removed from collection" : "Saved to collection!", "✨");
          }}
          aria-label="Save"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isSaved ? "#c2410c" : "none"} stroke={isSaved ? "#c2410c" : "currentColor"} strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      {/* Info Section */}
      <div className="vase-info-section">
        <div className="vase-meta-row">
          <span className="studio-brand">STUDIO &amp; FRIENDS</span>
          <span className="batch-pill">BATCH #14</span>
        </div>

        <h3 className="vase-title">The Harvest Sculptural Vase</h3>
        <p className="vase-caption">
          A tactile reinterpretation of peeled botanicals as functional ceramic sculpture.
          Individually thrown on the wheel and pit-fired with organic glaze.
        </p>

        {/* Specs */}
        <div className="vase-specs-list">
          <span className="v-spec">📐 28cm × 16cm</span>
          <span className="v-spec">💧 Water-sealed</span>
          <span className="v-spec">✨ Signed base</span>
        </div>

        {/* Glaze Finishes */}
        <div className="glaze-row">
          <span className="glaze-label">FINISH: <strong>{current.name}</strong></span>
          <div className="glaze-swatches">
            {Object.keys(finishes).map((k) => (
              <button
                key={k}
                type="button"
                className={`glaze-swatch ${selectedFinish === k ? "active" : ""}`}
                style={{ background: finishes[k].hex }}
                onClick={() => setSelectedFinish(k)}
                title={finishes[k].name}
              />
            ))}
          </div>
        </div>

        {/* Price & Button */}
        <div className="vase-footer">
          <div className="vase-price">
            <span className="vase-curr">$</span>
            <span className="vase-val">78</span>
          </div>
          <button
            type="button"
            className="vase-order-btn"
            onClick={handleOrder}
          >
            <span>Acquire Piece</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
