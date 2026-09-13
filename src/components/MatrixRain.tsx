import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  isActive: boolean;
  onClose: () => void;
  accentColor?: string;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({ isActive, onClose, accentColor = '#4edea3' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters for cyber stream
    const chars = '01ABCDEFXYZ<>{}[]=/*+~_!@#$%^&|:;010101AMANSEC';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      // Translucent black rectangle to create fade trail effect
      ctx.fillStyle = 'rgba(10, 14, 24, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = accentColor;
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, accentColor]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60 pointer-events-none"
      />
      {/* Floating Exit Button */}
      <div className="absolute top-20 right-6 pointer-events-auto">
        <button
          onClick={onClose}
          className="px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#4edea3]/50 text-[#4edea3] font-mono text-xs font-bold hover:bg-[#4edea3] hover:text-black transition-all shadow-xl"
        >
          Exit Matrix Mode ✕
        </button>
      </div>
    </div>
  );
};
