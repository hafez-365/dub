import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dub - Short Links, Big Impact",
  description: "Create, manage, and track short links with advanced analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
