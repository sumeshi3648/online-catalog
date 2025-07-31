import './globals.css';
import type { Metadata } from 'next';
import Providers from './providers';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Каталог товаров',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
