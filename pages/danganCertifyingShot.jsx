import React from 'react';
import { Tween } from 'react-gsap';

export default function danganCertifyingShot() {
  return (
    <div
      className="DCS-wrap"
      style={{
        maxWidth: '750px',
        minWidth: '300px',
        margin: 'auto',
        padding: '40px 0',
      }}
    >
      <Tween
        from={{ y: '-400px', opacity: 0 }}
        duration={2}
        delay={0.25}
        ease="elastic.out(0.2, 0.1)"
      >
        <img
          src="img/dangan_certifying_shot.png"
          style={{
            boxShadow:
              '0 2px 15px rgba(0, 0, 0, 0.11), 0 3px 15px rgba(0, 0, 0, 0.11);',
          }}
        />
      </Tween>
    </div>
  );
}
