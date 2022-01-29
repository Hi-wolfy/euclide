import React from 'react';
import MoIndex from '../components/MoIndex';

export default function Home() {
  return (
    <article className="main">
      <div className="homePCWrap">
        <div className="home-left">
          <ul className="left-stamp">
            <li>
              <img src="img/main-stamp.png" /> <span>CONTENT</span>
            </li>
            <li>
              <img src="img/main-stamp.png" />
              <span>CONTENT</span>
            </li>
            <li>
              <img src="img/main-stamp.png" /> <span>CONTENT</span>
            </li>
          </ul>

          <li className="left-stamping">
            <img src="img/stamping.png" />
          </li>
        </div>

        <div className="home-middle">
          <li>
            <img src="img/schedule.png" />
          </li>

          <div className="middle-row">
            <li className="row-ac1">
              <img src="img/ac1.png" /> <img src="img/ac-hover1.png" />
            </li>
            <li className="row-ac2">
              <img src="img/ac2.png" />
              <img src="img/ac-hover2.png" />
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
