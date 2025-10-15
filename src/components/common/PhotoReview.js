'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

// 임시 포토리뷰 데이터
const reviews = [
  {
    id: 1,
    author: '김**',
    product: '프리미엄 망고 액상',
    rating: 5,
    content: '맛이 정말 좋아요! 재구매 의사 100%',
    image: null,
    date: '2024.01.15',
  },
  {
    id: 2,
    author: '이**',
    product: 'VAPE PRO X',
    rating: 5,
    content: '디자인도 예쁘고 성능도 만족스럽습니다',
    image: null,
    date: '2024.01.14',
  },
  {
    id: 3,
    author: '박**',
    product: '메쉬 코일',
    rating: 4,
    content: '가성비 좋네요. 맛도 깔끔하고',
    image: null,
    date: '2024.01.13',
  },
  {
    id: 4,
    author: '최**',
    product: '휴대용 케이스',
    rating: 5,
    content: '품질이 생각보다 훨씬 좋습니다',
    image: null,
    date: '2024.01.12',
  },
];

export default function PhotoReview() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">포토 리뷰</h2>
          <p className="text-gray-600">고객님들의 생생한 후기를 확인하세요</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* 리뷰 이미지 */}
              <div className="relative aspect-square bg-gray-100">
                {review.image ? (
                  <Image
                    src={review.image}
                    alt={`${review.author}님의 리뷰`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <Star className="w-12 h-12 mx-auto mb-2 fill-yellow-400 text-yellow-400" />
                      <p className="text-sm">포토 리뷰</p>
                    </div>
                  </div>
                )}
              </div>

              {/* 리뷰 내용 */}
              <div className="p-4">
                {/* 별점 */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* 상품명 */}
                <p className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">
                  {review.product}
                </p>

                {/* 리뷰 내용 */}
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {review.content}
                </p>

                {/* 작성자 및 날짜 */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 더보기 버튼 */}
        <div className="text-center mt-8">
          <Link href="/reviews">
            <button className="px-8 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors font-semibold">
              리뷰 더보기
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
