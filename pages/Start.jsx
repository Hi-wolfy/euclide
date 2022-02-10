import { useEffect, useState } from 'react';
import Router from 'next/router';
import { SpinnerDiamond } from 'spinners-react';

export default function Start() {
  const [ment1, setMent1] = useState('');
  const [ment2, setMent2] = useState('');
  const [ment3, setMent3] = useState('');
  const [ment4, setMent4] = useState('');
  const [ment5, setMent5] = useState('');

  useEffect(() => {
    setTimeout(() => {
      console.log('3초');
      Router.replace('/Home');
    }, 9500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMent1('잔잔한 호텔 음악이 흘러나오고 있습니다...');
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMent2('얼굴 없는 벨보이들이 하나둘씩 모여듭니다...');
    }, 1800);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMent3('지배인 아치가 모자를 벗고 당신을 향해 정중하게 인사합니다...');
    }, 3200);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMent4('호텔 안쪽 방은 무척 아름답고 평화로워 보입니다...');
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMent5('자, 이제 안으로 들어가셔도 됩니다 손님.');
    }, 7900);
  }, []);

  return (
    <div className="LoadingWrap">
      <SpinnerDiamond
        size={50}
        thickness={100}
        speed={200}
        color="rgba(172, 79, 57, 1)"
        secondaryColor="rgba(172, 57, 59, 0.44)"
      />
      <div className="LoadingText">
        <p>{ment1}</p>
        <p>{ment2}</p>
        <p>{ment3}</p>
        <p>{ment4}</p>
        <p>{ment5}</p>
      </div>
    </div>
  );
}
