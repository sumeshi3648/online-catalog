'use client';

import { useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/services/api';
import ProductDetail from '@/components/product/ProductDetail';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function ProductPage() {
  const params = useParams();
  const id = Number(params.id);

  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  useEffect(() => {
    if (error) {
      toast.error('Ошибка при загрузке товара');
    }
  }, [error]);

  useEffect(() => {
  }, [product]);

  if (isLoading) {
    return <div className="text-center py-10">Загрузка...</div>;
  }

  if (error || !product) {
    toast.error('Ошибка при загрузке товара');
    return <div className="text-center text-red-500 py-10">Товар не найден</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
  );
}
