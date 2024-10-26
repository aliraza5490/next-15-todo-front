import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const JosefinSans = localFont({
  src: './fonts/JosefinSansVF.ttf',
  weight: '400 700',
});

export const metadata: Metadata = {
  title: 'Todo List App',
  description: 'Mentorship Platform Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${JosefinSans.className} antialiased`}>{children}</body>
    </html>
  );
}
