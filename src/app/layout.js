import { Victor_Mono, Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  weight: "variable",
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const xahnMono = Victor_Mono({
  weight: "400",
  variable: "--font-xahn-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Myotis",
  description: "State-of-the-art autonomy and AI computer vision for drones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${xahnMono.variable} ${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
