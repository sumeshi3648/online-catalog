'use client';

import { useGetProductsQuery } from '@/services/api';
import ProductDetail from '@/components/product/ProductDetail';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const { id } = useParams();
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div className="text-center py-10">Загрузка товара...</div>;
  if (error) return <div className="text-center text-red-500 py-10">Ошибка загрузки товара</div>;

  const product = products?.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center text-red-500 py-10">Товар не найден</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <ProductDetail product={product} />
    </div>
  );
}
