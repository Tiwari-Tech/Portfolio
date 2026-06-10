"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const updateMouse = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const updateActive = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, .motion-card, .hover-lift, .skill-pill")));
    };

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.18;
      position.current.y += (mouse.current.y - position.current.y) * 0.18;

      const transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      if (glowRef.current) glowRef.current.style.transform = transform;
      if (ringRef.current) ringRef.current.style.transform = transform;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("mouseover", updateActive);
    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("mouseover", updateActive);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className={`cursor-glow ${active ? "is-active" : ""}`} />
      <div ref={ringRef} className={`cursor-ring ${active ? "is-active" : ""}`} />
    </>
  );
}
