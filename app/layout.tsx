import AppHeader from "@/app/components/header/AppHeader";
import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "@next/font/google";

export const metadata: Metadata = {
  title: "Kanban Board",
  description: "Generated by create next app",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} "flex items-center justify-center " `}
      >
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
