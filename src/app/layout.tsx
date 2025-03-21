import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/modules/Navbar";
import { Modal } from "@/modules/Modal";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "Organize your readings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Modal />
      </body>
    </html>
  );
}
