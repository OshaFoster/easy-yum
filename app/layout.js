import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DonateButton from "@/components/ui/DonateButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Easy Yum",
  description: "Easy Yum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <DonateButton />
      </body>
    </html>
  );
}
