import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import "./globals.css";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Load Alovera font (local)
const alovera = localFont({
  src: "../public/fonts/Aloevera.ttf",
  variable: "--font-alovera",
});

// export const metadata: Metadata = {
//   title: "Pink Buddy - Your All-In-One Personal Assistant",
//   description:
//     "Empower Your Life with Pink Buddy – Your Ultimate Companion for Organization, Wellness, and Confidence.",
//   keywords: [
//     "personal assistant",
//     "women",
//     "organization",
//     "wellness",
//     "period tracking",
//     "reminders",
//   ],
//   openGraph: {
//     title: "Pink Buddy - Your All-In-One Personal Assistant",
//     description:
//       "Empower Your Life with Pink Buddy – Your Ultimate Companion for Organization, Wellness, and Confidence.",
//     url: "https://pinkbuddy.app",
//     siteName: "Pink Buddy",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Pink Buddy",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${alovera.variable} font-poppins`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
