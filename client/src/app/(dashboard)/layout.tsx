"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Anek_Bangla, Poppins } from "next/font/google";
import "./globals.css";
import { useAuth } from "@/hooks/useAuth";

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuth();

  return (
    <html lang="en">
      <title>Dashboard | Code Duniya</title>
      <body
        className={`${anekBangla.variable} ${poppins.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full h-screen">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
