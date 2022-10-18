import Head from 'next/head'

import '../src/globalstyle.css'

function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Titulo padrão todas páginas</title>
      </Head>
      <Component { ...pageProps} />
    </>
  ) 
}

export default App