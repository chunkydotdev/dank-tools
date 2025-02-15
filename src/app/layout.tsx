import Background from "@/components/background";
import { Navigation } from "@/components/navigation";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Chunky's Dank Tools",
  description: "A collection of chunkydotdev's free and open-source tools.",
  icons: {
    icon: {
      url: "/chunky.svg",
      type: "image/svg+xml",
    },
    apple: {
      url: "/chunky.svg",
      type: "image/svg+xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Background />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
