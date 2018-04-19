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
          <title>Traveltrip</title>
          {this.props.styleTags}

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat|Archivo|Anton|Archivo+Black|Open+Sans:300"
            rel="stylesheet"
          />

          <meta content="width=device-width,initial-scale=1" name="viewport" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
