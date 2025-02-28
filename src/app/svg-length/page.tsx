"use client";

import { BounceArrow } from "@/components/bounce-arrow";
import { PathList } from "@/components/svg-length/path-list";
import { SVGUpload } from "@/components/svg-length/svg-upload";
import { useState } from "react";

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
    <main className="">
      {/* Calculator Section */}
      <section className="relative min-h-screen z-10 px-8 pt-24 space-y-8 max-w-screen-sm mx-auto">
        <div className="">
          <h1 className="text-4xl font-bold mb-4">
            SVG Path Length Calculator
          </h1>
          <p className="text-muted-foreground">
            Calculate the exact length of SVG paths instantly. Perfect for
            animations, stroke effects, and precise SVG manipulations.
          </p>
        </div>

        <div className="space-y-20">
          <div className="space-y-8">
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

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How to Use</h2>
              <ol className="space-y-3 text-muted-foreground">
                <li>
                  1. Upload your SVG file by dragging and dropping or clicking
                  to browse
                </li>
                <li>2. View the length of each path in your SVG</li>
                <li>
                  3. Click the &quot;Copy length&quot; button to copy the value
                </li>
              </ol>
            </section>
          </div>
        </div>
        <BounceArrow />
      </section>

      {/* Content Below the Fold */}
      <section className="pb-40">
        <div className="max-w-screen-lg mx-auto p-8 space-y-16">
          <div className="grid md:grid-cols-2 gap-16">
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">
                Understanding SVG Path Length
              </h2>
              <div className="prose text-muted-foreground">
                <p>
                  SVG path length is a fundamental concept in web animation and
                  graphics. It represents the total distance that would be
                  covered if you were to trace along the entire path. This
                  measurement is invaluable for creating precise animations and
                  effects.
                </p>
                <p>
                  When working with SVG animations, knowing the exact path
                  length allows you to:
                </p>
                <ul>
                  <li>Create accurate drawing animations</li>
                  <li>Synchronize multiple path animations</li>
                  <li>Calculate precise animation timings</li>
                  <li>Implement progress-based animations</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">Common Applications</h2>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Drawing Animations</h3>
                  <p className="text-muted-foreground">
                    Use path length to create the popular &quot;drawing&quot;
                    effect where lines appear to draw themselves. This is
                    achieved by manipulating the stroke-dasharray and
                    stroke-dashoffset properties.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Progress Indicators</h3>
                  <p className="text-muted-foreground">
                    Create precise progress bars and loading indicators by
                    animating a portion of the path based on its total length.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">
                    Interactive Visualizations
                  </h3>
                  <p className="text-muted-foreground">
                    Build data visualizations that animate based on user
                    interaction or scroll position, using the path length to
                    control the animation progress.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Tips for Working with SVG Path Length
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Optimization</h3>
                <p className="text-muted-foreground">
                  Simplify your SVG paths when possible to improve performance.
                  Fewer points mean smoother animations and better performance.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Animation Timing</h3>
                <p className="text-muted-foreground">
                  Consider the path length when setting animation duration.
                  Longer paths might need more time to animate naturally.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Browser Support</h3>
                <p className="text-muted-foreground">
                  Path length calculations are well-supported in modern
                  browsers, but always test across different platforms for
                  consistency.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
