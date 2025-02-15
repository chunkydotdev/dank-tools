"use client";
import { useCurrentPath } from "@/hooks/useCurrentPath";
import { cn } from "@/lib/utils";

const Background = () => {
  const currentPath = useCurrentPath();

  const isDark = currentPath?.dark;

  return (
    <div
      className={cn(
        "absolute -left-8 -top-8 right-0 bottom-0 z-0 pointer-events-none",
        isDark && "bg-[#2D2F33]"
      )}
      style={{
        backgroundImage: isDark
          ? 'url("/pattern-dark.svg")'
          : 'url("/pattern.svg")',
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
      }}
    />
  );
};

export default Background;
