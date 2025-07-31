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
    dispatch(addToCart(product));
    console.log('Добавлен в корзину:', product.name);
  };

  return (
    <Link href={`/product/${product.id}`} className="hover:underline">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-xl shadow-md p-4 flex flex-col"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-600 mt-1 text-sm line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-auto pt-4">
          <span className="text-lg font-bold text-blue-600">{product.price} ₸</span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
          >
            В корзину
          </button>
        </div>
      </motion.div>
    </Link>
  );
}
