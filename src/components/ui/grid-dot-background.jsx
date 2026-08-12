import { cn } from "../../lib/utils";

export function DotBackground({ children, className }) {
  return (
    <div className={cn("relative w-full bg-white flex flex-col items-center justify-center", className)}>
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Fade mask */}
      <div className="absolute inset-0 pointer-events-none bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {children}
    </div>
  );
}

export function GridBackground({ children, className }) {
  return (
    <div className={cn("relative w-full bg-slate-50 flex flex-col items-center justify-center", className)}>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Fade mask */}
      <div className="absolute inset-0 pointer-events-none bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {children}
    </div>
  );
}
