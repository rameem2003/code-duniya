import type { Metadata } from "next";
import { Anek_Bangla, Poppins } from "next/font/google";
import "./globals.css";
import Navber from "@/components/shared/Navber";
import Footer from "@/components/shared/Footer";
import { AuthProvider } from "@/hooks/useAuth";
import { CartProvider } from "@/hooks/useCart";

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

export const metadata: Metadata = {
  title: "দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম - কোড দুনিয়া",
  description: "দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম",
  keywords: [
    "Number one IT training platform in Bangladesh",
    "Best IT training platform in Bangladesh",
    "Best IT training platform in Dhaka",
    "Best web development company in Dhaka",
    "Best web development company in Bangladesh",
    "react js development",
    "Mahmood Hassan Rameem",
    "MERN stack development",
    "web development",
    "web design",
    "Bangladesh",
    "ROL Studio Bangladesh",
    "Next.js",
  ],
  openGraph: {
    title: "কোড দুনিয়া",
    description: "দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম",
    url: "https://rolstudiobangladesh.vercel.app/",
    siteName: "Code Duniya",
    images: [
      {
        url: "https://rolstudiobangladesh.vercel.app/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <CartProvider>
          <body
            className={`${anekBangla.variable} ${poppins.variable} antialiased`}
          >
            {children}
          </body>
        </CartProvider>
      </AuthProvider>
    </html>
  );
}
