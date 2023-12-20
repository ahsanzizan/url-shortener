import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Admin URL Shortener",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[200px]">
        {children}
      </main>
    </>
  );
}

export const revalidate = 0;
