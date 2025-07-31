'use client';

import ProductCard from './ProductCard';
import { useSearchParams } from 'next/navigation';
import FilterPanel from './FilterPanel';

import { useGetProductsQuery } from '@/services/api';
import { toast } from 'react-toastify';

import { useState } from 'react';


export default function ProductList() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const minPrice = parseFloat(searchParams.get('minPrice') || '0');
  const maxPrice = parseFloat(searchParams.get('maxPrice') || '99000000');
  const inStock = searchParams.get('inStock') === 'true';

  const [limit, setLimit] = useState(5); //choose 5, 10 or 20
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const { data: products, isLoading, error } = useGetProductsQuery({ limit, offset });

  if (isLoading) return <div>Загрузка товаров</div>;
  if (error) {
    toast.error('Ощибка загрузки товаров');
    return <div>не удалось загрузить товары</div>
  }

  const filteredProducts = (products || []).filter((product) => {
    const matchCategory = category ? product.category === category : true;
    const matchMin = isNaN(minPrice) || product.price >= minPrice;
    const matchMax = isNaN(maxPrice) || product.price <= maxPrice;
    const matchStock = inStock ? product.inStock === true : true;
    return matchCategory && matchMin && matchMax && matchStock;
  });

  return (
    <div>
      <FilterPanel />
      {/*choose how many products are shown*/}
      <div className="mb-4">
        <label className="text-sm text-gray-700">
          Показывать по:{' '}
          <select
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setPage(1);
            }}
            className="ml-2 px-2 py-1 border border-gray-300 rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500">Нет товаров, соответствующих фильтру.</p>
        )}
      </div>
    </div>
  );
}
