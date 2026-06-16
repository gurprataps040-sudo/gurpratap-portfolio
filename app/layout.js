import { DM_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-display', 
  weight: ['300', '400', '500', '700'] 
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body' 
});

const mono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono', 
  weight: ['400', '500'] 
});

export const metadata = {
  title: "GURPRATAP SINGH | Artificial Intelligence Enthusiast",
  description: "Portfolio of Gurpratap Singh, a B.Tech CSE student at LPU passionate about AI, full-stack development, and data-driven sports analytics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${inter.variable} ${mono.variable} antialiased bg-parchment text-ink`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
