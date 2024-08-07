import type { Metadata } from "next";
import "@/styles/root-layout.css";
import { fonts } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Substance",
  description: "Silver Substance, Empowering Developers.",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonts.GeistSans.variable} ${fonts.GeistMono.variable} font-geistSans`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
