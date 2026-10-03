import React, { useState, useEffect, useRef } from "react";
import "./InfiniteSpiral.css";
import { showToast } from "../utils/toast";

const spiralImages = [
  {
    id: 1,
    title: "Misty Alpine Woods",
    tag: "Atmospheric",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Cosmic Nebula",
    tag: "Deep Space",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Minimal Dunes",
    tag: "Solitude",
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Mirror Fjord",
    tag: "Glacial",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Architectural Vault",
    tag: "Structure",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Nocturne Portrait",
    tag: "Humanity",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "Cyberpunk Rain",
    tag: "Future",
    img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "Pacific Crest Swell",
    tag: "Oceanic",
    img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "Winter Frost",
    tag: "Arctic",
    img: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    title: "Golden Hour Bloom",
    tag: "Botanical",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
  },
];

export default function InfiniteSpiral() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [isGrayscale, setIsGrayscale] = useState(true);
  const [speed, setSpeed] = useState(1);

  const containerRef = useRef(null);

  // Auto-advance loop along the spiral
  useEffect(() => {
    if (!autoAdvance) return;
    const interval = setInterval(() => {
      setScrollProgress((prev) => (prev + 0.0035 * speed) % 1);
    }, 16);
    return () => clearInterval(interval);
  }, [autoAdvance, speed]);

  // Mouse wheel scroll to scrub spiral
  const handleWheel = (e) => {
    e.preventDefault();
    setScrollProgress((prev) => {
      let next = prev + e.deltaY * 0.0006;
      if (next < 0) next += 1;
      return next % 1;
    });
  };

  const handleCardClick = (title) => {
    showToast(`Inspecting: ${title}`, "🌀");
  };

  const totalCards = 14; // repeated virtual cards along spiral
  const spiralRounds = 2.8; // spiral revolutions

  return (
    <div
      ref={containerRef}
      className="infinite-spiral-wrapper"
      onWheel={handleWheel}
    >
      {/* Top Header & Controls */}
      <div className="spiral-control-panel">
        <div className="spiral-title-group">
          <span className="spiral-tag">REACT BITS // 3D VORTEX</span>
          <h3 className="spiral-heading">Infinite Spiral</h3>
        </div>

        <div className="spiral-actions">
          <button
            type="button"
            className={`spiral-pill-btn ${isGrayscale ? "active" : ""}`}
            onClick={() => setIsGrayscale(!isGrayscale)}
          >
            {isGrayscale ? "B&W Monochrome" : "Full Color"}
          </button>

          <button
            type="button"
            className={`spiral-pill-btn ${autoAdvance ? "active" : ""}`}
            onClick={() => setAutoAdvance(!autoAdvance)}
          >
            {autoAdvance ? "Vortex: Active" : "Vortex: Paused"}
          </button>

          <div className="speed-pills">
            <span className="speed-label">SPEED:</span>
            {[0.5, 1, 2].map((s) => (
              <button
                key={s}
                type="button"
                className={`speed-pill ${speed === s ? "active" : ""}`}
                onClick={() => setSpeed(s)}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Vortex Viewport */}
      <div className="spiral-viewport">
        <div className="spiral-canvas">
          {Array.from({ length: totalCards }).map((_, i) => {
            // Fraction along spiral (0 to 1)
            const basePos = (i / totalCards + scrollProgress) % 1;
            const item = spiralImages[i % spiralImages.length];

            // Math for logarithmic spiral in 3D:
            const angle = basePos * spiralRounds * Math.PI * 2;
            const radius = Math.pow(basePos, 1.4) * 320; // expands outward
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            // Z depth: deep (-500px) to near (+60px)
            const z = (basePos - 0.5) * 500;
            const scale = Math.max(0.18, Math.pow(basePos, 1.2) * 1.15);
            const blur = Math.max(0, (1 - basePos) * 9);
            const opacity = Math.min(1, Math.pow(basePos, 0.8) * 1.2);
            const zIndex = Math.floor(basePos * 100);

            return (
              <div
                key={i}
                className={`spiral-card-item ${isGrayscale ? "b-and-w" : ""}`}
                style={{
                  transform: `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) scale(${scale.toFixed(2)}) rotate(${(-angle * 10).toFixed(1)}deg)`,
                  filter: `blur(${blur.toFixed(1)}px)`,
                  opacity: opacity.toFixed(2),
                  zIndex: zIndex,
                }}
                onClick={() => handleCardClick(item.title)}
              >
                <div className="spiral-img-box">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="spiral-img"
                    draggable="false"
                  />
                  <div className="spiral-card-overlay">
                    <span className="spiral-tag-badge">{item.tag}</span>
                    <span className="spiral-photo-name">{item.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ambient Vortex Glow */}
        <div className="vortex-core-glow" />
      </div>

      {/* Wheel Scroll Hint */}
      <div className="spiral-hint-footer">
        <span className="mouse-wheel-icon">🖱️</span>
        <span>Scroll with mouse wheel or touch pad to scrub through the 3D spiral vortex</span>
      </div>
    </div>
  );
}
