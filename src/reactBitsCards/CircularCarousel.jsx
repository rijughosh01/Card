import React, { useState, useEffect, useRef } from "react";
import "./CircularCarousel.css";
import { showToast } from "../utils/toast";

const defaultSlides = [
  {
    id: 1,
    title: "Alps Celestial Peak",
    author: "Benjamin Davies",
    location: "Swiss Alps",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    title: "Nocturne Solitude",
    author: "Aiony Haust",
    location: "Stockholm, Sweden",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    title: "Emerald Mist Forest",
    author: "Sebastian Unrau",
    location: "Black Forest, Germany",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    title: "Glacial Reflections",
    author: "Bailey Zindel",
    location: "Banff National Park",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    title: "Cyber Metropolis",
    author: "Aleksandar Pasaric",
    location: "Tokyo Shinjuku",
    img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    title: "Sahara Golden Waves",
    author: "Luca Bravo",
    location: "Merzouga Dunes",
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    title: "Obsidian Coastal Swell",
    author: "Jeremy Bishop",
    location: "Big Sur Coast",
    img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    title: "Monochrome Geometry",
    author: "Joel Filipe",
    location: "Rotterdam, Netherlands",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
  },
];

export default function CircularCarousel({ slides = defaultSlides }) {
  const [rotation, setRotation] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isGrayscale, setIsGrayscale] = useState(true);
  const [activeCard, setActiveCard] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);
  const requestRef = useRef(null);

  const count = slides.length;
  const angleStep = 360 / count;
  const radius = 340; // 3D distance from center

  // Auto rotation loop
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      if (!isDragging.current) {
        setRotation((prev) => prev - 0.28);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [autoRotate]);

  // Sync active card with rotation
  useEffect(() => {
    const normalized = ((-rotation % 360) + 360) % 360;
    const closestIdx = Math.round(normalized / angleStep) % count;
    setActiveCard(closestIdx);
  }, [rotation, angleStep, count]);

  // Drag handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startRotation.current = rotation;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    setRotation(startRotation.current + deltaX * 0.4);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const spinToIndex = (idx) => {
    const targetAngle = -idx * angleStep;
    setRotation(targetAngle);
    showToast(`Focused on: ${slides[idx].title}`, "📸");
  };

  const handleNext = () => {
    setRotation((prev) => prev - angleStep);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + angleStep);
  };

  return (
    <div
      className="circular-carousel-wrapper"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Header & Controls Bar */}
      <div className="carousel-control-panel">
        <div className="carousel-title-group">
          <span className="carousel-tag">REACT BITS // 3D COMPONENT</span>
          <h3 className="carousel-heading">Circular Carousel</h3>
        </div>

        <div className="carousel-actions-row">
          <button
            type="button"
            className={`action-toggle-pill ${isGrayscale ? "active" : ""}`}
            onClick={() => setIsGrayscale(!isGrayscale)}
          >
            {isGrayscale ? "B&W Mode" : "Vibrant Color"}
          </button>

          <button
            type="button"
            className={`action-toggle-pill ${autoRotate ? "active" : ""}`}
            onClick={() => setAutoRotate(!autoRotate)}
          >
            {autoRotate ? "Auto-Spin: ON" : "Auto-Spin: OFF"}
          </button>

          <div className="stepper-nav-btns">
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={handlePrev}
              aria-label="Previous card"
            >
              ←
            </button>
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={handleNext}
              aria-label="Next card"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* 3D Scene Viewport */}
      <div className="carousel-viewport">
        <div
          className="carousel-cylinder"
          style={{
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          {slides.map((item, index) => {
            const cardAngle = index * angleStep;
            const isCenter = index === activeCard;

            return (
              <div
                key={item.id}
                className={`carousel-card-panel ${isCenter ? "is-centered" : ""} ${isGrayscale ? "grayscale-mode" : ""}`}
                style={{
                  transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                }}
                onClick={() => spinToIndex(index)}
              >
                <div className="card-media-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="carousel-card-img"
                    draggable="false"
                  />
                  <div className="card-reflection-overlay" />
                </div>

                <div className="carousel-card-caption">
                  <span className="card-location-tag">📍 {item.location}</span>
                  <h4 className="card-photo-title">{item.title}</h4>
                  <span className="card-photographer">Photo by {item.author}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Active Slide Indicator */}
      <div className="carousel-pagination-row">
        {slides.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            className={`page-indicator-dot ${idx === activeCard ? "active" : ""}`}
            onClick={() => spinToIndex(idx)}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
