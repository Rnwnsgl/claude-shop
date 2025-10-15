'use client';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  cartAtom,
  cartTotalAtom,
  updateCartItemAtom,
  removeFromCartAtom,
  clearCartAtom,
} from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ChevronLeft } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { CATEGORY_NAMES } from '@/constants/products';

export default function CartPage() {
  const [cart, setCart] = useAtom(cartAtom);
  const cartTotal = useAtomValue(cartTotalAtom);
  const updateCartItem = useSetAtom(updateCartItemAtom);
  const removeFromCart = useSetAtom(removeFromCartAtom);
  const clearCart = useSetAtom(clearCartAtom);

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 1) return;
    updateCartItem({
      id: item.id,
      options: item.options,
      quantity: newQuantity,
    });
  };

  const handleRemoveItem = (item) => {
    removeFromCart({
      id: item.id,
      options: item.options,
    });
  };

  const deliveryFee = cartTotal > 50000 ? 0 : 3000;
  const finalTotal = cartTotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">장바구니가 비어있습니다</h2>
            <p className="text-gray-600 mb-6">
              원하는 상품을 장바구니에 담아보세요
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
            href="/products"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            상품 둘러보기
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">장바구니</h1>
            <button
              onClick={clearCart}
              className="text-sm text-gray-600 hover:text-red-500 transition-colors"
            >
              전체 삭제
            </button>
          </div>
          <p className="text-gray-600 mt-2">총 {cart.length}개의 상품</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* 장바구니 아이템 목록 */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${JSON.stringify(item.options)}-${index}`}
                className="bg-white rounded-lg shadow-md p-4 md:p-6"
              >
                <div className="flex gap-4">
                  {/* 상품 이미지 */}
                  <Link
                    href={`/products/${item.id}`}
                    className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg overflow-hidden"
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                  </Link>

                  {/* 상품 정보 */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">
                          {CATEGORY_NAMES[item.category] || item.category}
                        </p>
                        <Link href={`/products/${item.id}`}>
                          <h3 className="font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        {/* 옵션 정보 */}
                        {Object.keys(item.options).length > 0 && (
                          <div className="mt-2 text-sm text-gray-600">
                            {item.options.flavor && (
                              <p>맛: {item.options.flavor}</p>
                            )}
                            {item.options.nicotine && (
                              <p>니코틴: {item.options.nicotine}</p>
                            )}
                            {item.options.resistance && (
                              <p>저항: {item.options.resistance}</p>
                            )}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="text-gray-400 hover:text-red-500 transition-colors h-fit"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      {/* 수량 조절 */}
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() =>
                            handleQuantityChange(item, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 min-w-[60px] text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item, item.quantity + 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* 가격 */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        <p className="text-sm text-gray-500">
                          개당 {formatPrice(item.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 주문 요약 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">주문 요약</h2>

              <div className="space-y-3 mb-4 pb-4 border-b">
                <div className="flex justify-between text-gray-600">
                  <span>상품 금액</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>배송비</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-green-600 font-medium">무료</span>
                    ) : (
                      formatPrice(deliveryFee)
                    )}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-sm text-gray-500">
                    {formatPrice(50000 - cartTotal)} 더 구매시 무료배송
                  </p>
                )}
              </div>

              <div className="flex justify-between text-lg font-bold mb-6">
                <span>총 결제금액</span>
                <span className="text-blue-600">{formatPrice(finalTotal)}</span>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-3">
                주문하기
              </button>

              <Link
                href="/products"
                className="block w-full text-center py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-900 hover:bg-gray-50 transition-colors"
              >
                상품 둘러보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
