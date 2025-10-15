'use client';

import Image from 'next/image';
import { Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { allReviews } from '@/constants/reviews';

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
