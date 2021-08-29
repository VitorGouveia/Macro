import { FC } from 'react';
import { AppProps } from 'next/app';

import { useRouter } from "next/router"
import { Button } from "../components/Button"

import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { reload } = useRouter()
  
  return (
    <>
      <Component {...pageProps} />

      <Button
        onClick={() => reload()}
        className="fixed bottom-6 right-6 outline-none hover:bg-indigo-500 duration-200 focus:bg-indigo-500 focus:ring-2 focus:ring-offset-gray-700 focus:ring-indigo-500">
        Set another url
      </Button>
    </>
  )
}

export default App
