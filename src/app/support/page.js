'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Pagination from '@/components/common/Pagination';
import { allReviews } from '@/constants/reviews';
import {
  Bell,
  HelpCircle,
  MessageCircle,
  Camera,
  Gift,
  BookOpen,
  ChevronRight,
  Search,
  Calendar,
  Package,
  CreditCard,
  RotateCcw,
  ShieldCheck,
  Star
} from 'lucide-react';

export default function SupportPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('notice');

  // URL 파라미터에서 tab 값을 가져와서 activeTab 설정
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['notice', 'faq', 'inquiry', 'review', 'event', 'guide'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const tabs = [
    { id: 'notice', name: '공지사항', icon: Bell },
    { id: 'faq', name: '자주묻는질문', icon: HelpCircle },
    { id: 'inquiry', name: '1:1 문의', icon: MessageCircle },
    { id: 'review', name: '포토리뷰', icon: Camera },
    { id: 'event', name: '이벤트', icon: Gift },
    { id: 'guide', name: '이용안내', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">고객센터</h1>
          <p className="text-gray-600">무엇을 도와드릴까요?</p>
        </div>

        {/* 탭 네비게이션 */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="grid grid-cols-3 md:grid-cols-6 border-b">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex flex-col items-center justify-center py-4 px-2 border-b-2 transition-colors
                    ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600 bg-blue-50'
                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className="w-6 h-6 mb-1" />
                  <span className="text-xs md:text-sm font-medium">
                    {tab.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 탭 콘텐츠 */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          {activeTab === 'notice' && <NoticeTab />}
          {activeTab === 'faq' && <FaqTab />}
          {activeTab === 'inquiry' && <InquiryTab />}
          {activeTab === 'review' && <ReviewTab />}
          {activeTab === 'event' && <EventTab />}
          {activeTab === 'guide' && <GuideTab />}
        </div>
      </div>
    </div>
  );
}

// 공지사항 탭
function NoticeTab() {
  const notices = [
    {
      id: 1,
      title: '설 연휴 배송 및 고객센터 운영 안내',
      date: '2025.01.15',
      isImportant: true,
    },
    {
      id: 2,
      title: '신규 회원 특별 할인 이벤트 안내',
      date: '2025.01.10',
      isImportant: true,
    },
    {
      id: 3,
      title: '개인정보처리방침 변경 안내',
      date: '2025.01.05',
      isImportant: false,
    },
    {
      id: 4,
      title: '택배사 변경 안내 (CJ대한통운)',
      date: '2025.01.03',
      isImportant: false,
    },
    {
      id: 5,
      title: '정기 시스템 점검 안내 (1월 20일)',
      date: '2025.01.01',
      isImportant: false,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">공지사항</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="space-y-2">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center flex-1">
              {notice.isImportant && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mr-3">
                  중요
                </span>
              )}
              <span className="text-gray-900 font-medium">{notice.title}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{notice.date}</span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">
            2
          </button>
          <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">
            3
          </button>
        </div>
      </div>
    </div>
  );
}

// 자주묻는질문 탭
function FaqTab() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'order', name: '주문/결제' },
    { id: 'delivery', name: '배송' },
    { id: 'return', name: '반품/교환' },
    { id: 'product', name: '상품' },
    { id: 'member', name: '회원' },
  ];

  const faqs = [
    {
      id: 1,
      category: 'order',
      question: '주문 후 배송지 변경이 가능한가요?',
      answer:
        '배송 준비 중 상태 이전까지는 마이페이지에서 배송지 변경이 가능합니다. 배송 중인 상태라면 고객센터로 문의해주시기 바랍니다.',
    },
    {
      id: 2,
      category: 'delivery',
      question: '배송은 얼마나 걸리나요?',
      answer:
        '평일 오후 2시 이전 주문 시 당일 발송되며, 영업일 기준 1-2일 내 배송됩니다. 제주/도서산간 지역은 2-3일 추가 소요될 수 있습니다.',
    },
    {
      id: 3,
      category: 'return',
      question: '반품/교환은 어떻게 하나요?',
      answer:
        '상품 수령 후 7일 이내 마이페이지 > 주문내역에서 반품/교환 신청이 가능합니다. 단, 사용한 상품이나 포장이 훼손된 경우 반품이 제한될 수 있습니다.',
    },
    {
      id: 4,
      category: 'product',
      question: '전자담배 액상 보관 방법이 궁금해요',
      answer:
        '직사광선을 피하고 서늘한 곳에 보관하시기 바랍니다. 개봉 후에는 밀봉하여 냉장 보관을 권장하며, 개봉 후 3개월 이내 사용을 권장합니다.',
    },
    {
      id: 5,
      category: 'member',
      question: '회원 탈퇴는 어떻게 하나요?',
      answer:
        '마이페이지 > 회원정보 수정 > 회원탈퇴에서 가능합니다. 탈퇴 시 적립금 및 쿠폰은 자동 소멸되며, 복구가 불가능합니다.',
    },
    {
      id: 6,
      category: 'order',
      question: '무통장 입금 후 주문 취소하면 환불은 언제 되나요?',
      answer:
        '주문 취소 신청 후 영업일 기준 3-5일 이내 입금하신 계좌로 환불됩니다. 은행 사정에 따라 지연될 수 있습니다.',
    },
  ];

  const filteredFaqs =
    selectedCategory === 'all'
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          자주묻는질문
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-4 py-2 rounded-lg font-medium transition-colors
                ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredFaqs.map((faq) => (
          <details
            key={faq.id}
            className="group border border-gray-200 rounded-lg overflow-hidden"
          >
            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
              <div className="flex items-center">
                <span className="text-blue-600 font-bold text-lg mr-3">Q</span>
                <span className="text-gray-900 font-medium">{faq.question}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
            </summary>
            <div className="px-4 pb-4 pt-2 bg-gray-50">
              <div className="flex">
                <span className="text-blue-600 font-bold text-lg mr-3">A</span>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

// 1:1 문의 탭
function InquiryTab() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    content: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // 더미 데이터 확장 (총 16개)
  const allInquiries = [
    {
      id: 1,
      title: '배송이 지연되고 있어요',
      category: '배송',
      date: '2025.01.14',
      status: '답변완료',
      answered: true,
    },
    {
      id: 2,
      title: '상품 불량 교환 요청합니다',
      category: '교환',
      date: '2025.01.12',
      status: '처리중',
      answered: false,
    },
    {
      id: 3,
      title: '결제 오류 문의',
      category: '결제',
      date: '2025.01.11',
      status: '답변완료',
      answered: true,
    },
    {
      id: 4,
      title: '쿠폰 사용 방법 문의',
      category: '기타',
      date: '2025.01.10',
      status: '답변완료',
      answered: true,
    },
    {
      id: 5,
      title: '반품 신청 확인 부탁드립니다',
      category: '반품',
      date: '2025.01.09',
      status: '처리중',
      answered: false,
    },
    {
      id: 6,
      title: '적립금 지급 관련 문의',
      category: '기타',
      date: '2025.01.08',
      status: '답변완료',
      answered: true,
    },
    {
      id: 7,
      title: '배송 주소 변경 요청',
      category: '배송',
      date: '2025.01.07',
      status: '답변완료',
      answered: true,
    },
    {
      id: 8,
      title: '상품 재입고 일정 문의',
      category: '상품',
      date: '2025.01.06',
      status: '처리중',
      answered: false,
    },
    {
      id: 9,
      title: '회원 탈퇴 문의',
      category: '회원',
      date: '2025.01.05',
      status: '답변완료',
      answered: true,
    },
    {
      id: 10,
      title: '포인트 적립 안 됐어요',
      category: '기타',
      date: '2025.01.04',
      status: '답변완료',
      answered: true,
    },
    {
      id: 11,
      title: '무통장입금 확인 부탁드립니다',
      category: '결제',
      date: '2025.01.03',
      status: '처리중',
      answered: false,
    },
    {
      id: 12,
      title: '제품 사용법 문의',
      category: '상품',
      date: '2025.01.02',
      status: '답변완료',
      answered: true,
    },
    {
      id: 13,
      title: '배송 조회가 안돼요',
      category: '배송',
      date: '2025.01.01',
      status: '답변완료',
      answered: true,
    },
    {
      id: 14,
      title: '할인쿠폰 중복 사용 가능한가요?',
      category: '기타',
      date: '2024.12.31',
      status: '답변완료',
      answered: true,
    },
    {
      id: 15,
      title: '교환 배송비 문의',
      category: '교환',
      date: '2024.12.30',
      status: '답변완료',
      answered: true,
    },
    {
      id: 16,
      title: '결제 영수증 발급 요청',
      category: '결제',
      date: '2024.12.29',
      status: '답변완료',
      answered: true,
    },
  ];

  // 페이지네이션 계산
  const totalPages = Math.ceil(allInquiries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInquiries = allInquiries.slice(startIndex, endIndex);

  // 페이지 그룹 계산 (5페이지씩 묶기)
  const pagesPerGroup = 5;
  const currentGroup = Math.ceil(currentPage / pagesPerGroup);
  const startPage = (currentGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">1:1 문의</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* 문의하기 폼 */}
        <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 h-fit lg:sticky lg:top-24">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            문의 작성하기
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                문의 유형
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">선택하세요</option>
                <option value="order">주문/결제</option>
                <option value="delivery">배송</option>
                <option value="return">반품/교환</option>
                <option value="product">상품</option>
                <option value="etc">기타</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                제목
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="제목을 입력하세요"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                문의 내용
              </label>
              <textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                placeholder="문의하실 내용을 상세히 입력해주세요"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              문의 등록
            </button>
          </form>
        </div>

        {/* 문의 내역 */}
        <div className="lg:w-1/2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center">
              문의 내역
            </h3>
          </div>
          <div className="space-y-3 min-h-[300px]">
            {currentInquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2">
                        {inquiry.category}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded font-medium ${
                          inquiry.answered
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {inquiry.status}
                      </span>
                    </div>
                    <p className="text-gray-900 font-medium">{inquiry.title}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{inquiry.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            maxVisiblePages={5}
          />
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">문의 전 확인하세요</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• 답변은 영업일 기준 1-2일 이내에 등록한 이메일로 발송됩니다.</li>
          <li>• 주말 및 공휴일에는 답변이 지연될 수 있습니다.</li>
          <li>• 자주묻는질문에서 빠른 답변을 확인하실 수 있습니다.</li>
        </ul>
      </div>
    </div>
  );
}

// 포토리뷰 탭
function ReviewTab() {
  // 상위 3개만 표시
  const topReviews = allReviews.slice(0, 3);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">포토리뷰</h2>
        <p className="text-sm text-gray-600">
          총 <span className="font-bold text-blue-600">{allReviews.length}</span>개의 리뷰
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topReviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="bg-gray-100 aspect-square flex items-center justify-center">
              {review.image ? (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <Star className="w-12 h-12 fill-yellow-400 text-yellow-400" />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <Star className="w-12 h-12 mx-auto mb-2 fill-yellow-400 text-yellow-400" />
                    <p className="text-sm">포토 리뷰</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-900 font-semibold mb-1 line-clamp-1">
                {review.product}
              </p>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {review.content}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{review.author}</span>
                <span>{review.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/reviews"
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          더보기
        </Link>
      </div>
    </div>
  );
}

// 이벤트 탭
function EventTab() {
  const events = [
    {
      id: 1,
      title: '신규 회원 가입 시 5,000원 즉시 할인',
      period: '2025.01.01 ~ 2025.12.31',
      status: '진행중',
      image: true,
    },
    {
      id: 2,
      title: '겨울 특가 세일! 전품목 최대 30% 할인',
      period: '2025.01.15 ~ 2025.01.31',
      status: '진행중',
      image: true,
    },
    {
      id: 3,
      title: '포토리뷰 작성 시 적립금 2,000원 지급',
      period: '2025.01.01 ~ 2025.02.28',
      status: '진행중',
      image: true,
    },
    {
      id: 4,
      title: '크리스마스 특별 이벤트',
      period: '2024.12.20 ~ 2024.12.31',
      status: '종료',
      image: true,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">이벤트</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
            진행중
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
            종료
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 aspect-video flex items-center justify-center relative">
              <Gift className="w-20 h-20 text-white opacity-50" />
              {event.status === '종료' && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">종료</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span
                  className={`text-xs px-2 py-1 rounded font-medium ${
                    event.status === '진행중'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {event.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {event.title}
              </h3>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{event.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 이용안내 탭
function GuideTab() {
  const guides = [
    {
      id: 'order',
      icon: Package,
      title: '주문/배송 안내',
      items: [
        '평일 오후 2시 이전 주문 시 당일 발송',
        '영업일 기준 1-2일 내 배송 완료',
        '제주/도서산간 지역 2-3일 추가 소요',
        '배송비: 3만원 이상 무료배송',
      ],
    },
    {
      id: 'payment',
      icon: CreditCard,
      title: '결제 안내',
      items: [
        '신용카드, 계좌이체, 무통장입금 가능',
        '무통장입금: 입금 확인 후 배송 시작',
        '카드 할부: 5만원 이상 구매 시 가능',
        '현금영수증 발급 가능',
      ],
    },
    {
      id: 'return',
      icon: RotateCcw,
      title: '반품/교환 안내',
      items: [
        '상품 수령 후 7일 이내 신청 가능',
        '미사용 상품에 한해 반품 가능',
        '단순 변심 시 왕복 배송비 고객 부담',
        '불량품/오배송 시 무료 교환',
      ],
    },
    {
      id: 'adult',
      icon: ShieldCheck,
      title: '성인인증 안내',
      items: [
        '만 19세 이상만 구매 가능',
        '회원가입 시 성인인증 필수',
        '본인인증 또는 휴대폰 인증',
        '배송 시 신분증 확인 진행',
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">이용안내</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {guides.map((guide) => {
          const Icon = guide.icon;
          return (
            <div
              key={guide.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {guide.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {guide.items.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-4">고객센터 안내</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">전화 문의</p>
            <p className="text-2xl font-bold text-blue-600 mb-1">1588-0000</p>
            <p className="text-sm text-gray-600">평일 09:00 - 18:00</p>
            <p className="text-sm text-gray-600">점심 12:00 - 13:00</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">이메일 문의</p>
            <p className="text-lg font-semibold text-gray-900">
              support@claude-vape.com
            </p>
            <p className="text-sm text-gray-600 mt-2">
              24시간 접수 가능 (답변은 영업시간 내)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
