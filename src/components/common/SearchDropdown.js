'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import {
  recentSearchesAtom,
  removeRecentSearchAtom,
  clearRecentSearchesAtom,
  recommendedKeywords,
} from '@/store';
import { Clock, X, TrendingUp } from 'lucide-react';

export default function SearchDropdown({ onSelectKeyword }) {
  const recentSearches = useAtomValue(recentSearchesAtom);
  const removeRecentSearch = useSetAtom(removeRecentSearchAtom);
  const clearRecentSearches = useSetAtom(clearRecentSearchesAtom);

  const handleRemoveRecent = (e, keyword) => {
    e.stopPropagation();
    removeRecentSearch(keyword);
  };

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
      {/* 최근 검색어 */}
      {recentSearches.length > 0 && (
        <div className="border-b border-gray-100">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Clock className="w-4 h-4" />
              <span>최근 검색어</span>
            </div>
            <button
              onClick={clearRecentSearches}
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              전체삭제
            </button>
          </div>
          <div className="px-2 pb-2">
            {recentSearches.map((keyword, index) => (
              <div
                key={index}
                onClick={() => onSelectKeyword(keyword)}
                className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer group transition-colors"
              >
                <span className="text-sm text-gray-700">{keyword}</span>
                <button
                  onClick={(e) => handleRemoveRecent(e, keyword)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200 rounded"
                >
                  <X className="w-3 h-3 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 추천 검색어 */}
      <div>
        <div className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-700">
          <TrendingUp className="w-4 h-4" />
          <span>추천 검색어</span>
        </div>
        <div className="px-2 pb-2">
          {recommendedKeywords.map((keyword, index) => (
            <div
              key={index}
              onClick={() => onSelectKeyword(keyword)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
            >
              <span className="text-xs text-gray-400 font-medium w-5">
                {index + 1}
              </span>
              <span className="text-sm text-gray-700">{keyword}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
