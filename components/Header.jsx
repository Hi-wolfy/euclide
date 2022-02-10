import React from 'react';
import Link from 'next/link';

export default function header() {
  return (
    <header>
      <div className="header">
        <li>
          <Link href="/Notice">
            <a>NOTICE</a>
          </Link>
        </li>

        <li>
          <Link href="/World">
            <a>WORLD</a>
          </Link>
        </li>

        <li>
          <Link href="/Home">
            <a>
              <img src="img/logo.png" />
            </a>
          </Link>
        </li>

        <li>
          <Link href="/System">
            <a>SYSTEM</a>
          </Link>
        </li>

        <li
          uk-tooltip="title: 아직 손님들이 모이지 않았습니다.; pos: bottom-right"
          style={{ cursor: 'wait' }}
        >
          {/* <Link href="/guest/hiwolfy">
            <a>GUESTS</a>
          </Link> */}
          GUESTS
        </li>
      </div>
    </header>
  );
}
