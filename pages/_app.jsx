import React from 'react';
import 'react-responsive-modal/styles.css';
import '../styles/main.scss';
import '../styles/notice_system.scss';
import '../styles/world.scss';
import '../styles/guest.scss';
import '../styles/index.scss';
import Header from '../components/Header';
import Script from 'next/script';
// import ChatBot from 'react-simple-chatbot';



// const steps=[
//       {
//         id: '1',
//         message: '안녕하세요? 아치가 지금 무슨 생각을 하고있을까요?',
//         trigger: '2',
//       },
//       {
//         id: '2',
//         options: [
//           { value: 1, label: '아 퇴근하고싶다...', trigger: '4' },
//           { value: 2, label: '아 배고프다', trigger: '3' },
//           { value: 3, label: '커뮤 빨리 개장했으면', trigger: '3' },
//         ],
//       },
//       {
//         id: '3',
//         message: '아닌데요?',
//         trigger: '2',
//       },
//       {
//         id: '4',
//         message: '맞았습니다!',
//            trigger: '5',
//       },
//         {
//         id: '5',
//         message: '그러면 제가 지금 생각하는 숫자는요?',
//            trigger: '6',
//       },
//         {
//         id: '6',
//       options: [
//           { value: 1, label: '3이요!', trigger: '7' },
//           { value: 2, label: '6이요!', trigger: '8' },
//           { value: 3, label: '9요!', trigger: '7' },
//         ],
//       },
//          {
//         id: '7',
//         message: '틀렸는데요!?',
//           trigger: '6',
//       },
//          {
//         id: '8',
//         message: '맞았습니다!',
//               trigger: '9',
//       },
//          {
//         id: '9',
//         message: '흠 이제 슬슬 끝내죠!',
//             trigger: '10',
//       },
//        {
//         id: '10',
//         message: '안녕히계세요!',
//         end: true,
//       },
//     ]

function MyApp({ Component, pageProps }) {

  return (
    <div className="MainWrap">
      <Script src="//cdn.jsdelivr.net/npm/sweetalert2@11" />
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossOrigin="anonymous"
      />

      <Script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
      />
      <Script
        type="text/javascript"
        src="https://unpkg.com/gsap@3/dist/ScrollToPlugin.min.js"
      />

      <Script
        type="text/javascript"
        src=" https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
      />

      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js" />
     
      <Header />
      <Component {...pageProps} />
 {/* <ChatBot steps={steps} />; */}

    </div>
  );
}

export default MyApp;
