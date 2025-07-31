'use client';

import { Product } from '@/types/product';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { addToCart } from '@/features/cart/cartSlice';
import Link from 'next/link';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    if(!product.inStock) {
      alert('Товар отсутствует в наличии');
      return;
    }
    dispatch(addToCart({ ...product, quantity: 1 }));
    console.log('Добавлен в корзину:', product.name);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md p-4 flex flex-col"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <Link href={`/product/${product.id}`} className="hover:underline">
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      </Link>
      <p className="text-gray-600 mt-1 text-sm line-clamp-2">{product.description}</p>
      <div className="flex items-center justify-between mt-auto pt-4">
        <span className="text-lg font-bold text-blue-600">{product.price} ₸</span>
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`px-4 py-2 rounded transition text-white font-semibold
            ${product.inStock
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'}
          `}
        >
          В корзину
        </button>
      </div>
    </motion.div>
  );
}
