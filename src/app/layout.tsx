import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { PortfolioFloatingDock } from "@/components/PortfolioFloatingDock";
import { ClientLayout } from "@/components/ClientLayout";
import { StructuredData } from "@/components/StructuredData";
import { Analytics } from "@/components/Analytics";
import { MusicProvider } from "@/context/MusicContext";
import { GlobalSoundToggle } from "@/components/GlobalSoundToggle";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adityasugandhi.dev'),
  title: "Aditya Sugandhi - AI Engineer & Software Developer | FSU Graduate",
  description:
    "Aditya Sugandhi is an AI Engineer and Software Developer specializing in machine learning, data science, and intelligent systems. Graduate of Florida State University with expertise in building innovative AI solutions.",
  keywords: [
    "Aditya Sugandhi",
    "AI Engineer",
    "Software Developer",
    "Machine Learning",
    "Data Science", 
    "Florida State University",
    "FSU",
    "Artificial Intelligence",
    "Software Engineering",
    "Full Stack Developer",
    "Python",
    "React",
    "Next.js",
    "Intelligent Systems"
  ],
  authors: [{ name: "Aditya Sugandhi" }],
  creator: "Aditya Sugandhi",
  publisher: "Aditya Sugandhi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityasugandhi.dev",
    siteName: "Aditya Sugandhi Portfolio",
    title: "Aditya Sugandhi - AI Engineer & Software Developer",
    description: "AI Engineer and Software Developer specializing in machine learning, data science, and intelligent systems. FSU Graduate building innovative AI solutions.",
    images: [
      {
        url: "/images/aditya-sugandhi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Sugandhi - AI Engineer & Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Sugandhi - AI Engineer & Software Developer",
    description: "AI Engineer and Software Developer specializing in machine learning, data science, and intelligent systems.",
    images: ["/images/aditya-sugandhi-og.jpg"],
    creator: "@adityasugandhi",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://adityasugandhi.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <Analytics />
      </head>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100 dark:bg-black"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MusicProvider>
            <ClientLayout>
              <Sidebar />
              <div className="lg:pl-2 lg:pt-2 bg-gray-100 dark:bg-black flex-1 overflow-y-auto pb-20 lg:pb-0">
                <div className="flex-1 bg-white dark:bg-black min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 dark:border-neutral-800 overflow-y-auto">
                  {children}
                  <Footer />
                </div>
              </div>
              <PortfolioFloatingDock />
              <GlobalSoundToggle />
            </ClientLayout>
          </MusicProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
