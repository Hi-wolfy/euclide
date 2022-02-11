import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Euclide Hotel</title>
          <meta charset="UTF-8" />

          <meta
            name="description"
            content="유클리드 호텔에 오신 것을 환영합니다."
          />
          {/* <meta name="keywords" content="키워드,프로필,설명서,달늑대,날득씨" /> */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta property="og:image" content="img/mascot7.png" />

          <meta property="og:description" content="EUCLID_WORLD" />
          <meta property="og:title" content="EUCLID_HOTEL" />

          {/* reset */}

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"
          />

          {/* 파비콘 */}
          <link rel="icon" href="/favicon.ico" />

          {/* 부트스트랩 */}

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/css/uikit.min.css"
          />

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          />

          {/* 메인 폰트 */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link
            href="https://fonts.googleapis.com/css2?Poor+Story&family=Noto+Serif+KR:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />

          <link
            href="http://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
            rel="stylesheet"
          />
          <link
            href="http://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
