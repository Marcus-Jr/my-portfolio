import { useEffect } from "react";
import theme from "../../theme";

export const AnimatedBackground = () => {
  const color = theme.palette.secondary.main;

  useEffect(() => {
    let width: number, height: number;
    let animateHeader = true;
    let animationId: number;

    interface Point {
      x: number;
      originX: number;
      y: number;
      originY: number;
      closest?: Point[];
      active?: number;
      circle?: CircleType;
    }

    interface CircleType {
      pos: Point;
      radius: number;
      color: string;
      active?: number;
      draw: () => void;
    }

    const target = { x: 0, y: 0 };
    let points: Point[] = [];
    let ctx: CanvasRenderingContext2D;

    const largeHeader = document.getElementById("large-header") as HTMLDivElement;
    const canvas = document.getElementById("demo-canvas") as HTMLCanvasElement;

    function init() {
      width = window.innerWidth;
      height = window.innerHeight;
      target.x = width / 2;
      target.y = height / 2;

      largeHeader.style.height = height + "px";
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d")!;

      points = [];
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          const px = x + Math.random() * (width / 20);
          const py = y + Math.random() * (height / 20);
          points.push({ x: px, originX: px, y: py, originY: py });
        }
      }

      for (let i = 0; i < points.length; i++) {
        const closest: Point[] = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (p1 === p2) continue;
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed && closest[k] === undefined) {
              closest[k] = p2;
              placed = true;
            }
          }
          for (let k = 0; k < 5; k++) {
            if (!placed && getDistance(p1, p2) < getDistance(p1, closest[k])) {
              closest[k] = p2;
              placed = true;
            }
          }
        }
        p1.closest = closest;
      }

      for (const p of points) {
        const c: CircleType = {
          pos: p,
          radius: 2 + Math.random() * 2,
          color: "rgba(255,255,255,0.3)",
          draw() {
            if (!this.active) return;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = hexToRgba(color, this.active);
            ctx.fill();
          },
        };
        p.circle = c;
      }
    }

    function hexToRgba(hex: string, alpha: number): string {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!result) return `rgba(156,217,249,${alpha})`;
      return `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},${alpha})`;
    }

    function getDistance(p1: { x: number; y: number }, p2: { x: number; y: number }) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    function drawLines(p: Point) {
      if (!p.active || !p.closest) return;
      for (const cp of p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(cp.x, cp.y);
        ctx.strokeStyle = hexToRgba(color, p.active);
        ctx.stroke();
      }
    }

    function shiftPoint(p: Point) {
      const duration = 1000 + Math.random() * 1000;
      const targetX = p.originX - 50 + Math.random() * 100;
      const targetY = p.originY - 50 + Math.random() * 100;
      const startX = p.x;
      const startY = p.y;
      const startTime = performance.now();

      function step(now: number) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        p.x = startX + (targetX - startX) * ease;
        p.y = startY + (targetY - startY) * ease;

        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          shiftPoint(p);
        }
      }
      requestAnimationFrame(step);
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (const p of points) {
          const dist = getDistance(target, p);
          if (dist < 4000) {
            p.active = 0.3;
            p.circle!.active = 0.6;
          } else if (dist < 20000) {
            p.active = 0.1;
            p.circle!.active = 0.3;
          } else if (dist < 40000) {
            p.active = 0.02;
            p.circle!.active = 0.1;
          } else {
            p.active = 0;
            p.circle!.active = 0;
          }
          drawLines(p);
          p.circle!.draw();
        }
      }
      animationId = requestAnimationFrame(animate);
    }

    function mouseMove(e: MouseEvent) {
      target.x = e.pageX;
      target.y = e.pageY;
    }

    function scrollCheck() {
      animateHeader = document.body.scrollTop <= height;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height + "px";
      canvas.width = width;
      canvas.height = height;
    }

    init();
    animate();
    for (const p of points) shiftPoint(p);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, [color]);

  return (
    <>
      <div
        id="large-header"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
      >
        <canvas id="demo-canvas" style={{ display: "block", width: "100%", height: "100%" }} />
      </div>
    </>
  );
};

export default AnimatedBackground;