// Overrides Next.js default page for css and head data and change the inital server side rendered document markup
import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html language="en">
        <head>
          <meta charSet="UTF=8" />
          <meta name="description" content="My SEO React app with Next JS" />
          <meta name="keywords" content="next react seo" />
          <meta name="author" content="Robert Ogden" />
          <link rel="stylesheet" href="static/styles.css" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"
            integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX"
            crossorigin="anonymous"
          />
        </head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
