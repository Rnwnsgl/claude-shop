import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// 장바구니 아이템 구조:
// {
//   id: string,
//   name: string,
//   price: number,
//   quantity: number,
//   image: string,
//   category: string,
//   options: { flavor?: string, nicotine?: string, resistance?: string }
// }

// 로컬 스토리지에 저장되는 장바구니
export const cartAtom = atomWithStorage('cart', []);

// 장바구니 아이템 개수
export const cartCountAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce((total, item) => total + item.quantity, 0);
});

// 장바구니 총 금액
export const cartTotalAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
});

// 장바구니에 아이템 추가
export const addToCartAtom = atom(
  null,
  (get, set, newItem) => {
    const cart = get(cartAtom);
    const existingItemIndex = cart.findIndex(
      (item) => item.id === newItem.id &&
      JSON.stringify(item.options) === JSON.stringify(newItem.options)
    );

    if (existingItemIndex > -1) {
      // 이미 존재하는 아이템이면 수량만 증가
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + newItem.quantity,
      };
      set(cartAtom, updatedCart);
    } else {
      // 새로운 아이템 추가
      set(cartAtom, [...cart, newItem]);
    }
  }
);

// 장바구니 아이템 수량 업데이트
export const updateCartItemAtom = atom(
  null,
  (get, set, { id, options, quantity }) => {
    const cart = get(cartAtom);
    const updatedCart = cart.map((item) => {
      if (item.id === id && JSON.stringify(item.options) === JSON.stringify(options)) {
        return { ...item, quantity };
      }
      return item;
    });
    set(cartAtom, updatedCart);
  }
);

// 장바구니에서 아이템 제거
export const removeFromCartAtom = atom(
  null,
  (get, set, { id, options }) => {
    const cart = get(cartAtom);
    const updatedCart = cart.filter(
      (item) => !(item.id === id && JSON.stringify(item.options) === JSON.stringify(options))
    );
    set(cartAtom, updatedCart);
  }
);

// 장바구니 비우기
export const clearCartAtom = atom(null, (get, set) => {
  set(cartAtom, []);
});
