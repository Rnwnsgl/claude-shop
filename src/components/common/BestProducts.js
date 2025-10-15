'use client';

import ProductCard from '@/components/product/ProductCard';

// 임시 베스트 상품 데이터
const bestProducts = [
  {
    id: 1,
    name: '프리미엄 망고 액상 60ml',
    category: '액상',
    price: 25000,
    originalPrice: 30000,
    discount: 17,
    image: null,
  },
  {
    id: 2,
    name: 'VAPE PRO X 전자담배 기기',
    category: '기기',
    price: 89000,
    image: null,
  },
  {
    id: 3,
    name: '메쉬 코일 5개입',
    category: '코일',
    price: 15000,
    originalPrice: 20000,
    discount: 25,
    image: null,
  },
  {
    id: 4,
    name: '휴대용 케이스 세트',
    category: '액세서리',
    price: 12000,
    image: null,
  },
];

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
