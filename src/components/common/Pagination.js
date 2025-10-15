'use client';

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}) {
  // 페이지 번호 범위 계산
  const getPageNumbers = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // 끝 페이지가 totalPages에 가까울 때 시작 페이지 조정
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* 첫 페이지로 */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
        aria-label="첫 페이지"
      >
        <ChevronsLeft className="w-5 h-5" />
      </button>

      {/* 이전 페이지 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
        aria-label="이전 페이지"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* 페이지 번호들 */}
      <div className="flex items-center gap-1">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`min-w-[40px] h-10 px-3 rounded-lg font-medium transition-colors ${
              currentPage === pageNumber
                ? 'bg-black text-white'
                : 'border border-gray-300 hover:bg-gray-100'
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      {/* 다음 페이지 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
        aria-label="다음 페이지"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* 마지막 페이지로 */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
        aria-label="마지막 페이지"
      >
        <ChevronsRight className="w-5 h-5" />
      </button>
    </div>
  );
}
