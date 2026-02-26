import type { Metadata } from "next";
import { getThemeScript } from "@/lib/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan David Ramirez - Portfolio",
  description: "Full Stack Developer - Building modern web applications with passion and precision",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Juan David Ramirez - Portfolio",
    description: "Full Stack Developer - Building modern web applications with passion and precision",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
