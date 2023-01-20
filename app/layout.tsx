import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="p-8 sm:p-10 pt-0 sm:pt-0">
        <div className="bg-primary-gradient fixed left-0 bottom-0 w-full h-[100vh] -z-50"></div>
        {children}
      </body>
    </html>
  );
}
