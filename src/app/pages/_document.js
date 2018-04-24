import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Hexon</title>
          {this.props.styleTags}
          <meta content="width=device-width,initial-scale=1" name="viewport" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://code.getmdl.io/1.3.0/material.pink-indigo.min.css"
          />
          <script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
          <link
            rel="shortcut icon"
            href="static/img/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="static/img//favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
