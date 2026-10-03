import React, { useState, useEffect, useCallback } from "react";
import "./DecryptedCyberCard.css";
import { showToast } from "../utils/toast";

const CHARS = "ABCDEF0123456789!@#$%^&*<>[]{}~/=";

function useDecryptedText(targetText, speed = 35) {
  const [displayText, setDisplayText] = useState(targetText);

  const decrypt = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) {
              return targetText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, speed);
  }, [targetText, speed]);

  useEffect(() => {
    decrypt();
  }, [decrypt]);

  return { displayText, decrypt };
}

export default function DecryptedCyberCard() {
  const [hudColor, setHudColor] = useState("emerald");
  const [isEngaged, setIsEngaged] = useState(false);

  const colors = {
    emerald: { name: "Matrix Green", hex: "#10b981", glow: "rgba(16, 185, 129, 0.4)" },
    amber: { name: "Tactical Amber", hex: "#f59e0b", glow: "rgba(245, 158, 11, 0.4)" },
    cyan: { name: "Recon Cyan", hex: "#06b6d4", glow: "rgba(6, 182, 212, 0.4)" },
  };

  const currentTheme = colors[hudColor];

  const titleHook = useDecryptedText("AEGIS-7 ORBITAL DRONE");
  const codeHook = useDecryptedText("SYS://AUTONOMOUS_DEFENSE_V8");

  const handleEngage = () => {
    setIsEngaged(true);
    showToast("Orbital Uplink established! Drone tracking online.", "🛰️");
    titleHook.decrypt();
    codeHook.decrypt();
    setTimeout(() => setIsEngaged(false), 3000);
  };

  return (
    <div
      className="cyber-card"
      style={{
        "--hud-color": currentTheme.hex,
        "--hud-glow": currentTheme.glow,
      }}
      onMouseEnter={() => {
        titleHook.decrypt();
        codeHook.decrypt();
      }}
    >
      {/* HUD Corner Tech Accents */}
      <div className="corner-bracket top-left" />
      <div className="corner-bracket top-right" />
      <div className="corner-bracket bottom-left" />
      <div className="corner-bracket bottom-right" />

      {/* Cyber Grid Background */}
      <div className="cyber-grid-bg" />

      {/* Header */}
      <div className="cyber-header">
        <div className="sys-status">
          <span className="blink-beacon" />
          <span className="sys-code">{codeHook.displayText}</span>
        </div>
        <div className="theme-toggles">
          {Object.keys(colors).map((c) => (
            <button
              key={c}
              type="button"
              className={`hud-color-dot ${hudColor === c ? "active" : ""}`}
              style={{ background: colors[c].hex }}
              onClick={() => {
                setHudColor(c);
                titleHook.decrypt();
              }}
              title={colors[c].name}
            />
          ))}
        </div>
      </div>

      {/* Radar Sweep Visualizer Stage */}
      <div className="radar-stage">
        <div className="radar-screen">
          <div className="radar-sweep" />
          <div className="radar-ring ring-1" />
          <div className="radar-ring ring-2" />
          <div className="radar-crosshair-h" />
          <div className="radar-crosshair-v" />

          {/* Drone Hologram in center */}
          <div className="drone-svg-container">
            <svg viewBox="0 0 100 100" className="drone-svg" fill="none" stroke="currentColor">
              {/* Drone Body */}
              <circle cx="50" cy="50" r="16" fill="rgba(0,0,0,0.7)" strokeWidth="2" />
              <circle cx="50" cy="50" r="6" fill="var(--hud-color)" />
              {/* Rotors */}
              <line x1="38" y1="38" x2="16" y2="16" strokeWidth="2.5" />
              <line x1="62" y1="38" x2="84" y2="16" strokeWidth="2.5" />
              <line x1="38" y1="62" x2="16" y2="84" strokeWidth="2.5" />
              <line x1="62" y1="62" x2="84" y2="84" strokeWidth="2.5" />
              {/* Rotor Rings */}
              <circle cx="16" cy="16" r="10" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="84" cy="16" r="10" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="16" cy="84" r="10" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="84" cy="84" r="10" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Target Blips */}
          <div className="target-blip blip-1" />
          <div className="target-blip blip-2" />
        </div>
      </div>

      {/* Decrypted Title with hover decrypt */}
      <div className="cyber-body">
        <div className="hud-category">REACT BITS // DECRYPTED TEXT</div>
        <h3 className="decrypted-title">{titleHook.displayText}</h3>
        <p className="cyber-desc">
          High-altitude autonomous reconnaissance drone with quantum LIDAR,
          stealth carbon fuselage, and AI swarm coordination.
        </p>

        {/* Telemetry Matrix */}
        <div className="telemetry-box">
          <div className="tele-row">
            <span className="tele-k">ALTITUDE CEILING</span>
            <span className="tele-v">65,000 FT</span>
          </div>
          <div className="tele-row">
            <span className="tele-k">RADAR RANGE</span>
            <span className="tele-v">480 NM</span>
          </div>
          <div className="tele-row">
            <span className="tele-k">STEALTH COATING</span>
            <span className="tele-v">ABSORPTIVE RAM-9</span>
          </div>
        </div>

        {/* Footer & Action */}
        <div className="cyber-footer">
          <div className="unit-price">
            <span className="sub-txt">Tactical Lease</span>
            <span className="amount">$18,500/mo</span>
          </div>
          <button
            type="button"
            className={`engage-btn ${isEngaged ? "engaged" : ""}`}
            onClick={handleEngage}
          >
            <span className="btn-glow" />
            <span>{isEngaged ? "LINK ACTIVE" : "ARM ORBITAL"}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
