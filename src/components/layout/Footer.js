import Link from 'next/link';
import { Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              클로드 전자담배샵
            </h3>
            <p className="text-sm mb-2">대표자: 클로드</p>
            <p className="text-sm mb-2">
              사업자등록번호: 123-45-67890
            </p>
            <p className="text-sm mb-2">
              통신판매업신고: 2024-서울강남-0000
            </p>
            <p className="text-sm">
              주소: 서울특별시 강남구 테헤란로 123
            </p>
          </div>

          {/* 고객 지원 */}
          <div>
            <h4 className="text-white font-semibold mb-4">고객센터</h4>
            <p className="text-2xl font-bold text-white mb-2">
              1588-0000
            </p>
            <p className="text-sm mb-1">평일 09:00 - 18:00</p>
            <p className="text-sm mb-1">점심 12:00 - 13:00</p>
            <p className="text-sm">주말 및 공휴일 휴무</p>
            <p className="text-sm mt-4">
              이메일: support@claude-vape.com
            </p>
          </div>

          {/* 고객 지원 */}
          <div>
            <h4 className="text-white font-semibold mb-4">고객 지원</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support?tab=notice" className="hover:text-white">
                  공지사항
                </Link>
              </li>
              <li>
                <Link href="/support?tab=faq" className="hover:text-white">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/support?tab=inquiry" className="hover:text-white">
                  1:1 문의
                </Link>
              </li>
              <li>
                <Link href="/support?tab=review" className="hover:text-white">
                  포토리뷰
                </Link>
              </li>
              <li>
                <Link href="/support?tab=event" className="hover:text-white">
                  이벤트
                </Link>
              </li>
              <li>
                <Link href="/support?tab=guide" className="hover:text-white">
                  이용안내
                </Link>
              </li>
            </ul>
          </div>

          {/* 정책 및 약관 */}
          <div>
            <h4 className="text-white font-semibold mb-4">정책 및 약관</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms/service" className="hover:text-white">
                  이용약관
                </Link>
              </li>
              <li>
                <Link
                  href="/terms/privacy"
                  className="hover:text-white font-bold"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms/youth" className="hover:text-white">
                  청소년보호정책
                </Link>
              </li>
            </ul>

            {/* SNS */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">SNS</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 경고문구 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-4">
            <p className="text-yellow-200 text-sm font-semibold mb-2">
              ⚠️ 청소년 보호 안내
            </p>
            <p className="text-yellow-100 text-xs">
              본 사이트는 만 19세 미만 청소년에게 판매를 금지합니다.
              전자담배는 니코틴을 함유하고 있어 중독성이 있으며 건강에
              해로울 수 있습니다.
            </p>
          </div>
          <p className="text-sm text-gray-500 text-center">
            © 2025 클로드 전자담배샵. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
