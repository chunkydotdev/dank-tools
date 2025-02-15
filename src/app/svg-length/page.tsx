"use client";

import { useState } from "react";
import { PathList } from "./components/path-list";
import { SVGUpload } from "./components/svg-upload";

function calculatePathLengths(svgString: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  const paths = doc.querySelectorAll("path");
  const svgElement = doc.querySelector("svg");
  const viewBox = svgElement?.getAttribute("viewBox") || "0 0 100 100";

  return Array.from(paths).map((path) => {
    const length = path.getTotalLength();
    const color =
      path.getAttribute("stroke") || path.getAttribute("fill") || "#000";
    // Create a new SVG for each path that maintains the original viewBox
    const pathSvg = `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">${path.outerHTML}</svg>`;
    return {
      path: pathSvg,
      length,
      color,
    };
  });
}

export default function SVGLength() {
  const [svg, setSVG] = useState<string>();
  const [paths, setPaths] = useState<
    Array<{ path: string; length: number; color: string }>
  >([]);

  const handleSVGUpload = (svgString: string) => {
    setSVG(svgString);
    const pathLengths = calculatePathLengths(svgString);
    setPaths(pathLengths);
  };

  return (
    <main className="relative min-h-screen pt-16">
      <div className="relative z-10 p-8 space-y-8 max-w-screen-sm mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-4">SVG Length Calculator</h1>
          <p className="text-muted-foreground">
            Upload an SVG file and find the length of the paths used in the SVG.
          </p>
        </div>

        <SVGUpload onSVGUpload={handleSVGUpload} currentSVG={svg} />

        {paths.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xs font-medium text-muted-foreground">
              SVG Paths
            </h2>
            <PathList paths={paths} />
          </div>
        )}
      </div>
    </main>
  );
}
