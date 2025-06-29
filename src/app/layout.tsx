import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { PortfolioFloatingDock } from "@/components/PortfolioFloatingDock";
import { ClientLayout } from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "John Doe - Developer",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          <ClientLayout>
            <Sidebar />
            <div className="lg:pl-2 lg:pt-2 bg-gray-100 dark:bg-black flex-1 overflow-y-auto pb-20 lg:pb-0">
              <div className="flex-1 bg-white dark:bg-black min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 dark:border-neutral-800 overflow-y-auto">
                {children}
                <Footer />
              </div>
            </div>
            <PortfolioFloatingDock />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
