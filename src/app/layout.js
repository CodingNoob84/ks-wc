import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Karthik weds Sharmi",
  description:
    "You are cordially invited to the wedding of Karthik and Sharmi. The reception will be held on September 5th, followed by the marriage ceremony on September 6th.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
