import React from 'react';
import Link from 'next/link';

export default function MoIndex() {
  return (
    <div className="homeMobileWrap">
      <p>
        손님, 메인 페이지는 <br /> 모바일에 최적화 되어있지 않습니다. <br />{' '}
        세부 페이지를 열람하시거나,
        <br /> 아래 링크를 확인해주시면 감사하겠습니다.
      </p>
      <img className="mobile-home-mascot" src="img/mascot5.png" />
      <div>
        <span
          onClick={() =>
            window.open(
              'https://docs.google.com/spreadsheets/d/1DMJEU0dcDB6UrjEv1uWwZ4RlZRUXy549CPIuR3NMZEE/edit?usp=sharing',
              '_blank',
            )
          }
        >
          재능 수요조사
        </span>
        <span
          onClick={() =>
            window.open(
              'https://docs.google.com/document/d/170Q1nxQXQUBP3l63tLrp-HxTsfURokzPVqnQ5Sv0zSU/edit',
              '_blank',
            )
          }
        >
          Q&A 목록
        </span>

        <span
          onClick={() =>
            window.open(
              'https://docs.google.com/document/d/1X_Dr4yBTI_01MhG_snWDorzcKmCJ1HCJ0fm-ZkFjt_E/edit?usp=sharing',
              '_blank',
            )
          }
        >
          신청서 양식
        </span>
      </div>
    </div>
  );
}
