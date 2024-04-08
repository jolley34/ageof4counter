import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import CivProvider from "./context/civContext";
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
    <CivProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
        </body>
        <Footer />
      </html>
    </CivProvider>
  );
}
