import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Hackathon Launchpad", description: "Reusable web hackathon starter" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
