import React from 'react';
import Slider from '../components/Slider';
import MobileSlider from '../components/MobileSlider';
export default function World() {
  return (
    <div className="worldWrap">
      <img className="worldTitle" src="img/world.png" width="180px" />
      {/* <Slider /> */}
      <MobileSlider />
      {/* <div className="worldRow">
        <img onClick={SwalPlay} src="img/letter-cont2.png" />
        <img src="img/letter-cont2.png" />
        <img src="img/letter-cont2.png" />
      </div> */}

      <img className="bottomMascot" src="img/mascot7.png" />
    </div>
  );
}
