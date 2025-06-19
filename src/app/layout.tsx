import Background from "@/components/background";
import { Navigation } from "@/components/navigation";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "700", "900"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: {
		default: "Dank Tools - Developer Utilities",
		template: "%s | Dank Tools",
	},
	description:
		"A collection of free developer tools and utilities to help streamline your workflow. Featuring SVG path length calculator, Discord timestamp generator, and more.",
	keywords: [
		"developer tools",
		"svg path length",
		"discord timestamp",
		"web tools",
		"developer utilities",
		"svg calculator",
		"discord timestamp generator",
		"discord time tag",
	],
	authors: [
		{
			name: "chunky.dev",
			url: "https://github.com/chunkydotdev",
		},
	],
	creator: "chunky.dev",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://dank.tools",
		siteName: "Dank Tools",
		title: "Dank Tools - Developer Utilities",
		description:
			"A collection of free developer tools and utilities to help streamline your workflow.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Dank Tools",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Dank Tools - Developer Utilities",
		description:
			"A collection of free developer tools and utilities to help streamline your workflow.",
		images: ["/og-image.png"],
		creator: "@devjunghard",
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: {
			url: "/chunky.png",
			type: "image/png",
		},
		apple: {
			url: "/chunky.png",
			type: "image/png",
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">t
			<body className={`relative ${poppins.variable} font-sans`}>
				<Background />
				<Navigation />
				{children}
				<Script
					defer
					data-domain="dank.tools"
					src="https://plausible.chunky.dev/js/script.js"
					strategy="afterInteractive"
				/>
				<Script
					src="https://feedback.happypanda.ai/happypanda.js"
					data-project-id="679296c87be9d598b88e5321"
					data-token="63efc20e8d2378af9261776494006f967349ff2ef9db1df9a2243b86132cc9aa"
					strategy="afterInteractive"
				/>
				<Toaster />
			</body>
		</html>
	);
}
