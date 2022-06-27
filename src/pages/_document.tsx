import Document, { Html, Head, Main, NextScript } from 'next/document';

import GTagScript from '@/components/GTagScript';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GTagScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
