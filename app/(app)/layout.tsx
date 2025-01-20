import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "hsf",
  description: "Product for build your self",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
