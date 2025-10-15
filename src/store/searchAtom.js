import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// 최근 검색어 (최대 5개, 로컬 스토리지에 저장)
export const recentSearchesAtom = atomWithStorage('recentSearches', []);

// 최근 검색어 추가
export const addRecentSearchAtom = atom(null, (get, set, searchTerm) => {
  if (!searchTerm || !searchTerm.trim()) return;

  const searches = get(recentSearchesAtom);
  const trimmedSearch = searchTerm.trim();

  // 중복 제거
  const filtered = searches.filter((term) => term !== trimmedSearch);

  // 새로운 검색어를 앞에 추가하고 최대 5개로 제한
  set(recentSearchesAtom, [trimmedSearch, ...filtered].slice(0, 3));
});

// 최근 검색어 삭제
export const removeRecentSearchAtom = atom(null, (get, set, searchTerm) => {
  const searches = get(recentSearchesAtom);
  set(
    recentSearchesAtom,
    searches.filter((term) => term !== searchTerm)
  );
});

// 최근 검색어 전체 삭제
export const clearRecentSearchesAtom = atom(null, (get, set) => {
  set(recentSearchesAtom, []);
});

// 추천 검색어 (하드코딩)
export const recommendedKeywords = [
  '망고',
  '딸기',
  '멘솔',
  'VAPE',
  '코일',
];
