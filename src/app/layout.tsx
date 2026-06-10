import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Someshmani Tiwari | Full-Stack Developer",
  description:
    "Portfolio of Someshmani Tiwari, a Full-Stack Developer experienced with React.js, Node.js, Express.js, MongoDB, PostgreSQL, REST APIs, JWT, RBAC, Generative AI, and IoT systems."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
