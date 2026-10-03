import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CineSeat",
  description: "Book a seat at the cinema.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <header className="site-header">
          <span className="brand">CineSeat</span>
        </header>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
