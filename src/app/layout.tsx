import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Expenses app",
  description: "Simple expenses app with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
