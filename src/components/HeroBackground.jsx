import { useEffect, useRef } from 'react';

const N = 28;
const C = 14;

const rnd = (i, j) => {
  const v = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
  return v - Math.floor(v);
};

export default function HeroBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    const poly = (p, fill) => {
      ctx.beginPath();
      ctx.moveTo(p[0], p[1]);
      for (let k = 2; k < p.length; k += 2) ctx.lineTo(p[k], p[k + 1]);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
    };

    const paint = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      if (!W || !H) return;
      canvas.width = W * d;
      canvas.height = H * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const T = Math.max(W, H * 1.4) / 22;
      const ox = W * 0.74;
      const oy = H * 0.6 - C * T;
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(29, 255, 124, 0.05)';
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          const sx = ox + (i - j) * T;
          const sy = oy + ((i + j) * T) / 2;
          if (sx < -2 * T || sx > W + 2 * T || sy < -2 * T || sy > H + 3 * T) continue;
          const r = rnd(i, j);
          const h = T * (0.12 + 0.85 * r * r);
          poly([sx - T, sy + T / 2 - h, sx, sy + T - h, sx, sy + T, sx - T, sy + T / 2], '#0c0f0e');
          poly([sx, sy + T - h, sx + T, sy + T / 2 - h, sx + T, sy + T / 2, sx, sy + T], '#070908');
          poly([sx, sy - h, sx + T, sy + T / 2 - h, sx, sy + T - h, sx - T, sy + T / 2 - h], '#121614');
          ctx.stroke();
        }
      }
    };

    const observer = new ResizeObserver(paint);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  return <canvas ref={ref} className="hero-bg" aria-hidden="true" />;
}
