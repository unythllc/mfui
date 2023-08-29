import "swiper/css/navigation";
import "@/styles/globals.css";
import "@/styles/payment.css";
// import "@/components/carousel/style.scss";
// import "@/styles/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MFUi one stop UI library",
  description:
    "MFUi is a freemium UI library for website. It is based on React and TailwindCSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>MFUi</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="MFUi is a freemium UI library for website. It is based on React and TailwindCSS."
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ccr7tzi.css"
        ></link>
      </head>
      <body className={"flex flex-col h-screen justify-between"}>
        <Navbar />
        <div className="mb-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
