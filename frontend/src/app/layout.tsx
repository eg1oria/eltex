import type { Metadata } from 'next';
import { DEFAULT_LOCALE, createTranslator } from '@/lib/i18n';
import './globals.css';

const t = createTranslator(DEFAULT_LOCALE);

export const metadata: Metadata = {
  title: t('metadata.title'),
  description: t('metadata.description'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={DEFAULT_LOCALE} className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
