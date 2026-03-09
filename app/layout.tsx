import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { FinanceProvider } from "@/providers/FinanceDataProvider";
import { Toaster } from "sonner";
import { SidebarProvider } from "@/providers/SidebarProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "FinanceTrack App",
  description: "Track your spendings and manage your finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <FinanceProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
          <Toaster
            position="top-center"
            richColors
            closeButton
          />
        </FinanceProvider>
      </body>
    </html>
  );
}
