"use client";

import { useEffect, useRef, useState } from "react";

export default function Spotlight() {
  const divRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!divRef.current) return;
      if (!isMounted) setIsMounted(true);
      
      divRef.current.style.setProperty("--x", `${e.clientX}px`);
      divRef.current.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMounted]);

  return (
    <div
      ref={divRef}
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: `radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
