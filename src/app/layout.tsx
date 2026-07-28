import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const siteUrl = "https://we3-techinnovation.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "WE-3 Tech & Innovation | AI, Software Development & Digital Solutions",
    template: "%s | WE-3 Tech & Innovation",
  },

  description:
    "WE-3 Tech & Innovation is a technology company delivering AI solutions, custom software development, web and mobile applications, cloud solutions, automation, IT consulting, and digital transformation services for businesses worldwide.",

  applicationName: "WE-3 Tech & Innovation",

  keywords: [
    "WE-3",
    "WE-3 Tech",
    "WE-3 Tech & Innovation",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "AI Development",
    "Artificial Intelligence",
    "Generative AI",
    "AI Automation",
    "Machine Learning",
    "Cloud Solutions",
    "Cloud Computing",
    "DevOps",
    "Enterprise Software",
    "SaaS Development",
    "Digital Transformation",
    "IT Consulting",
    "Business Automation",
    "Custom Software",
    "Technology Company",
    "Tech Company Nepal",
    "Software Company Nepal",
    "Global Software Company",
    "UI UX Design",
    "API Development",
    "Next.js Development",
    "React Development",
    "Node.js Development",
    "PostgreSQL",
    "Cloud Infrastructure",
    "Innovation",
  ],

  authors: [
    {
      name: "WE-3 Tech & Innovation",
    },
  ],

  creator: "WE-3 Tech & Innovation",
  publisher: "WE-3 Tech & Innovation",

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "WE-3 Tech & Innovation",

    title: "WE-3 Tech & Innovation",

    description:
      "Building intelligent software solutions through AI, cloud technologies, and modern software engineering.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WE-3 Tech & Innovation",
      },
    ],
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "WE-3 Tech & Innovation",
  //   description:
  //     "AI • Software Development • Cloud • Digital Transformation",

  //   images: ["/og-image.jpg"],
  //   creator: "@yourhandle",
  // },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
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
