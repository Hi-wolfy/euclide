import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-responsive-modal';
import MoIndex from '../components/MoIndex';
import { Tween, Timeline } from 'react-gsap';
import Link from 'next/link';

export default function Home() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <article className="main">
      <div className="homePCWrap">
        <Tween
          from={{ scale: 0 }}
          stagger={{ from: 'center', amount: 1, grid: [3, 3] }}
          duration={1}
          delay={0.4}
          ease="elastic.out(2, 0.5)"
        >
          <div className="home-left">
            <ul className="left-stamp">
              <Timeline
                target={
                  <>
                    <li>
                      <img
                        src="img/main-stamp.png"
                        onClick={() =>
                          window.open(
                            'https://docs.google.com/spreadsheets/d/1DMJEU0dcDB6UrjEv1uWwZ4RlZRUXy549CPIuR3NMZEE/edit?usp=sharing',
                            '_blank',
                          )
                        }
                      />
                      <span>재능 수요조사</span>
                    </li>
                    <li>
                      <img
                        src="img/main-stamp.png"
                        onClick={() =>
                          window.open(
                            'https://docs.google.com/spreadsheets/d/1DMJEU0dcDB6UrjEv1uWwZ4RlZRUXy549CPIuR3NMZEE/edit?usp=sharing',
                            '_blank',
                          )
                        }
                      />
                      <span>Q&A 목록</span>
                    </li>
                    <li>
                      <Link href="/danganCertifyingShot">
                        <a>
                          <img src="img/main-stamp.png" />
                          <span>총괄진 원작인증</span>
                        </a>
                      </Link>
                    </li>
                  </>
                }
              >
                <Tween
                  from={{ x: '-50px' }}
                  to={{ x: '0px' }}
                  target={0}
                  delay={4.4}
                />
                <Tween
                  from={{ x: '-50px' }}
                  to={{ x: '0px' }}
                  target={1}
                  delay={0.1}
                />
                <Tween
                  from={{ x: '-50px' }}
                  to={{ x: '0px' }}
                  target={2}
                  delay={0.1}
                />
              </Timeline>
            </ul>
            <Tween from={{ x: '200px', opacity: 0 }} duration={3} delay={3}>
              <li className="left-stamping">
                <img src="img/stamping.png" />
              </li>
            </Tween>
          </div>
        </Tween>

        <div className="home-middle">
          <Tween
            from={{ x: '-100vw', opacity: 0 }}
            duration={2}
            delay={6.5}
            ease={(x) =>
              x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
            }
          >
            <div
              className="uk-grid-small uk-child-width-auto"
              uk-grid
              uk-countdown="date: 2022-03-01T12:18:21+00:00"
            >
              <label>
                신청서 접수 <br /> 시작까지
              </label>
              <div>
                <div className="uk-countdown-number uk-countdown-days"></div>
                <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
                  Days
                </div>
              </div>
              &nbsp;
              <div>
                <div className="uk-countdown-number uk-countdown-hours"></div>
                <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
                  Hours
                </div>
              </div>
              &nbsp;
              <div>
                <div className="uk-countdown-number uk-countdown-minutes"></div>
                <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
                  Minutes
                </div>
              </div>
              &nbsp;
              <div>
                <div className="uk-countdown-number uk-countdown-seconds"></div>
                <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
                  Seconds
                </div>
              </div>
            </div>
          </Tween>

          <Tween
            from={{ y: '200px', opacity: 0 }}
            duration={2}
            delay={2.2}
            ease="elastic.out(0.2, 0.1)"
          >
            <li className="middle-schedule">
              <img src="img/schedule.png" />
            </li>
          </Tween>
          <Tween from={{ opacity: 0 }} delay={4} duration={8}>
            <li className="light">
              <img src="img/light.png" alt="light" />
            </li>
            <li className="light2">
              <img src="img/light.png" alt="light" />
            </li>
          </Tween>
          <div className="middle-row">
            <Tween
              from={{ x: '200px' }}
              stagger={0.2}
              delay={1.2}
              opacity={0}
              ease="elastic.out(0.2, 0.1)"
            >
              <li className="row-ac1 uk-inline">
                <img
                  src="img/ac-hover1.png"
                  onClick={onOpenModal}
                  style={{ cursor: 'pointer' }}
                  className="ac1"
                />
                <div className="uk-position-top-right uk-overlay">
                  종족 설정 가이드
                </div>
              </li>
            </Tween>

            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{
                modal: 'guideModal',
              }}
            >
              <img src="img/index-guide1.png" />
            </Modal>

            <Tween
              from={{ y: '200px' }}
              stagger={0.2}
              delay={1.5}
              opacity={0}
              ease="elastic.out(0.2, 0.1)"
            >
              <li className="row-ac2 uk-inline">
                <img src="img/ac-hover2.png" style={{ cursor: 'pointer' }} />
                <div className="uk-position-top-right uk-overlay">
                  조사 & 재판 가이드
                </div>
              </li>
            </Tween>
          </div>
          <div className="middle-row-mascot">
            <Timeline
              target={
                <>
                  <li className="leftMascot">
                    <img src="img/mascot3.png" />
                  </li>
                  <li className="middleMascot">
                    <img src="img/mascot1.png" />
                  </li>
                  <li className="rightMascot">
                    <img src="img/mascot2.png" />
                  </li>
                </>
              }
            >
              <Tween
                from={{ scale: 0 }}
                duration={1}
                ease="elastic.out(1, 0.3)"
                target={0}
                delay={6}
              />
              <Tween
                from={{ scale: 0 }}
                duration={1}
                ease="elastic.out(1, 0.3)"
                target={2}
                delay={0.1}
              />
              <Tween
                from={{ scale: 0 }}
                duration={1}
                target={1}
                ease="elastic.out(1, 0.3)"
                delay={0.1}
              />
            </Timeline>
          </div>
        </div>

        <div className="home-right">
          <Tween
            from={{ x: '200px', rotation: 1200, opacity: 0 }}
            duration={2}
            ease="back.out(1.7)"
            delay={5.8}
          >
            <li className="right-twitter">
              <img src="img/twitter.png" />
            </li>
          </Tween>
          <Tween
            from={{ x: '-300px', opacity: 0 }}
            duration={3}
            delay={3}
            ease="back.out(1.7)"
          >
            <li className="right-kirring">
              <a href="https://twitter.com/Euclid_Hotel">
                <img src="img/kirring.png" />
              </a>
            </li>
          </Tween>

          <Tween
            from={{ scale: 0, opacity: 0 }}
            duration={2}
            delay={11}
            ease="back.out(1.7)"
          >
            <li className="right-search">
              <img src="img/search.png" />
            </li>
          </Tween>

          <Tween
            from={{ x: '-300px', opacity: 0 }}
            duration={3}
            delay={3}
            ease="back.out(1.7)"
          >
            <li className="right-newspaper">
              <img src="img/newspaper.png" />
            </li>
          </Tween>
        </div>
      </div>

      <MoIndex />
    </article>
  );
}
