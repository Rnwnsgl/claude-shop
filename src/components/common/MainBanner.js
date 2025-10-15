'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: '신규 회원 가입 시 10% 할인',
    description: '첫 구매 고객님께 특별한 혜택을 드립니다',
    bgColor: 'bg-gradient-to-r from-blue-600 to-blue-800',
    image: '/images/banner1.jpg',
  },
  {
    id: 2,
    title: '인기 액상 특가 세일',
    description: '베스트셀러 액상 최대 30% 할인',
    bgColor: 'bg-gradient-to-r from-purple-600 to-purple-800',
    image: '/images/banner2.jpg',
  },
  {
    id: 3,
    title: '프리미엄 전자담배 기기',
    description: '최신 모델 출시 기념 이벤트',
    bgColor: 'bg-gradient-to-r from-gray-700 to-gray-900',
    image: '/images/banner3.jpg',
  },
];

export default function MainBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* 배너 슬라이드 */}
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={`min-w-full h-full ${banner.bgColor} flex items-center justify-center`}
          >
            <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                {banner.title}
              </h2>
              <p className="text-lg md:text-2xl opacity-90">
                {banner.description}
              </p>
              <button className="mt-8 bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                자세히 보기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 이전/다음 버튼 */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
        aria-label="이전 배너"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
        aria-label="다음 배너"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`${index + 1}번 배너로 이동`}
          />
        ))}
      </div>
    </div>
  );
}
