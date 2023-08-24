import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { AuthContextProvider } from "../src/context/AuthContext";

export const metadata: Metadata = {
  title: "Star Wars Blog",
  description: "Star Wars blog with all information about Star Wars characters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
