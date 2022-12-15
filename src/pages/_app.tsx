import type { AppProps } from "next/app"
import { useEffect } from "react"
import "../global.css"

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
