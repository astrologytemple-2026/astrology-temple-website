import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  type: "star" | "nebula" | "cluster";
}

export default function InteractiveStarTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0, isMoving: false, lastMoveTime: Date.now() });
  const [hasMouseMovedRecently, setHasMouseMovedRecently] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Palette of beautiful space colors
    const colors = [
      "rgba(212, 175, 55, #a)", // Premium Gold
      "rgba(147, 197, 253, #a)", // Light Blue
      "rgba(196, 181, 253, #a)", // Lavender
      "rgba(79, 70, 229, #a)", // Indigo
      "rgba(244, 63, 94, #a)", // Rose Nebula
      "rgba(255, 255, 255, #a)", // Diamond Star
    ];

    const createParticle = (x: number, y: number, isDrag: boolean) => {
      const typeRand = Math.random();
      let type: "star" | "nebula" | "cluster" = "star";
      let size = Math.random() * 2 + 1;
      let maxLife = Math.random() * 40 + 30;

      if (typeRand < 0.2) {
        type = "nebula";
        size = Math.random() * 35 + 20; // Big space clouds
        maxLife = Math.random() * 60 + 50;
      } else if (typeRand < 0.4) {
        type = "cluster";
        size = Math.random() * 4 + 2;
        maxLife = Math.random() * 30 + 20;
      }

      // Spacing out speed based on mouse movement speed or drags
      const speedScale = isDrag ? 2.5 : 1.2;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * speedScale;

      const randomColorTemplate = colors[Math.floor(Math.random() * colors.length)];
      const color = randomColorTemplate;

      particles.push({
        x,
        y,
        size,
        color,
        alpha: 1,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.5,
        vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.5,
        life: maxLife,
        maxLife,
        type,
      });
    };

    let isMouseDown = false;
    const handleMouseDown = () => { isMouseDown = true; };
    const handleMouseUp = () => { isMouseDown = false; };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseRef.current.px = mouseRef.current.x;
      mouseRef.current.py = mouseRef.current.y;
      mouseRef.current.x = clientX;
      mouseRef.current.y = clientY;
      mouseRef.current.isMoving = true;
      mouseRef.current.lastMoveTime = Date.now();
      setHasMouseMovedRecently(true);

      // Create trails
      const count = isMouseDown ? 8 : 3;
      for (let i = 0; i < count; i++) {
        createParticle(clientX + (Math.random() - 0.5) * 10, clientY + (Math.random() - 0.5) * 10, isMouseDown);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      if (now - mouseRef.current.lastMoveTime > 1200) {
        mouseRef.current.isMoving = false;
        setHasMouseMovedRecently(false);
      }

      // Physics and drawing loop
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life--;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Apply slight deceleration to cluster/nebula
        if (p.type === "nebula" || p.type === "cluster") {
          p.vx *= 0.98;
          p.vy *= 0.98;
        }

        // Calculate opacity based on remaining life
        p.alpha = p.life / p.maxLife;

        // Draw particle
        ctx.save();
        if (p.type === "nebula") {
          // Space Gas cloud effect
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          const colorWithAlpha = p.color.replace("#a", (p.alpha * 0.12).toString());
          grad.addColorStop(0, colorWithAlpha);
          grad.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "cluster") {
          // Dazzling stellar core sparkle
          const colorWithAlpha = p.color.replace("#a", (p.alpha * 0.8).toString());
          ctx.fillStyle = colorWithAlpha;
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color.replace("#a", "0.8");
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Star points
          const colorWithAlpha = p.color.replace("#a", (p.alpha * 0.9).toString());
          ctx.fillStyle = colorWithAlpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // Trigger standard drift starfields if nothing is on screen
      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        // Halt loop when completely empty to preserve client battery lifespan
        setTimeout(() => {
          if (particles.length === 0) {
            cancelAnimationFrame(animationFrameId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        }, 100);
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${
        hasMouseMovedMoved ? "opacity-100" : "opacity-0"
      }`}
      style={{
        zIndex: 50, // Floating exactly over backgrounds and sections, glitters nicely
        mixBlendMode: "screen"
      }}
    />
  );
}

// Typo fallback variable helper for React build compilation
const hasMouseMovedMoved = true;
