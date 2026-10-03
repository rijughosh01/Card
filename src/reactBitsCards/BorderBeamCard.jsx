import React, { useState } from "react";
import "./BorderBeamCard.css";
import { showToast } from "../utils/toast";

export default function BorderBeamCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const passKey = "OX-8849-FNDR-2026-VIP";

  const handleCopyKey = (e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText?.(passKey);
    setCopied(true);
    showToast("Titanium Pass Secret Key copied to clipboard!", "🔐");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleClaimPerks = (e) => {
    e.stopPropagation();
    showToast("VIP Concierge & Lounge access activated!", "🥂");
  };

  return (
    <div className="beam-card-wrapper">
      <div className={`beam-card-flipper ${isFlipped ? "flipped" : ""}`}>
        {/* FRONT SIDE */}
        <div className="beam-card beam-card-front" onClick={() => setIsFlipped(true)}>
          {/* Animated Border Beam Effect */}
          <div className="border-beam" />

          {/* Morphing Aurora Mesh Glow */}
          <div className="aurora-mesh" />

          {/* Card Top Row */}
          <div className="beam-card-header">
            <div className="org-brand">
              <span className="brand-dot" />
              <span className="brand-text">OBSIDIAN // BLACK</span>
            </div>
            <div className="tier-pill">FOUNDER #042</div>
          </div>

          {/* Card Chip & Hologram */}
          <div className="chip-hologram-row">
            <div className="metallic-chip">
              <div className="chip-lines" />
            </div>
            <div className="nfc-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18a6 6 0 0 1 0-12" />
                <path d="M10 15a3 3 0 0 1 0-6" />
                <path d="M14 21a10 10 0 0 1 0-18" />
              </svg>
            </div>
          </div>

          {/* Card Number / Identity */}
          <div className="card-number-display">
            <span>••••</span>
            <span>••••</span>
            <span>••••</span>
            <span className="visible-digits">9024</span>
          </div>

          {/* Card Holder & Tier Details */}
          <div className="beam-card-footer">
            <div className="member-info">
              <span className="info-label">PRIVILEGED MEMBER</span>
              <span className="member-name">Alexander Hayes</span>
            </div>
            <div className="validity-info">
              <span className="info-label">TIER ACCESS</span>
              <span className="tier-level">ALL ACCESS VIP</span>
            </div>
          </div>

          {/* Flip Hint */}
          <div className="flip-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 21h5v-5" />
            </svg>
            <span>Tap to flip pass</span>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="beam-card beam-card-back" onClick={() => setIsFlipped(false)}>
          {/* Animated Border Beam on Back */}
          <div className="border-beam" />

          {/* Magnetic Stripe */}
          <div className="mag-stripe" />

          {/* Back Content */}
          <div className="back-content">
            <div className="sig-strip-row">
              <div className="signature-area">
                <span>Authorized Signature</span>
                <span className="cursive-sig">A. Hayes</span>
              </div>
              <div className="cvv-box">
                <span>CVV</span>
                <strong>774</strong>
              </div>
            </div>

            {/* Secret Key Display */}
            <div className="pass-key-box">
              <div className="key-header">
                <span className="key-label">PASS IDENTITY KEY</span>
                <button
                  type="button"
                  className="copy-key-btn"
                  onClick={handleCopyKey}
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>
              <code className="key-code">{passKey}</code>
            </div>

            {/* Privileges List */}
            <div className="privileges-list">
              <div className="privilege-item">
                <span className="check">✦</span>
                <span>Worldwide Private Lounge Access</span>
              </div>
              <div className="privilege-item">
                <span className="check">✦</span>
                <span>Zero-Fee Hedged Settlement</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="back-actions">
              <button
                type="button"
                className="claim-btn"
                onClick={handleClaimPerks}
              >
                Activate Perks
              </button>
              <button
                type="button"
                className="flip-back-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
