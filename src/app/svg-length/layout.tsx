import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVG Length Calculator | Chunky's Dank Tools",
  description:
    "Calculate the length of SVG paths with this simple yet powerful tool. Upload your SVG and get instant measurements.",
  openGraph: {
    title: "SVG Length Calculator",
    description:
      "Calculate the length of SVG paths with this simple yet powerful tool",
    images: [
      {
        url: "/og/svg-length.png",
        width: 1200,
        height: 630,
        alt: "SVG Length Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SVG Length Calculator",
    description:
      "Calculate the length of SVG paths with this simple yet powerful tool",
    images: ["/og/svg-length.png"],
  },
};

export default function SVGLengthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
