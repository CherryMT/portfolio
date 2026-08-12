import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

function NoiseCanvas({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() * 255;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
        data[i + 3] = 18; // very subtle opacity
      }
      ctx.putImageData(imageData, 0, 0);
      animId = requestAnimationFrame(draw);
    };

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full rounded-[inherit] pointer-events-none", className)}
    />
  );
}

export function NoiseButton({ children, className, onClick, type = "button", variant = "dark" }) {
  const isLight = variant === "light";
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-full px-6 py-3 font-semibold transition-all duration-300 group",
        isLight ? "text-slate-800" : "text-white",
        "hover:scale-[1.03] hover:shadow-2xl active:scale-[0.97]",
        className
      )}
    >
      {/* Gradient border ring */}
      <span
        className="absolute inset-0 rounded-[inherit] p-[2.5px]"
        style={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899, #f97316, #6366f1)",
          backgroundSize: "300% 300%",
          animation: "gradientShift 4s ease infinite",
        }}
      >
        <span className={cn("block w-full h-full rounded-[inherit]", isLight ? "bg-white" : "bg-[#0a0a0f]")} />
      </span>

      {/* Inner background */}
      <span
        className="absolute inset-[2.5px] rounded-[inherit]"
        style={{
          background: isLight
            ? "radial-gradient(ellipse at 30% 50%, rgba(139,92,246,0.06) 0%, rgba(99,102,241,0.04) 40%, transparent 70%), #ffffff"
            : "radial-gradient(ellipse at 30% 50%, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.12) 40%, transparent 70%), #0d0d14",
        }}
      />

      {/* Noise overlay */}
      <NoiseCanvas />

      {/* Shimmer sweep on hover */}
      <span className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s ease infinite",
        }}
      />

      {/* Text */}
      <span className="relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide">
        {children}
      </span>

      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </button>
  );
}
