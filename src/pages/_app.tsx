import type { AppProps } from "next/app"
import { useEffect } from "react"
import "../global.css"
import { setup } from "../utils/windowSetup"

// setup()

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    setup()
  }, [])

  return <Component {...pageProps} />
}

export default App
