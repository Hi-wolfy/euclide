import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Swal from 'sweetalert2';

export default function Slider() {
  const Swal = require('sweetalert2');

  const SwalPlay = () => {
    Swal.fire({
      html: '<img src="img/letter-cont.png" /> ',
      showConfirmButton: false,
      background: 'none',
    });
  };
  return (
    <AwesomeSlider animation="cubeAnimation" organicArrows={false}>
      <div>
        <p>
          <img src="img/frame-5.png" width="180px" /> <br />
          <h3>#0 | INTRO</h3> <br />
          가장 소중하고 평범한 시간. <br />
          우리는 종종 그런 것을 일상이라고 부르곤 합니다.
          <br />
          여러분들은 분명 어떤 한 세계에 소속되어, <br />
          그런 일상을 살아가고 있었을 겁니다. <br />
          <br />
          지루하다고 느꼈나요? <br />
          어쩌면 이 일상을 벗어나고 싶다, 라고도 생각했었나요?
          <br />
          아니면, 이 안온한 일상이 너무나 행복해서
          <br /> 영원히 이 시간이 지속되었으면 좋겠다고 여겼나요? <br />
          <br />
        </p>
      </div>
      <div>
        <p>
          그 가운데, 어쩌면 아주 작은 변화가 찾아옵니다.
          <br />
          <br />
          <img onClick={SwalPlay} src="img/letter-cont2.png" width="100px" />
        </p>
      </div>
      <div>
        <p>
          <h3>#1 | 세계에 대한 이야기</h3> <br />
          여러분은 각자가 속한 세계 가운데 살아가고 있습니다. 지구인일 수도
          있고, 화성인일 수도 있고… 천사나 악마, 어쩌면 작은 수인일 수도 있죠.
          <br /> <br /> 그 환경은 저마다 다를 것이고, 당신이 가지고 있는 모습도
          어딘가의 세계에서는 분명 상상 속에서만 존재할 겁니다. 거대한 차원은
          수많은 세계의 알갱이들이 거미줄처럼 얽혀 존재하고 있습니다. 다르게
          말하면, 모든 세계는 완전히 분리된 것이 아니라 크고 작은 영향을
          주고받는, 이어진 관계라고도 볼 수 있죠.
          <br /> <br />
          어떤 차원에서 소설 속에서나 존재하던 드래곤이 어딘가에서는 실존할 수도
          있을 것이고, 어떤 차원에서 과거에 일어났던 일이 어딘가에서는 현재
          진행형일 수도 있다는, 그런 이야기입니다.
        </p>
      </div>
      <div>
        <p>
          또, 어딘가에서 행복한 세계가 지속되고 있다면 어딘가에서는 절망뿐인
          세계가 지속될 수도 있을 겁니다. 끝없는 전쟁으로 인해 스스로 파멸하는
          세계, 전염병이 창궐하여 사랑하는 모든 것을 잃은 세계, 진리를 추구해
          무수한 연구를 시도했지만, 안타깝게도 결국 남은 건 끝없는 허무 뿐이라는
          것을 자각하고 발전을 포기한 세계의 기록도 존재하지요. <br /> <br />
          어느 세계에서는… 그래요, 종족 중에 가장 원대하고 재능이 창출한 자들.
          그들에게 재능의 칭호를 부여해주기도 합니다. 특출난 재능을 가진
          재능인은 그 놀라운 힘으로 다른 이들의 부러움을 사거나, 어떤 경우에는
          신적인 존재로 추앙받기도 하죠. 그러나 옳은 일로 쓰이지 못하는
          힘이었다면 그만큼 타인의 두려움과 분노를 사게도 마련이었을겁니다.{' '}
          <br /> <br />
          어떤 곳에서는 이런 멀고도 가까운 세계들의 생태계, 수많은 이슈들을
          통틀어 차원의 균형이라고도 부른다고 합니다. 그러나 적어도 여러분은
          그것에 대해 알 수 없을 거예요. 하나의 종족은 보통 한 세계 안에서만
          살아가니까요.
        </p>
      </div>
      <div>
        <p>
          <h3>#2 | 캐릭터 설정에 대하여</h3> <br />
          - 여러분은 각기 다른 세계에서 초대장을 받았습니다. 발신자는 유클리드
          호텔 지배인이라고 되어 있네요. 그는 당신에게 특별한 능력이 있다고
          믿는다며, 특별한 경험혹은, 특별한 것을 선물해 주겠다는 말과 함께
          당신을 호텔에 초대합니다.
          <br className="mobileNone" /> <br className="mobileNone" /> - 당신은
          정말로 세계에서 특별한 재능을 가지고 있는 상태일 수도 있고, 아닐 수도
          있습니다. 그러나 기본적으로 모든 캐릭터들은 호텔 관리인의 초대를
          수락해서 호텔에 들어오게 되었다는 설정입니다. 캐릭터를 회유하기 위해
          적혀있을 문구는 다양합니다. (ex. 캐릭터가 지금껏 가지지 못했던 것,
          이루지 못했던 것 등을 도와주겠다 등)
          <br className="mobileNone" /> <br className="mobileNone" /> 자유롭게
          설정해주시고, 가급적 신청서 양식에도 적어주시는 것을 추천합니다.
          (그러나 이는 필수가 아닙니다.)
        </p>
      </div>

      <div>
        <p>
          - 모든 캐릭터들은 특별한 능력 내지 재능을 하나 가지고 있습니다. 단,
          재능이라는 시스템 자체가 아예 없는 세계의 경우 대외적인 재능인에
          적합한 설정은 가지고 있지 않아도 됩니다. 본 커뮤니티는 인트로 때에
          호텔 관리인이 모두를 모아 재능을 부여한다는 느낌으로 연출을 진행할
          예정입니다. 아래의 예시들은 모두 가능한 설정입니다.{' '}
          <br className="mobileNone" /> <br className="mobileNone" />
          <span className="small">
            (Ex1. A 세계에서는 재능인이라는 개념 자체가 없다. 그러나 그 세계의 B
            캐릭터는 싸움을 굉장히 잘했고, 호텔의 초대장을 받아 오게 됐다.
            마스코트는 B 캐릭터에게 세계의 스트리트파이터 라는 칭호를
            부여해주었다.)
            <br className="mobileNone" /> <br className="mobileNone" /> (Ex2. B
            세계 역시 재능인이라는 개념이 존재하지 않는다. 이 세계의 C 캐릭터는
            딱히 특출난 건 없지만 왠지 호텔의 초대장을 받았고, 마스코트는 운
            좋은 C 캐릭터에게 세계의 행운 이라는 칭호를 부여해주었다.){' '}
            <br className="mobileNone" /> <br className="mobileNone" />
            (Ex3. C 세계는 재능인을 떠받들고 있는 세계다. 그 중에 D 캐릭터는
            피아니스트라는 재능을 가졌고, 호텔의 초대장을 받았다. 마스코트는 D
            캐릭터에게 세계의 피아니스트라는 칭호를 부여해주었다.)
          </span>
        </p>
      </div>

      <div>
        <p>
          - 앞전의 예시와 같이 메타적으로는 신청서를 작성하실 때에 미리 설정을
          부여하지만 캐릭터와 세계관의 설정상으로는 인트로 때에 재능이
          부여되어질 수 있다는 점을 참고 부탁드리겠습니다. 이에 관련해서는 편히
          질문해주세요. <br className="mobileNone" />{' '}
          <br className="mobileNone" />- 세계는 넓고 다양한 종족이 존재합니다.
          그러니 얼마든지 다양한 설정이 부여될 수 있습니다만, 메타적인 벨런스를
          지키기 위해 과도한 먼치킨에 해당하는 설정은 지양을 부탁드립니다. 이에
          관련해서도 편히 질문을 부탁드리겠습니다. <br className="mobileNone" />{' '}
          <br className="mobileNone" />{' '}
          <span className="small">
            (ex. Z캐릭터는 불을 뿜을 수 있다. (o) / Z캐릭터는 강대한 힘으로 불을
            뿜어 세계를 멸망시킨 적이 있다 (x))
          </span>
          <br className="mobileNone" />
          <br className="mobileNone" />
          <img src="img/frame-1.png" width="200px" />
        </p>
      </div>
    </AwesomeSlider>
  );
}
