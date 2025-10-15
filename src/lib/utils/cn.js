import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind CSS 클래스를 조건부로 결합하고 충돌을 해결합니다.
 * @param {...any} inputs - 클래스 이름들
 * @returns {string} 결합된 클래스 문자열
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
