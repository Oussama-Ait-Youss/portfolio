import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oussama Ait Youss - Full Stack Developer",
  description: "Building accessible, pixel-perfect, and robust digital experiences.",
};

import Spotlight from "@/components/Spotlight";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-400 relative`}>
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
