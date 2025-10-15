'use client';

import { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useSetAtom, useAtomValue } from 'jotai';
import {
  ShoppingCart,
  Heart,
  ChevronLeft,
  Minus,
  Plus,
  Star,
  Truck,
  RefreshCw,
  Shield,
} from 'lucide-react';
import {
  addToCartAtom,
  toggleWishlistAtom,
  wishlistAtom,
} from '@/store';
import { allProducts, CATEGORY_NAMES } from '@/constants/products';
import { formatPrice } from '@/lib/utils';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id;

  const addToCart = useSetAtom(addToCartAtom);
  const toggleWishlist = useSetAtom(toggleWishlistAtom);
  const wishlist = useAtomValue(wishlistAtom);

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [activeTab, setActiveTab] = useState('detail'); // 'detail', 'review', 'qna'

  // 상품 찾기
  const product = useMemo(() => {
    return allProducts.find((p) => p.id === productId);
  }, [productId]);

  const isInWishlist = wishlist.some((item) => item.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">상품을 찾을 수 없습니다</h2>
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            상품 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
      category: product.category,
      options: selectedOptions,
    });
    alert('장바구니에 추가되었습니다.');
  };

  const handleToggleWishlist = () => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
      category: product.category,
      options: selectedOptions,
    });
    router.push('/cart');
  };

  const totalPrice = product.price * quantity;
  const deliveryFee = totalPrice >= 50000 ? 0 : 3000;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 뒤로가기 */}
        <Link
          href="/products"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          목록으로
        </Link>

        {/* 상단 섹션: 상품 정보 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* 좌측: 상품 이미지 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative aspect-square bg-gray-100">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                  {product.discount}% OFF
                </div>
              )}
            </div>
          </div>

          {/* 우측: 상품 정보 및 구매 옵션 */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8 h-fit lg:sticky lg:top-24">
            {/* 카테고리 */}
            <p className="text-sm text-gray-500 mb-2">
              {CATEGORY_NAMES[product.category]}
            </p>

            {/* 상품명 */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* 평점 (임시) */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">(4.8)</span>
            </div>

            {/* 가격 */}
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              {product.discount ? (
                <>
                  <p className="text-lg text-gray-400 line-through mb-2">
                    {formatPrice(product.originalPrice)}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-xl font-bold text-red-500">
                      {product.discount}%
                    </span>
                  </div>
                </>
              ) : (
                <p className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </p>
              )}
            </div>

            {/* 배송 정보 */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">배송비</p>
                  <p className="text-sm text-gray-600">
                    {formatPrice(3000)} (50,000원 이상 무료배송)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    교환/반품
                  </p>
                  <p className="text-sm text-gray-600">
                    수령 후 7일 이내 가능
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">정품보장</p>
                  <p className="text-sm text-gray-600">
                    100% 정품만 판매합니다
                  </p>
                </div>
              </div>
            </div>

            {/* 수량 선택 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-3">
                수량
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="p-3 hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="px-6 py-3 min-w-[80px] text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 총 가격 */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">상품금액</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">배송비</span>
                <span className="font-medium">
                  {deliveryFee === 0 ? (
                    <span className="text-green-600">무료</span>
                  ) : (
                    formatPrice(deliveryFee)
                  )}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between items-center">
                <span className="text-lg font-bold">총 결제금액</span>
                <span className="text-2xl font-bold text-blue-600">
                  {formatPrice(totalPrice + deliveryFee)}
                </span>
              </div>
            </div>

            {/* 구매 버튼들 */}
            <div className="space-y-3">
              <button
                onClick={handleBuyNow}
                className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                바로 구매
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  장바구니
                </button>
                <button
                  onClick={handleToggleWishlist}
                  className={`flex items-center justify-center gap-2 py-3 border-2 rounded-lg font-semibold transition-colors ${
                    isInWishlist
                      ? 'border-red-500 bg-red-50 text-red-600 hover:bg-red-100'
                      : 'border-gray-300 hover:border-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isInWishlist ? 'fill-red-500 text-red-500' : ''
                    }`}
                  />
                  위시리스트
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 섹션: 탭 메뉴 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* 탭 헤더 */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('detail')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'detail'
                    ? 'border-b-2 border-black text-black'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                상세정보
              </button>
              <button
                onClick={() => setActiveTab('review')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'review'
                    ? 'border-b-2 border-black text-black'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                고객후기
              </button>
              <button
                onClick={() => setActiveTab('qna')}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === 'qna'
                    ? 'border-b-2 border-black text-black'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                상품문의
              </button>
            </div>
          </div>

          {/* 탭 컨텐츠 */}
          <div className="p-6 lg:p-8">
            {/* 상세정보 탭 */}
            {activeTab === 'detail' && (
              <div className="space-y-6">
                {/* 상세 이미지들 (스크롤) */}
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className="relative w-full bg-gray-100 overflow-hidden"
                      style={{ minHeight: '600px' }}
                    >
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={`${product.name} 상세 이미지 ${num}`}
                          width={1200}
                          height={1600}
                          className="w-full h-auto"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <div className="text-center">
                            <p className="text-lg font-medium">
                              상세 이미지 {num}
                            </p>
                            <p className="text-sm mt-2">
                              제품 상세 설명 이미지 영역
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* 제품 정보 테이블 */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold mb-4">제품 정보</h3>
                  <table className="w-full border-t border-b border-gray-200">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 bg-gray-50 font-medium text-gray-700 w-1/4">
                          제품명
                        </td>
                        <td className="py-3 px-4">{product.name}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 bg-gray-50 font-medium text-gray-700">
                          카테고리
                        </td>
                        <td className="py-3 px-4">
                          {CATEGORY_NAMES[product.category]}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 bg-gray-50 font-medium text-gray-700">
                          가격
                        </td>
                        <td className="py-3 px-4 font-bold">
                          {formatPrice(product.price)}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 bg-gray-50 font-medium text-gray-700">
                          제조사
                        </td>
                        <td className="py-3 px-4">프리미엄 전자담배</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 bg-gray-50 font-medium text-gray-700">
                          원산지
                        </td>
                        <td className="py-3 px-4">대한민국</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 주의사항 */}
                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-yellow-900 mb-3">
                    ⚠️ 주의사항
                  </h4>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• 만 19세 미만 구매 및 사용 금지</li>
                    <li>• 임산부 및 수유부 사용 금지</li>
                    <li>• 직사광선을 피해 서늘한 곳에 보관하세요</li>
                    <li>• 어린이의 손이 닿지 않는 곳에 보관하세요</li>
                    <li>• 제품 사용 시 화재 및 화상 위험이 있으니 주의하세요</li>
                  </ul>
                </div>
              </div>
            )}

            {/* 고객후기 탭 */}
            {activeTab === 'review' && (
              <div className="min-h-[400px]">
                <div className="text-center py-12">
                  <Star className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    아직 등록된 후기가 없습니다
                  </h3>
                  <p className="text-gray-600">
                    이 상품의 첫 번째 리뷰를 작성해주세요!
                  </p>
                </div>
              </div>
            )}

            {/* 상품문의 탭 */}
            {activeTab === 'qna' && (
              <div className="min-h-[400px]">
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    상품에 대해 궁금한 점을 물어보세요
                  </h3>
                  <p className="text-gray-600 mb-6">
                    상품 관련 문의사항을 남겨주시면 빠르게 답변드리겠습니다.
                  </p>
                  <Link
                    href="/support?tab=inquiry"
                    className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    문의하기
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
