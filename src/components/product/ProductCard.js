'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart } from 'lucide-react';
import { useSetAtom, useAtomValue } from 'jotai';
import { addToCartAtom, toggleWishlistAtom, wishlistAtom } from '@/store';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }) {
  const addToCart = useSetAtom(addToCartAtom);
  const toggleWishlist = useSetAtom(toggleWishlistAtom);
  const wishlist = useAtomValue(wishlistAtom);

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category,
      options: {},
    });
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* 상품 이미지 */}
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}

          {/* 할인 배지 */}
          {product.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
              {product.discount}% OFF
            </div>
          )}

          {/* 위시리스트 버튼 */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-2 right-2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors"
            aria-label="위시리스트"
          >
            <Heart
              className={`w-5 h-5 ${
                isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`}
            />
          </button>
        </div>

        {/* 상품 정보 */}
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center justify-between mb-3">
            <div>
              {product.discount ? (
                <>
                  <p className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </p>
                </>
              ) : (
                <p className="text-lg font-bold text-gray-900">
                  {formatPrice(product.price)}
                </p>
              )}
            </div>
          </div>

          {/* 장바구니 버튼 */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>장바구니</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
