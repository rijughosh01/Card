import React, { useState, useEffect } from "react";
import "./App.css";

// Navigation
import Navbar from "./components/Navbar";
import CursorGrid from "./components/CursorGrid";

// React Bits 3D Interactive Showcases
import CircularCarousel from "./reactBitsCards/CircularCarousel";
import InfiniteSpiral from "./reactBitsCards/InfiniteSpiral";

// React Bits Animated Cards (8 Total)
import ElectricBorderCard from "./reactBitsCards/ElectricBorderCard";
import SpotlightCard from "./reactBitsCards/SpotlightCard";
import Tilt3DCard from "./reactBitsCards/Tilt3DCard";
import BorderBeamCard from "./reactBitsCards/BorderBeamCard";
import BentoAcousticCard from "./reactBitsCards/BentoAcousticCard";
import DecryptedCyberCard from "./reactBitsCards/DecryptedCyberCard";
import GlareHoverCard from "./reactBitsCards/GlareHoverCard";
import StarBorderCard from "./reactBitsCards/StarBorderCard";

// 8 Enhanced Classic Cards
import ProductCard from "./components/ProductCard";
import ProductDesign2 from "./sampleOfCard/cardOfLaptop";
import Badge from "./sampleOfCard/Badge";
import ProductDesign from "./sampleOfCard/ProductDesign";
import TShirtCard from "./sampleOfCard/T-shirtCard";
import TShirtCardList from "./sampleOfCard/TShirtCardList";
import CardImage from "./sampleOfCard/cardImage";
import AnotherCard from "./sampleOfCard/AnotherCard";

function App() {
  const [theme, setTheme] = useState("dark");
  const [activeFilter, setActiveFilter] = useState("all");
  const [gridColor, setGridColor] = useState("#D946EF"); // React Bits signature magenta from screenshot
  const [toasts, setToasts] = useState([]);

  // Sync theme with data-theme on <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Toast listener
  useEffect(() => {
    const handleToast = (e) => {
      const newToast = e.detail;
      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 3400);
    };

    window.addEventListener("app-toast", handleToast);
    return () => window.removeEventListener("app-toast", handleToast);
  }, []);

  return (
    <div className="app-container">
      {/* React Bits Interactive Cursor Grid Background */}
      <CursorGrid color={gridColor} cellSize={64} radius={170} />

      {/* Top Glass Navbar */}
      <Navbar
        currentTheme={theme}
        toggleTheme={toggleTheme}
        onFilterSelect={(tab) => setActiveFilter(tab)}
      />

      <main className="main-content">
        {/* Hero Banner */}
        <section className="hero-showcase">
          <div className="hero-pill">
            <span>✨ REACT BITS // ULTIMATE CARD SUITE</span>
          </div>
          <h1 className="hero-title">
            3D Circular Carousel, Infinite Spiral &amp;{" "}
            <span className="gradient-text">React Bits Card</span> Animations
          </h1>
          <p className="hero-description">
            Experience cutting-edge card design featuring the official React Bits
            <strong> Electric Border</strong>, <strong>3D Circular Carousel</strong>, and
            <strong> 3D Infinite Spiral</strong> with high-resolution Unsplash photography,
            alongside 8 premium modernized product cards.
          </p>

          <div className="hero-stats-row">
            <div className="stat-chip">
              <span className="stat-icon">🎡</span>
              <span>Circular 3D Carousel</span>
            </div>
            <div className="stat-chip">
              <span className="stat-icon">🌀</span>
              <span>Infinite 3D Spiral</span>
            </div>
            <div className="stat-chip">
              <span className="stat-icon">⚡</span>
              <span>Electric Border Card</span>
            </div>
            <div className="stat-chip">
              <span className="stat-icon">📸</span>
              <span>Unsplash HD Photography</span>
            </div>
            <div className="stat-chip">
              <span className="stat-icon">🎨</span>
              <span>8 Enhanced Classics</span>
            </div>
          </div>

          {/* Interactive Cursor Grid Color Switcher */}
          <div className="cursor-grid-widget">
            <div className="grid-widget-title">
              <span
                className="grid-pulse-dot"
                style={{ background: gridColor, boxShadow: `0 0 10px ${gridColor}` }}
              />
              <span>CURSOR GRID ACTIVE:</span>
            </div>
            <div className="grid-color-picker">
              {[
                { name: "Fuchsia", hex: "#D946EF" },
                { name: "Cyan", hex: "#06B6D4" },
                { name: "Indigo", hex: "#6366F1" },
                { name: "Emerald", hex: "#10B981" },
                { name: "Amber", hex: "#F59E0B" },
              ].map((c) => (
                <button
                  key={c.hex}
                  type="button"
                  className={`grid-color-dot ${gridColor === c.hex ? "active" : ""}`}
                  style={{ background: c.hex }}
                  onClick={() => {
                    setGridColor(c.hex);
                    showToast(`Cursor Grid color set to ${c.name}!`, "✨");
                  }}
                  title={`Switch grid to ${c.name}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <div className="filter-bar-container">
          <div className="filter-bar">
            {[
              { id: "all", label: "All Experiences", count: 18 },
              { id: "carousel", label: "🎡 Circular Carousel", count: 1 },
              { id: "spiral", label: "🌀 Infinite Spiral", count: 1 },
              { id: "react-bits", label: "⚡ React Bits Cards", count: 8 },
              { id: "classics", label: "🚀 Enhanced Classics", count: 8 },
              { id: "tech", label: "💻 Tech & Future", count: 6 },
              { id: "fashion", label: "👟 Apparel & Style", count: 4 },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`filter-tab-btn ${activeFilter === tab.id ? "active" : ""}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="count-bubble">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION 1: CIRCULAR CAROUSEL 3D (From React Bits Screenshot 2) */}
        {/* ============================================================== */}
        {(activeFilter === "all" || activeFilter === "carousel") && (
          <section id="carousel" className="cards-showcase-section">
            <div className="section-headline">
              <div>
                <span className="section-tag">3D CYLINDRICAL CAROUSEL</span>
                <h2 className="section-title">🎡 Circular Carousel Component</h2>
              </div>
              <p className="section-desc">
                Interactive cylindrical card carousel with 3D perspective depth,
                drag-to-spin physics, auto-rotation, and curated Unsplash fine-art photography.
              </p>
            </div>

            <CircularCarousel />
          </section>
        )}

        {/* ============================================================== */}
        {/* SECTION 2: INFINITE SPIRAL 3D (From React Bits Screenshot 3)   */}
        {/* ============================================================== */}
        {(activeFilter === "all" || activeFilter === "spiral") && (
          <section id="spiral" className="cards-showcase-section">
            <div className="section-headline">
              <div>
                <span className="section-tag">3D LOGARITHMIC VORTEX</span>
                <h2 className="section-title">🌀 Infinite Spiral Component</h2>
              </div>
              <p className="section-desc">
                Logarithmic spiral flight path through 3D space with continuous vortex advance,
                depth of field blur, and mouse wheel scrub zoom with Unsplash imagery.
              </p>
            </div>

            <InfiniteSpiral />
          </section>
        )}

        {/* ============================================================== */}
        {/* SECTION 3: REACT BITS ANIMATED CARDS (8 High-Performance Cards)*/}
        {/* ============================================================== */}
        {(activeFilter === "all" ||
          activeFilter === "react-bits" ||
          activeFilter === "tech" ||
          activeFilter === "fashion") && (
          <section id="react-bits" className="cards-showcase-section">
            <div className="section-headline">
              <div>
                <span className="section-tag">SIGNATURE ANIMATION PATTERNS</span>
                <h2 className="section-title">⚡ React Bits Animated Cards (8 Total)</h2>
              </div>
              <p className="section-desc">
                Featuring the official <strong>Electric Border</strong> displacement effect,
                mouse-tracking spotlight gradients, 3D physics tilt with specular glare, laser border beams,
                and real-time glyph decryption.
              </p>
            </div>

            <div className="cards-grid">
              {/* 1. Electric Border Card (Exact Match from Screenshot 1) */}
              {(activeFilter === "all" ||
                activeFilter === "react-bits" ||
                activeFilter === "tech") && <ElectricBorderCard />}

              {/* 2. Spotlight Card */}
              {(activeFilter === "all" ||
                activeFilter === "react-bits" ||
                activeFilter === "tech") && <SpotlightCard />}

              {/* 3. 3D Tilt Perspective Card */}
              {(activeFilter === "all" ||
                activeFilter === "react-bits" ||
                activeFilter === "fashion") && <Tilt3DCard />}

              {/* 4. Glare Hover Card with Unsplash Luxury Chronograph */}
              {(activeFilter === "all" ||
                activeFilter === "react-bits" ||
                activeFilter === "tech") && <GlareHoverCard />}

              {/* 5. Border Beam & Aurora Card */}
              {(activeFilter === "all" ||
                activeFilter === "react-bits") && <BorderBeamCard />}

              {/* 6. Star Border Card with Unsplash Deep Cosmos */}
              {(activeFilter === "all" ||
                activeFilter === "react-bits" ||
                activeFilter === "tech") && <StarBorderCard />}

              {/* 7. Bento Acoustic Visualizer Card */}
              {(activeFilter === "all" ||
                activeFilter === "react-bits" ||
                activeFilter === "tech") && <BentoAcousticCard />}

              {/* 8. Decrypted Text HUD Card */}
              {(activeFilter === "all" ||
                activeFilter === "react-bits" ||
                activeFilter === "tech") && <DecryptedCyberCard />}
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* SECTION 4: 8 ENHANCED CLASSIC CARDS                            */}
        {/* ============================================================== */}
        {(activeFilter === "all" ||
          activeFilter === "classics" ||
          activeFilter === "tech" ||
          activeFilter === "fashion") && (
          <section id="classics" className="cards-showcase-section">
            <div className="section-headline">
              <div>
                <span className="section-tag">REDESIGNED &amp; POLISHED</span>
                <h2 className="section-title">🚀 Enhanced Product &amp; Lifestyle Cards</h2>
              </div>
              <p className="section-desc">
                Completely overhauled of legacy styling bugs, upgraded with interactive swatches,
                stepper counters, real SVG icon sets, and responsive styling.
              </p>
            </div>

            <div className="cards-grid">
              {/* 1. MSI Gaming Monitor */}
              {(activeFilter === "all" ||
                activeFilter === "classics" ||
                activeFilter === "tech") && <ProductCard />}

              {/* 2. Apple MacBook Air M4 */}
              {(activeFilter === "all" ||
                activeFilter === "classics" ||
                activeFilter === "tech") && <ProductDesign2 />}

              {/* 3. Sony WH-CH720N Dual ANC */}
              {(activeFilter === "all" ||
                activeFilter === "classics" ||
                activeFilter === "tech") && <Badge />}

              {/* 4. Harvest Sculptural Ceramic Vase */}
              {(activeFilter === "all" ||
                activeFilter === "classics") && <ProductDesign />}

              {/* 5. Boho Longline Floral Tee */}
              {(activeFilter === "all" ||
                activeFilter === "classics" ||
                activeFilter === "fashion") && <CardImage />}

              {/* 6. Wild Belgian Raspberry Waffle */}
              {(activeFilter === "all" ||
                activeFilter === "classics") && <AnotherCard />}

              {/* 7. Standalone Remera Organic Tee */}
              {(activeFilter === "all" ||
                activeFilter === "classics" ||
                activeFilter === "fashion") && (
                <TShirtCard
                  image="https://m.media-amazon.com/images/I/51bd0fRg5TL._SY741_.jpg"
                  name="Remera Classic Tee"
                  color="Ocean Horizon"
                  price="$45.99"
                />
              )}

              {/* 8. Full Streetwear Collection Grid */}
              {(activeFilter === "all" ||
                activeFilter === "classics" ||
                activeFilter === "fashion") && (
                <div className="full-width-wrapper">
                  <TShirtCardList />
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      {/* Floating Interactive Toast Portal */}
      <div className="toast-portal">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast-item">
            <span>{toast.icon}</span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Modern Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-brand">
            Card<span className="brand-highlight">Verse</span>
          </div>
          <p className="footer-text">
            Crafted with modern React 19, vanilla CSS design tokens, and inspired by React Bits
            animation primitives (Electric Border, Circular Carousel, Infinite Spiral).
            Photography provided by Unsplash.
          </p>
          <div className="footer-links">
            <a href="#carousel">Circular Carousel</a>
            <a href="#spiral">Infinite Spiral</a>
            <a href="#react-bits">Electric &amp; Animated Cards</a>
            <a href="#classics">Product Cards</a>
            <a href="https://reactbits.dev" target="_blank" rel="noreferrer">
              reactbits.dev ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
