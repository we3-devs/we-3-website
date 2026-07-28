import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
	title: "WE-3 Tech & Innovation | Engineering Intelligent Software",
	description:
		"Nepal's premier engineering team building AI-powered platforms, enterprise systems, and digital products for the modern world.",
	keywords: [
		"software development",
		"AI development",
		"Nepal tech company",
		"web development",
		"mobile development",
		"enterprise software",
		"SaaS development",
		"digital transformation",
	],
	openGraph: {
		title: "WE-3 Tech & Innovation",
		description: "Engineering intelligent software for the modern world. AI, software, innovation.",
		type: "website",
		locale: "en_US",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="dark">
			<head>
				<meta name="google-site-verification" content="Q-QD5VocOG75qqolP99gCO4TSQIx8u52D_F5SWZuddw" />
			</head>
			<body className="min-h-screen bg-background text-foreground">
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-black focus:text-sm focus:font-medium focus:outline-none"
				>
					Skip to main content
				</a>
				<Navigation />
				<main id="main-content">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
