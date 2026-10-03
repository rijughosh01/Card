import React, { useEffect, useRef } from "react";
import "./CursorGrid.css";

/**
 * React Bits Cursor Grid Component
 * Renders an interactive background grid where cells light up with
 * a glowing border and soft fill within a radius of the user's cursor.
 */
export default function CursorGrid({
  cellSize = 64,
  color = "#D946EF",
  radius = 160,
  decaySpeed = 0.92,
  gridOpacity = 0.045,
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const cellsRef = useRef(new Map()); // key: "col,row" => alpha
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const onPointerMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const onPointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    // Parse hex or rgb to rgba
    const hexToRgba = (hex, alpha) => {
      if (hex.startsWith("#")) {
        const cleaned = hex.replace("#", "");
        let r = 217,
          g = 70,
          b = 239;
        if (cleaned.length === 6) {
          r = parseInt(cleaned.substring(0, 2), 16);
          g = parseInt(cleaned.substring(2, 4), 16);
          b = parseInt(cleaned.substring(4, 6), 16);
        } else if (cleaned.length === 3) {
          r = parseInt(cleaned[0] + cleaned[0], 16);
          g = parseInt(cleaned[1] + cleaned[1], 16);
          b = parseInt(cleaned[2] + cleaned[2], 16);
        }
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }
      return hex;
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / cellSize) + 1;
      const rows = Math.ceil(height / cellSize) + 1;

      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const baseLineColor = isLight
        ? `rgba(0, 0, 0, ${gridOpacity * 1.2})`
        : `rgba(255, 255, 255, ${gridOpacity})`;

      // 1. Draw static faint grid lines
      ctx.save();
      ctx.strokeStyle = baseLineColor;
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let x = 0; x <= width; x += cellSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += cellSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
      ctx.restore();

      // 2. Calculate cursor excitation on cells
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const active = mouseRef.current.active;

      if (active) {
        const startCol = Math.max(0, Math.floor((mx - radius) / cellSize));
        const endCol = Math.min(cols, Math.ceil((mx + radius) / cellSize));
        const startRow = Math.max(0, Math.floor((my - radius) / cellSize));
        const endRow = Math.min(rows, Math.ceil((my + radius) / cellSize));

        for (let c = startCol; c <= endCol; c++) {
          for (let r = startRow; r <= endRow; r++) {
            const cellCenterX = c * cellSize + cellSize / 2;
            const cellCenterY = r * cellSize + cellSize / 2;
            const dist = Math.hypot(cellCenterX - mx, cellCenterY - my);

            if (dist < radius) {
              const targetAlpha = Math.pow(1 - dist / radius, 1.3);
              const key = `${c},${r}`;
              const cur = cellsRef.current.get(key) || 0;
              cellsRef.current.set(key, Math.max(cur, targetAlpha));
            }
          }
        }
      }

      // 3. Draw excited glowing cells and apply decay
      ctx.save();
      const keysToDelete = [];

      cellsRef.current.forEach((alpha, key) => {
        if (alpha < 0.008) {
          keysToDelete.push(key);
          return;
        }

        const [cStr, rStr] = key.split(",");
        const c = Number(cStr);
        const r = Number(rStr);

        const x = c * cellSize;
        const y = r * cellSize;

        // Glowing stroke around cell
        ctx.strokeStyle = hexToRgba(color, Math.min(1, alpha * 0.95));
        ctx.lineWidth = 1.5;
        ctx.shadowColor = color;
        ctx.shadowBlur = 14 * alpha;

        // Soft internal ambient fill
        ctx.fillStyle = hexToRgba(color, alpha * 0.09);
        ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

        // Cell border stroke
        ctx.strokeRect(x + 0.5, y + 0.5, cellSize - 1, cellSize - 1);

        // Decay
        cellsRef.current.set(key, alpha * decaySpeed);
      });

      keysToDelete.forEach((k) => cellsRef.current.delete(k));
      ctx.restore();

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [cellSize, color, radius, decaySpeed, gridOpacity]);

  return <canvas ref={canvasRef} className="cursor-grid-canvas" aria-hidden="true" />;
}
