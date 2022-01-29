import React from 'react';
import MoIndex from '../components/MoIndex';

export default function Home() {
  return (
    <article className="main">
      <div className="homePCWrap">
        <div className="home-left">
          <ul className="left-stamp">
            <li>
              <img src="img/main-stamp.png" /> <span>재능 수요조사</span>
            </li>
            <li>
              <img src="img/main-stamp.png" />
              <span>Q&A 목록</span>
            </li>
            <li>
              <img src="img/main-stamp.png" /> <span>총괄진 원작인증</span>
            </li>
          </ul>

          <li className="left-stamping">
            <img src="img/stamping.png" />
          </li>
        </div>

        <div className="home-middle">
          <div
            className="uk-grid-small uk-child-width-auto"
            uk-grid
            uk-countdown="date: 2022-03-01T12:18:21+00:00"
          >
            <div>
              <div className="uk-countdown-number uk-countdown-days"></div>
              <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
                Days
              </div>
            </div>
            &emsp;
            <div>
              <div className="uk-countdown-number uk-countdown-hours"></div>
              <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
                Hours
              </div>
            </div>
            &emsp;
            <div>
              <div className="uk-countdown-number uk-countdown-minutes"></div>
              <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
                Minutes
              </div>
            </div>
            &emsp;
            <div>
              <div className="uk-countdown-number uk-countdown-seconds"></div>
              <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
                Seconds
              </div>
            </div>
          </div>

          <li>
            <img src="img/schedule.png" />
          </li>

          <div className="middle-row">
            <li className="row-ac1 uk-inline">
              <img src="img/ac-hover1.png" />
              <div className="uk-position-top-right uk-overlay">
                조사 가이드
              </div>
            </li>
            <li className="row-ac2 uk-inline">
              <img src="img/ac-hover2.png" />
              <div className="uk-position-top-right uk-overlay">
                캐릭터 가이드
              </div>
            </li>
          </div>
          <div className="middle-row-mascot">
            <li className="leftMascot">
              <img src="img/mascot3.png" />
            </li>
            <li className="middleMascot">
              <img src="img/mascot1.png" />
            </li>
            <li className="rightMascot">
              <img src="img/mascot2.png" />
            </li>
          </div>
        </div>

        <div className="home-right">
          <li className="right-twitter">
            <img src="img/twitter.png" />
          </li>
          <li className="right-kirring">
            <img src="img/kirring.png" />
          </li>
          <li className="right-search">
            <img src="img/search.png" />
          </li>
          <li className="right-newspaper">
            <img src="img/newspaper.png" />
          </li>
        </div>
      </div>
      <MoIndex />
    </article>
  );
}
