import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning NextJs",
    template: "%s | Learning NextJs",
  },
  keywords: ['Next.js', 'React', 'JavaScript', "Learning", "PlayGround"],
  description: "Trying to learn NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body
          className={`${poppins.className} antialiased`}
        >
          <NavBar />
          <main className="h-screen h-max-[700px]">
            {children}
          </main>
          <footer>
            Awesome
          </footer>
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
