export const metadata = {
  title: '이용약관 - 클로드 전자담배샵',
  description: '클로드 전자담배샵 이용약관',
};

export default function ServiceTermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">이용약관</h1>
          <p className="text-gray-500 text-sm mb-8">
            최종 수정일: 2025년 1월 1일
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                제1조 (목적)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                본 약관은 클로드 전자담배샵(이하 "회사")이 운영하는 온라인
                쇼핑몰에서 제공하는 전자상거래 관련 서비스 및 기타 서비스(이하
                "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및
                책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                제2조 (정의)
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                <ul className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    "쇼핑몰"이라 함은 회사가 재화 또는 용역을 이용자에게
                    제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화
                    또는 용역을 거래할 수 있도록 설정한 가상의 영업장을
                    말합니다.
                  </li>
                  <li>
                    "이용자"라 함은 쇼핑몰에 접속하여 본 약관에 따라 회사가
                    제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                  </li>
                  <li>
                    "회원"이라 함은 쇼핑몰에 개인정보를 제공하여 회원등록을 한
                    자로서, 쇼핑몰의 정보를 지속적으로 제공받으며, 쇼핑몰이
                    제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
                  </li>
                  <li>
                    "비회원"이라 함은 회원에 가입하지 않고 쇼핑몰이 제공하는
                    서비스를 이용하는 자를 말합니다.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                제3조 (약관의 명시 및 개정)
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <ul className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    회사는 본 약관의 내용과 상호, 영업소 소재지, 대표자의 성명,
                    사업자등록번호, 연락처 등을 이용자가 쉽게 알 수 있도록
                    쇼핑몰의 초기 화면에 게시합니다.
                  </li>
                  <li>
                    회사는 약관의 규제에 관한 법률, 전자상거래 등에서의
                    소비자보호에 관한 법률, 전자문서 및 전자거래기본법,
                    전자금융거래법, 정보통신망 이용촉진 및 정보보호 등에 관한
                    법률 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할
                    수 있습니다.
                  </li>
                  <li>
                    회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여
                    현행약관과 함께 쇼핑몰의 초기화면에 그 적용일자 7일 이전부터
                    적용일자 전일까지 공지합니다.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                제4조 (회원가입)
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <ul className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후
                    본 약관에 동의한다는 의사표시를 함으로써 회원가입을
                    신청합니다.
                  </li>
                  <li>
                    회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중
                    다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>
                        가입신청자가 본 약관 제7조 제3항에 의하여 이전에
                        회원자격을 상실한 적이 있는 경우
                      </li>
                      <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                      <li>
                        만 19세 미만인 경우 (청소년 보호를 위한 연령 제한)
                      </li>
                      <li>
                        기타 회원으로 등록하는 것이 회사의 기술상 현저히
                        지장이 있다고 판단되는 경우
                      </li>
                    </ul>
                  </li>
                  <li>
                    회원가입계약의 성립시기는 회사의 승낙이 회원에게 도달한
                    시점으로 합니다.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                제5조 (서비스의 제공 및 변경)
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <ul className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    회사는 다음과 같은 서비스를 제공합니다.
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>재화 또는 용역에 대한 정보 제공 및 구매계약의 체결</li>
                      <li>구매계약이 체결된 재화 또는 용역의 배송</li>
                      <li>기타 회사가 정하는 서비스</li>
                    </ul>
                  </li>
                  <li>
                    회사는 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의
                    경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의
                    내용을 변경할 수 있습니다.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                제6조 (서비스의 중단)
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <ul className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장,
                    통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을
                    일시적으로 중단할 수 있습니다.
                  </li>
                  <li>
                    제1항에 의한 서비스 중단의 경우 회사는 사전에 공지합니다.
                    다만, 회사가 통제할 수 없는 사유로 인한 서비스의 중단으로
                    인하여 사전 통지가 불가능한 경우에는 그러하지 아니합니다.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                제7조 (회원 탈퇴 및 자격 상실)
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <ul className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    회원은 회사에 언제든지 탈퇴를 요청할 수 있으며, 회사는
                    즉시 회원탈퇴를 처리합니다.
                  </li>
                  <li>
                    회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을
                    제한 및 정지시킬 수 있습니다.
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>가입 신청 시에 허위 내용을 등록한 경우</li>
                      <li>
                        다른 사람의 쇼핑몰 이용을 방해하거나 그 정보를 도용하는
                        등 전자상거래 질서를 위협하는 경우
                      </li>
                      <li>
                        쇼핑몰을 이용하여 법령 또는 본 약관이 금지하거나
                        공서양속에 반하는 행위를 하는 경우
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                제8조 (청소년 보호)
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <ul className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    회사는 청소년보호법 및 관련 법령에 따라 만 19세 미만
                    청소년에게 전자담배 및 관련 제품의 판매를 금지합니다.
                  </li>
                  <li>
                    회원 가입 시 성인인증 절차를 거쳐야 하며, 허위로 성인인증을
                    한 경우 회원자격이 즉시 상실되며 법적 책임을 질 수 있습니다.
                  </li>
                  <li>
                    회사는 청소년 보호를 위해 지속적으로 모니터링하며, 의심되는
                    거래에 대해서는 추가 인증을 요구할 수 있습니다.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                제9조 (면책조항)
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <ul className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    회사는 천재지변 또는 이에 준하는 불가항력으로 인하여
                    서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이
                    면제됩니다.
                  </li>
                  <li>
                    회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여
                    책임을 지지 않습니다.
                  </li>
                  <li>
                    회사는 회원이 서비스를 이용하여 기대하는 수익을 얻지
                    못하거나 상실한 것에 대하여 책임을 지지 않습니다.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                제10조 (분쟁해결)
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <ul className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그
                    피해를 보상처리하기 위하여 피해보상처리기구를 설치 운영합니다.
                  </li>
                  <li>
                    회사는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로
                    그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는
                    이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
                  </li>
                  <li>
                    회사와 이용자 간에 발생한 전자상거래 분쟁과 관련하여
                    이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는
                    시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
                  </li>
                </ul>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">부칙</h2>
              <p className="text-gray-700 leading-relaxed">
                본 약관은 2025년 1월 1일부터 시행됩니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
