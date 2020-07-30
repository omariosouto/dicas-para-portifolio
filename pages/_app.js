import App from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }

  h1 {
    margin-bottom: 16px;
  }

  main {
    margin: 50px auto;
    max-width: 900px;
  }

  ul {
    padding-left: 24px;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}