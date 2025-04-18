import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Therencho Education | Mathematics, Computer Science & Physics Tutor",
  description: "Expert tutoring in Mathematics, Computer Science, and Physics by Rencho.",
  keywords: ["education", "tutoring", "mathematics", "physics", "computer science", "STEM"],
  authors: [{ name: "Rencho" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
