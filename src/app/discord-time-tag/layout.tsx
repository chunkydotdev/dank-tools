import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discord Time Tag Generator | Chunky's Dank Tools",
  description:
    "Generate Discord timestamps that will show the correct time for every user, regardless of their timezone.",
  openGraph: {
    title: "Discord Time Tag Generator",
    description:
      "Generate Discord timestamps that show the correct time for every user",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Discord Time Tag Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discord Time Tag Generator",
    description:
      "Generate Discord timestamps that show the correct time for every user",
    images: ["/og-image.png"],
  },
};

export default function DiscordTimeTagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
