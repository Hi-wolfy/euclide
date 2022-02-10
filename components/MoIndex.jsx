import React from 'react';
import Link from 'next/link';

export default function MoIndex() {
  return (
    <div className="homeMobileWrap">
      <img className="mobile-home-mascot" src="img/mascot5.png" />
      <button
        onClick={() =>
          window.open(
            'https://docs.google.com/spreadsheets/d/1DMJEU0dcDB6UrjEv1uWwZ4RlZRUXy549CPIuR3NMZEE/edit?usp=sharing',
            '_blank',
          )
        }
      >
        재능 수요조사 바로가기
      </button>
      <button
        onClick={() =>
          window.open(
            'https://docs.google.com/document/d/170Q1nxQXQUBP3l63tLrp-HxTsfURokzPVqnQ5Sv0zSU/edit',
            '_blank',
          )
        }
      >
        Q&A 목록 바로가기
      </button>

      <button>
        <Link href="/danganCertifyingShot">
          <a>총괄진 원작인증 바로가기 </a>
        </Link>
      </button>
    </div>
  );
}
