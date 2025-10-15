export { cn } from './cn';

/**
 * 숫자를 한국 원화 형식으로 포맷팅합니다.
 * @param {number} price - 가격
 * @returns {string} 포맷된 가격 문자열
 */
export function formatPrice(price) {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(price);
}

/**
 * 날짜를 한국 형식으로 포맷팅합니다.
 * @param {Date|string|number} date - 날짜
 * @returns {string} 포맷된 날짜 문자열
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}
