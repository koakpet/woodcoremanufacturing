import "./globals.css";

export const metadata = {
  title: "WOODCORE MANUFACTURING LTD",
  description: "Doors, Cabinets & Furniture Manufacturing",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
