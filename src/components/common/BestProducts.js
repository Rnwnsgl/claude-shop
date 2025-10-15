'use client';

import ProductCard from '@/components/product/ProductCard';
import { allProducts } from '@/constants/products';

// 베스트 상품 4개 (재고가 많은 순)
const bestProducts = allProducts
  .sort((a, b) => (b.stock || 0) - (a.stock || 0))
  .slice(0, 4);

export default function BestProducts() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">베스트 상품</h2>
          <p className="text-gray-600">가장 인기있는 상품을 만나보세요</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
