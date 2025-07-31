'use client';

import ProductCard from './ProductCard';
import { useSearchParams } from 'next/navigation';
import FilterPanel from './FilterPanel';

import { useGetProductsQuery } from '@/services/api';
import { toast } from 'react-toastify';


export default function ProductList() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const minPrice = parseFloat(searchParams.get('minPrice') || '0');
  const maxPrice = parseFloat(searchParams.get('maxPrice') || '10000000');
  const inStock = searchParams.get('inStock') === 'true';

  const { data: products, isLoading, error } = useGetProductsQuery();
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
