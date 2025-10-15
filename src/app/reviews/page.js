'use client';

import Image from 'next/image';
import { Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

// 임시 포토리뷰 데이터 (더 많은 리뷰)
const allReviews = [
  {
    id: 1,
    author: '김**',
    product: '프리미엄 망고 액상',
    rating: 5,
    content: '맛이 정말 좋아요! 재구매 의사 100%입니다. 향도 진하고 오래가서 만족스럽습니다.',
    image: null,
    date: '2024.01.15',
  },
  {
    id: 2,
    author: '이**',
    product: 'VAPE PRO X',
    rating: 5,
    content: '디자인도 예쁘고 성능도 만족스럽습니다. 배터리 용량도 충분해요.',
    image: null,
    date: '2024.01.14',
  },
  {
    id: 3,
    author: '박**',
    product: '메쉬 코일',
    rating: 4,
    content: '가성비 좋네요. 맛도 깔끔하고 연기량도 적당합니다.',
    image: null,
    date: '2024.01.13',
  },
  {
    id: 4,
    author: '최**',
    product: '휴대용 케이스',
    rating: 5,
    content: '품질이 생각보다 훨씬 좋습니다. 튼튼하고 디자인도 심플해요.',
    image: null,
    date: '2024.01.12',
  },
  {
    id: 5,
    author: '정**',
    product: '딸기 요거트 액상',
    rating: 5,
    content: '달콤하고 상큼한 맛이 일품입니다. 강추!',
    image: null,
    date: '2024.01.11',
  },
  {
    id: 6,
    author: '강**',
    product: 'VAPE MINI',
    rating: 4,
    content: '휴대하기 좋고 가볍습니다. 입문용으로 추천해요.',
    image: null,
    date: '2024.01.10',
  },
  {
    id: 7,
    author: '윤**',
    product: '멘솔 액상',
    rating: 5,
    content: '청량감이 끝내줍니다. 여름에 특히 좋을 것 같아요.',
    image: null,
    date: '2024.01.09',
  },
  {
    id: 8,
    author: '조**',
    product: '세라믹 코일 팩',
    rating: 4,
    content: '내구성이 좋고 맛도 깔끔합니다.',
    image: null,
    date: '2024.01.08',
  },
  {
    id: 9,
    author: '임**',
    product: '블루베리 액상',
    rating: 5,
    content: '자연스러운 블루베리 향이 좋아요. 재구매 예정입니다.',
    image: null,
    date: '2024.01.07',
  },
  {
    id: 10,
    author: '한**',
    product: 'VAPE PREMIUM',
    rating: 5,
    content: '고급스러운 디자인과 뛰어난 성능. 가격대비 만족스럽습니다.',
    image: null,
    date: '2024.01.06',
  },
  {
    id: 11,
    author: '오**',
    product: '청포도 액상',
    rating: 4,
    content: '은은한 청포도 향이 매력적입니다.',
    image: null,
    date: '2024.01.05',
  },
  {
    id: 12,
    author: '서**',
    product: '충전 케이블',
    rating: 5,
    content: '충전 속도가 빠르고 내구성도 좋습니다.',
    image: null,
    date: '2024.01.04',
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            홈으로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold mb-2">포토 리뷰</h1>
          <p className="text-gray-600">
            고객님들의 생생한 후기 {allReviews.length}개
          </p>
        </div>
      </div>

      {/* 리뷰 목록 */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {allReviews.map((review) => (
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

        {/* 페이지네이션 (추후 구현 가능) */}
        <div className="mt-12 flex justify-center">
          <div className="text-gray-500 text-sm">
            총 {allReviews.length}개의 리뷰
          </div>
        </div>
      </div>
    </div>
  );
}
