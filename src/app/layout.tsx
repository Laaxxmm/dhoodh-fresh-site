import type { Metadata } from "next";
import "./globals.css";
import { Inter, Lexend } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "Dhoodh Fresh",
  description: "100% shudd milk",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexend.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}