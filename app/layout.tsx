import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fit Power Quilpué | Demo multicede",
  description: "Landing premium y demo visual de sistema multicede para Fit Power Quilpué."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
