import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import { Toaster } from "react-hot-toast";
import Appbar from "@/components/Appbar";
import ClientLayout from "@/components/ClientLayout";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D-kart - BY kunj dave",
  description: "en-cart then D-Kart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        <body className={montserrat.className}>
          <ClientLayout>{children}</ClientLayout>  
        </body>
      </html>
    
  );
}
