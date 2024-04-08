import Footer from "./components/footer";
import Header from "./components/header";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <Header />
        </>

        <main>{children}</main>

        <>
          <Footer />
        </>
      </body>
    </html>
  );
}
