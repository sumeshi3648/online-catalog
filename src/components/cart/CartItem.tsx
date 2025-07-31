'use client';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { updateQuantity, removeFromCart } from '@/features/cart/cartSlice';
import { Product } from '@/types/product';

type Props = {
  product: Product & { quantity: number };
};

export default function CartItem({ product }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const qty = parseInt(e.target.value);
    if (qty > 0) {
      dispatch(updateQuantity({ id: product.id, quantity: qty }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="flex items-center justify-between py-3 border-b">
        <div className="flex items-center gap-4">
            <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
            />
            <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price} ₸</p>
            </div>
      </div>
      <div className="flex items-center gap-2">
        <input
            type="number"
            value={product.quantity}
            onChange={handleChange}
            className="w-16 text-center border rounded p-1"
            min={1}
        />
        <button
            onClick={handleRemove}
            className="text-red-500 hover:underline text-sm"
        >
            Удалить
        </button>
      </div>
    </div>
  );
}
