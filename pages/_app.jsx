import React from 'react';
import '../styles/reset.css';
import '../styles/main.scss';
import '../styles/notice_system.scss';
import '../styles/world.scss';
import '../styles/guest.scss';
import Header from '../components/Header';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <div className="MainWrap">
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

      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
