import { AlertTriangle, ShieldCheck, UserX } from 'lucide-react';

export const metadata = {
  title: '청소년보호정책 - 클로드 전자담배샵',
  description: '클로드 전자담배샵 청소년보호정책',
};

export default function YouthProtectionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            청소년보호정책
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            최종 수정일: 2025년 1월 1일 | 시행일: 2025년 1월 1일
          </p>

          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-red-900 font-bold text-lg mb-2">
                  중요 안내
                </h3>
                <p className="text-red-800 leading-relaxed">
                  클로드 전자담배샵은 「청소년 보호법」 및 관련 법령에 따라
                  <span className="font-bold"> 만 19세 미만의 청소년</span>에게
                  전자담배 및 관련 제품의 판매를 엄격히 금지하고 있습니다.
                  본 사이트는 성인 전용 쇼핑몰이며, 청소년의 접근을 제한하기 위한
                  다양한 기술적·관리적 조치를 시행하고 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-2 text-blue-600" />
                1. 청소년보호정책의 목적
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed ml-8">
                <p>
                  클로드 전자담배샵(이하 "회사")은 청소년이 건강하고 안전하게
                  성장할 수 있는 환경을 조성하기 위하여 다음과 같은 청소년보호정책을
                  수립·시행하고 있습니다.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    청소년에게 유해한 매체물이 청소년에게 유통되는 것을 차단하기
                    위함
                  </li>
                  <li>
                    청소년 보호를 위한 법적 의무를 성실히 준수하기 위함
                  </li>
                  <li>
                    전자담배의 유해성에 대한 올바른 정보를 제공하기 위함
                  </li>
                  <li>
                    성인 인증 시스템을 통해 청소년의 구매를 원천적으로 차단하기
                    위함
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <UserX className="w-6 h-6 mr-2 text-red-600" />
                2. 청소년 유해 매체물 차단
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed ml-8">
                <div>
                  <h3 className="font-semibold mb-2">가. 연령 확인 절차</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      회원가입 시 본인인증(휴대폰 인증, 아이핀 인증 등)을 통한
                      필수 성인 인증
                    </li>
                    <li>
                      실명 인증 및 생년월일 확인을 통한 만 19세 이상 여부 검증
                    </li>
                    <li>
                      성인 인증을 완료하지 못한 경우 회원가입 및 서비스 이용 불가
                    </li>
                    <li>
                      정기적인 재인증 시스템 운영으로 지속적인 연령 확인
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">나. 기술적 차단 조치</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      사이트 접속 시 성인 인증 페이지를 통한 1차 접근 제한
                    </li>
                    <li>
                      청소년 유해 매체물 표시 및 경고 문구 상시 게시
                    </li>
                    <li>
                      미성년자로 확인된 계정의 즉각적인 이용 정지 및 차단
                    </li>
                    <li>
                      IP 기반 접속 기록 관리 및 의심 활동 모니터링
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">다. 배송 시 성인 확인</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      배송 시 수령인의 신분증 확인을 통한 성인 여부 재확인
                    </li>
                    <li>
                      성인이 아닌 경우 상품 인도 거부 및 반송 처리
                    </li>
                    <li>
                      대리 수령 시에도 수령인의 성인 인증 필수
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                3. 유해정보로부터의 청소년 보호
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed ml-8">
                <div>
                  <h3 className="font-semibold mb-2">
                    가. 청소년 유해 표시 및 경고
                  </h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      모든 페이지에 '청소년 이용불가' 표시 및 경고문구 게시
                    </li>
                    <li>
                      전자담배의 유해성 및 중독성에 대한 명확한 안내 제공
                    </li>
                    <li>
                      니코틴 함유량 및 건강 위해 정보 상세 표기
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">나. 광고 및 마케팅 제한</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      청소년이 주로 이용하는 매체를 통한 광고 금지
                    </li>
                    <li>
                      청소년을 대상으로 하는 마케팅 활동 전면 금지
                    </li>
                    <li>
                      건전한 성인 문화를 저해하지 않는 범위 내 광고 활동
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">다. 교육 및 홍보</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      전자담배의 올바른 이해를 위한 정보 제공
                    </li>
                    <li>
                      청소년 흡연 예방을 위한 사회적 책임 활동 참여
                    </li>
                    <li>
                      보호자 대상 청소년 보호 안내 자료 제공
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                4. 청소년보호책임자 지정 및 운영
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed ml-8">
                <p>
                  회사는 청소년보호 업무를 전담하는 청소년보호책임자를 다음과 같이
                  지정하여 운영하고 있습니다.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="font-semibold mb-3 text-blue-900">
                    청소년보호책임자
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>성명: 클로드</li>
                    <li>직책: 청소년보호책임자</li>
                    <li>이메일: youth@claude-vape.com</li>
                    <li>전화번호: 1588-0000</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold mb-2">청소년보호책임자의 업무</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>청소년보호정책 및 시행계획 수립</li>
                    <li>청소년 유해 매체물 모니터링 및 차단</li>
                    <li>청소년 보호 관련 직원 교육 실시</li>
                    <li>청소년 보호 관련 법령 준수 여부 점검</li>
                    <li>청소년 또는 보호자의 불만 및 민원 처리</li>
                    <li>청소년 보호 관련 개선 사항 발굴 및 시행</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                5. 법적 근거 및 처벌
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed ml-8">
                <div>
                  <h3 className="font-semibold mb-2">가. 관련 법령</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>청소년 보호법</li>
                    <li>국민건강증진법</li>
                    <li>담배사업법</li>
                    <li>정보통신망 이용촉진 및 정보보호 등에 관한 법률</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">나. 법적 처벌</h3>
                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
                    <p className="font-semibold text-yellow-900 mb-2">
                      청소년에게 담배를 판매할 경우
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-yellow-800">
                      <li>2년 이하의 징역 또는 2천만원 이하의 벌금</li>
                      <li>영업정지 또는 영업소 폐쇄 명령</li>
                      <li>형사 처벌 및 행정 제재 병과 가능</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold mb-2">다. 허위 성인 인증 시 조치</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      타인의 정보를 도용하여 성인 인증을 시도한 경우 형법상 사문서
                      위조죄 등으로 처벌될 수 있습니다.
                    </li>
                    <li>
                      허위 정보로 가입한 계정은 즉시 삭제되며, 법적 조치가 취해질
                      수 있습니다.
                    </li>
                    <li>
                      주문한 상품은 취소되며, 결제 금액은 환불 처리됩니다.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                6. 청소년 유해 정보 신고
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed ml-8">
                <p>
                  청소년에게 유해한 정보를 발견하신 경우 다음의 방법으로 신고해
                  주시기 바랍니다.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">신고 방법</h3>
                  <ul className="space-y-2 text-sm">
                    <li>이메일: youth@claude-vape.com</li>
                    <li>전화: 1588-0000 (평일 09:00-18:00)</li>
                    <li>홈페이지 고객센터를 통한 1:1 문의</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    신고하신 내용은 검토 후 24시간 내에 조치하며, 처리 결과를
                    회신해 드립니다.
                  </p>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold mb-2">기타 신고 기관</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                    <li>
                      불법·청소년유해정보 신고센터 (www.cybercop.kr / 국번없이 1377)
                    </li>
                    <li>
                      청소년사이버상담센터 (www.cyber1388.kr / 국번없이 1388)
                    </li>
                    <li>한국소비자원 (www.kca.go.kr / 국번없이 1372)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                7. 모니터링 및 개선
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed ml-8">
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    회사는 청소년 보호를 위해 사이트 내 모든 콘텐츠를 정기적으로
                    모니터링합니다.
                  </li>
                  <li>
                    청소년 유해 가능성이 있는 정보 발견 시 즉시 삭제 또는 차단
                    조치를 취합니다.
                  </li>
                  <li>
                    청소년보호 시스템의 효과성을 분기별로 점검하고 개선합니다.
                  </li>
                  <li>
                    관련 법령 개정 시 즉시 반영하여 정책을 업데이트합니다.
                  </li>
                  <li>
                    직원 대상 청소년 보호 교육을 연 2회 이상 실시합니다.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                8. 보호자 안내
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed ml-8">
                <p>
                  자녀의 온라인 활동을 주의 깊게 살펴봐 주시기 바랍니다.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-3">
                    보호자께서 할 수 있는 일
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      자녀의 컴퓨터 및 스마트폰 사용 시간과 방문 사이트를 확인해
                      주세요.
                    </li>
                    <li>
                      청소년 유해 매체물 차단 소프트웨어를 설치하여 사용해 주세요.
                    </li>
                    <li>
                      전자담배의 유해성과 위험성에 대해 자녀와 대화를 나눠주세요.
                    </li>
                    <li>
                      자녀가 타인의 성인인증 정보를 사용하지 않도록 지도해 주세요.
                    </li>
                    <li>
                      의심스러운 온라인 구매 활동 발견 시 즉시 확인해 주세요.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                9. 정책의 변경
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed ml-8">
                <p>
                  본 청소년보호정책은 관련 법령 및 회사 내부 방침에 따라 변경될 수
                  있으며, 변경 시에는 사이트 공지사항을 통해 공지합니다.
                </p>
                <p className="font-semibold mt-4">
                  시행일자: 2025년 1월 1일
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-lg p-6 mt-8">
              <h3 className="text-red-900 font-bold text-lg mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                청소년 여러분께
              </h3>
              <p className="text-red-800 leading-relaxed mb-3">
                전자담배는 니코틴을 함유하고 있어 매우 중독성이 강하며, 청소년의
                뇌 발달과 신체 성장에 심각한 악영향을 미칩니다. 담배는 백해무익한
                기호품으로 건강을 해칠 뿐만 아니라 법적으로도 엄격히 금지되어
                있습니다.
              </p>
              <p className="text-red-800 font-semibold">
                건강한 미래를 위해 전자담배를 멀리하시기 바랍니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
