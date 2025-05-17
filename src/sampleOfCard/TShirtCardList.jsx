import React from "react";
import TShirtCard from "./T-shirtCard";
import "./TShirtCardList.css";

const tshirts = [
  {
    image: "https://m.media-amazon.com/images/I/51bd0fRg5TL._SY741_.jpg",
    name: "Remera",
    color: "Light Blue",
    price: "$45.99",
  },
  {
    image: "https://m.media-amazon.com/images/I/51hY4EWNFpL._SY741_.jpg",
    name: "Classic Tee",
    color: "Dark Blue",
    price: "$39.99",
  },
  {
    image: "https://m.media-amazon.com/images/I/51oasAWEanL._SY741_.jpg",
    name: "Sport Shirt",
    color: "Light Green",
    price: "$29.99",
  },
  {
    image: "https://m.media-amazon.com/images/I/51hlessgfZL._SY741_.jpg",
    name: "Casual Wear",
    color: "Black",
    price: "$34.99",
  },
  {
    image: "https://m.media-amazon.com/images/I/61TR7B-IO1L._SY741_.jpg",
    name: "Summer Tee",
    color: "Yellow",
    price: "$24.99",
  },
  {
    image: "https://m.media-amazon.com/images/I/517pPZXYdtL._SY741_.jpg",
    name: "Urban Style",
    color: "Light Yellow",
    price: "$49.99",
  },
];

export default function TShirtCardList() {
  return (
    <div className="tshirt-card-list">
      {tshirts
        .filter((t) => t.image && t.name && t.color && t.price)
        .map((t, idx) => (
          <TShirtCard
            key={idx}
            image={t.image}
            name={t.name}
            color={t.color}
            price={t.price}
          />
        ))}
    </div>
  );
}
