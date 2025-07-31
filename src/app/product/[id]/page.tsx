import ProductDetail from '@/components/product/ProductDetail';
import { mockProducts } from '@/utils/mockProducts';

type Params = {
  params: { id: string };
};

export default function ProductPage({ params }: Params) {
  const product = mockProducts.find((p) => p.id === Number(params.id));

  if (!product) {
    return <div className="text-center text-red-500 py-10">Товар не найден</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <ProductDetail product={product} />
    </div>
  );
}
