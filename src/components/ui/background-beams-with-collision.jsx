import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BackgroundBeamsWithCollision({ children, className = "" }) {
  const containerRef = useRef(null);
  const parentRef = useRef(null);

  const beams = [
    { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
    { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
    { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7 },
    { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
    { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
    { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
    { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
  ];

  return (
    <div
      ref={parentRef}
      className={`bg-black relative flex items-center w-full justify-center overflow-hidden min-h-screen ${className}`}
    >
      {beams.map((beam, i) => (
        <CollisionMechanism
          key={`beam-${i}`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}
      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 w-full inset-x-0 pointer-events-none h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)" }}
      />
    </div>
  );
}

function CollisionMechanism({ parentRef, containerRef, beamOptions = {} }) {
  const beamRef = useRef(null);
  const [collision, setCollision] = useState({ detected: false, coordinates: null });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (beamRef.current && containerRef.current && parentRef.current && !cycleCollisionDetected) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;
          setCollision({ detected: true, coordinates: { x: relativeX, y: relativeY } });
          setCycleCollisionDetected(true);
        }
      }
    };

    const interval = setInterval(checkCollision, 50);
    return () => clearInterval(interval);
  }, [cycleCollisionDetected, containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      const timeout = setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
        setBeamKey((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        initial={{ translateY: "-200px", translateX: `${beamOptions.initialX || 0}px` }}
        animate={{ translateY: "1800px", translateX: `${beamOptions.translateX || 0}px` }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={`absolute left-0 top-0 m-auto w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent ${beamOptions.className || "h-14"}`}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{
              position: "absolute",
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function Explosion({ style }) {
  const spans = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div style={style} className="z-50 pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent blur-sm"
      />
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-400 to-purple-500"
        />
      ))}
    </div>
  );
}
