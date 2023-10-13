import "./globals.css";
import { Ubuntu, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "300" });
const poppins = Poppins({ subsets: ["latin"], weight: "300" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "jmari.dev",
  description: "Justin Mari's professional portfolio website",
};

export const revalidate = parseInt(process.env.REVALIDATION_INTERVAL) || 86400;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <style>
        {`
        html {
          font-family: ${ubuntu.style.fontFamily};
        }
        h1 {
          font-family: ${poppins.style.fontFamily};
        }
        p {
          font-family: ${poppins.style.fontFamily};
        }
        button {
          font-family: ${poppinsBold.style.fontFamily};
        }
        `}
      </style>
      <body className="text-slate-900 dark:text-yellow-50">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
