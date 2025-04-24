import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Simple Poll | Chunky's Dank Tools",
	description:
		"Create quick and easy polls to share with your friends. Get real-time results, track voting patterns, and collect responses with optional voter names.",
	openGraph: {
		title: "Simple Poll - Create and Share Quick Polls",
		description:
			"Create polls in seconds, share them with anyone, and watch the results roll in. Features include real-time updates, voting timelines, and optional voter identification.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Simple Poll Creator",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Simple Poll - Create and Share Quick Polls",
		description:
			"Create polls in seconds, share them with anyone, and watch the results roll in. Features include real-time updates, voting timelines, and optional voter identification.",
		images: ["/og-image.png"],
	},
};

export default function SimplePollLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
