'use client';

import { useAtom, useSetAtom } from 'jotai';
import {
  wishlistAtom,
  removeFromWishlistAtom,
  clearWishlistAtom,
  addToCartAtom,
} from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Trash2, ChevronLeft } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { CATEGORY_NAMES } from '@/constants/products';

export default function WishlistPage() {
  const [wishlist, setWishlist] = useAtom(wishlistAtom);
  const removeFromWishlist = useSetAtom(removeFromWishlistAtom);
  const clearWishlist = useSetAtom(clearWishlistAtom);
  const addToCart = useSetAtom(addToCartAtom);

  const handleRemove = (productId) => {
    removeFromWishlist(productId);
  };

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
      category: item.category,
      options: {},
    });
  };

  const handleAddAllToCart = () => {
    wishlist.forEach((item) => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
        category: item.category,
        options: {},
      });
    });
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Heart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">위시리스트가 비어있습니다</h2>
            <p className="text-gray-600 mb-6">
              관심있는 상품을 위시리스트에 추가해보세요
            </p>
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              상품 둘러보기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            홈으로 돌아가기
          </Link>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold">위시리스트</h1>
            <div className="flex gap-2">
              <button
                onClick={handleAddAllToCart}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                전체 담기
              </button>
              <button
                onClick={clearWishlist}
                className="px-4 py-2 text-gray-600 hover:text-red-500 transition-colors text-sm"
              >
                전체 삭제
              </button>
            </div>
          </div>
          <p className="text-gray-600">총 {wishlist.length}개의 상품</p>
        </div>

        {/* 위시리스트 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* 상품 이미지 */}
              <Link
                href={`/products/${item.id}`}
                className="block relative aspect-square bg-gray-100"
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}

                {/* 삭제 버튼 */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemove(item.id);
                  }}
                  className="absolute top-2 right-2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                  aria-label="위시리스트에서 제거"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </Link>

              {/* 상품 정보 */}
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">
                  {CATEGORY_NAMES[item.category] || item.category}
                </p>
                <Link href={`/products/${item.id}`}>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-gray-600 transition-colors min-h-[3rem]">
                    {item.name}
                  </h3>
                </Link>

                <p className="text-lg font-bold text-gray-900 mb-3">
                  {formatPrice(item.price)}
                </p>

                {/* 장바구니 담기 버튼 */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>장바구니</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 추가 안내 */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg mb-2">위시리스트 안내</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 관심있는 상품을 저장하고 나중에 확인할 수 있습니다</li>
            <li>• 위시리스트는 브라우저에 저장되며 로그인 없이 사용 가능합니다</li>
            <li>• 하트 아이콘을 클릭하여 언제든지 추가/제거할 수 있습니다</li>
            <li>
              • 상품 가격이 변동될 수 있으니 구매 전 최신 정보를 확인하세요
            </li>
          </ul>
        </div>

        {/* 쇼핑 계속하기 버튼 */}
        <div className="mt-6 text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors font-semibold"
          >
            더 많은 상품 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
