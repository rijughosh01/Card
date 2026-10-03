import React, { useState } from "react";
import "./Navbar.css";
import { showToast } from "../utils/toast";

export default function Navbar({ currentTheme, toggleTheme, onFilterSelect }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={() => onFilterSelect?.("all")}>
          <div className="brand-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
          <span className="brand-title">
            Card<span className="brand-highlight">Verse</span>
          </span>
          <span className="version-pill">React Bits</span>
        </div>

        {/* Hamburger on Mobile */}
        <button
          className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
          <li>
            <a
              href="#carousel"
              onClick={() => {
                onFilterSelect?.("carousel");
                setMenuOpen(false);
              }}
            >
              🎡 Circular Carousel
            </a>
          </li>
          <li>
            <a
              href="#spiral"
              onClick={() => {
                onFilterSelect?.("spiral");
                setMenuOpen(false);
              }}
            >
              🌀 Infinite Spiral
            </a>
          </li>
          <li>
            <a
              href="#react-bits"
              onClick={() => {
                onFilterSelect?.("react-bits");
                setMenuOpen(false);
              }}
            >
              ⚡ React Bits Cards
            </a>
          </li>
          <li>
            <a
              href="#classics"
              onClick={() => {
                onFilterSelect?.("classics");
                setMenuOpen(false);
              }}
            >
              🚀 Enhanced Classics
            </a>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* Theme Toggle */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            title={`Switch to ${currentTheme === "dark" ? "Light" : "Dark"} mode`}
          >
            {currentTheme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Cart Icon */}
          <button
            type="button"
            className="navbar-cart-btn"
            onClick={() => showToast("Shopping bag: 5 items configured", "🛍️")}
            aria-label="Shopping Cart"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart-badge">5</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
