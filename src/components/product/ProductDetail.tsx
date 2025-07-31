'use client';

import { Product } from '@/types/product';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { addToCart } from '@/features/cart/cartSlice';
import { useState } from 'react';
import { Star } from 'lucide-react';

type Props = {
  product: Product;
};
type CartItem = Product & { quantity: number };

export default function ProductDetail({ product }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!product.inStock) return;

    if (quantity > (product.maxQty ?? 1)) {
      alert(`Максимальное количество для покупки: ${product.maxQty}`);
      return;
    }

    dispatch(addToCart({ ...product, quantity } as CartItem));
  };

  const increment = () => {
    if (quantity < (product.maxQty ?? 1)) {
      setQuantity(quantity + 1);
    } else {
      alert(`Вы не можете заказать больше ${product.maxQty} шт.`);
    }
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const buttonClasses = product.inStock
    ? 'bg-blue-600 hover:bg-blue-700'
    : 'bg-gray-400 cursor-not-allowed';

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover rounded"
        />

        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.details || product.description}</p>
          <p className="text-lg font-semibold text-blue-600">{product.price} ₸</p>

          <div className="text-sm text-gray-600 space-y-1">
            <p>Категория: {product.category}</p>
            <p>
              Статус:{' '}
              <span className={product.inStock ? 'text-green-600' : 'text-red-500'}>
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
              </span>
            </p>
            <p>Максимум к заказу: {product.maxQty ?? 1} шт.</p>
            <p className="flex items-center gap-1">
              Рейтинг: {product.rating ?? '—'}{' '}
              {product.rating && (
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
              )}
            </p>
          </div>

          {product.inStock && (
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={decrement}
                className="bg-gray-200 px-3 py-1 rounded text-lg"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={increment}
                className="bg-gray-200 px-3 py-1 rounded text-lg"
              >
                +
              </button>
            </div>
          )}

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`${buttonClasses} text-white px-5 py-2 rounded mt-4 transition`}
          >
            В корзину
          </button>
        </div>
      </div>

      {product.features && product.features.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Характеристики</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {product.reviews && product.reviews.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Отзывы</h2>
          <div className="space-y-2">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="border p-3 rounded bg-gray-50">
                <p className="font-medium">{review.user}</p>
                <p className="text-sm text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}