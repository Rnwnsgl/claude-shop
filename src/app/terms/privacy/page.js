export const metadata = {
  title: '개인정보처리방침 - 클로드 전자담배샵',
  description: '클로드 전자담배샵 개인정보처리방침',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            개인정보처리방침
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            최종 수정일: 2025년 1월 1일 | 시행일: 2025년 1월 1일
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-blue-900 text-sm leading-relaxed">
              클로드 전자담배샵(이하 "회사")는 이용자의 개인정보를 중요시하며,
              「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한
              법률」 등 개인정보 보호 관련 법령을 준수하고 있습니다.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                1. 개인정보의 수집 항목 및 수집 방법
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-2">
                    가. 수집하는 개인정보 항목
                  </h3>
                  <div className="ml-4 space-y-3">
                    <div>
                      <p className="font-medium">회원가입 시</p>
                      <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                        <li>필수항목: 이름, 아이디, 비밀번호, 이메일, 휴대전화번호, 생년월일</li>
                        <li>선택항목: 주소, 일반전화번호</li>
                        <li>성인인증: 본인인증 정보 (CI/DI), 휴대폰번호, 생년월일</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">상품 구매 시</p>
                      <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                        <li>필수항목: 수령인 이름, 배송지 주소, 휴대전화번호</li>
                        <li>결제정보: 신용카드 정보, 은행계좌 정보, 현금영수증 발급 정보</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">서비스 이용 과정에서 자동 수집</p>
                      <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                        <li>IP주소, 쿠키, 서비스 이용 기록, 기기정보, 접속 로그</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">나. 개인정보 수집 방법</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>홈페이지 회원가입 및 서비스 이용</li>
                    <li>전화, 이메일을 통한 상담</li>
                    <li>이벤트 및 프로모션 참여</li>
                    <li>제휴사로부터의 제공</li>
                    <li>생성정보 수집 도구를 통한 자동 수집</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                2. 개인정보의 수집 및 이용 목적
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
                <div className="ml-4 space-y-3">
                  <div>
                    <p className="font-medium">가. 회원 관리</p>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>회원제 서비스 이용에 따른 본인확인, 개인 식별</li>
                      <li>불량회원의 부정 이용 방지와 비인가 사용 방지</li>
                      <li>가입 의사 확인, 연령확인, 불만처리 등 민원처리</li>
                      <li>고지사항 전달, 성인 인증</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">나. 서비스 제공에 관한 계약 이행</p>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>콘텐츠 및 맞춤 서비스 제공</li>
                      <li>상품 배송, 청구서 발송, 본인인증, 구매 및 요금 결제</li>
                      <li>요금추심, 채권추심</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">다. 마케팅 및 광고에 활용</p>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>신규 서비스 개발 및 이벤트 행사에 따른 정보 전달</li>
                      <li>맞춤형 광고 및 상품 추천</li>
                      <li>접속빈도 파악, 회원의 서비스 이용에 대한 통계</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                3. 개인정보의 보유 및 이용기간
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
                  정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의
                  이유로 명시한 기간 동안 보존합니다.
                </p>
                <div className="ml-4 space-y-3">
                  <div>
                    <p className="font-medium">가. 회사 내부 방침에 의한 정보보유</p>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>부정이용기록: 1년 (부정이용 방지)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">나. 관련 법령에 의한 정보보유</p>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>
                        계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의
                        소비자보호에 관한 법률)
                      </li>
                      <li>
                        대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래
                        등에서의 소비자보호에 관한 법률)
                      </li>
                      <li>
                        소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래
                        등에서의 소비자보호에 관한 법률)
                      </li>
                      <li>
                        표시·광고에 관한 기록: 6개월 (전자상거래 등에서의
                        소비자보호에 관한 법률)
                      </li>
                      <li>
                        세법이 규정하는 모든 거래에 관한 장부 및 증빙서류: 5년
                        (국세기본법)
                      </li>
                      <li>
                        서비스 방문기록: 3개월 (통신비밀보호법)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                4. 개인정보의 파기 절차 및 방법
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-2">가. 파기절차</h3>
                  <p className="ml-4">
                    이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후
                    별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호
                    사유에 따라 일정 기간 저장된 후 파기됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">나. 파기방법</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적
                      방법을 사용하여 삭제합니다.
                    </li>
                    <li>
                      종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
                      파기합니다.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                5. 개인정보 제3자 제공
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지
                  않습니다. 다만, 아래의 경우에는 예외로 합니다.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>이용자가 사전에 동의한 경우</li>
                  <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                  <li>배송업무를 위해 배송업체에 필요 최소한의 정보(성명, 주소, 전화번호)를 제공하는 경우</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                6. 개인정보 처리 위탁
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  회사는 서비스 향상을 위해서 아래와 같이 개인정보를 위탁하고
                  있으며, 관계 법령에 따라 위탁계약 시 개인정보가 안전하게
                  관리될 수 있도록 필요한 사항을 규정하고 있습니다.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300 mt-4">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          수탁업체
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          위탁업무 내용
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          보유 및 이용기간
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          CJ대한통운, 롯데택배, 한진택배
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          상품 배송
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          배송 완료 후 3개월
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          KG이니시스, 토스페이먼츠
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          결제 처리
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          회원 탈퇴 시 또는 위탁 계약 종료 시
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          NICE평가정보, 코리아크레딧뷰로
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          본인인증, 성인인증
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          회원 탈퇴 시 또는 위탁 계약 종료 시
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                7. 이용자 및 법정대리인의 권리와 행사방법
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나
                    수정할 수 있으며 가입해지를 요청할 수도 있습니다.
                  </li>
                  <li>
                    개인정보 조회 및 수정은 '마이페이지'에서, 가입해지(동의철회)는
                    '회원탈퇴'를 클릭하여 본인 확인 절차를 거치신 후 직접
                    열람, 정정 또는 탈퇴가 가능합니다.
                  </li>
                  <li>
                    개인정보보호책임자에게 서면, 전화 또는 이메일로 연락하시면
                    지체 없이 조치하겠습니다.
                  </li>
                  <li>
                    이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는
                    정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지
                    않습니다.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                8. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-2">가. 쿠키(Cookie)란?</h3>
                  <p className="ml-4">
                    회사는 개인화되고 맞춤화된 서비스를 제공하기 위해서 이용자의
                    정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                    쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에
                    보내는 아주 작은 텍스트 파일로 이용자의 컴퓨터 하드디스크에
                    저장됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">나. 쿠키의 사용 목적</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>개인의 관심 분야에 따라 차별화된 정보 제공</li>
                    <li>회원과 비회원의 접속 빈도 또는 방문 시간 등을 분석</li>
                    <li>이용자의 취향과 관심분야 파악 및 자취 추적</li>
                    <li>쇼핑한 품목들에 대한 정보와 관심 있게 둘러본 품목들에 대한 자동 기록</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">다. 쿠키의 설치·운영 및 거부</h3>
                  <p className="ml-4 mb-2">
                    이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다.
                    웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나,
                    쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의
                    저장을 거부할 수도 있습니다.
                  </p>
                  <p className="ml-4 text-sm">
                    다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 일부
                    서비스는 이용에 어려움이 있을 수 있습니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                9. 개인정보의 안전성 확보 조치
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
                  있습니다.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등
                  </li>
                  <li>
                    기술적 조치: 개인정보처리시스템 등의 접근권한 관리,
                    접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램
                    설치
                  </li>
                  <li>
                    물리적 조치: 전산실, 자료보관실 등의 접근통제
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                10. 개인정보보호책임자
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
                  처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와
                  같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                  <p className="font-semibold mb-2">개인정보보호책임자</p>
                  <ul className="space-y-1 text-sm">
                    <li>성명: 클로드</li>
                    <li>직책: 개인정보보호책임자</li>
                    <li>이메일: privacy@claude-vape.com</li>
                    <li>전화번호: 1588-0000</li>
                  </ul>
                </div>
                <p className="text-sm mt-4">
                  기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래
                  기관에 문의하시기 바랍니다.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                  <li>개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)</li>
                  <li>대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)</li>
                  <li>경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)</li>
                </ul>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                11. 개인정보처리방침의 변경
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
                  변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행
                  7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
                <p className="font-semibold">시행일자: 2025년 1월 1일</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
