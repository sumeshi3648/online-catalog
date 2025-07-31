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
    <div>
      <h2>Ваша корзина</h2>
      <div >
        {items.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <div>
        <p>Итого: {total} ₸</p>
        <button
          onClick={() => dispatch(clearCart())}
        >
          Очистить корзину
        </button>
      </div>
    </div>
  );
}
