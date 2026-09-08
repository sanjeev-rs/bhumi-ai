import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BHUMI.AI — Land Intelligence for a Sustainable India",
  description:
    "An AI-powered platform connecting land data, research and policy for evidence-based decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}