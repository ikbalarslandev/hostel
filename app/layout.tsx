import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Berlin Hostel & Street",
  description:
    " independent and locally run hostel with a unique family atmosphere that will make you feel right at home. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className="min-h-[95vh] "> {children}</div>

        <Footer />
      </body>
    </html>
  );
}
