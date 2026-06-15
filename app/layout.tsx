import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Grok Chatbot',
  description: 'Powered by Grok on Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
