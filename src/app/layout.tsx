import "~/styles/globals.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const yapari = localFont({
  src: [
    {
      path: "../../public/YapariTrial-Bold.ttf",
      weight: "400",
    },
    {
      path: "../../public/YapariTrial-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-yapari",
});

export const metadata = {
  title: "LOGIA TRUTH TABLE GENERATOR",
  description: "Logical formula solver and truth table generator",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>{children}</body>
      <html lang="en" className={`${yapari.variable} font-sans`}></html>
    </html>
  );
}
