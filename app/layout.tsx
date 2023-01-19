import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-primary-gradient" lang="en">
      <head />
      <body className="p-8 sm:p-10 pt-0 sm:pt-0">{children}</body>
    </html>
  );
}
