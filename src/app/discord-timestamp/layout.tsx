import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discord Timestamp Generator | Create Time Stamps for Discord",
  description:
    "Generate Discord timestamps that show correct local time for every user. Create time stamps, timers, and formatted dates for Discord messages regardless of timezone.",
  keywords: [
    "discord timestamp",
    "discord timestamp generator",
    "discord timestamps",
    "discord time stamp",
    "discord time",
    "discord timer",
    "discord local time generator",
    "discord date generator",
    "time stamp discord",
    "timestamp generator discord",
    "discord timestamp creator",
    "discord timer generator",
    "timestamp discord generator",
    "discord time stamp maker",
    "discord utc timestamp",
    "discord timezone generator",
  ],
  openGraph: {
    title: "Discord Timestamp Generator",
    description:
      "Generate Discord timestamps that show correct local time for every user. Create time stamps, timers, and formatted dates for Discord messages.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Discord Timestamp Generator",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://dank.tools/discord-timestamp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discord Timestamp Generator",
    description:
      "Generate Discord timestamps that show correct local time for every user. Create time stamps, timers, and formatted dates for Discord messages.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://dank.tools/discord-timestamp",
  },
};

export default function DiscordTimestampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
