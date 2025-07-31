//shows a listr of all products by getting them from  redux
'use client';

import { useDispatch, useSelector } from 'react-redux';
//useDispatch - returns dispatch() that allows to send actions into redux, this calls reducers(methods)
//useSelector - gets data from redux-store
import { RootState, AppDispatch } from '@/store/store'; //were described in store ts
import CartItem from './CartItem';
import { clearCart } from '@/features/cart/cartSlice';

export default function Cart() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  //count total price
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return <p>Корзина пуста.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Ваша корзина</h2>
        <div className="space-y-3">
            {items.map((item) => (
            <CartItem key={item.id} product={item} />
            ))}
        </div>
        <div className="flex items-center justify-between mt-6">
            <p className="text-xl font-semibold">Итого: {total} ₸</p>
            <button
                onClick={() => dispatch(clearCart())}
                className="text-red-500 hover:underline"
            >
                Очистить корзину
            </button>
        </div>
    </div>
  );
}
