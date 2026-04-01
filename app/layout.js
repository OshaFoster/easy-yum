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
  title: "Easy, Yum!",
  description: "Simple food, cooked well. Recipes with few ingredients, not much effort, and worth repeating.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999, opacity: 0.06, backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'300\' height=\'300\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '300px 300px' }} />
        <div aria-hidden="true" className="fixed left-0 bottom-0 flex" style={{ top: "83px", zIndex: 25, pointerEvents: "none", opacity: 0.9 }}>
          <div className="w-2 md:w-3 lg:w-5" style={{ backgroundColor: "#b5735a" }} />
          <div className="w-2 md:w-3 lg:w-5" style={{ backgroundColor: "#5b8a7a" }} />
          <div className="w-2 md:w-3 lg:w-5" style={{ backgroundColor: "#b8963e" }} />
          <div className="w-2 md:w-3 lg:w-5" style={{ backgroundColor: "#b07a8a" }} />
          <div className="w-2 md:w-3 lg:w-5" style={{ backgroundColor: "#6b7f8a" }} />
        </div>
        {children}
        <DonateButton />
      </body>
    </html>
  );
}
