import type { Metadata } from "next";
import Header from "./components/header";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Documentary",
  description: "The play platform for you who do love documentary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
