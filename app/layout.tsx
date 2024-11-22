'use client'

import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import LoadingIndicator from "@/components/LoadingIndicator";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
        suppressHydrationWarning={true}
      >
        <NextUIProvider>
          {loading ? 
            <LoadingIndicator color="secondary" size="lg" /> : <>{children}</>
          }
        </NextUIProvider>
      </body>
    </html>
  );
}
