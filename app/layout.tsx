import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background font-body text-body-md text-on-background"
        suppressHydrationWarning
      >
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -left-[10%] -top-[20%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute -bottom-[10%] -right-[5%] h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
