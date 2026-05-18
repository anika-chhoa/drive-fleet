import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "DriveFleet",
  description:
    "DriveFleet is a modern car rental platform where users can explore premium vehicles, book rentals easily, manage bookings, and add their own car listings with secure authentication and a seamless user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
