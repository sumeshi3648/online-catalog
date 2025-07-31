'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const categories = ['Квартиры', 'Паркинг', 'Ремонт'];

export default function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [inStockOnly, setInStockOnly] = useState(searchParams.get('inStock') === 'true');

  const resetFilters = () => {
    setSelectedCategory('');
    setMinPrice('');
    setMaxPrice('');
    setInStockOnly(false);
    router.push('/');
  };

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategory) params.set('category', selectedCategory);
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (inStockOnly) params.set('inStock', 'true');

    router.push(`/?${params.toString()}`);
  }, [selectedCategory, minPrice, maxPrice, inStockOnly, router]);

  return (
    <div className="bg-white p-4 rounded shadow mb-6 space-y-4">
      {/*categories*/}
      <div>
        <h2 className="text-lg font-semibold mb-2">Категории</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded border ${
                selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/*price range*/}
      <div>
        <h2 className="text-lg font-semibold mb-2">Цена</h2>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="Мин"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border p-1 rounded w-24"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Макс"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border p-1 rounded w-24"
          />
        </div>
      </div>

      {/*наличие/out of stock*/}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={() => setInStockOnly(!inStockOnly)}
          id="inStock"
        />
        <label htmlFor="inStock">Только в наличии</label>
      </div>

      {/*сбросить фильры*/}
      <div>
        <button
          onClick={resetFilters}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Сбросить все фильтры
        </button>
      </div>
    </div>
  );
}
