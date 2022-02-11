import React from 'react';
import { Tween } from 'react-gsap';

export default function System() {
  return (
    <div className="noticeWrap">
      <Tween from={{ y: '-10vh', opacity: 0 }} duration={1} delay={0.4}>
        <p className="notice-frame">
          <img src="img/frame-2.png" />
        </p>
        <div className="noticePaper">
          <p className="notice-content">
            <br />
            <br />
            <Tween
              from={{ y: '5vh', opacity: 0 }}
              duration={3}
              ease="elastic.out(1, 0.5)"
              delay={1.5}
            >
              <h2>
                <img src="img/system.png" />
              </h2>
            </Tween>
            <br />
            <br />
            <span className="title">➢ 일상 기간</span>
            <br />
            - 유클리드 호텔의 일정은 크게 일상기간과 비일상기간, 안식일로
            나뉩니다. ​그 중 월요일부터 목요일까지를 일상 기간이라고 칭합니다.
            <br />
            <br />
            - 일상 기간 중에는 이벤트 및 일상조사, 사이드 챕터가 진행됩니다.
            매주 일요일에 공개되는 일정표를 참고해주시기를 바랍니다.
            <br />
            <br />
            <span className="title">➢ 비일상 기간</span>
            <br />
            - 금요일과 토요일을 비일상 기간이라고 칭합니다. 비일상 기간에는
            살인이 일어나고, 그에 따른 조사와 재판 스토리가 진행됩니다.
            <br />
            <br />
            - 때문에 가챠 및 개그 대화, 짤방 사용 등의 분위기를 해칠 수 있는
            행위들을 가급적 제한하고 있습니다.
            <br />
            <br />
            <span className="title">➢ 안식일</span>
            <br />
            - 매주 일요일을 이벤트 및 조사를 진행하지 않는 안식일로 지정하고
            있습니다.
            <br />
            <br />
            - 안식일에는 총괄진들의 DM답변이 다소 늦어질 수 있는 점을 양해
            부탁드립니다.
            <br />
            <br />
            <span className="title">➢ 일상 조사</span>
            <br />
            <span className="small">월요일 22:00~23:00</span> <br />
            - 일상 조사 중에서는 룰렛을 사용할 수 있는 칩을 획득할 수 있습니다.
            대부분의 일상 조사는 오픈 카톡으로 이루어집니다.
            <br />
            <br />
            - 일상 조사 중 발견한 물건, 정보에 대해서는 자유롭게 이야기를 나눌
            수 있으며 이를 권장합니다.
            <br />
            <br />
            <span className="title">➢ 비일상 조사</span>
            <br />
            <span className="small">금요일 22:00~23:30</span> <br />
            - 비일상 조사는 시체를 찾은 뒤, 사건에 대한 단서를 찾아내는
            시간입니다. 3명 이상의 인원이 시체를 발견할 경우 시체 발견 공지가
            이뤄지며, 조사 중 짧은 스토리가 진행될 수 있습니다.
            <br />
            <br />
            - 조사시간은 조사 상황에 따라 유동적으로 조정될 수 있습니다. 가급적
            본 시간을 넘어가지 않게끔 조정할 예정입니다.
            <br />
            <br />
            - 비일상 조사 도중엔 트윗이 불가능하며, 사전에 합의되지 않은 시체 및
            현장훼손을 금하고 있습니다.
            <br />
            <br />
            - 비일상 조사에 얻은 단서들은 다음날 재판 이전까지 발설할 수
            없습니다.
            <br />
            <br />
            <br />
            <br />
            <br /> <span className="bold">• • •</span>
            <br />
            <br />
            <br />
            <span className="title">➢ 챕터</span>
            <br />
            챕터란, 커뮤니티 내의 캐릭터들이 만들어내는 이야기입니다. 기본적으로
            메인챕터와 사이드챕터로 구분되어져 있으며, 커뮤니티의 메인 스토리와
            연관될 가능성이 있습니다.
            <br />
            <br />
            1인 챕터를 제외한 나머지 서로간의 원활한 상의를 위한 단체 채팅방이
            개설됩니다. 아래로 추가 내용을 서술하겠습니다.
            <br />
            <br />
            <span className="title">➢ 메인 챕터</span>
            <br />
            - 메인 챕터는 매 주 재판이 끝난 직후, 총괄계 DM을 통해 블랙(검정),
            화이트(하양), 그 외 챕터 관계자의 신청을 받습니다. 단, 예외로
            1챕터와 2챕터는 일찍 신청을 받을 예정입니다.
            <br />
            <br />
            - 블랙과 화이트의 if에 따라 관계자가 존재하지 않는 챕터가 있을 수
            있습니다.
            <br />
            <br />
            - 챕터 신청자가 없을 경우 챕터 수요조사 항목을 참고하여, 혹은 총괄진
            측 임의로 컨택이 갈 수 있습니다. 가급적 모든 분들께 챕터가
            돌아가도록 형평성 있게 회의를 거칠 예정입니다.
            <br />
            <br />- 유클리드 호텔은 다양한 방식의 챕터 연출을 환영합니다. 그러나
            스토리 진행상의 제한이 있을 수 있으므로,&nbsp;
            <span className="bold">
              챕터 연출은 구상이 끝난 뒤 반드시 총괄진과 상의해주세요.
            </span>
            <br />
            <br />
            - 모든 챕터 관계자들은 커뮤니티 내에서 몹시 중요한 역할을 맡게 되는
            만큼, 책임감 있게 스토리 진행에 참여 해주시면 감사하겠습니다.
            <br />
            <br /> <span className="bold">• • •</span>
            <br />
            <h4 style={{ fontSize: '1.3rem', fontWeight: '900' }}>+블랙 </h4>
            - 블랙이란 살인을 저지른 당사자를 일컫습니다. 원작에서의 검정에
            해당합니다.
            <br />
            <br />
            - 다수의 블랙 신청자가 있을 경우, 제출된 범행 동기를 확인한 후
            총괄진이 스토리상 적절하다고 판단되는 블랙을 선출합니다.
            <br />
            <br />- 블랙은 처형 로그
            <span className="small">
              ( wix, 영상, 글·그림로그, 실시간 진행 등 )
            </span>
            를 토요일 오전 0시까지 총괄계 메일로 제출 해주셔야 합니다. 또한,
            블랙은 스토리 상 개연성을 위해 범행시간 전후 한 시간동안 트윗이
            금지됩니다.
            <br />
            <br />
            <h4 style={{ fontSize: '1.3rem', fontWeight: '900' }}> +화이트 </h4>
            - 화이트는 블랙에 의해 사망에 이르는 캐릭터를 일컫습니다. 화이트는
            챕터 인원 몰림 등을 방지하기 위해, 한 명의 블랙당 2명을 초과할 수
            없습니다.
            <br />
            <br />
            - 하나의 챕터 안에서 모두 수용하기 힘들 정도로 다수의 화이트
            신청자가 있을 경우 블랙이 원하는 피해상을 우선시 하며, 적합한
            신청자가 없을 경우 신청서 수요조사를 참고하여 총괄진의 상의 후
            화이트가 선출됩니다.
            <br />
            <br />
            - 화이트는 피해 로그를 금요일 오전 0시까지 총괄계 메일로
            제출해주셔야 합니다.
            <br />
            <br />
            <h4 style={{ fontSize: '1.3rem', fontWeight: '900' }}>
              {' '}
              +그외 챕터 관계자{' '}
            </h4>
            - 블랙과 화이트 외에도 처형 난입, 조력자, 공범, 목격자, 가짜 블랙 등
            개연성에 부합하는 다양한 포지션이 존재할 수 있습니다. 총괄진과의
            합의 후 자유로운 연출이 가능합니다.
            <br />
            <br />
            <span className="title">➢ 재판</span>
            <br />
            <span className="small">토요일 22:00~23:30</span> <br />
            - 살인을 저지른 블랙이 등장하면 재판을 진행하게 됩니다.
            <br />
            <br />
            - 커뮤니티 특성상 재판은 스토리 진행에 무척 중요한 영향을 미치는
            만큼 모든 손님께서는 되도록 재판에 참여해 주시기 바랍니다.
            <br />
            <br />
            - 매 재판마다 총괄진이 출석 체크를 진행할 예정입니다. 무통보 불참시
            경고를 받을 수 있으며, 2회 이상 누적 될 경우 러닝 의사가 없다고
            간주하고 강제 하차가 이루어질 수 있습니다.
            <br />
            <br />
            - 유클리드 호텔에서는 마스코트가 준비한 토의 주제를 직접 논파하는
            재판 방식을 차용하고 있습니다. 쪽지는 기본적으로 재판당 4개
            존재하며, 주제에 대한 답변을 제시해주시면 됩니다. 논파 폼은 총괄진
            측에서 배부 할 예정이며, 형평성을 위해 폼에 추가로 캐릭터의 이미지
            등을 넣어 편집하는 것은 금지하고 있으니 참고해주시기를 바랍니다.
            <br />
            <br />
            - 재판의 목적은 살인을 저지른 블랙을 찾아내는 것입니다. 한 챕터에 두
            명의 블랙이 존재할 경우, 두 블랙 전부를 찾아내는 것을 목표로 합니다.
            <br />
            <br />
            - 논파 시스템은 메타적 요소에 가깝습니다. 재판 중 논파와 관련해
            메타적인 발언을 하지 않도록 주의해주세요. 본 커뮤니티는 과도한 메타
            발언을 지양하고 있습니다.
            <br />
            <br />
            - 토의가 모두 끝났을 경우, 혹은 제한된 재판 시간 내에 마스코트와
            함께 블랙을 찾아내지 못할 경우 투표를 진행합니다. 진위여부와 관계
            없이 이 투표에서 가장 많은 표를 획득한 사람이 블랙으로 지목 되어
            처형을 진행하게 됩니다.
            <br />
            <br />
            - 챕터에 따라 재판이 끝난 뒤, 남은 스토리가 진행될 가능성이
            있습니다. 가급적 시간을 여유로이 비워 주시기 바랍니다.
            <br />
            <br />
            - 재판의 보다 자세한 사항은 홈페이지 메인에 게시될 조사, 재판
            가이드를 참고해주세요.
            <br />
            <br />
            <span className="title">➢ 사이드 챕터</span>
            <br />
            - 일상 기간 중에도 특정 캐릭터를 중심으로 한 다양한 스토리 진행이
            있을 수 있습니다. 이를 사이드 챕터라고 칭합니다. 유클리드 호텔에서는
            다양한 방식의 사이드 챕터 연출을 환영하고 있습니다.
            <br />
            <br />
            - 사이드 챕터에서는 반드시 재판과 관련된 요소를 포함하지 않아도
            되며, 각각의 캐릭터를 묘사하고, 풀어내는 것에 적합한 형식을 갖추고
            있습니다.
            <br />
            <br />
            - 사이드 챕터는 총괄계의 DM을 통해 상시적으로 접수받고 있으며,
            스토리, 일정 겹침, 총괄진 사정 등의 사유로 기각되거나 일정이 변동될
            수 있습니다.
            <br />
            <br />
            <br />
            <br />
            <br /> <span className="bold">• • •</span>
            <br />
            <br />
            <br />
            <span className="title">➢로스트</span>
            <br />
            - 캐릭터가 사망에 이를 시, 챕터 사망자들의 생전 외모와 기억을 본뜬
            클론, 로스트가 생성됩니다.
            <br />
            <br />
            - 로스트는 챕터 중 생긴 부상이 모두 제거된 상태로, 생전과 같은
            기억과 능력·신체 조건을 갖도록 만들어집니다. 사건 당시의 기억 역시
            유지됩니다.
            <br />
            <br />
            - 단, 캐릭터는 사망을 기점으로 기존에 살아왔던 세계에서 모든 기록이
            사라지게 되며 사람들의 기억에서 잊혀진 존재가 됩니다. 인지도 또한
            0으로 고정됩니다.
            <br />
            <br />
            - 이후 생성되는 클론 로스트는 호텔의 귀속된 개체로서, 신체 어딘가에
            호텔 로고와 동일한 형태의 심볼이 새겨져 있습니다. 심볼의 크기, 위치,
            색상은 자유롭습니다.
            <br />
            <br />
            - 로스트는 생성과 동시에 새로운 명칭 LOST를 부여받게 됩니다. <br />
            <span className="small">
              (ex. 세계의 연애 컨설턴트 ⇢ LOST 연애 컨설턴트)
            </span>
            ​ <br />
            <br />
            <span className="title">➢ 룰렛</span>
            <br />
            - 마스코트가 그려진 칩을 획득 시, 룰렛에서 물건을 뽑을 수 있습니다.
            관련 스토리가 러닝 초반에 진행될 예정이며, 룰렛 이용에는 칩 3개가
            소모됩니다.
            <br />
            <br />
            - 자판기 안에는 신청서에 작성된 캐릭터의 호불호 아이템이 들어가
            있습니다. 외에도 꽝, 잭팟 등을 뽑을 수 있습니다.
            <br />
            <br />
            - 지폐는 일상 조사, 재판 참석, 챕터 진행, 이벤트 등을 통하여 획득할
            수 있습니다. 재판에 모든 인원이 참석했을 시, 추가 칩이 지급될
            예정입니다.
            <br />
            <br />
            - 한 캐릭터에게 선호 아이템 또는 불호 아이템을 각각 ‘3개’ 선물할 시,
            마스코트로 부터 특별한 선물이 증정됩니다. 아이템을 선물할 때에는
            가챠 계정을 태그해주세요. (칩의 이동은 태그하지 않아도 괜찮습니다.)
            <br />
            <br />
            + 특별한 선물의 경우 운영진 측에서 수동으로 출력하기 때문에, 여유를
            가지고 기다려주시면 감사하겠습니다.
            <br />
            <br />
            - 룰렛은 이벤트성 시스템이므로, 일상 기간 동안에만 이용할 수
            있습니다. 비일상 기간 동안에는 분위기 조절을 위해 이용을 금지하고
            있습니다.
            <br />
            <br />
            - 과도한 도박은 정신 건강에 피해를 줄 수 있습니다. 즐기는 선에서
            적당히 이용합시다.
            <br />
            <br />
            <span className="title">➢ 호텔 수첩?</span>
            <br />- 호텔 수첩에서는 기본적으로 [캐릭터의 프로필], [지도], [상태
            메세지], [1:1 메세지], [호텔 이용시 유의사항] 등을 열람 및 이용
            가능합니다.
            <br />
            <br />
            - [캐릭터의 프로필]의 경우, 타 캐릭터들의 공개된 정보를 열람
            가능합니다.
            <br />
            <br />
            - [상태메세지]의 경우, 바이오의 위치란을 상태 메세지로써 모두가 확인
            가능하다는 설정입니다.
            <br />
            <br />
            - [1:1 메세지]의 경우, 호텔 수첩 내 어플을 이용하여 타캐릭터와 1:1
            대화가 가능합니다. 해당 시스템 이용 시에 특별한 절차는 없으며,
            타임라인에서 멘션 대화를 통해 즐겨주시면 됩니다.
            <br />
            <br />
            - 비일상 기간에는 [사건 파일]을 열람 가능합니다.
            <br />
            <br />
            <span className="title">➢ 벌칙?</span>
            <br />
            - 마스코트가 정한 룰을 어길 시, 해당 규칙 위반 캐릭터에게 벌칙이
            주어집니다. 호텔 벨보이들이 해당 캐릭터의 신체를 구속함과 동시에
            물어뜯거나 할퀴는 등, 짐승에 의한 부상을 입힙니다. 이는 정도에 따라
            사망에 이를 수 있으며, 챕터 신청 시 조율 가능합니다. (일반적인
            궁그닐과 다릅니다.)
            <br />
            <br />
            - 호텔 벨보이들은 기본적으로 캐릭터 여러분의 편의를 위해 일하며,
            동시에 캐릭터가 호텔의 규칙에 위반되는 행동을 할 시 제지하는 역할도
            하고 있습니다. 최우선적으로 마스코트를 따르며, 마스코트의 명령을
            우선시합니다.
            <br />
            <br />
            <p className="notice-bottomStamp">
              <img src="img/stamp6.svg" width="300px" />
            </p>
          </p>
        </div>
      </Tween>
    </div>
  );
}
