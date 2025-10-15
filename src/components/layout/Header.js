'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAtomValue, useSetAtom } from 'jotai';
import { ShoppingCart, Heart, User, Menu, Search } from 'lucide-react';
import {
  cartCountAtom,
  wishlistCountAtom,
  isLoggedInAtom,
  addRecentSearchAtom,
} from '@/store';
import { cn } from '@/lib/utils';
import SearchDropdown from '@/components/common/SearchDropdown';

export default function Header() {
  const router = useRouter();
  const cartCount = useAtomValue(cartCountAtom);
  const wishlistCount = useAtomValue(wishlistCountAtom);
  const isLoggedIn = useAtomValue(isLoggedInAtom);
  const addRecentSearch = useSetAtom(addRecentSearchAtom);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  // 검색 실행 함수
  const executeSearch = (query) => {
    if (query.trim()) {
      addRecentSearch(query.trim());
      router.push(`/products?search=${encodeURIComponent(query.trim())}`);
      setSearchQuery('');
      setShowDropdown(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    executeSearch(searchQuery);
  };

  const handleSearchClick = () => {
    executeSearch(searchQuery);
  };

  const handleSelectKeyword = (keyword) => {
    executeSearch(keyword);
  };

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* 상단 알림 바 */}
      <div className="bg-black text-white text-center py-2 text-sm">
        <p>신규회원 첫 구매 10% 할인!</p>
      </div>

      {/* 메인 헤더 */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gray-900">
              클로드 전자담배샵
            </div>
          </Link>

          {/* 검색바 (데스크탑) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="상품을 검색하세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowDropdown(true)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="button"
                onClick={handleSearchClick}
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:text-gray-600 transition-colors"
              >
                <Search className="w-5 h-5 text-gray-400" />
              </button>
              {showDropdown && <SearchDropdown onSelectKeyword={handleSelectKeyword} />}
            </form>
          </div>

          {/* 우측 아이콘 메뉴 */}
          <div className="flex items-center space-x-6">
            {/* 위시리스트 */}
            <Link
              href="/mypage/wishlist"
              className="relative hover:text-gray-600 transition-colors"
            >
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* 장바구니 */}
            <Link
              href="/cart"
              className="relative hover:text-gray-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* 마이페이지/로그인 */}
            <Link
              href={isLoggedIn ? '/mypage' : '/login'}
              className="hover:text-gray-600 transition-colors"
            >
              <User className="w-6 h-6" />
            </Link>

            {/* 모바일 메뉴 */}
            <button className="md:hidden hover:text-gray-600 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="hidden md:flex items-center space-x-8 py-4 border-t">
          <Link
            href="/products?category=sale"
            className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors"
          >
            할인상품
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
          >
            전체상품
          </Link>
          <Link
            href="/products?category=liquid"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            액상
          </Link>
          <Link
            href="/products?category=device"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            기기
          </Link>
          <Link
            href="/products?category=coil"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            코일
          </Link>
          <Link
            href="/products?category=accessory"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            액세서리
          </Link>
          <Link
            href="/support"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            고객 지원
          </Link>
        </nav>
      </div>

      {/* 모바일 검색바 */}
      <div className="md:hidden px-4 pb-4" ref={mobileSearchRef}>
        <form onSubmit={handleSearch} className="relative w-full">
          <input
            type="text"
            placeholder="상품을 검색하세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowDropdown(true)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="button"
            onClick={handleSearchClick}
            className="absolute right-2 top-1/2 -translate-y-1/2 hover:text-gray-600 transition-colors"
          >
            <Search className="w-5 h-5 text-gray-400" />
          </button>
          {showDropdown && <SearchDropdown onSelectKeyword={handleSelectKeyword} />}
        </form>
      </div>
    </header>
  );
}
