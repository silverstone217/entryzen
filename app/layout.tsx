import type { Metadata } from "next";
import "./globals.css";
import { specialElite } from "@/utils/fonts";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Entryzen",
  description: "Votre plateforme de gestion d'evenement et billeterie!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${specialElite.className}  antialiased scroll-smooth`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
