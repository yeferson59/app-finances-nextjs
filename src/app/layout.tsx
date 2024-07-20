import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { APP } from "@/lib/consts";

const fontSans = FontSans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: APP.title,
  description: APP.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased w-full",
        fontSans.variable
      )}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
