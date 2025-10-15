import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// 위시리스트 아이템 구조:
// {
//   id: string,
//   name: string,
//   price: number,
//   image: string,
//   category: string,
//   addedAt: number (timestamp)
// }

// 로컬 스토리지에 저장되는 위시리스트
export const wishlistAtom = atomWithStorage('wishlist', []);

// 위시리스트 아이템 개수
export const wishlistCountAtom = atom((get) => {
  const wishlist = get(wishlistAtom);
  return wishlist.length;
});

// 위시리스트에 아이템이 있는지 확인
export const isInWishlistAtom = atom(null, (get, set, productId) => {
  const wishlist = get(wishlistAtom);
  return wishlist.some((item) => item.id === productId);
});

// 위시리스트에 아이템 추가
export const addToWishlistAtom = atom(null, (get, set, newItem) => {
  const wishlist = get(wishlistAtom);
  const exists = wishlist.some((item) => item.id === newItem.id);

  if (!exists) {
    set(wishlistAtom, [
      ...wishlist,
      { ...newItem, addedAt: Date.now() },
    ]);
  }
});

// 위시리스트에서 아이템 제거
export const removeFromWishlistAtom = atom(null, (get, set, productId) => {
  const wishlist = get(wishlistAtom);
  const updatedWishlist = wishlist.filter((item) => item.id !== productId);
  set(wishlistAtom, updatedWishlist);
});

// 위시리스트 토글 (있으면 제거, 없으면 추가)
export const toggleWishlistAtom = atom(null, (get, set, item) => {
  const wishlist = get(wishlistAtom);
  const exists = wishlist.some((wishItem) => wishItem.id === item.id);

  if (exists) {
    set(
      wishlistAtom,
      wishlist.filter((wishItem) => wishItem.id !== item.id)
    );
  } else {
    set(wishlistAtom, [...wishlist, { ...item, addedAt: Date.now() }]);
  }
});

// 위시리스트 비우기
export const clearWishlistAtom = atom(null, (get, set) => {
  set(wishlistAtom, []);
});
