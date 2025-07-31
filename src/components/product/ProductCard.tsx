'use client';

import { Product } from '@/types/product';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
// import { addToCart } from '@/features/cart/cartSlice'; 

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    // dispatch(addToCart(product));
    console.log('Добавлен в корзину:', product.name);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={product.image}
        alt={product.name}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div>
        <span>{product.price} ₸</span>
        <button
          onClick={handleAddToCart}
        >
          В корзину
        </button>
      </div>
    </motion.div>
  );
}
