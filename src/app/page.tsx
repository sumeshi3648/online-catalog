import ProductList from '@/components/product/ProductList';

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Каталог товаров</h1>
      <ProductList />
    </main>
  );
}