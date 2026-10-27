import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZENITH | A Freshers' Welcome",
  description: "A new chapter begins. The BCA Department welcomes you to ZENITH at Science College (Autonomous), Hinjilicut.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
