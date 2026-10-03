import React, { useState } from "react";
import TShirtCard from "./T-shirtCard";
import "./TShirtCardList.css";

const tshirts = [
  {
    image: "https://m.media-amazon.com/images/I/51bd0fRg5TL._SY741_.jpg",
    name: "Remera Graphic",
    color: "Sky Blue",
    price: "$45.99",
    category: "casual",
  },
  {
    image: "https://m.media-amazon.com/images/I/51hY4EWNFpL._SY741_.jpg",
    name: "Classic Crew",
    color: "Dark Navy",
    price: "$39.99",
    category: "classic",
  },
  {
    image: "https://m.media-amazon.com/images/I/51oasAWEanL._SY741_.jpg",
    name: "Sport Performance",
    color: "Sage Green",
    price: "$29.99",
    category: "sport",
  },
  {
    image: "https://m.media-amazon.com/images/I/51hlessgfZL._SY741_.jpg",
    name: "Midnight Streetwear",
    color: "Obsidian Black",
    price: "$34.99",
    category: "casual",
  },
  {
    image: "https://m.media-amazon.com/images/I/61TR7B-IO1L._SY741_.jpg",
    name: "Solar Summer",
    color: "Golden Mustard",
    price: "$24.99",
    category: "classic",
  },
  {
    image: "https://m.media-amazon.com/images/I/517pPZXYdtL._SY741_.jpg",
    name: "Urban Oversized",
    color: "Cream Ivory",
    price: "$49.99",
    category: "casual",
  },
];

export default function TShirtCardList() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? tshirts : tshirts.filter((t) => t.category === filter);

  return (
    <div className="tshirt-section-container">
      <div className="tshirt-section-header">
        <div>
          <span className="tshirt-sub-head">COLLECTION 2026</span>
          <h3 className="tshirt-main-head">Streetwear &amp; Apparel Series</h3>
        </div>
        <div className="tshirt-filter-tabs">
          {["all", "casual", "classic", "sport"].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`tshirt-tab-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="tshirt-card-list">
        {filtered.map((t, idx) => (
          <TShirtCard
            key={idx}
            image={t.image}
            name={t.name}
            color={t.color}
            price={t.price}
          />
        ))}
      </div>
    </div>
  );
}
