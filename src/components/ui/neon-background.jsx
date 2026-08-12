import { cn } from "../../lib/utils";

export function NeonBackground({ children, className, id }) {
  return (
    <section 
      id={id} 
      className={cn("relative w-full overflow-hidden bg-black", className)}
    >
      {/* Ambient glows */}
      <div className="absolute top-[10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-blue-900/30 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/30 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none" />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
}
