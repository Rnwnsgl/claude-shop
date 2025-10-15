'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/product/ProductCard';
import Pagination from '@/components/common/Pagination';
import {
  allProducts,
  liquidProducts,
  deviceProducts,
  coilProducts,
  accessoryProducts,
  saleProducts,
  CATEGORIES,
  CATEGORY_NAMES,
} from '@/constants/products';
import { ChevronDown } from 'lucide-react';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || CATEGORIES.ALL;
  const searchQuery = searchParams.get('search') || '';
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // 카테고리별 상품 필터링
  const filteredProducts = useMemo(() => {
    let products = [];

    // 카테고리 필터링
    switch (category) {
      case CATEGORIES.LIQUID:
        products = liquidProducts;
        break;
      case CATEGORIES.DEVICE:
        products = deviceProducts;
        break;
      case CATEGORIES.COIL:
        products = coilProducts;
        break;
      case CATEGORIES.ACCESSORY:
        products = accessoryProducts;
        break;
      case CATEGORIES.SALE:
        products = saleProducts;
        break;
      default:
        products = allProducts;
    }

    // 검색어 필터링
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query) ||
          CATEGORY_NAMES[product.category]?.toLowerCase().includes(query)
      );
    }

    return products;
  }, [category, searchQuery]);

  // 카테고리/검색어 변경 시 첫 페이지로 이동
  useEffect(() => {
    setCurrentPage(1);
  }, [category, searchQuery, sortBy]);

  // 정렬
  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];
    switch (sortBy) {
      case 'latest':
        return products;
      case 'priceHigh':
        return products.sort((a, b) => b.price - a.price);
      case 'priceLow':
        return products.sort((a, b) => a.price - b.price);
      case 'popular':
        return products.sort((a, b) => (b.stock || 0) - (a.stock || 0));
      default:
        return products;
    }
  }, [filteredProducts, sortBy]);

  // 페이지네이션
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 페이지 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {searchQuery
              ? `"${searchQuery}" 검색 결과`
              : CATEGORY_NAMES[category]}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 flex items-center">
              총 <span className="font-bold ml-1">{sortedProducts.length}</span>개
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">정렬:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                >
                  <option value="latest">최신순</option>
                  <option value="popular">인기순</option>
                  <option value="priceLow">낮은 가격순</option>
                  <option value="priceHigh">높은 가격순</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* 상품 그리드 */}
        {currentProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* 페이지네이션 */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              maxVisiblePages={5}
            />
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              {searchQuery
                ? `"${searchQuery}"에 대한 검색 결과가 없습니다.`
                : '상품이 없습니다.'}
            </p>
            {searchQuery && (
              <p className="text-gray-400 text-sm mt-2">
                다른 검색어로 다시 시도해보세요.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
