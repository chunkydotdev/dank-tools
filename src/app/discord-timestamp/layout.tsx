import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discord Timestamp Generator | Create Time Stamps for Discord",
  description:
    "Free Discord timestamp generator to create time stamps that show the correct local time for every user. Generate Discord timestamps, time tags, and timers for events, regardless of timezone.",
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
    "discord timezone generator"
  ],
  openGraph: {
    title: "Discord Timestamp Generator | Create Time Stamps for Discord",
    description:
      "Free tool to generate Discord timestamps that show the correct local time for every user. Create time stamps, timers, and date formats for Discord messages and events.",
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
    title: "Discord Timestamp Generator | Create Time Stamps for Discord",
    description:
      "Free tool to generate Discord timestamps that show the correct local time for every user. Create time stamps, timers, and date formats for Discord messages and events.",
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
