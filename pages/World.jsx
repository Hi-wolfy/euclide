import React from 'react';
import Slider from '../components/Slider';
import { Tween } from 'react-gsap';

export default function World() {
  return (
    <div className="worldWrap">
      <Tween
        from={{ y: '5vh', opacity: 0 }}
        duration={3}
        ease="elastic.out(1, 0.5)"
        delay={0.5}
      >
        <img className="worldTitle" src="img/world.png" width="180px" />
      </Tween>
      <Slider />

      <img className="bottomMascot" src="img/mascot7.png" />
    </div>
  );
}
