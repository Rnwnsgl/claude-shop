import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// 사용자 정보 구조:
// {
//   id: string,
//   email: string,
//   name: string,
//   phone: string,
//   isAdult: boolean,
//   addresses: Array<{
//     id: string,
//     name: string,
//     recipient: string,
//     phone: string,
//     address: string,
//     detailAddress: string,
//     zipCode: string,
//     isDefault: boolean
//   }>
// }

// 로그인 상태
export const isLoggedInAtom = atomWithStorage('isLoggedIn', false);

// 사용자 정보 (로컬 스토리지에 저장)
export const userAtom = atomWithStorage('user', null);

// 성인 인증 상태
export const isAdultVerifiedAtom = atom((get) => {
  const user = get(userAtom);
  return user?.isAdult || false;
});

// 사용자 로그인
export const loginAtom = atom(null, (get, set, userData) => {
  set(userAtom, userData);
  set(isLoggedInAtom, true);
});

// 사용자 로그아웃
export const logoutAtom = atom(null, (get, set) => {
  set(userAtom, null);
  set(isLoggedInAtom, false);
});

// 사용자 정보 업데이트
export const updateUserAtom = atom(null, (get, set, updates) => {
  const currentUser = get(userAtom);
  if (currentUser) {
    set(userAtom, { ...currentUser, ...updates });
  }
});

// 배송지 추가
export const addAddressAtom = atom(null, (get, set, newAddress) => {
  const currentUser = get(userAtom);
  if (currentUser) {
    const addresses = currentUser.addresses || [];

    // 첫 번째 주소면 기본 배송지로 설정
    const isDefault = addresses.length === 0 ? true : newAddress.isDefault;

    // 새 주소를 기본 배송지로 설정하면 다른 주소들의 기본 설정 해제
    const updatedAddresses = isDefault
      ? addresses.map((addr) => ({ ...addr, isDefault: false }))
      : addresses;

    set(userAtom, {
      ...currentUser,
      addresses: [...updatedAddresses, { ...newAddress, isDefault }],
    });
  }
});

// 배송지 삭제
export const removeAddressAtom = atom(null, (get, set, addressId) => {
  const currentUser = get(userAtom);
  if (currentUser) {
    const updatedAddresses = currentUser.addresses.filter(
      (addr) => addr.id !== addressId
    );
    set(userAtom, { ...currentUser, addresses: updatedAddresses });
  }
});

// 기본 배송지 설정
export const setDefaultAddressAtom = atom(null, (get, set, addressId) => {
  const currentUser = get(userAtom);
  if (currentUser) {
    const updatedAddresses = currentUser.addresses.map((addr) => ({
      ...addr,
      isDefault: addr.id === addressId,
    }));
    set(userAtom, { ...currentUser, addresses: updatedAddresses });
  }
});
