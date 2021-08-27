import { FC, useState } from 'react';

import { Button } from "../components/Button"

const Home: FC = (): JSX.Element => {
  const [url, setUrl] = useState("")
  const [showUrl, setShowUrl] = useState(false)

  const isReadytoShowUrl = showUrl === true && !!url === true

  return (
    <>
      <main className="w-screen h-screen bg-gray-900 flex justify-center">
        {isReadytoShowUrl ? (
          <>
            <iframe className="w-full h-full" src={url} frameBorder="0" />
          </>
        ) : (
          <form action="#" className="w-10/12 h-auto flex flex-col items-center justify-center">
            <input
              required
              className="w-11/12 p-4 pl-6 bg-gray-800 rounded-md outline-none border-2 border-gray-600 text-gray-200 placeholder-gray-500 hover:bg-gray-700 focus:bg-gray-700 focus:ring-2 focus:ring-offset-transparent focus:ring-gray-500 duration-200"
              onChange={event => setUrl(event.target.value)}
              placeholder="url of your project" type="url"
            />

            <Button
              onClick={() => {
                console.log("hey")
                setShowUrl(true)
              }}
              className="mt-4 pointer-events-auto outline-none hover:bg-indigo-500 duration-200 focus:bg-indigo-500 focus:ring-2 focus:ring-offset-gray-700 focus:ring-indigo-500">
                See my project 💖
            </Button>
          </form>
        )}
      </main>
    </>
  );
}

export default Home;
