'use client';

import { Product } from '@/types/product';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { addToCart } from '@/features/cart/cartSlice';

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover rounded"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <p className="text-lg font-semibold text-blue-600 mt-4">{product.price} ₸</p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
