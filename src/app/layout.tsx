import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.scss";

const geist = Roboto({
  subsets: ['latin'],
})

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
    <html lang="en" className={geist.className}>
      <body>
        <h1>Expenses app</h1>
        {children}
      </body>
    </html>
  );
}
