import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";
import { Inter } from "next/font/google";
import "../assets/styles/globals.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </PrimeReactProvider>
      </body>
    </html>
  );
}
