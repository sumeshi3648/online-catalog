'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { ShoppingCart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

export default function Header() {
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
            href="/" 
            className="relative flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
            <ShoppingBag size={22} />
            <span>Каталог</span>
        </Link>

        <Link
            href="/cart"
            className="relative flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
        >
            <ShoppingCart size={22} />
            <span>Корзина</span>
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
                </span>
            )}
        </Link>
      </div>
    </header>
  );
}
