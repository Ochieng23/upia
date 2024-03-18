
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UPIA KENYA",
  description: "A political party bringing about change in Kenya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navigation />
      <main className={inter.className}>{children}</main>
      <Footer />
    </html>
  );
}
