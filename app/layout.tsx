import "./globals.css";
import Header from "./header";

export const metadata = {
  title: "Memory Mastermind",
  description: "Web Memory Game Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex h-screen flex-col">
        <Header />
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
