import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Uthra Kumar R. — Social Media | Strategy | Account Management',
  description: 'Portfolio of Uthra Kumar R., social media strategist and project lead working across sports, campaigns, content, and account management.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
