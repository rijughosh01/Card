import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyShop</div>
      <button
        className={`navbar-hamburger${menuOpen ? " open" : ""}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`navbar-links${menuOpen ? " show" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li className="dropdown">
          <a href="#">Categories</a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Electronics</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Home & Living</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Toys</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Deals</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="navbar-account" aria-label="Account">
          <svg
            width="26"
            height="26"
            fill="none"
            stroke="#0ecedb"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
